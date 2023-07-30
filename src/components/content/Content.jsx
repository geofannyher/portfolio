import resume from '../../assets/geoCv.pdf'
import social from '../../assets/github.svg'
import link from '../../assets/link.svg'
import reactt from '../../assets/reactt.svg'
import js from '../../assets/js.svg'
import html from '../../assets/html.svg'
import css from '../../assets/css.svg'
import type from '../../assets/type.svg'
import laptop from '../../assets/laptop.jpg'
import me from '../../assets/me2.png'
import 'boxicons'

const Content = () => {
    const dataMe = {
        hello: "Hello, I'm a",
        hello2: "Frontend Developer",
        tag: "Hi, Geofany Hermawan. A passionate Front-end React Developer based in Jember,Indonesia. 📍",
        img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1999&q=80",

    }
    return (
        <>
            <section id='home' className="container mx-auto">
                <div className="grid grid-cols-4 text-black min-h-screen">
                    <div className="flex items-center col-span-4 lg:col-span-2 order-1 ">
                        <div className="text-[40px] font-bold mb-20">
                            <h1>
                                {dataMe.hello}
                            </h1>
                            <h1 className="">
                                {dataMe.hello2}
                            </h1>
                            <p className="text-base font-semibold py-4">
                                {dataMe.tag}
                            </p>
                            <div className='flex gap-4 my-3'>
                                <a href="https://github.com/geofannyher" target='_blank'>
                                    <img className='w-9' src={social} alt="" />
                                </a>
                                <a href="https://github.com/geofannyher" target='_blank'>
                                    <img className='w-9' src={link} alt="" />
                                </a>
                            </div>
                            <div className="flex gap-2 py-2 items-center justify-center lg:justify-start">
                                <a href={resume} download='resume' className="p-4 border-black text-sm justify-center flex cursor-pointer border w-2/5">Download CV</a>
                            </div>
                            <div className='flex gap-4 items-center mt-10'>
                                <h1 className='text-[17px]'>
                                    Tech Stack
                                </h1>
                                <h1 className='text-[17px]'>
                                    |
                                </h1>
                                <ul className='flex gap-4'>
                                    <li className='rounded-full shadow-lg p-2'>
                                        <img className='w-7' src={html} alt="" />
                                    </li>
                                    <li className='rounded-full shadow-lg p-2'>
                                        <img className='w-7' src={css} alt="" />
                                    </li>
                                    <li className='rounded-full shadow-lg p-2'>
                                        <img className='w-7' src={js} alt="" />
                                    </li>
                                    <li className='rounded-full shadow-lg p-2'>
                                        <img className='w-7' src={type} alt="" />
                                    </li>
                                    <li className='rounded-full shadow-lg p-2'>
                                        <img className='w-7' src={reactt} alt="" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center col-span-2 order-2 ">
                        <div className='mb-52 ml-40'>
                            <img src={me} className='rounded-full border-8 border-gray-800 shadow-lg w-3/5 animate-spin-slow profile-picture' alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <div className='bg-white'>
                <section id='about' className="container mx-auto p-4 min-h-screen">
                    <div className="flex flex-col my-2">
                        <h1 className="font-bold text-[40px]">About Me</h1>
                        <h1 className="font-semibold text-gray-500 text-sm">A dedicated Front-end Developer
                            based in Indonesia</h1>
                    </div>
                    <div className="grid grid-cols-6 text-[#767676] text-[18px] ">
                        <div className='col-span-2'>
                            <img src={laptop} className='w-72 rounded-lg' alt="" />
                        </div>
                        <div className='col-span-3'>
                            <div className='flex gap-5 my-4'>
                                <div className='border  shadow-sm rounded-md'>
                                    <div className='flex flex-col items-center p-5'>
                                        <box-icon name='briefcase-alt' ></box-icon>
                                        <h1 className=' m-4 text-sm text-black font-semibold'>
                                            Completed
                                        </h1>
                                        <h1 className='text-sm text-gray-500 font-semibold'>
                                            5 + Project
                                        </h1>
                                    </div>
                                </div>
                                <div className='border  shadow-sm rounded-md'>
                                    <div className='flex flex-col items-center p-5'>
                                        <box-icon name='support' ></box-icon>
                                        <h1 className=' m-4 text-sm text-black font-semibold'>
                                            Support
                                        </h1>
                                        <h1 className='text-sm text-gray-500 font-semibold'>
                                            Onlinex 24 / 7
                                        </h1>
                                    </div>
                                </div>
                                <div className='border  shadow-sm rounded-md'>
                                    <div className='flex flex-col items-center p-5'>
                                        <box-icon name='award'></box-icon>
                                        <h1 className=' m-4 text-sm text-black font-semibold'>
                                            Experience
                                        </h1>
                                        <h1 className='text-sm text-gray-500 font-semibold'>
                                            2 Years
                                        </h1>
                                    </div>
                                </div>

                            </div>
                            <p className='text-[14px]'>
                                As a Junior Front-End Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques. I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications.
                            </p>
                            <div className='text-black py-4 font-semibold'>
                                <a href={resume} download='resume' className="p-4 border-black text-sm justify-center flex cursor-pointer border w-2/5">Download CV</a>
                            </div>
                        </div>

                    </div>
                    <div>
                    </div>
                </section >
            </div>

            <section id='porto' className="container mx-auto p-4 min-h-screen items-center">
                <div className="">
                    <div className="flex flex-col">
                        <h1 className="font-bold  text-[40px]">Portfolio</h1>
                        <h1 className="font-semibold text-sm text-gray-600">Most recent work</h1>
                        <hr className="w-20 h-8" />
                    </div>
                </div>
                <div className="flex gap-10">
                    <div className='rounded-md border p-4'>
                        <div className='flex flex-col'>
                            <img src={dataMe.img} className='w-40' alt="" />
                            <h1 className='py-2 font-bold'>
                                hrcerdas.id
                            </h1>
                            <p className='text-sm font-semibold text-gray-600'>
                                Hrcerdas is a system for headhunters who want to search for potential candidates by analyzing their personalities from social media
                            </p>
                            <div className='flex gap-4 py-2'>
                                <div className='border shadow-md p-2 font-semibold text-sm'>
                                    React JS
                                </div>
                                <div className='border shadow-md p-2 font-semibold text-sm'>
                                    Tailwind CSS
                                </div>
                            </div>
                            <div className='flex gap-4 py-4'>
                                <a href="http://hrcerdas.id/" target='_blank'>
                                    <h1 className='font-semibold text-sm flex items-center'>
                                        Live Code
                                        <box-icon name='right-arrow-alt' ></box-icon>
                                    </h1>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='rounded-md border p-4'>
                        <div className='flex flex-col'>
                            <img src={dataMe.img} className='w-40' alt="" />
                            <h1 className='py-2 font-bold'>
                                Go Scholarship
                            </h1>
                            <p className='text-sm font-semibold text-gray-600'>
                                Explore scholarships, grants, and financial aid opportunities on our information website. Find the right support for your academic journey and achieve your educational dreams
                            </p>
                            <div className='flex gap-4 py-2'>
                                <div className='border shadow-md p-2 font-semibold text-sm'>
                                    React
                                </div>
                                <div className='border shadow-md p-2 font-semibold text-sm'>
                                    Chakra UI
                                </div>
                                <div className='border shadow-md p-2 font-semibold text-sm'>
                                    SASS
                                </div>
                            </div>
                            <div className='flex gap-4 py-4'>
                                <a href="https://hrcerdas.id" target='_blank'>
                                    <h1 className='font-semibold text-sm flex items-center'>
                                        Live Code
                                        <box-icon name='right-arrow-alt' ></box-icon>
                                    </h1>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='rounded-md border p-4'>
                        <div className='flex flex-col'>
                            <img src={dataMe.img} className='w-40' alt="" />
                            <h1 className='py-2 font-bold'>
                                Si Segar
                            </h1>
                            <p className='text-sm font-semibold text-gray-600'>
                                Order fresh vegetables online conveniently through our website. Enjoy a wide selection of quality vegetables delivered right to your doorstep.
                            </p>
                            <div className='flex gap-4 py-2'>
                                <div className='border shadow-md p-2 font-semibold text-sm'>
                                    React
                                </div>
                                <div className='border shadow-md p-2 font-semibold text-sm'>
                                    Vanilla CSS
                                </div>
                            </div>
                            <div className='flex gap-4 py-4'>
                                <a href="https://hrcerdas.id" target='_blank'>
                                    <h1 className='font-semibold text-sm flex items-center'>
                                        Live Code
                                        <box-icon name='right-arrow-alt' ></box-icon>
                                    </h1>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
                <div>
                </div>
            </section >
        </>

    )
}

export default Content