import React from 'react'
import { fetchOrders } from '../../utils/Fetch'
import Order from '../../components/orders'

const Page = async () => {
  const data = await fetchOrders()
  console.log(data)
  return (
    data.status === 500 ? (
      <div className='text-md text-gray-500 text-center content-center min-h-[50vh] p-5'>
        Something went wrong! Please try again later.
      </div>
    ) : (
      Object.keys(data.res).length !== 0 ?
        <Order orders={data.res} />
        : <div><div className='text-md text-gray-500 text-center content-center min-h-[50vh] p-5'>
          There aren&apos;t any orders!
        </div><Order /></div>
    )
  )
}

export default Page