import React from 'react'
import Logo2 from '../../assets/images/investors/Logo2.png'
import Button from '../common/button'
import InvestorInfoLayout from '../common/investors/investorInfoLayout'

export default function LegalDisclaimer() {
  return (
    <InvestorInfoLayout color='bg-purple-600'>
        {/* parent */}
    <div className='flex justify-between pt-20 pb-20'>
        {/* ist child */}
        <div className='flex flex-col gap-16 w-[65%]'>
        {/* logo2 */}
        <img src={Logo2} alt="Logo2" className='w-96 h-28'/>
        {/* ist sub child */}
        <div className='flex flex-col gap-4'>
        {/* Legal Disclaimer */}
        <h6 className='text-white font-bold font-inter text-base'>LEGAL DISCLAIMER </h6>
        {/* paragraph */}
        <p className='text-white text-sm font-semibold font-inter leading-[1.5]'>
        AN OFFERING STATEMENT REGARDING THIS OFFERING HAS BEEN FILED WITH THE SEC. THE SEC HAS QUALIFIED THAT OFFERING STATEMENT, WHICH ONLY MEANS THAT THE COMPANY MAY MAKE SALES OF THE SECURITIES DESCRIBED BY THE OFFERING STATEMENT. IT DOES NOT MEAN THAT THE SEC HAS APPROVED, PASSED UPON THE MERITS OR PASSED UPON THE ACCURACY OR COMPLETENESS OF THE INFORMATION IN THE OFFERING STATEMENT. THE OFFERING CIRCULAR THAT IS PART OF THAT OFFERING STATEMENT CAN BE FOUND HERE. <br /><br />
        CROWDCHECK VERIFIED REPORT CAN BE FOUND HERE. <br /><br />
        THE OFFERING MATERIALS MAY CONTAIN FORWARD-LOOKING STATEMENTS AND INFORMATION RELATING TO, AMONG OTHER THINGS, THE COMPANY, ITS BUSINESS PLAN AND STRATEGY, AND ITS INDUSTRY. THESE FORWARD-LOOKING STATEMENTS ARE BASED ON THE BELIEFS OF, ASSUMPTIONS MADE BY, AND INFORMATION CURRENTLY AVAILABLE TO THE COMPANY’S MANAGEMENT. WHEN USED IN THE OFFERING MATERIALS, THE WORDS “ESTIMATE,” “PROJECT,” “BELIEVE,” “ANTICIPATE,” “INTEND,” “EXPECT” AND SIMILAR EXPRESSIONS ARE INTENDED TO IDENTIFY FORWARD-LOOKING STATEMENTS, WHICH CONSTITUTE FORWARD LOOKING STATEMENTS. THESE STATEMENTS REFLECT MANAGEMENT’S CURRENT VIEWS WITH RESPECT TO FUTURE EVENTS AND ARE SUBJECT TO RISKS AND UNCERTAINTIES THAT COULD CAUSE THE COMPANY’S ACTUAL RESULTS TO DIFFER MATERIALLY FROM THOSE CONTAINED IN THE FORWARD-LOOKING STATEMENTS. INVESTORS ARE CAUTIONED NOT TO PLACE UNDUE RELIANCE ON THESE FORWARD-LOOKING STATEMENTS, WHICH SPEAK ONLY AS OF THE DATE ON WHICH THEY ARE MADE. THE COMPANY DOES NOT UNDERTAKE ANY OBLIGATION TO REVISE OR UPDATE THESE FORWARD-LOOKING STATEMENTS TO REFLECT EVENTS OR CIRCUMSTANCES AFTER SUCH DATE OR TO REFLECT THE OCCURRENCE OF UNANTICIPATED EVENTS.</p>
        </div>
        </div>
        {/* 2nd child */}
        <div className='flex flex-col gap-4 w-[19%]'>
        < Button className='px-24 '/>
        <h6 className='text-white font-bold font-inter text-base leading-[1.5]'>OFFERING CIRCULAR <br />
        RISKS</h6>
        <p className='text-white text-xs font-inter leading-[1.5]'>© 2024 Fanbase® All Rights Reserved Privacy Policy | Terms & Conditions</p>   
        </div>
    </div>
    </InvestorInfoLayout>
  )
}
 