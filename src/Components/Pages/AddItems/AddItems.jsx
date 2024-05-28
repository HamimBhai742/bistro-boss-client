import React from 'react';
import { useForm } from 'react-hook-form';
import { FaUtensils } from 'react-icons/fa';
import usePublic from '../../../hooks/usePublic';
import useSucre from '../../../hooks/useSucre';
import Swal from 'sweetalert2';

const API_KEY = import.meta.env.VITE_IMAGE_API_KEY
const Hosting = `https://api.imgbb.com/1/upload?key=${API_KEY}`

const AddItems = () => {
    const { register, handleSubmit ,reset} = useForm()
    const axiosPublic = usePublic()
    const axiosSucre = useSucre()
    const onSubmit = async (data) => {
        console.log(data)
        const imgeFile = { image: data.image[0] }
        const res = await axiosPublic.post(Hosting, imgeFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        if (res.data.success) {
            const menuItem = {
                name: data.name,
                recipe: data.recipe,
                category: data.category,
                price: parseFloat(data.price),
                image: res.data.data.display_url
            }
            const resMenu = await axiosSucre.post('/menu', menuItem)
            console.log(resMenu.data);
            if(resMenu.data.insertedId){
                reset()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your Item  Add To Menu",
                    showConfirmButton: false,
                    timer: 1000
                });  
            }
        }
        console.log(res.data.data.display_url);
    }

    return (
        <div>
            <div className='mt-5'>
                <p className='text-xl text-center text-[#D99904] italic'> ---What's new?---</p>
                <div className='border-b-2 w-96 mx-auto mt-5'></div>
                <h3 className='text-center text-[#151515] text-4xl my-3'>ADD AN ITEM</h3>
                <div className='border-b-2 w-96 mx-auto mb-3'></div>
            </div>
            <div className='bg-[#F3F3F3] p-12 w-[800px] mx-auto font-inter'>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text font-inter text-xl font-semibold">Recipe name*</span>
                        </div>
                        <input {...register("name")} type="text" placeholder="Recipe name" className="input  bg-white w-full " />
                    </label>
                    <div className='flex gap-6'>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-inter text-xl font-semibold">Category*</span>
                            </div>
                            <select defaultValue="Disabled" {...register("category")} className="select bg-white text-[#A1A1A1]">
                                <option disabled selected value="Disabled" className='text-[#A1A1A1]'>Select Your Category</option>
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
                            <input {...register("price")} type="text" placeholder="Price" className="input bg-white w-full " />
                        </label>
                    </div>
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text font-inter text-xl font-semibold">Recipe Details*</span>
                        </div>
                        <textarea {...register("recipe")} className="textarea bg-white w-full h-28" placeholder="Recipe Details"></textarea>
                    </label>
                    <div className='my-5'>
                        <input {...register("image")} type="file" className="file-input w-full max-w-xs" />
                    </div>
                    <button className='bgbtn flex p-3 text-white gap-3 text-xl font-bold items-center'>Add Item <span><FaUtensils></FaUtensils></span></button>
                </form>
            </div>
        </div>
    );
};

export default AddItems;