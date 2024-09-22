import React from 'react'

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer className='footer border-t-[1px] border-t-[#33353F] text-white'>
        <div className='p-4 flex justify-center items-center w-full'>
            <p className='text-slate-600'>All rights reserved. Copyright © {date}</p>
        </div>
    </footer>
  )
}

export default Footer