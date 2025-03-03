import React from 'react'
import HomeLayout from '../common/home/homeLayout'
import BoostSubscription from '../../assets/images/home/title-3.webp'
import subscribeImage from '../../assets/images/home/image-3.webp'

export default function CreateWithoutLimit() {
  return (
    <HomeLayout>
      {/* parent */}
      <div className='flex justify-between gap-40 items-center'>
        {/* 1st child */}
        <img src={BoostSubscription} alt="Boost your subscriptions" className='w-[45%] '/>
        {/* 2nd child */}
        <div className='flex flex-col gap-10 text-right '>
          <img src={subscribeImage} alt="Subscribe image" className='w-[65%] '/>
          <a href="https://fanbase.app/sign-up" target="_blank" className=' mr-8 color-[#FF00D6] font-inter'>Join Fanbase for Free <span class="arrow-up"></span></a>
        </div>
      </div>
    </HomeLayout>
  )
}
