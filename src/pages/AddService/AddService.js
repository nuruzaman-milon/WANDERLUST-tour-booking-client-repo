import { Button, Textarea } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';


const AddService = () => {

    const changeTitle = "Add-Service-wanderlust";
    useEffect(() => {
      document.title = changeTitle;
    }, [changeTitle]);

    const [service, setService] = useState({});

    const handleAddUser = event =>{
        event.preventDefault();
        console.log(service);

        fetch('http://localhost:5000/addService', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                toast.success('Successfully created a Service!')
                event.target.reset();
            }
        })
    }

    const handleInputBlur = event =>{
        const field = event.target.name;
        const value = event.target.value;
        const newUser = {...service}
        newUser[field] = value;
        setService(newUser);
    }
    // console.log(service);
    return (
        <div>
            <h2 className='text-3xl font-bold text-center mb-6'>Insert Service</h2>
            <form onSubmit={handleAddUser}>
                <input className='w-full mb-4 rounded-lg' onBlur={handleInputBlur} type="text" name='title' placeholder='title' required />
                <br />
                <input className='w-full mb-4 rounded-lg' onBlur={handleInputBlur} type="text" name='price' placeholder='price' required />
                <br />
                <input className='w-full mb-4 rounded-lg' onBlur={handleInputBlur} type="text" name="ratings" id="" placeholder='ratings' required />
                <br />
                <input className='w-full mb-4 rounded-lg' onBlur={handleInputBlur} type="text" name="img" id="" placeholder='image url' required />
                <br />
                <input className='w-full mb-4 rounded-lg' onBlur={handleInputBlur} type="text" name="tour-duration" id="" placeholder='tour-duration' required />
                <br />
                <div id="textarea">
                    <Textarea
                        id="comment"
                        onBlur={handleInputBlur}
                        placeholder="details"
                        name="details"
                        required={true}
                        rows={4}
                    />
                </div>
                <Button className='mt-6' type="submit">Add User</Button>
            </form>
            <Toaster />
        </div>
    );
};

export default AddService;