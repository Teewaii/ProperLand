import React from 'react';
import { ArrowSmallRightIcon } from '@heroicons/react/24/solid';

function LearnMore() {
    return (
        <div className='font-[600] text-sm xl:text-md bg-secondary flex items-center gap-x-2 w-fit px-4 py-3 group rounded-md hover:bg-primary hover:text-secondary cursor-pointer transition-all ease-in-out 300' >
            Learn More
            <ArrowSmallRightIcon className='w-4 bg-primary rounded-full p-[0.5] text-secondary group-hover:bg-secondary group-hover:text-primary  transition-all ease-in-out 300 ' />
        </div>

    )
}

export default LearnMore