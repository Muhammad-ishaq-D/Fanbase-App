import React from 'react'
import backgroundImage from '../../assets/images/investors/beWithoutLimits-BG.png'
import Button from '../common/button'


export default function BeWithoutLimits() {
  return (
    <div style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',      
    }}> 
      
        <section className='container mx-auto px-9 pt-[6rem]'>
           
            {/* Parent */}
            <div className='flex flex-col gap-9 w-[44%] pb-24 text-white'>
                {/*ist child */}
          
           <h2 className='text-6xl font-extrabold ' >Be You. <br /><strong  className='text-[80px] bg-clip-text text-transparent leading-[1.2]'
              style={{
                backgroundImage: 'linear-gradient(90deg, #ff00d6, #f09d45)'
              }} >Without<br />Limits.</strong></h2>
          
                {/* 2nd child*/}

                <div className='flex flex-col gap-7 text-lg'>
                <div className='flex flex-col gap-4 Leading-[1.5]'>
<p>A place where you can truly be you! <strong>Fanbase removes the limitations of content suppression and shadow banning used by many current social apps.</strong></p>
<p><strong>Fanbase has social media, earnings, & ownership in one place.</strong> Fanbase aims to combine social engagement (like TikTok, Instagram) with monetization (like Patreon, Twitch).</p>
<p><strong>Black Culture, Youth, + Technology is powerful.</strong> Fanbase is built for everyone and fueled by culture and innovative tech. A powerful combination that has propelled the most successful social media companies in the world.</p>
                </div>
                {/* 3rd child*/}
                </div>
                <Button className='large'/>
            </div>
        </section>
        </div>
  )
}
