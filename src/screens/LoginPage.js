import React from 'react';
import { Form, Field, Formik, ErrorMessage } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { useLoginMutation } from '../features/loginSlice';
import { toast, ToastContainer } from 'react-toastify';


const validationSchema = yup.object().shape({
    email: yup.string().required('Email is required'),
    password: yup.string().required('Password is required'),
});

const LoginPage = () => {
    const navigate = useNavigate();
    const [login, { isLoading }] = useLoginMutation();
   
    return (
        <div className='flex justify-center bg-[hsl(300,14%,99%)] pt-12'>
            <ToastContainer />
            <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={validationSchema}
                onSubmit={async (values, actions) => {
                    const { email, password } = values
                    try {
                        const response = await login({ email, password }).unwrap();
                        console.log(response)
                        const token = response.data.token;
                        console.log(token)
                        localStorage.setItem('token', token);
                        const refreshtoken =response.data. refreshToken
                        localStorage.setItem(' refreshToken',refreshtoken);
                       toast.success('Login successful!');
                        navigate('/trasaction');
                    } catch (error) {
                        toast.error('Failed to login. Please check your credentials.');
                        actions.setSubmitting(false);
                    }
                }}
            >
                {({ isSubmitting }) => (
                    <Form className='cursor-pointer w-[500px] h-[300px]'>
                        <p className='text-center font-normal text-2xl pr-10'>Budget Manager</p>
                        <p className='pt-10 font-medium text-[8px] pl-44'>Login</p>
                        <p className='text-[8px] pl-44 mb-3 opacity-40'>Login with registered email and password</p>
                        <label className='text-[8px] pl-44'>Email</label>
                        <div className='pl-44 mb-1'>
                            <Field
                                type='email'
                                name='email'
                                placeholder='Email'
                                className='border rounded border-black border-opacity-60 p-2 w-64 h-7 placeholder:p-1 text-[8px] outline-none focus:border-blue-500'
                            />
                            <p className='text-red-500 text-[8px]'>
                                <ErrorMessage name='email' />
                            </p>
                        </div>
                        <label className='text-[8px] pl-44'>Password</label>
                        <div className='pl-44'>
                            <Field
                                type='password'
                                name='password'
                                placeholder='Password'
                                className='border rounded border-black border-opacity-60 p-2 w-64 h-7 placeholder:p-1 text-[8px] outline-none focus:border-blue-500'
                            />
                            <p className='text-red-500 text-[8px]'>
                                <ErrorMessage name='password' />
                            </p>
                        </div>
                        <br />
                        <div className='pl-44'>
                            <button
                                type='submit'
                                disabled={isSubmitting || isLoading}
                                className='border rounded w-64 h-6 text-[8px] bg-[hsl(196,49%,32%)] text-white outline-none'
                            >
                                Login
                            </button>
                        </div>
                        <p className='text-[7px] pl-64 mt-3 opacity-70'>Don't have an account yet?</p>
                        <Link className='pl-[206px] font-medium text-[8px]' to='/ragistration'>
                            <u>Register Now</u>
                        </Link>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default LoginPage;
