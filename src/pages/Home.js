import { Button, Carousel } from 'flowbite-react';
import React, { useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Service from './Service';
import { FaAngleDoubleRight } from 'react-icons/fa';

const Home = () => {
    //dynamic title
    const changeTitle = "Home-wanderlust";
    useEffect(() => {
      document.title = changeTitle;
    }, [changeTitle]);

    const servicesData = useLoaderData();
    return (
        <div>
            <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
                <Carousel>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/2/21/Cox%27s_Bazar_Sunset.JPG"
                        alt="..."
                    />
                    <img
                        src="https://www.deeperblue.com/wp-content/uploads/2022/01/St-Martin-Island-Bangladesh-AdobeStock_371025981-scaled.jpeg"
                        alt="..."
                    />
                    <img
                        src="https://bd-info.com/wp-content/uploads/2020/12/Sajek.jpg"
                        alt="..."
                    />
                </Carousel>
            </div>

            <div className='my-6'>
                <h1 className='mb-6 text-center font-bold text-3xl'>Top Services</h1>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                    {
                        servicesData.map(service => <Service key={service._id} service={service}></Service>)
                    }
                </div>
                <div className='flex justify-end mt-4'>

                    <Link to='/services'>
                        <Button size="xs"><p className='mr-1'>See All </p> <FaAngleDoubleRight /></Button>
                    </Link>
                </div>
            </div>

            <div className='mt-10'>
                <h1 className='text-center font-bold text-4xl mb-8'>Top Destination</h1>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                    <div className="overflow-hidden aspect-video bg-red-400 cursor-pointer rounded-xl relative group">
                        <div className="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
                            <div>
                                <div className="transform-gpu p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transition duration-300 ease-in-out">
                                    <div className="font-bold text-xl">
                                        Coxsbazar
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img alt="" className="h-56 rounded-lg object-cover w-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out" src="https://media-cdn.tripadvisor.com/media/photo-c/1280x250/10/e2/f8/43/longest-sea-beach-in.jpg" />
                    </div>
                    <div className="overflow-hidden aspect-video bg-red-400 cursor-pointer rounded-xl relative group">
                        <div className="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
                            <div>
                                <div className="transform-gpu p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transition duration-300 ease-in-out">
                                    <div className="font-bold text-xl">
                                        Saint Martin
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img alt="" className="h-56 rounded-lg object-cover w-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out" src="https://live.staticflickr.com/8240/8592434717_8023296e12_b.jpg" />
                    </div>
                    <div className="overflow-hidden aspect-video bg-red-400 cursor-pointer rounded-xl relative group">
                        <div className="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
                            <div>
                                <div className="transform-gpu p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transition duration-300 ease-in-out">
                                    <div className="font-bold text-xl">
                                        Sajek
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img alt="" className="object-cover w-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out h-56 rounded-lg" src="https://new-media.dhakatribune.com/en/uploads/2022/02/05/sajek-pic-1-1598953304911.jpeg" />
                    </div>
                </div>
            </div>

            <div>
                <div className='text-center my-10'>
                    <h1 className='font-extrabold text-3xl mb-4'>
                        Any Queries?
                    </h1>
                    <h2 className='text-2xl'>I am available 24/7 to answer your queries.</h2>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
                    <div className='rounded-xl bg-[#10A5B2] text-white text-center py-12 hover:bg-[#028b97]'>
                        <div className='bg-white mx-auto rounded-full w-20 h-20'>
                            <img className='mx-auto pt-3' src="https://d33wubrfki0l68.cloudfront.net/a3a2ee57a92e0b0322f02b7f0dbda7a625479d57/5deeb/assets/svg/headset.svg" alt="" />
                        </div>
                        <h1 className='font-bold text-2xl my-4'>Tour Guide Booking </h1>
                        <h2 className='font-semibold text-xl my-4'>I am with you all over in Bangladesh!</h2>
                        <h2 className='font-semibold text-xl my-4'>wandarlust@guide.tours</h2>
                        <h2 className='font-semibold text-xl my-4'>01704443900</h2>
                    </div>
                    <div className='rounded-xl bg-black text-white text-center py-12 hover:bg-slate-900'>
                        <div className='bg-white mx-auto rounded-full w-20 h-20'>
                            <img className='mx-auto pt-5' src="https://d33wubrfki0l68.cloudfront.net/686abac3955a75eb9a78c5324676c5b64a67410e/3aca8/assets/svg/help-circle.svg" alt="" />
                        </div>
                        <h1 className='font-bold text-2xl my-4'>Help & Support </h1>
                        <h2 className='font-semibold text-xl my-4'>I am available 24/7 for your support!</h2>
                        <h2 className='font-semibold text-xl my-4'>njmilon1@gmail.com</h2>
                        <h2 className='font-semibold text-xl my-4'>01303746940</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;