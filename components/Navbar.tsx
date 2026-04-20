"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { blogPages } from '@/lib/contentPages';
import { formatServiceSlug, services } from '@/lib/services';
import {
  FaChevronDown,
  FaInstagram,
  FaFacebookF,
  FaBars,
  FaTimes,
  FaGoogle,
} from 'react-icons/fa';

type NavItem = {
  label: string;
  href: string;
  dropdown?: Array<{
    label: string;
    href: string;
  }>;
};

const serviceDropdown = services.map((service) => ({
  label: formatServiceSlug(service.slug),
  href: `/${service.slug}`,
}));

const blogDropdown = blogPages.map((page) => ({
  label: page.bannerTitle ?? page.title,
  href: `/${page.slug}`,
}));

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Our Practice', href: '/our-practice' },
  { 
    label: 'About', 
    href: '/meet-the-doctors',
    dropdown: [
      { label: 'Meet Our Doctors', href: '/meet-the-doctors' },
    ]
  },
  { label: 'Services', href: `/dental-services`, dropdown: serviceDropdown },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Contact', href: '/contact' },
  { label: 'Blog', href: "/blog", dropdown: [{ label: 'Web Stories', href: "/web-stories" }] },
];

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>('');

  return (
    <header className="w-full bg-white text-[#0d0d0d] top-0 z-50 shadow-sm">
      <div className="mx-auto px-4 sm:px-6 max-w-[1290px] py-3">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div className="shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <Image 
                src="/images/new-logo.webp" 
                alt="Sethi Virdi DDS" 
                width={160} 
                height={60} 
                className="object-contain"
                
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="hidden lg:flex space-x-4 items-center flex-1 justify-center font-medium text-[15px] md:text-[17px] tracking-wide">
            {navItems.map((item) => (
              <div 
                key={item.label} 
                className="relative group"
                onMouseEnter={() => {
                  if (item.dropdown) setActiveDropdown(item.label);
                }}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href} 
                  className="flex items-center hover:text-[#213666] transition-colors py-4 md:py-8 "
                >
                  {item.label}
                  {item.dropdown && (
                    <FaChevronDown size={12} className="ml-1" />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 z-20 w-[320px] bg-white shadow-xl rounded-b-md border-t-2 border-[#f0f0f0] overflow-hidden max-h-[420px] overflow-y-auto">
                    {item.dropdown.map((dropItem) => (
                      <Link 
                        key={dropItem.label} 
                        href={dropItem.href}
                        className="block px-4 py-3 text-sm text-[#333] hover:text-[#2b4c7e] hover:bg-gray-50 transition-colors font-semibold border-b border-gray-100 last:border-0"
                      >
                        {dropItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <button
            type="button"
            className="lg:hidden w-11 h-11 rounded-xl bg-[#213666] text-white flex items-center justify-center"
            aria-label="Open menu"
            onClick={() => setMobileMenuOpen(true)}
          >
            <FaBars size={18} />
          </button>

          {/* Right Section: Social & Phone */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-3">
              <Link href="https://www.facebook.com/sethivirdidds" className="w-8 h-8 rounded-full bg-[#213666] flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                <FaInstagram size={16} />
              </Link>
              <Link href="https://www.instagram.com/sethivirdidds/" className="w-8 h-8 rounded-full bg-[#213666] flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                <FaFacebookF size={16} />
              </Link>
              {/* Third Icon (Green circle with play-like icon ) */}
              <Link href="https://share.google/AJRJmm543egArcrnw" className="w-8 h-8 rounded-full bg-[#213666] flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                <FaGoogle size={14} className="ml-0.5" />
              </Link>
              {/* Fourth Icon (Yelp-like or Star) */}
              {/* <Link href="#" className="w-8 h-8 rounded-full bg-[#213666] flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                <FaStar size={16} />
              </Link> */}
            </div>
            
            <a href="tel:+14082631255" className="text-[26px] font-extrabold text-[#213666] tracking-tight">
              (408) 263-1255
            </a>
          </div>
        </div>
      </div>

      <div
        className={`lg:hidden fixed inset-0 z-60 transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto bg-black/35' : 'opacity-0 pointer-events-none bg-black/0'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          className={`h-full w-[88%] max-w-[460px] bg-[#efefef] pl-7 pr-6 pt-10 pb-10 overflow-y-auto transition-transform duration-300 ease-out ${
            mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
          onClick={(event) => event.stopPropagation()}
        >
            <div className="flex items-start justify-between pr-2">
              <Link href="/" className="flex items-center" onClick={() => setMobileMenuOpen(false)}>
                <Image
                  src="/images/new-logo.webp"
                  alt="Sethi Virdi DDS"
                  width={130}
                  height={56}
                  className="object-contain"
                />
              </Link>
              <button
                type="button"
                className="w-14 h-10 rounded-xl bg-[#213666] text-white flex items-center justify-center"
                aria-label="Close menu"
                onClick={() => setMobileMenuOpen(false)}
              >
                <FaTimes size={18} />
              </button>
            </div>

            <nav className="mt-10">
              <ul className="space-y-4">
                {navItems.map((item) => {
                  const hasSubmenu = Boolean(item.dropdown);
                  const isOpen = mobileDropdownOpen === item.label && Boolean(item.dropdown);

                  return (
                    <li key={item.label}>
                      <div className="flex items-center justify-between gap-4">
                        <Link
                          href={item.href}
                          className={`text-[15px] ${
                            item.label === 'Home' || item.label === 'About'
                              ? 'text-[#213666] font-semibold'
                              : 'text-[#0d0d0d] font-medium'
                          }`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.label}
                        </Link>

                        {hasSubmenu && (
                          <button
                            type="button"
                            className="w-12 h-8 rounded-xl border border-[#d6d6d6] bg-transparent text-[#213666] flex items-center justify-center shrink-0 transition-colors"
                            aria-label={`Toggle ${item.label} submenu`}
                            onClick={() =>
                              setMobileDropdownOpen((current) =>
                                current === item.label ? null : item.label
                              )
                            }
                          >
                            <FaChevronDown
                              size={13}
                              className={`transition-transform duration-200 ${
                                mobileDropdownOpen === item.label ? 'rotate-180' : ''
                              }`}
                            />
                          </button>
                        )}
                      </div>

                      {item.dropdown && isOpen && (
                        <div className="mt-4 rounded-2xl bg-[#f3f3f3] p-3 transition-all duration-200">
                          <div className="bg-[#dee5eb] rounded-md p-4 space-y-4">
                            {item.dropdown.map((dropItem) => (
                              <Link
                                key={dropItem.label}
                                href={dropItem.href}
                                className="block text-[14px] leading-none font-medium text-[#1b1b1b]"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {dropItem.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
      </div>
    </header>
  );
};

export default Navbar;
