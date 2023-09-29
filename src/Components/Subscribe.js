import React from 'react'

function Subscribe() {
    return (
        <div className='flex flex-wrap items-center gap-3 '>
            <input type="email" name="email" id="email" placeholder='your email address here' className='w-[338px] text-[13px] py-[13px] border-2 pl-4 rounded-sm focus:outline-none focus:shadow-md' />
            <button type='submit' className='w-screen bg-primary text-white text-[13px] font-medium py-[13px] px-[18px] rounded-sm hover:bg-[#26253A] transition-colors ease-in-out duration-300 md:w-fit'>Subscribe Now</button>
        </div>
    )
}

export default Subscribe