import { Button, Label, TextInput } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="my-6 flex flex-col justify-center rounded-xl h-[100vh] bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80')] bg-no-repeat bg-cover">
            <h1 className='font-bold text-3xl text-center'>Register</h1>
            <form className="flex flex-col gap-4 w-[60%] mx-auto">
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="name"
                            value="Your Name"
                        />
                    </div>
                    <TextInput
                        id="name"
                        type="text"
                        placeholder="name"
                        required={true}
                        shadow={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email2"
                            value="Your Email"
                        />
                    </div>
                    <TextInput
                        id="email2"
                        type="email"
                        placeholder="name@gmail.com"
                        required={true}
                        shadow={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="imgLink"
                            value="Image Url"
                        />
                    </div>
                    <TextInput
                        id="imgLink"
                        type="text"
                        placeholder="image url"
                        required={true}
                        shadow={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="password2"
                            value="Your Password"
                        />
                    </div>
                    <TextInput
                        id="password2"
                        type="password"
                        placeholder="**********"
                        required={true}
                        shadow={true}
                    />
                </div>
                <div>
                    <p>Already have an account? <Link to='/login'><span className='text-blue-700 hover:underline underline-offset-2 font-semibold'>Login</span></Link></p>
                </div>
                <Button type="submit">
                    Register
                </Button>
            </form>
        </div>
    );
};

export default Register;