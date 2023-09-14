import React from 'react'
import { MapPinIcon } from '@heroicons/react/24/solid';
import pix from '../img/Home/comfi.png';
import ForSale_btn from './Button/ForSale_btn';
import bed from '../../src/img/Home/bed.svg';
import bath from '../../src/img/Home/bath.svg';
import Carparking from '../../src/img/Home/parking.svg';
import size from '../../src/img/Home/area.svg';


function ForsaleCard({ cost, id, title, location, baths, beds, parking, area, pix }) {
    return (
        <div className='bg-white py-[32px] px-[30px] max-w-[681px] cursor-pointer shadow-md hover:shadow-xl transition-all ease-in-out 300'>
            <img src={pix} alt="" />
            <div className="price flex items-end justify-between">
                <h1 className='font-bold text-[28px] text-secondary 2xl:text-[35px]' >{cost}</h1>
                <ForSale_btn />
            </div>
            <div className="desc flex flex-col items-start mt-[32px]">
                <h1 className='font-bold text-[18px]  text-left md:text-[22px] 2xl:text-[25px]' >{title}</h1>
                <div className="location flex items-center text-[#8E8E8E] ">
                    <MapPinIcon className='h-[20px] text-secondary md:h-[25px]' />
                    <p className='text-left text-[15px] md:text-md'>{location}</p>
                </div>
            </div>
            <div className="feat flex flex-row flex-wrap gap-[15px] 2xl:gap-x-[20px] mt-[24px]">
                <div className="beds text-sm flex items-center w-fit gap-x-2 px-4 py-3 border-[1px] rounded-lg border-slate-400">
                    <img src={bed} className='max-w-[20px]' alt="number of bed" />
                    <p className='text-[12px] text-[#8E8E8E]'>| <span>{beds}</span> Beds</p>
                </div>
                <div className="baths flex items-center w-fit gap-x-2 px-4 py-3 border-[1px] rounded-lg border-slate-400">
                    <img src={bath} className='max-w-[20px]' alt="number of baths" />
                    <p className='text-sm text-[#8E8E8E]'>| <span>{baths}</span> Baths</p>
                </div>
                <div className="parking flex items-center w-fit gap-x-2 px-4 py-3 border-[1px] rounded-lg border-slate-400">
                    <img src={Carparking} className='max-w-[20px]' alt="parking space" />
                    <p className='text-sm text-[#8E8E8E]'>| <span>{parking}</span> Parking</p>
                </div>
                <div className="area flex items-center w-fit gap-x-2 px-4 py-3 border-[1px] rounded-lg border-slate-400">
                    <img src={size} className='max-w-[20px]' alt="size" />
                    <p className='text-sm  text-[#8E8E8E]'>| <span>{area}</span>sqft</p>
                </div>
            </div>
        </div>
    )
}

export default ForsaleCard