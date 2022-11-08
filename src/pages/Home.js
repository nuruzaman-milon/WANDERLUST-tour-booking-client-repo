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
                <div className='text-center my-6'>
                    <h1 className='font-extrabold text-3xl'>
                        Any Queries?
                    </h1>
                    <h2>I am available 24/7 to answer your queries.</h2>
                </div>
                <div className='grid grid-cols-2'>
                    <div className='bg-[#10A5B2]'>
                        <h1>For Sales</h1>
                        <h2>The Brilliant reasons Emprise be your one-stop-shop!</h2>
                        <h2>sales@emprise.tours</h2>
                        <h2>01704443900</h2>
                    </div>
                    <div className='bg-black text-white'>
                        <h1>Help & Support</h1>
                        <h2>The Brilliant reasons Emprise be your one-stop-shop!</h2>
                        <h2>njmilon1@gmail.com</h2>
                        <h2>01303746940</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;