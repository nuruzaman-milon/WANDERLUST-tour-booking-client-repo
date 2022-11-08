import { Button, Card } from 'flowbite-react';
import React from 'react';

const Service = ({ service }) => {
    const { img, price, title, ratings, details } = service;
    const shortDetails = details.slice(0, 100);
    console.log(shortDetails);
    return (
        <div >
            <Card>
                <img className='h-52' src={img} alt="" />
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {title}
                </h5>
                <p>Price: {price}</p>
                <p>Rating: {ratings}</p>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    {shortDetails}...
                </p>
                <Button size="xs">View Details</Button>
            </Card>
        </div>
    );
};

export default Service;