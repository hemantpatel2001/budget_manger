import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Formik, Field } from 'formik';
import { useRefreshtokenMutation } from '../features/loginSlice';
import { toast } from 'react-toastify';

const Profile = () => {
  const navigate = useNavigate();

  const [refreshToken,{ isLoading, isError }] = useRefreshtokenMutation();
 
  return (
    <div>
      <div className='p-3 text-[6px] font-medium text-end'>
        <Link to={"/profile"}>Hello Hemant</Link>
      </div>

      <div className='border text-[8px] pl-4 h-7 pt-1 font-medium'>
        Update Profile
      </div>

      <div className='flex justify-center'>
        <Formik
          initialValues={{ name: "", email: "" }}
          onSubmit={async (values, actions) => {
          
            try {
              await refreshToken({refreshToken:localStorage.getItem(' refreshToken')}).unwrap();
              navigate("/trasaction");
              toast.success('Profile updated successfully!');
            } catch (error) {
              console.error('Failed to update profile:', error);
              toast.error('Failed to update profile.');
            } finally {
              actions.setSubmitting(false);
            }
          }}
        >
          {({ isSubmitting }) => (
            <div className='pt-12'>
              <div className='flex'>
                <div>
                  <Link className='text-[6px] pt-5 focus:border-black border-b' to={"/profile"}>
                    Update Profile
                  </Link>
                </div>
                <div>
                  <Link className="text-[6px] pt-9 pl-2" to={"/Updatepassword"}>
                    Update password
                  </Link>
                </div>
              </div>

              <Form>
                <label className='text-[6px]'>Name</label>
                <div>
                  <Field
                    type="text"
                    name="name"
                    placeholder="hemant patel"
                    className="border text-[8px] placeholder:text-[6px] pl-1 w-44 h-5 rounded"
                  />
                </div>

                <label className='text-[6px]'>Email</label>
                <div>
                  <Field
                    type="email"
                    name="email"
                    placeholder="hp264975@gmail.com"
                    className="border text-[8px] placeholder:text-[6px] pl-1 w-44 h-5 rounded"
                  />
                </div>

                <div className='pt-5'>
                  <button
                    type='submit'
                    disabled={isSubmitting || isLoading}
                    className='border text-[8px] w-44 rounded text-white bg-[hsl(197,58%,36%)]'
                  >
                    Update Profile
                  </button>
                </div>

                <div className='pt-3 pl-[58px] text-sky-600 font-medium text-[8px]'>
                  <Link to={"/transaction"}>Cancel</Link>
                </div>
              </Form>
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Profile;
