import { Button, Card } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceCart = ({service}) => {
    const { _id, img, price, title, ratings, details } = service;
    const shortDetails = details.slice(0, 100);
    console.log(shortDetails);
    return (
        <div >
            <Card>
                <PhotoProvider>
                    <PhotoView src={img}>
                        <img className='h-52' src={img} alt="" />
                    </PhotoView>
                </PhotoProvider>
                
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {title}
                </h5>
                <p>Price: {price}</p>
                <p>Rating: {ratings}</p>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    {shortDetails}...
                </p>
                <Link to={`/services/${_id}`}>
                    <Button size="xs" className='w-full'>View Details</Button>
                </Link>
            </Card>
        </div>
    );
};

export default ServiceCart;