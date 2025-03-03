<div class="investment_card"><div class="investment_tier-padding-top"><div class="investment_tier">Tier 5</div><div class="investment_amount">$10,000+</div></div><div class="tier_divider"></div><div class="padding-bottom padding-small"></div><div class="investment_tier-padding-bottom"><div class="invest_tier-wrap"><div class="bonus_shares">invest</div><div class="shares_percentage">$10,000+</div><div class="padding-bottom padding-small"></div><p>Investors who invest at least $10,000+ will receive the following: Early access to new Fanbase features on the platform*, 30,000 loves to use on Fanbase, a Fanbase T-Shirt, an early investor gold verified profile badge, access to a private dinner for Diamond level investors with Founder and Executive Team. (Transportation and lodging not included), and 10% Bonus Shares</p></div><div class="padding-bottom padding-medium"></div><div class="investment_tier-cta"><a data-slug="fanbase" href="https://investment.startengine.com/fanbase/landing-page" target="_blank" class="button startengine-button auto w-button">Invest</a></div></div></div>

import React from 'react'
import Button from '../common/button'

export default function InvestmentCards() {
  return (
    <div className=' bg-yellow-300 w-[25%] rounded-xl  mx-auto mt-10 py-6'>
      <div className='text-center'>
        <h3 className=''>Tier 5</h3>
        <p>$10,000+</p>
      <hr className='w-[90%] border-t-[2px] border-[black] mt-4'/> 
      </div>
       <div className='p-6'>
       <p>Investors who invest at least $10,000+ will receive the following: Early access to new Fanbase features on the platform*, 30,000 loves to use on Fanbase, a Fanbase T-Shirt, an early investor gold verified profile badge, access to a private dinner for Diamond level investors with Founder and Executive Team. (Transportation and lodging not included), and 10% Bonus Shares</p>
       </div>
      
     
      {/* Invest Button */}
      <div className="text-center">
  <Button size='medium' type='Invest'/>
      </div>
      
    </div>
  )
}
