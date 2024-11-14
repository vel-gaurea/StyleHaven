import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t '>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10  flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p> We are dedicated to delivering excellence and innovation, with a passion for creating top-quality products that make a difference.</p>
          <p>
            Our journey is driven by a commitment to sustainability, community engagement, and a relentless pursuit of new opportunities to serve our customers better.
          </p>
          <b className='text-gray-800'>Our Mission</b>
          <p>
            Our mission is to inspire and empower our community by offering exceptional products and services, prioritizing customer satisfaction and innovation in everything we do.
          </p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py20 flex flex-col gap-5'>
          <b>Quality Assurance</b>
          <p className='text-gray-600'>
            We maintain the highest standards in quality control, ensuring that every product you receive is designed to exceed your expectations.
          </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py20 flex flex-col gap-5'>
          <b>Convebience:</b>
          <p className='text-gray-600'>
            We prioritize your convenience with a seamless shopping experience, user-friendly platforms, and reliable delivery services.
          </p>

        </div>
        <div className='border px-10 md:px-16 py-8 sm:py20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>
            Our dedicated support team is always ready to assist, providing you with exceptional service and ensuring your satisfaction every step of the way.
          </p>

        </div>
      </div>
      <NewsLetterBox />
    </div>
  )
}

export default About
