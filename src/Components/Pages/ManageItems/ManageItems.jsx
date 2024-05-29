import { RiDeleteBin6Line } from "react-icons/ri";
import useMenu from "../../../hooks/useMenu";
import { FaRegEdit } from "react-icons/fa";
import useSucre from "../../../hooks/useSucre";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ManageItems = () => {
    const [menus, refetch] = useMenu()
    const axiosSucre = useSucre()
    const navigate = useNavigate()
    const handelDeleteUser = async (id) => {
        console.log('object');
        Swal.fire({
            title: "Are you sure?",
            text: "You want to delete this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSucre.delete(`/menu/${id}`)
                console.log(res.data);
                if (res.data.deletedCount > 0) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your item has been deleted.",
                        icon: "success"
                    });
                    refetch()
                }
            }
        });

        // console.log(res.data);
        // if (res.data.deletedCount > 0) {
        //     refetch()
        // }
    }
    const handelUpdateUser = (id) => {
        navigate(`/dasboard/manage-items/update-items/${id}`)
    }
    return (
        <div>
            <div className='mt-5'>
                <p className='text-xl text-center text-[#D99904] italic'> ---Hurry Up!---</p>
                <div className='border-b-2 w-96 mx-auto mt-5'></div>
                <h3 className='text-center text-[#151515] text-4xl my-3'>MANAGE ALL ITEMS</h3>
                <div className='border-b-2 w-96 mx-auto mb-3'></div>
            </div>
            <div className="mt-12 px-8">
                <div className='font-cinzel flex justify-between'>
                    <h3 className='font-bold text-3xl'>Total orders: <span>{menus.length}</span></h3>
                </div>
                <div className="overflow-x-auto mt-5 font-inter">
                    <table className="table">
                        {/* head */}
                        <thead className='bg-[#D1A054] rounded-3xl text-white'>
                            <tr>
                                <th>Sl. No.</th>
                                <th>ITEM IMAGE</th>
                                <th>ITEM NAME</th>
                                <th>PRICE</th>
                                <th>UPDATE</th>
                                <th>DELETE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                menus.map((menu, idx) => <tr className='text-[#737373]' key={idx}>
                                    <th>{idx + 1}</th>
                                    <td><img className='w-16 rounded-lg h-14' src={menu?.image} alt="" /></td>
                                    <td>{menu?.name}</td>
                                    <td>${menu?.price}</td>
                                    <td><button onClick={() => handelUpdateUser(menu._id)} className='bg-[#D1A054] pl-4 py-3 w-12 rounded-lg text-white text-xl text-center'><FaRegEdit></FaRegEdit></button></td>
                                    <td><button onClick={() => handelDeleteUser(menu._id)} className='bg-[#B91C1C] p-3 w-12 rounded-lg text-white text-xl'><RiDeleteBin6Line></RiDeleteBin6Line></button></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageItems;