import React from 'react'

export default function InvestorInfoLayout({children , color = 'bg-white'}) {
  return (
   <section className={'container px-4 sm:px-6  md:px-8  lg:px-10 mx-auto pt-[6rem] ${color}'}>
    {children}
   </section>
  )
}
