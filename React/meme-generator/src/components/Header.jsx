
import React from 'react'

export default function Header() {
  return (
    <div className = 'w-full flex p-[20px] bg-[#672280] text-white text-[20px] items-center gap-x-[20px]'>
        <img src="assets/logo.png" alt="" className = 'h-[30px] w-[30px] '/>
        <h3 className = 'font-bold '>Meme Generator</h3>
    </div>
  )
}
