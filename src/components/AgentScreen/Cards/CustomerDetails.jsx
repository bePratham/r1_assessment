import React from 'react'

const CustomerDetails = ({person}) => {
  return (
    <div className='m-2 bg-white border rounded shadow p-3'>
        <h1 className='font-semibold'>Customer details</h1>
    <div className='flex justify-between'>
        <div className='text-gray-400 '>
        <p>Email</p>
        <p>First Name</p>
        <p>Last Name</p>
        </div>
            <div className='font-semibold text-right'>
                <p>{person.email}</p>
                <p>{person.firstName}</p>
                <p>{person.lastName}</p>
            </div>
    </div>
    <p className='font-semibold text-blue-500'>View more details</p>
    </div>
  )
}

export default CustomerDetails