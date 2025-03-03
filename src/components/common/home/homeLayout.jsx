import React from 'react'

export default function HomeLayout({children , color = 'bg-white'}) {
  return (
    <section  className={`container px-9 pt-9 mx-auto ${color}`}>
     {children}
    </section>
  )
}
