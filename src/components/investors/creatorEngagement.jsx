import React from 'react'
import InvestorInfoLayout from '../common/investors/investorInfoLayout'
import Button from '../common/button'
import CreatorEngagementP from '../../assets/images/investors/creatorEngagement.png'

export default function CreatorEngagement() {
  return (
    <InvestorInfoLayout>
        {/* Parent */}
        <div className='flex gap-6'>
            {/* ist child */}
            <div className='flex flex-col gap-9 w-[42%]'>
                <h2 className='text-6xl font-extrabold leading-[1.1] '>Creator And <br />
                    Engagement First <br />
                    <strong className='text-6xl font-extrabold leading-[1.2] bg-gradient-to-t from-[#ff00d6] to-[#f09d45] text-transparent bg-clip-text'>Social Media</strong></h2>
                <p className='font-inter text-lg leading-[1.5] text-[#454545]'><strong>Fanbase is revolutionizing the creator economy by enhancing visibility and engagement for every user.</strong> We are a next-gen social media platform that empowers users to monetize their content, offering them the chance to generate revenue through subscription and audience engagement. We foster authentic interactions between creators and their most devoted fanbase. With features like posting photos, videos, short clips, audio rooms, stories, live broadcasts, and long-form content, Fanbase provides a diverse array of tools for creators to connect with and grow their audience in multiple, dynamic ways. This approach <strong>democratizes content creation,</strong> ensuring all users have equal opportunities to thrive in the creator economy.</p>
                <Button className='px-36'/>
            </div>
            {/* 2nd child */}
        <img src={CreatorEngagementP} alt="image" className='w-[56%] '/>
        </div>
    </InvestorInfoLayout>
  )
}
