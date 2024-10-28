"use client"
import React, { useEffect, useState } from 'react'
import { fetchOrders } from '../../utils/Fetch'
import Order from '../../components/orders'
import { useRouter } from 'next/navigation'

const Page = () => {
  const router = useRouter();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      router.push("/login");
    } else {
      fetchOrders().then((data) => {
        setData(data);
        setLoading(false);
      });
    }
  }, [router]);

  if (loading) {
    return <div>Loading...</div>;
  }

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
        </div></div>
    )
  );
}

export default Page