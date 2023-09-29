import React from 'react'
import SeeArticles from './Button/SeeArticles';
import Left_blog_pattern from '../../src/img/Home/Left_blog_pattern.png';
import Rigft_blog_pattern from '../../src/img/Home/Right_blog_pattern.png';
import Articles from './Articles';


function Blog() {
    return (
        <section className="Blog bg-[#F5F1EF] h-fit mt-[40px] py-[110px] relative ">
            <img className='w-[15%] absolute top-0' src={Left_blog_pattern} alt="Background pattern" />
            <img className='w-[15%] absolute bottom-0 right-0' src={Rigft_blog_pattern} alt="Background pattern" />
            <div className="wrapper flex flex-col items-center container">
                <div className="header flex flex-col items-center pb-[40px]">
                    <p className='text-sm uppercase tracking-[4px] md:tracking-[6px] lg:text-md 2xl:text-lg'>|<span className='text-secondary'>06</span>blog|</p>
                    <h1 className='text-[24px] font-bold md:text-[35px] leading-[40px] my-4 md:max-w-[500px]'>Properties for sale in your favorite area</h1>
                </div>
                <div className="articles flex flex-col gap-[50px] mb-8">
                    {Articles.map(({ pix, date, category, title, id }) => (
                        <div key={id} className="article flex flex-col items-center ">
                            <img className='mb-[23px]' src={pix} alt="Blog_1" />
                            <small className='text-link '>{date} | {category}</small>
                            <h1 className='font-bold text-[15px] text-center mt-2 cursor-pointer leading-6 max-w-[450px] lg:text-[20px]'>{title}</h1>
                        </div>

                    ))
                    }
                </div>
                <SeeArticles />
            </div>
        </section>
    )
}

export default Blog