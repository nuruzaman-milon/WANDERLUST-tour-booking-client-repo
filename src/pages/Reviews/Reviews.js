import { Button, Card } from 'flowbite-react';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';

const Reviews = () => {
    const { user } = useContext(AuthContext)
    const [review, setReview] = useState([])
    // const {service_title, review_name, review_text} = review;
    // console.log(service_title);
    // console.log(review[0]._id);

    //fetch user specific review data
    useEffect(() => {
        fetch(`http://localhost:5000/myReviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReview(data))
    }, [user?.email])

    return (
        <div>
            {
                (review.length) ?
                    <>
                    {
                        review.map(data => <Card className='my-4 bg-indigo-300'>
                        <div className='flex justify-between items-center'>
                            <div>
                                <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
                                    Service Title: {data?.service_title}
                                </h5>
    
                                <p className="mb-2 text-base text-gray-500 dark:text-gray-400 sm:text-lg">
                                    Review Title: {data?.review_name}
                                </p>
    
                                <p className="text-base text-gray-500 dark:text-gray-400 sm:text-lg">
                                    Review Details: {data?.review_text}
                                </p>
                            </div>
                            <div className='flex'>
                                <Button className='mr-2' color="warning"
                                    pill={true}>Edit</Button>
                                <Button color="failure"
                                    pill={true}>Delete</Button>
                            </div>
                        </div>
                    </Card>)
                    }
                    </>
                
                : <div className='w-full h-[100vh] flex justify-center items-center'>
                    <h1 className='text-5xl font-extrabold'>No reviews were added!!</h1>
                </div>
            
                
            }

        </div>
    );
};

export default Reviews;