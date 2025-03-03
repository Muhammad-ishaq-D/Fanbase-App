import React from 'react'
import Logo from '../../assets/images/investors/Logo2.png'
import Button from '../common/button'
import HomeLayout from '../common/home/homeLayout'

export default function HomeHero() {
  return (
    <HomeLayout color='bg-black'>
      {/* parent */}
      <div className='flex gap-36 border-2 border-[red] pb-16 '>
        {/* 1st child */}    
        {/* video */}
        <video className='w-[45%] border-2 border-[yellow] mt-0' autoPlay muted loop playsInline>
        <source src="https://assets.fanbase.app/landing/video-banner-compressed.mp4" type="video/mp4" />
        <source src="https://endavo.s.llnwi.net/hls-ntp-v2/smil:/12048/mp4/0e/96748737ede15d429f9651d170ee1e5f_4.smil/playlist.m3u8" type="application/x-mpegURL" />
        Your browser does not support the video tag.
      </video>

        {/* 2nd child */}
        <div className='flex flex-col gap-11 border-2 border-[blue] w-[28%] pt-8'>
        {/* 1st subchild (logo) */}
        <img src={Logo} alt="heading" className='w-60'/>
        {/* 2nd subchild (content) */}
        <div className='flex flex-col gap-3  text-[#fff] '>
          {/* heading */}
        <h2 className='text-4xl font-extrabold tracking-[-1px] leading-[1.2] '>Be you. Without Limits.</h2>
        {/* paragraphs */}
          <p className='text-xl font-inter tracking-[-0.8px] leading-6 '>Fanbase is a <strong>FREE Next-Generation Social Media App</strong> that allows ANY user to earn money from day one.</p>
          <p className='text-xl font-inter tracking-[-0.8px] leading-6 '>Unlike other social apps, Fanbase is the one place you can truly be you.</p>
          </div>
        {/* 3rd subchild */}
        <div className='flex flex-col gap-7'>
        {/* button */}
        <Button size='medium' type='Sign Up' />
        {/* Links */}
        <div className='flex gap-5'>
        <a href="https://itunes.apple.com/us/app/fanbase/id1439232869?mt=8" target="_blank d-block">
        <img src="https://www.fanbase.app/assets/img/download-ios.png" alt="Download on the App Store" width="95" height="32" /></a>
        <a href="https://play.google.com/store/apps/details?id=com.fanbase" target="_blank d-block">
        <img src="https://www.fanbase.app/assets/img/download-android.png" alt="Get it on Google Play" width="108" height="32" /></a>
        </div>
        </div>
        </div>
      </div>
      </HomeLayout>
  )
}
