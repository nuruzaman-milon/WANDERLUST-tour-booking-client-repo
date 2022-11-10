import { Button, Card, Label, Textarea, TextInput } from 'flowbite-react';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const ServiceDetails = () => {
    
    //dynamic title
        const changeTitle = "service-details";
        useEffect(() => {
          document.title = changeTitle;
        }, [changeTitle]);


    const [allReviews, setAllReviews] = useState([])
    const { _id, title, ratings, price, img, details } = useLoaderData();
    const { user } = useContext(AuthContext);

    const handleReview = e => {
        e.preventDefault();
        const form = e.target;
        const review = form.review.value;
        const name = form.name.value;

        const totalReview = {
            service_id: _id,
            service_title: title,
            review_name: name,
            review_text: review,
            user_email: user.email,
            user_img: user.photoURL
        }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                // authorization: `Bearer ${localStorage.getItem('genius-token')}`
            },
            body: JSON.stringify(totalReview)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Order placed successfully')
                    form.reset();
                }
            })
            .catch(er => console.error(er));
    }

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?service_id=${_id}`)
            .then(res => res.json())
            .then(data => setAllReviews(data));
    }, [_id])

    return (
        <div>
            <div className='my-6'>
                <img className='w-[80%] mx-auto h-96 rounded-xl' src={img} alt="" />
            </div>
            <h1 className='text-3xl font-bold text-center'>{title}</h1>
            <p><strong>Ratings: </strong> {ratings}</p>
            <p><strong>Price: </strong> <span className='font-bold text-2xl'>৳</span>{price}</p>
            <p><strong>Description:</strong> {details}</p>

            <div>
                <h1 className='text-3xl font-bold text-center mt-6'>Service Review </h1>
                {
                    allReviews.map(review => <Card className='my-4 bg-indigo-300'>
                        <div className='flex items-center'>
                            <img className='w-10 rounded-full mr-2' src={review.user_img} alt="" />
                            <p>{review.user_email}</p>
                        </div>

                        <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
                            Review Name: {review.review_name}
                        </h5>

                        <p className="mb-5 text-base text-gray-500 dark:text-gray-400 sm:text-lg">
                            Review Details: {review.review_text}
                        </p>
                    </Card>)
                }
            </div>

            <div>
                {
                    !user
                        ?
                        <p className='text-center'>Please <Link className='text-indigo-800 text-lg font-bold hover:underline underline-offset-2' to='/login'>login</Link> to add a review</p>
                        :
                        <>
                        <h1 className='text-3xl font-bold text-center mt-6'>Drop a Review</h1>
                        <form onSubmit={handleReview} className="flex flex-col gap-4">
                            <div>
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="name"
                                        value="Review Name"
                                    />
                                </div>
                                <TextInput
                                    id="name"
                                    type="text"
                                    name="name"
                                    placeholder="Review name"
                                    required={true}
                                />
                            </div>
                            <div id="textarea">
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="comment"
                                        value="Your Review"
                                    />
                                </div>
                                <Textarea
                                    id="comment"
                                    placeholder="Leave a review..."
                                    name="review"
                                    required={true}
                                    rows={4}
                                />
                            </div>
                            <Button type="submit">
                                Submit
                            </Button>
                        </form>
                        </>
                }

            </div>
        </div>
    );
};

export default ServiceDetails;