import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCart from '../shared/ServiceCart/ServiceCart';

const Services = () => {
    const allServices = useLoaderData();

    //dynamic title
    const changeTitle = "services-wanderlust";
    useEffect(() => {
      document.title = changeTitle;
    }, [changeTitle]);

    return (
        <div>
            <h1 className='text-center font-bold text-3xl my-4'>All Services</h1>
            <div className='grid grid-cols-3 gap-6'>
                {
                    allServices.map(service => <ServiceCart key={service._id} service={service}></ServiceCart>)
                }
            </div>
        </div>
    );
};

export default Services;