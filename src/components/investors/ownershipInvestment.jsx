import React from 'react'
import InvestorInfoLayout from '../common/investors/investorInfoLayout'
import Button from '../common/button'

export default function OwnershipInvestment() {
  return (
 <InvestorInfoLayout>
    {/* Parent */}
    <div className='flex flex-col items-center  gap-9'>
        {/* ist child */}
        
        <h2 className='text-[40px] md:text-[48px] lg:text-[60px]  font-extrabold leading-[1.1] text-center'>We’re Empowering <br />
            Ownership That <br />
            <strong className='bg-gradient-to-t from-[#ff00d6] to-[#f09d45] text-transparent bg-clip-text leading-[1.2] md:text-[48px]  lg:text-[80px]'>Redefines Social <br />Media Investment</strong></h2>
        
        {/* 2nd child */}
        <div className='flex flex-col gap-9 md:justify-between  md:flex-row font-inter text-[14px] md:text-[18px] leading-[1.5] text-[#454545] text-center md:text-start'>
        {/* sub child 1 */}
        <div className='flex flex-col md:w-[44%]  gap-3'>
        <p>Investing in us offers a unique opportunity that other social media platforms don't usually provide – the chance for users and the community to own a part of the platform they contribute to, engage with, and make successful. Unlike other apps, Fanbase allows everyone to have a seat at the table. </p>
        <p>This approach not only empowers users by giving them a stake in the platform's success but also aligns perfectly with the current trend toward more equitable and inclusive online spaces.</p>
        </div>
        {/* sub child 2 */}
        <div className='flex flex-col md:w-[47%] gap-3'>
        <p>Additionally, Fanbase's commitment to providing robust creator tools and front-end monetization options further enhances its appeal. </p>
        <p>By investing in Fanbase, individuals are not just supporting a platform; they are becoming part of a movement aimed at freedom and disruption in the social media and creator economy, challenging the status quo and reshaping the digital ecosystem for the better.</p>
        </div>
        </div>
        {/* 3rd child */}
       <Button className='px-36'/>
    </div>
 </InvestorInfoLayout>
  )
}
