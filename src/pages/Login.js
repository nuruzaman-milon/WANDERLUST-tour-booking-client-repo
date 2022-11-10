import { GoogleAuthProvider } from 'firebase/auth';
import { Button, Label, TextInput } from 'flowbite-react';
import React, { useContext, useEffect } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const Login = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';
    //dynamic title
    const changeTitle = "login-wanderlust";
    useEffect(() => {
        document.title = changeTitle;
    }, [changeTitle]);

    const googleProvider = new GoogleAuthProvider();
    const { providerLogin, signIn } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);

                //get jwt token
                const currentUser = {
                    email: user.email,
                }
                fetch('https://wanderlust-server.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        localStorage.setItem('token', data.token);
                        // form.reset();
                        Navigate(from, { replace: true });
                    })


            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // setError(errorMessage);
            })
    }
    const hangleGoogleLogin = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                // console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // setError(errorMessage);
            });
    }

    return (
        <div className="my-6 flex flex-col justify-center rounded-xl h-[100vh] bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80')] bg-no-repeat bg-cover">
            <h1 className='font-bold text-3xl text-center'>Login</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-[60%] mx-auto">
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

                {/* <div className="flex items-center gap-2">
                    <Checkbox id="agree" />
                    <Label htmlFor="agree">
                        I agree with the{' '}
                        <a
                            href="/forms"
                            className="text-blue-600 hover:underline dark:text-blue-500"
                        >
                            terms and conditions
                        </a>
                    </Label>
                </div> */}
                <div>
                    <p>Don't have an account? <Link to='/register'><span className='text-blue-700 hover:underline underline-offset-2 font-semibold'>Register</span></Link></p>
                </div>
                <Button type="submit" gradientDuoTone="purpleToBlue">
                    Login
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

export default Login;