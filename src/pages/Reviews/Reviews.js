import { Button, Card } from 'flowbite-react';
import React, { useContext, useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Reviews = () => {
    const { user } = useContext(AuthContext)
    const [review, setReview] = useState([])

    const changeTitle = "review-wanderlust";
    useEffect(() => {
      document.title = changeTitle;
    }, [changeTitle]);

    const handleDelete = id =>{
        const proceed = window.confirm('Are you want to delete?')
        console.log(id);
        if (proceed) {
            fetch(`https://wanderlust-server.vercel.app/myReviews/${id}`,{
                method:'DELETE',
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                if (data.deletedCount === 1) {
                    toast.success('Successfully deleted!')
                    const remaining = review.filter(odr => odr._id !== id);
                    setReview(remaining);
                  }
            })
        }
    }

    //fetch user specific review data
    useEffect(() => {
        fetch(`https://wanderlust-server.vercel.app/myReviews?email=${user?.email}`,{
            headers:{
                authorization:`Bearer ${localStorage.getItem('token')}`
            }
        })
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
                                <Link to={data?._id}>
                                <Button className='mr-2' color="warning"
                                    pill={true}>Edit</Button>
                                </Link>
                                <Button onClick={()=>handleDelete(data?._id)} color="failure"
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
<Toaster />
        </div>
    );
};

export default Reviews;