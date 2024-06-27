import { Field, Form, Formik } from 'formik'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Updatepassword = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div className='p-3 text-[6px] font-medium text-end '>

                <Link to={"/profile"}> Hello Hemant</Link>

            </div>

            <div className='border text-[8px] pl-4 h-7 pt-1 font-medium'>
                Update Profile
            </div>

            <div className='flex justify-center '>
                <Formik
                    initialValues={{ password: "", confirmpassword: "" }}
                    onSubmit={(action, value) => (
                        navigate("/trasaction")
                    )
                    } >
                    {() => (


                        <div className='pt-12'>
                            <div className='flex text' >
                                <div>
                                    <Link className='text-[6px] pt-5 focus:border-black border-b ' to={"/profile"}>Update Profile
                                    </Link>
                                </div>
                                <div>
                                    <Link className=" text-[6px] pt-9 pl-2 focus: border-black border-b " to={"/Updatepassword"}>Update password</Link>
                                </div>
                            </div>

                            <Form>
                                <label className='text-[6px]'>New Password</label>
                                <div>
                                    <Field type="text"
                                        name="password"
                                        placeholder="Enter new password"
                                        className="border text-[8px] placeholder:text-[6px] pl-1 w-44 h-5 rounded"
                                    />
                                </div>

                                <label className='text-[6px]'>Confirm New Password</label>

                                <div>
                                    <Field type="password"
                                        name="confirmpassword"
                                        placeholder="Re-enter new password"
                                        className="border text-[8px] placeholder:text-[6px] pl-1 w-44 h-5 rounded"
                                    />

                                </div>
                                <div className='pt-5  '>
                                    <button type='sumbit' className='border text-[8px] w-44 rounded  text-white  bg-[hsl(197,58%,36%)] '>Update Password</button>
                                </div>

                                <div className='pt-3 pl-[50px] text-sky-600 font-medium text-[8px] '>
                                    <Link to={"/trasaction"}>Cancel</Link>
                                </div>





                            </Form>
                        </div>
                    )}
                </Formik>
            </div>


        </div >
    )
}

export default Updatepassword
