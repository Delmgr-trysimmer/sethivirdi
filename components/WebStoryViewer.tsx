"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  Send,
  X,
} from "lucide-react";

type StorySlide = {
  image: string;
  alt: string;
};

type WebStoryViewerProps = {
  title: string;
  slides: readonly StorySlide[];
};

const SLIDE_DURATION = 4500;
const PROGRESS_INTERVAL = 60;
const PROGRESS_STEP = (PROGRESS_INTERVAL / SLIDE_DURATION) * 100;

export default function WebStoryViewer({
  title,
  slides,
}: WebStoryViewerProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [shareLabel, setShareLabel] = useState("Share");

  useEffect(() => {
    setProgress(0);
  }, [activeIndex]);

  useEffect(() => {
    if (isPaused) {
      return;
    }

    const tick = window.setInterval(() => {
      setProgress((current) => {
        const nextProgress = Math.min(current + PROGRESS_STEP, 100);

        if (nextProgress >= 100) {
          window.clearInterval(tick);
          setActiveIndex((currentIndex) =>
            currentIndex < slides.length - 1 ? currentIndex + 1 : currentIndex
          );
        }

        return nextProgress;
      });
    }, PROGRESS_INTERVAL);

    return () => window.clearInterval(tick);
  }, [activeIndex, isPaused, slides.length]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        setActiveIndex((current) => Math.min(current + 1, slides.length - 1));
      }

      if (event.key === "ArrowLeft") {
        setActiveIndex((current) => Math.max(current - 1, 0));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [slides.length]);

  const goNext = () => {
    setActiveIndex((current) => Math.min(current + 1, slides.length - 1));
  };

  const goPrev = () => {
    setActiveIndex((current) => Math.max(current - 1, 0));
  };

  const togglePause = () => {
    setIsPaused((current) => !current);
  };

  const shareStory = async () => {
    if (typeof window === "undefined") {
      return;
    }

    const shareData = {
      title: `${title} | Sethi Virdi DDS`,
      text: `View this web story from Sethi Virdi DDS: ${title}`,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        setShareLabel("Shared");
      } else if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(window.location.href);
        setShareLabel("Link copied");
      }
    } catch {
      setShareLabel("Share");
      return;
    }

    window.setTimeout(() => setShareLabel("Share"), 2000);
  };

  const activeSlide = slides[activeIndex];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0f172a] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18),_transparent_35%),linear-gradient(135deg,_#b7b5b2_0%,_#6d7689_38%,_#223865_100%)]" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center justify-center px-4 py-6 sm:px-8">
        <button
          type="button"
          onClick={goPrev}
          disabled={activeIndex === 0}
          className="hidden h-12 w-12 items-center justify-center rounded-full bg-white/90 text-[#111827] shadow-xl transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-50 md:flex"
          aria-label="Previous story"
        >
          <ChevronLeft size={34} />
        </button>

        <section className="mx-4 flex w-full max-w-[430px] flex-col">
          <div className="relative overflow-hidden rounded bg-[#233868]">
            <div className="absolute inset-x-0 top-0 z-20 p-4 ">
              <div className="flex gap-1.5">
                {slides.map((_, index) => {
                  const width =
                    index < activeIndex
                      ? "100%"
                      : index === activeIndex
                        ? `${progress}%`
                        : "0%";

                  return (
                    <div
                      key={`progress-${index}`}
                      className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/30"
                    >
                      <div
                        className="h-full rounded-full bg-white transition-[width] duration-75"
                        style={{ width }}
                      />
                    </div>
                  );
                })}
              </div>

              <div className="mt-4 flex items-center justify-between gap-3">
                {/* <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
                    Sethi Virdi DDS
                  </p>
                  <h1 className="mt-1 max-w-[240px] text-sm font-medium leading-5 text-white/95">
                    {title}
                  </h1>
                </div> */}

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={togglePause}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/35 bg-white/10 text-white transition hover:bg-white/20"
                    aria-label={isPaused ? "Resume story" : "Pause story"}
                  >
                    {isPaused ? <Play size={17} /> : <Pause size={17} />}
                  </button>

                  <button
                    type="button"
                    onClick={shareStory}
                    className="inline-flex h-10 min-w-10 items-center justify-center gap-2 rounded-full border border-white/35 bg-white/10 px-3 text-sm font-medium text-white transition hover:bg-white/20"
                    aria-label="Share story link"
                  >
                    <Send size={15} />
                    {/* <span className="hidden sm:inline">{shareLabel}</span> */}
                  </button>

                  <Link
                    href="/web-stories"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/35 bg-white/10 text-white transition hover:bg-white/20"
                    aria-label="Close story"
                  >
                    <X size={18} />
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative aspect-[9/16] w-full">
              <button
                type="button"
                onClick={goPrev}
                disabled={activeIndex === 0}
                className="absolute inset-y-0 left-0 z-10 w-1/3"
                aria-label="View previous story"
              />
              <button
                type="button"
                onClick={goNext}
                disabled={activeIndex === slides.length - 1}
                className="absolute inset-y-0 right-0 z-10 w-1/3"
                aria-label="View next story"
              />

              <Image
                src={activeSlide.image}
                alt={activeSlide.alt}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 430px"
                className="object-contain"
              />

              {/* <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/35 to-transparent" /> */}
            </div>
          </div>

          {/* <div className="mt-5 flex items-center justify-center gap-2 text-center text-sm text-white/72">
            <span>{activeIndex + 1}</span>
            <span>/</span>
            <span>{slides.length}</span>
            <span className="mx-2 text-white/30">&bull;</span>
            <span>Tap sides or use arrow keys</span>
          </div> */}
        </section>

        <button
          type="button"
          onClick={goNext}
          disabled={activeIndex === slides.length - 1}
          className="hidden h-12 w-12 items-center justify-center rounded-full bg-white/90 text-[#111827] shadow-xl transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-50 md:flex"
          aria-label="Next story"
        >
          <ChevronRight size={34} />
        </button>
      </div>
    </main>
  );
}
