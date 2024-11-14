import React, { useRef, useEffect } from 'react';
import { assets } from '../assets/assets';
import gsap from 'gsap';

const Hero = () => {
  const bestsellersRef = useRef(null);
  const latestArrivalsRef = useRef(null);
  const shopNowRef = useRef(null);
  const lineBestsellersRef = useRef(null);
  const lineShopNowRef = useRef(null);

  useEffect(() => {
    // Animate the "Our Bestsellers" text and line
    gsap.fromTo(
      bestsellersRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: 'power2.out', delay: 0.5 }
    );
    
    gsap.fromTo(
      lineBestsellersRef.current,
      { width: 0 },
      { width: '2rem', duration: 1, ease: 'power2.out', delay: 0.5 }
    );

    // Animate the "Latest Arrivals" text
    gsap.fromTo(
      latestArrivalsRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, ease: 'power2.out', delay: 1 }
    );

    // Animate the "Shop Now" text and line
    gsap.fromTo(
      shopNowRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: 'power2.out', delay: 1.5 }
    );
    
    gsap.fromTo(
      lineShopNowRef.current,
      { width: 0 },
      { width: '2rem', duration: 1, ease: 'power2.out', delay: 1.5 }
    );
  }, []);

  return (
    <div className='flex flex-col sm:flex-row border border-gray-400'>
      {/* Hero left side */}
      <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
        <div className='text-[#414141]'>
          <div className='flex items-center gap-2'>
            <p ref={lineBestsellersRef} className='h-[2px] bg-[#414141]' style={{ width: '2rem' }}></p>
            <p ref={bestsellersRef} className='font-medium text-sm md:text-base'>OUR BESTSELLERS</p>
          </div>
          <h1
            ref={latestArrivalsRef}
            className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'
          >
            Latest Arrivals
          </h1>
          <div className='flex items-center gap-2'>
            <p ref={shopNowRef} className='font-semibold text-sm md:text-base'>SHOP NOW</p>
            <p ref={lineShopNowRef} className='h-[2px] bg-[#414141]' style={{ width: '2rem' }}></p>
          </div>
        </div>
      </div>

      {/* Hero Right side */}
      <img className='w-full sm:w-1/2' src={assets.hero_img} alt='Hero' />
    </div>
  );
};

export default Hero;
