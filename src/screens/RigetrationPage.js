import React from 'react';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import { useRegisterMutation } from '../features/loginSlice';

const validationSchema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().required('Password is required'),
    confirmpassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required('Confirm password is required'),
});

const RegistrationPage = () => {
    const navigate = useNavigate();
    const [register, { isLoading }] = useRegisterMutation();

    return (
        <div className='flex justify-center bg-[hsl(300,14%,99%)] pt-6'>
            <Formik
                initialValues={{ name: '', email: '', password: '', confirmpassword: '' }}
                validationSchema={validationSchema}
                onSubmit={async (values, actions) => {
                    const { setSubmitting, resetForm } = actions;
                    const { name, email, password, confirmpassword } = values;

                    try {
                        const res = await register({ name, email, password, confirmPassword: confirmpassword }).unwrap();
                        const { status, message } = res;
                        if (status) {
                            toast(message);

                            setSubmitting(false);
                            navigate("/");


                        } else {
                            toast(message);


                        }
                    } catch (error) {
                        console.error(error);
                        toast.error("Registration failed");
                        setSubmitting(false);

                    }
                    resetForm()
                }}
            >
                {({ isSubmitting }) => (
                    <Form className='cursor-pointer w-[340px] h-[340px]'>
                        <p className='text-center font-medium text-2xl'>Budget Manager</p>
                        <p className='pt-6 font-medium text-xm pl-28'>Register</p>
                        <p className='mb-6 pl-28 text-[8px]'>Register to budget manager using email and <br />password</p>
                        <div className='pl-28 flex flex-col justify-evenly text-[8px]'>
                            <label>Name</label>
                            <div>
                                <Field
                                    type='text'
                                    name='name'
                                    placeholder='Enter Name'
                                    className='border rounded border-1 border-black w-72 h-8 placeholder:p-3'
                                />
                                <p className='text=[8px] text-red-500'><ErrorMessage name='name' /></p>
                            </div>

                            <label className='pt-4'>Email</label>
                            <div>
                                <Field
                                    type='email'
                                    name='email'
                                    placeholder='Enter email'
                                    className='border border-1 border-black rounded w-72 h-8 placeholder:p-3'
                                />
                                <p className='text=[8px] text-red-500'><ErrorMessage name='email' /></p>
                            </div>

                            <label className='pt-4'>Password</label>
                            <div>
                                <Field
                                    type='password'
                                    name='password'
                                    placeholder='Enter password'
                                    className='border border-1 border-black rounded w-72 h-8 placeholder:p-3'
                                />
                                <p className='text=[8px] text-red-500'><ErrorMessage name='password' /></p>
                            </div>

                            <label className='pt-4'>Confirm Password</label>
                            <div>
                                <Field
                                    type='password'
                                    name='confirmpassword'
                                    placeholder='Re-enter password'
                                    className='border border-1 border-black rounded w-72 h-8 placeholder:p-3'
                                />
                                <p className='text=[8px] text-red-500'><ErrorMessage name='confirmpassword' /></p>
                            </div>
                            <br />
                            <div>
                                <button
                                    type='submit'
                                    disabled={isSubmitting || isLoading}
                                    className='border border-1 border-black rounded w-72 h-8 text-white bg-[hsl(197,58%,36%)]'
                                >
                                    Register
                                </button>
                            </div>

                            <p className='pt-6 pl-[70px] text-slate-500'>Already have an Account</p>
                            <Link className='font-medium text-xs pl-32 pt-2' to={'/'}><u>Login</u></Link>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default RegistrationPage;
