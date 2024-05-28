import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { FaUsers } from 'react-icons/fa6';
import { RiDeleteBin6Line } from 'react-icons/ri';
import Swal from 'sweetalert2';
import useSucre from '../../../hooks/useSucre';

const AllUsers = () => {
    const axiosSucre = useSucre()
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSucre.get('/users')
            return res.data
        }
    })

    const handelUserMakeAdmin = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to delete this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.patch(`http://localhost:5000/users/admin/${id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.modifiedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your item has been deleted.",
                                icon: "success"
                            });
                            refetch()
                        }
                    })
            }
        });
    }
    const handelUserDeleteBtn = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to delete this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:5000/users/${id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your item has been deleted.",
                                icon: "success"
                            });
                            refetch()
                        }
                    })
            }
        });
    }
    return (
        <div>
            <div>
                <div className='mt-5'>
                    <p className='text-xl text-center text-[#D99904] italic'> ---How many??---</p>
                    <div className='border-b-2 w-96 mx-auto mt-5'></div>
                    <h3 className='text-center text-[#151515] text-4xl my-3'>MANAGE ALL USERS</h3>
                    <div className='border-b-2 w-96 mx-auto mb-3'></div>
                </div>
                <div className='bg-[#FFF] px-12 mt-12'>
                    <div className='font-cinzel flex justify-between'>
                        <h3 className='font-bold text-3xl'>Total orders: <span>{users.length}</span></h3>
                    </div>
                    <div className="overflow-x-auto mt-5 font-inter">
                        <table className="table">
                            {/* head */}
                            <thead className='bg-[#D1A054] rounded-3xl text-white'>
                                <tr>
                                    <th>Sl. No.</th>
                                    <th>NAME</th>
                                    <th>EMAIL</th>
                                    <th>ROLE</th>
                                    <th>ACTION</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    users.map((user, idx) => <tr className='text-[#737373] font-inter' key={idx}>
                                        <th className='text-[#151515]'>{idx + 1}</th>
                                        <td>{user?.name}</td>
                                        <td>{user?.email}</td>
                                        <td><button onClick={() => handelUserMakeAdmin(user._id)} >{user.role === 'admin' ? <span className=''>Admin</span> : <div className='text-xl bg-[#D1A054] p-3 rounded-lg text-white'> <FaUsers></FaUsers></div>}</button></td>
                                        <td><button onClick={() => handelUserDeleteBtn(user._id)} className='bg-[#B91C1C] p-3 w-12 rounded-lg text-white text-xl'><RiDeleteBin6Line></RiDeleteBin6Line></button></td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;