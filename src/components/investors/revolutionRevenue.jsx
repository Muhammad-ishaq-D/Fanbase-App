import React from 'react'
import InvestorInfoLayout from '../common/investors/investorInfoLayout'
import Button from '../common/button'

export default function RevolutionRevenue() {
  return ( 
   <InvestorInfoLayout>
    {/* Parent */}
    <div className='flex flex-col gap-9 items-center'>
        {/* ist child */}
        <div>
       <h1 className='text-6xl font-extrabold leading-[1.2] text-center bg-gradient-to-t from-[#ff00d6] to-[#f09d45] text-transparent bg-clip-text'>Revolutionizing Revenue</h1>
        </div>
        {/* 2nd child */}
        <div className='flex justify-between font-inter text-lg leading-[1.5] text-[#454545]'>
        <div className='w-[50%]'>
         <p>Fanbase stands out in the social media landscape with its unique business model that emphasizes both user freedom and monetization opportunities. As a FREE to-download-and-use app, Fanbase distinguishes itself by not running ads. This approach ensures that every user's content is visible to their following without being suppressed, a common tactic used by other platforms to compel advertisers to spend directly with them. Instead of relying on ad revenue, Fanbase empowers its users to create a hybrid follower model - combining free followers with the option for users to have paid subscribers. These subscribers can pay monthly from $2.99 to $99.99 to access additional, exclusive content.</p>
         </div>
         <div className='w-[43.35%]'>
         <p>Fanbase’s revenue model is based on a revenue-sharing system, where the platform takes 20% of all revenue generated, post-app store fees. This model provides an equitable way for both the platform and its users to benefit financially. It offers creators a direct path to monetization while ensuring that the platform itself can sustain and grow its operations. This approach positions Fanbase as a forward-thinking player in the creator economy, catering to the growing demand for platforms that offer fair compensation and visibility for content creators.</p>
         </div>
        </div>
        {/* 3rd child */}
        <Button className='px-36'/>
    </div>
   </InvestorInfoLayout>
  )
}
