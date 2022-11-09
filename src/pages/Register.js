import { GoogleAuthProvider } from 'firebase/auth';
import { Button, Label, TextInput } from 'flowbite-react';
import React, { useContext, useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const Register = () => {
    const { createUser, providerLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const googleProvider = new GoogleAuthProvider();

    //manual register
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.url.value;
        const password = form.password.value;
        // console.log(name, email, photoURL, password);
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate('/')
                // handleUpdateProfile(name, photoURL);
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // setError(errorMessage);
            })
    }

    //google provider login
    const hangleGoogleLogin = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate("/");
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // setError(errorMessage);
            });
    }
    return (
        <div className="my-6 flex flex-col justify-center rounded-xl h-[100vh] bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80')] bg-no-repeat bg-cover">
            <h1 className='font-bold text-3xl text-center'>Register</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-[60%] mx-auto">
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
                        name="name"
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
                        name="email"
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
                        name="url"
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
                        name="password"
                        placeholder="**********"
                        required={true}
                        shadow={true}
                    />
                </div>
                <div>
                    <p>Already have an account? <Link to='/login'><span className='text-blue-700 hover:underline underline-offset-2 font-semibold'>Login</span></Link></p>
                </div>
                <Button type="submit" gradientDuoTone="purpleToBlue">
                    Register
                </Button>
            </form>
            <div className='w-[60%] mx-auto mt-4'>
                <Button
                    outline={true}
                    onClick={hangleGoogleLogin}
                    gradientDuoTone="purpleToBlue"
                >
                    <p className='flex items-center'><FaGoogle className='text-red-500 mr-1 text-2xl' /> Sign in with Google</p>
                </Button>

            </div>
        </div>
    );
};

export default Register;