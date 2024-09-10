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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ipsam quis exercitationem deleniti suscipit optio odio repudiandae dolores dignissimos adipisci.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus ipsum ullam laboriosam asperiores? Excepturi asperiores quod placeat rem officia distinctio unde. Architecto delectus corrupti molestiae omnis! Asperiores ad vero fugiat.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, doloribus facere. Nemo, voluptates iste illo natus neque unde quae placeat sed, doloremque nihil alias deserunt reprehenderit, ducimus quia ratione facere?</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py20 flex flex-col gap-5'>
          <b>Quality Assurance</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum voluptatum aliquam, sequi eum maxime repudiandae alias in sint fuga blanditiis!</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py20 flex flex-col gap-5'>
          <b>Convebience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam alias laborum illum corrupti officiis doloribus consequatur. Ipsam accusamus tempore distinctio similique?</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam voluptatem, nisi ad rem, laudantium quam blanditiis quidem sapiente quaerat aliquid, accusamus est aliquam. Veritatis, reprehenderit?</p>
        </div>
      </div>

          <NewsLetterBox/>
    </div>
  )
}

export default About
