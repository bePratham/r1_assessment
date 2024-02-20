import React from 'react'

const CustomerDetails = ({person}) => {
  return (
    <div className='m-2 bg-white border rounded shadow p-3'>
        <h1 className='font-semibold'>Customer details</h1>
    <div className='flex justify-between'>
        <div className='text-gray-400 '>
        <p>Email</p>
        <p >First Name</p>
        <p>Last Name</p>
        </div>
            <div className='font-semibold w-2/3 overflow-hidden text-right'>
                <p >{person.senders.data[0].email}</p>
                <p>{person.senders.data[0].name.split(' ')[0]}</p>
                <p>{person.senders.data[0].name.split(' ')[1]}</p>
            </div>
    </div>
    <p className='font-semibold text-blue-500'>View more details</p>
    </div>
  )
}

export default CustomerDetails