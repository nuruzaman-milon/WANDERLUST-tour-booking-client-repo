import { Button, Label, Textarea } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';

const UpdateReview = () => {
    const changeTitle = "Update-Review-wanderlust";
    useEffect(() => {
      document.title = changeTitle;
    }, [changeTitle]);

    const reviewData = useLoaderData();
    const navigate = useNavigate();
    const [userReview, setUserReview] = useState(reviewData);

    const handleUpdateReview = event => {
        event.preventDefault();
        console.log(userReview);
        fetch(`https://wanderlust-server.vercel.app/reviews/${reviewData._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userReview)
        })
        .then(res => res.json())
        .then(data => {
            navigate("/myReviews");
            if (data.modifiedCount > 0){
                toast.success('Successfully updated!')
            }

        })
    }

    const handleInputChange = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newUser = { ...userReview }
        newUser[field] = value;
        setUserReview(newUser);
    }

    return (
        <div className='mb-4'>
            <h2 className='text-3xl font-bold text-center mb-6'>Update Review</h2>
            <form onSubmit={handleUpdateReview}>
                <Label
                    htmlFor="comment"
                    value="Service Title"
                />
                <br />
                <input className='w-full mb-3 rounded-lg' onChange={handleInputChange} defaultValue={reviewData.service_title} readOnly type="text" name='service_title' required />
                <br />
                <Label
                    htmlFor="comment"
                    value="Review Name"
                />
                <input className='w-full mb-3 rounded-lg' onChange={handleInputChange} type="text" defaultValue={reviewData.review_name} name='review_name' required />
                <br />

                <div id="textarea">
                    <div className="mb-2 block">
                        <Label
                            htmlFor="comment"
                            value="Review Text"
                        />
                    </div>
                    <Textarea
                        id="comment"
                        onChange={handleInputChange}
                        defaultValue={reviewData.review_text}
                        name="review_text"
                        required={true}
                        rows={4}
                    />
                </div>

                <div className='flex justify-center'>
                    <Button className='mt-4' type="submit">Update Review</Button>
                </div>
            </form>
            <Toaster />
        </div>
    );
};

export default UpdateReview;