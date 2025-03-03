import React from 'react'
import InvestorInfoLayout from '../common/investors/investorInfoLayout'
import economySurging from '../../assets/images/investors/economySurging.png'

export default function EconomySurging() {
  return (
   <InvestorInfoLayout>
    {/* Parent */}
    <div className='flex gap-6'>
      {/* istchild */}
      
        <img src={economySurging} alt="economySurging" />
     
     {/* 2ndchild */}
     <div className='flex flex-col gap-9'>
      {/* heading */}
       <h2 className='text-6xl font-extrabold text-[#454545] leading-[1.1]'>The Creator <br /> Economy Is <br />
        <strong className='bg-gradient-to-t from-[#ff00d6] to-[#f09d45] text-transparent bg-clip-text '>Surging</strong>
       </h2>
      {/* paragraph */}
      <div className='flex flex-col gap-2 w-[90%] font-inter text-lg leading-[1.5] text-[#454545]'>
        {/* para1 */}
        
         <p>The creator economy is valued at approximately <strong>$250 billion</strong> in 2023, indicating its substantial growth and impact on the global economic landscape. The total addressable market of the creator economy could roughly double in size to <strong>$480 billion</strong> by <strong>2027.</strong> 
         (<a href="https://www.theleap.co/blog/creator-economy-statistics/" className='underline'>Source</a>)</p>
       
        {/* para2 */}
        
         <p>The global creator population is projected to grow at a <strong>10-20%s</strong> compound annual growth rate over the next five years, and <strong>48%</strong> of social media users said they’re likely to pay for premium subscriptions. (<a href="https://www.goldmansachs.com/insights/articles/the-creator-economy-could-approach-half-a-trillion-dollars-by-2027.html" className='underline'>Source</a> | <a href="https://www.theleap.co/blog/creator-economy-statistics/" className='underline'>Source</a>)</p>
        
      </div>
     </div>
    </div>
   </InvestorInfoLayout>
  )
}
