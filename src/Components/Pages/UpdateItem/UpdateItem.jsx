import React from 'react';
import Swal from 'sweetalert2';
import usePublic from '../../../hooks/usePublic';
import useSucre from '../../../hooks/useSucre';
import { useForm } from 'react-hook-form';
import { FaUtensils } from 'react-icons/fa';
import useMenu from '../../../hooks/useMenu';
import { useParams } from 'react-router-dom';


// const API_KEY = import.meta.env.VITE_IMAGE_API_KEY
// const Hosting = `https://api.imgbb.com/1/upload?key=${API_KEY}`

const UpdateItem = () => {
    const { register, handleSubmit } = useForm()
    // const axiosPublic = usePublic()
    const axiosSucre = useSucre()
    const { id } = useParams()
    console.log(id);
    const [menus, refetch] = useMenu()
    const updateItem = menus.find(m => m._id === id)
    console.log(updateItem);
    console.log(menus);
    const onSubmit = async (data) => {

        // const imgeFile = { image: data.image[0] }
        // const res = await axiosPublic.post(Hosting, imgeFile, {
        //     headers: {
        //         'content-type': 'multipart/form-data'
        //     }
        // })
        const menuItem = {
            name: data.name,
            recipe: data.recipe,
            category: data.category,
            price: parseFloat(data.price)
        }
        console.log(menuItem);
        console.log(id);
        const resMenu = await axiosSucre.patch(`/menu/${id}`, menuItem)
        console.log(resMenu.data);
        if (resMenu.data.modifiedCount > 0) {
            refetch()
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your Item  Update From Menu",
                showConfirmButton: false,
                timer: 1000
            });  
        }
        // const resMenu = await axiosSucre.post('/menu', menuItem)
        // console.log(resMenu.data);
        // if (resMenu.data.insertedId) {
        //     reset()
        //     Swal.fire({
        //         position: "top-end",
        //         icon: "success",
        //         title: "Your Item  Add To Menu",
        //         showConfirmButton: false,
        //         timer: 1000
        //     });
        // }

    }
    return (
        <div>
            <h3 className='text-4xl font-inter text-center my-5'>UPDATE ITEM</h3>

            <div className='bg-[#F3F3F3] p-12 w-[800px] mx-auto font-inter'>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text font-inter text-xl font-semibold">Recipe name*</span>
                        </div>
                        <input defaultValue={updateItem?.name} {...register("name")} type="text" placeholder="Recipe name" className="input  bg-white w-full " />
                    </label>
                    <div className='flex gap-6'>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-inter text-xl font-semibold">Category*</span>
                            </div>
                            <select defaultValue={updateItem?.category} {...register("category")} className="select bg-white">
                                <option disabled selected value="Disabled">Select Your Category</option>
                                <option className='text-black' value="salad">Salad</option>
                                <option className='text-black' value="pizza">Pizza</option>
                                <option className='text-black' value="soup">Soups</option>
                                <option className='text-black' value="dessert">Desserts</option>
                                <option className='text-black' value="drinks">Drinks</option>
                            </select>
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-inter text-xl font-semibold">Price*</span>
                            </div>
                            <input defaultValue={updateItem?.price} {...register("price")} type="text" placeholder="Price" className="input bg-white w-full " />
                        </label>
                    </div>
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text font-inter text-xl font-semibold">Recipe Details*</span>
                        </div>
                        <textarea defaultValue={updateItem?.recipe} {...register("recipe")} className="textarea bg-white w-full h-28" placeholder="Recipe Details"></textarea>
                    </label>
                    {/* <div className='my-5'>
                        <input {...register("image")} type="file" className="file-input w-full max-w-xs" />
                    </div> */}
                    <div className='flex justify-center mt-5'>
                        <button className='bgbtn flex p-3 text-white gap-3 text-xl font-bold items-center'> Update Recipe Details <span><FaUtensils></FaUtensils></span></button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateItem;