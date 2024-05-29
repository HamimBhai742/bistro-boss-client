import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useSucre from '../../../hooks/useSucre';

const PaymentHistory = () => {
    const { user } = useAuth()
    const axiosSucre = useSucre()
    const { data: paymentHistory } = useQuery({
        queryKey: ['payment', user?.email],
        queryFn: async () => {
            const res = await axiosSucre.get(`/payment/${user.email}`)
            return res.data
        }
    })
    console.log(paymentHistory);
    return (
        <div>
            <div className='mt-5'>
                <p className='text-xl text-center text-[#D99904] italic'> ---At a Glance!---</p>
                <div className='border-b-2 w-96 mx-auto mt-5'></div>
                <h3 className='text-center text-[#151515] text-4xl my-3'>PAYMENT HISTORY</h3>
                <div className='border-b-2 w-96 mx-auto mb-3'></div>
            </div>
            <div className="overflow-x-auto mt-5 font-inter">
                <table className="table">
                    {/* head */}
                    <thead className='bg-[#D1A054] rounded-3xl text-white'>
                        <tr>
                            <th>Sl. No.</th>
                            <th>EMAIL</th>
                            <th>TRANSACTION ID</th>
                            <th>TOTAL PRICE</th>
                            <th>PAYENT DATE</th>
                            <th>STATUS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            paymentHistory?.map((menu, idx) => <tr className='text-[#737373]' key={idx}>
                                <th>{idx + 1}</th>
                                <td>{menu.email}</td>
                                <td>{menu?.transactionId}</td>
                                <td>${menu?.price}</td>
                                <td>{menu?.date}</td>
                                <td>{menu?.status}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;