import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft, faArrowAltCircleRight, faEdit, faSearch, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'
import { useLoginMutation } from '../features/loginSlice'


const TransactionTable = () => {
    const navigate = useNavigate()

    const handleAddTransaction = () => {


        return (
            navigate("/addtransaction")
        )
    }
    return (
        <div>
            {/* profile */}

            <div className='text-end pr-5 p-1 font-medium text-[7px]'>

            <Link to={"/profile"}>hello hemant</Link>   

            </div>
            {/*addTransaction*/}

            <div className='border h-10 p-2 flex justify-between mb-2  font-medium text-[8px]'>
                Transactions
                <button onClick={handleAddTransaction} className='border  rounded  p-[2px] h-6 w-32 bg-[hsl(196,49%,32%)] text-white text-[6px]'>
                    + Add Transaction
                </button>
            </div>

            {/*search input*/}

            <div className=' p-5 pt-1 pb-2 '>
                <div className=' border  text-[8px] h-[251px] rounded '>
                    <div className='flex'>
                        <div className='flex'>
                            <input className='  border border-r-0  p-2 m-2 mr-0 h-4 text-[8px] rounded-l outline-none '
                                type="text"
                                placeholder='Search'
                            />
                            <div className='border rounded-r border-l-0 h-[14px] mt-2 pr-1 ' >
                                <FontAwesomeIcon icon={faSearch} />
                            </div>
                        </div>

                    </div>





                    <table className=' border border-l-0 border-r-0 border-b-0 min-w-full text-[7px] mt-2 '>

                        <thead className='bg-[rgb(237,242,243)] text-[hsl(196,49%,32%)] text-[7px] '>
                            <th className=' w-12'><input className='mt-1  h-3' type='checkbox' /> </th>
                            <th >Date</th>
                            <th >Amount</th>
                            <th >Type</th>
                            <th >Remark</th>
                            <th>

                            </th>

                        </thead>
                        <tbody className='text-center text-[7px]'>
                            <tr>
                                <td><input className='h-3' type="checkbox" /></td>
                                <td>06/12/24</td>
                                <td>36000</td>
                                <td>cash</td>
                                <td>Remark text</td>
                                <td >  <button className='border rounded-full w-5 h-5 mr-2  bg-blue-200'>
                                    <FontAwesomeIcon
                                        icon={faEdit}
                                    />
                                </button>
                                    <button className='border rounded-full w-5 h-5 bg-red-200 m'>
                                        <FontAwesomeIcon
                                            icon={faTrash}
                                        />
                                    </button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='border border-t-0 text-[8px] p-2 '>

                    <span> 1 of 10</span>

                    <select className='bg-sky-200 ml-[690px]' >

                        <option value="10">10</option>

                    </select>

                    <select className='bg-sky-200 mr-1 ml-1' >
                        <option value="10">10</option>
                    </select>
                    <span className='mr-1 font-medium'> of 10</span>
                    <button className='mr-1'><FontAwesomeIcon icon={faArrowAltCircleLeft} /></button>
                    <button><FontAwesomeIcon icon={faArrowAltCircleRight} /></button>
                </div>
            </div>
            <div className='border w-[855px] ml-[15px] '>
                <table className='w-[210px] h-7  '>
                    <thead>
                        <tr>
                            <th className='border border-b-0 border-l-0 border-t-0 text-[8px] font-normal'>Total Balance 1000</th>
                            <th className='border  border-b-0   border-t-0  text-[8px] font-normal'>Total Incom 1000</th>
                            <th className='border border-b-0  border-t-0 text-[8px] font-normal '>Total Expense 1000</th>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>



    )
}

export default TransactionTable
