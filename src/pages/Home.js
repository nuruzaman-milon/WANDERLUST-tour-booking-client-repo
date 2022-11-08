import { Carousel } from 'flowbite-react';
import React from 'react';

const Home = () => {
    return (
        <div>
            <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
                <Carousel>
                    <img
                        src="https://cdn.bangladeshscenictours.com/wp-content/uploads/2019/11/Exploring-Coxs-Bazar.jpg"
                        alt="..."
                    />
                    <img
                        src="https://images.thedailystar.net/sites/default/files/feature/images/coxs-bazar-web.gif"
                        alt="..."
                    />
                    <img
                        src="https://images.unsplash.com/photo-1608922962250-66b89f5deb06?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2FpbnQlMjBtYXJ0aW4lMjBpc2xhbmR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                        alt="..."
                    />
                </Carousel>
            </div>
            <div>
                <div className='text-center my-10'>
                    <h1 className='font-extrabold text-3xl mb-4'>
                        Any Queries?
                    </h1>
                    <h2 className='text-2xl'>I am available 24/7 to answer your queries.</h2>
                </div>
                <div className='grid grid-cols-2 gap-16'>
                    <div className='rounded-xl bg-[#10A5B2] text-white text-center py-16 hover:bg-[#028b97]'>
                        <div className='bg-white mx-auto rounded-full w-20 h-20'>
                            <img className='mx-auto pt-3' src="https://d33wubrfki0l68.cloudfront.net/a3a2ee57a92e0b0322f02b7f0dbda7a625479d57/5deeb/assets/svg/headset.svg" alt="" />
                        </div>
                        <h1 className='font-bold text-2xl my-4'>Tour Guide Booking </h1>
                        <h2 className='font-semibold text-xl my-4'>I am with you all over in Bangladesh!</h2>
                        <h2 className='font-semibold text-xl my-4'>wandarlust@guide.tours</h2>
                        <h2 className='font-semibold text-xl my-4'>01704443900</h2>
                    </div>
                    <div className='rounded-xl bg-black text-white text-center py-16 hover:bg-slate-900'>
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