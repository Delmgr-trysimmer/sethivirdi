import React from 'react';

const InsuranceSection = () => {
    return (
        <section className="w-full bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1290px]">
                <div className="w-full bg-[#d0eeff] rounded-2xl py-10 px-6 md:px-12 text-center text-[#0d0d0d]">
                    <h2 className="text-[28px] md:text-[32px] font-semibold mb-4 tracking-tight " style={{ textShadow: '0px 0px 10px rgba(0, 0, 0, .3)' }}>
                        Accepted Dental Plans & Insurance
                    </h2>
                    <p className="text-[16px] md:text-[18px]">
                        All PPO insurance is accepted. The office offers a dental saving plan for patients without insurance. Payment plans available.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default InsuranceSection;
