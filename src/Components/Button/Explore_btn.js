import React from 'react';
import { ArrowSmallRightIcon } from '@heroicons/react/24/solid';

function Explore_btn() {
    return (
        <div className='font-[600] text-sm xl:text-md bg-white flex items-center gap-x-2 w-fit px-4 py-3 rounded-md cursor-pointer' >
            Explore Property
            <ArrowSmallRightIcon className='w-6 bg-secondary rounded-full p-1 text-white ' />
        </div>
    )
}

export default Explore_btn