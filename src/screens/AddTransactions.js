import React from 'react'
import { Formik, Form, Field } from 'formik'
import * as yup from 'yup'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
const validateSchma = yup.object().shape({
  amount: yup.number().required(),

})
const AddTransactions = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div className='p-3 text-[8px] font-medium text-end '>

        <Link to={"/profile"}> Hello Hemant</Link>

      </div>
      <div className='border flex justify-between'>
        <div className='p-3 text-[8px] font-medium '>
          Add Transaction
        </div>
        <div>

        </div>
      </div>


      <div className='flex justify-center gap-2'>
        <Formik
          initialValues={{ amount: "", type: "" }}
          validationSchema={validateSchma}
          onSubmit={(action, value) => {
            navigate("/trasaction")
            console.log(value)
          }}
        >
          {(params) => (

            <Form >
              <div className='pt-10 text-[8px]'>

                <label className=''>Amount</label>

                <div className='mb-4'>

                  <Field
                    type="text"
                    placeholder="Amount"
                    name="amount"
                    className="border w-56 h-7"
                  />

                </div>

                <label className='mt-9'>Type</label>

                <div className='mb-4'>
                  <select
                    type="text"
                    placeholder="Select Type"
                    name="type"
                    className="border w-56 h-7"
                  > <option value="selectType"> Select Type</option> </select>
                </div>

                <label>Remark</label>
                <div>
                  <Field
                    type="text"
                    placeholder="Write here"
                    name="type"
                    className="border w-56 h-16"
                  />
                </div>
                <div className='pt-4 pl-2'>
                  <button type='sumbit' disabled={params.isSubmitting} className='border w-48 bg-[hsl(196,49%,32%)] text-white'>Add Transaction</button>
                </div>
                <div className='pt-3 pl-[65px] text-sky-600 font-medium '>
                  <Link to={"/trasaction"}>Cancel</Link>
                </div>

              </div>

            </Form>
          )}

        </Formik>
      </div>
    </div>
  )
}

export default AddTransactions
