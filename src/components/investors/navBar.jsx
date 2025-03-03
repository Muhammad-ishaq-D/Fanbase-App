import React from 'react'
import Button from '../common/button'
import Logo from '../../assets/images/investors/Logo2.png'

export default function NavBar() {
  return (
    
    <div className='flex gap-10 bg-purple-900 p-6 pr-0 mx-auto'>
      <img src={Logo} alt="Logo" className='w-[15%]'/>
      <ul className='flex gap-20 text-2xl font-semibold text-white mt-1'>
        <li>why fanbase</li>
        <li>traction</li>
        <li>our team</li>
      </ul>
      <Button size='large' type='Invest on StartEngine' />
    </div>
  )
}
