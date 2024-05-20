import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
const Testimonials = () => {
    const [testiMunial, setTestimonial] = useState([])
    useEffect(() => {
        fetch('/public/review.json')
            .then(res => res.json())
            .then(data => {
                setTestimonial(data)
            })
    }, [])
    return (
        <div>
            <div className='mt-5'>
                <p className='text-xl text-center text-[#D99904] italic'> ---What Our Clients Say---</p>
                <div className='border-b-2 w-64 mx-auto mt-5'></div>
                <h3 className='text-center text-[#151515] text-4xl my-3'>TESTIMONIALS</h3>
                <div className='border-b-2 w-64 mx-auto mb-3'></div>
            </div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">


                {
                    testiMunial.map((tes, idx) => <SwiperSlide key={idx}>
                        <div className='flex flex-col items-center gap-5 py-5'>
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={tes.rating}
                                readOnly
                            />
                            <p className='text-xl px-36 text-center'>{tes.details}</p>
                            <h3 className='text-[#CD9003] text-3xl font-medium '>{tes.name}</h3>
                        </div>
                    </SwiperSlide>
                    )
                }
            </Swiper>
        </div>
    );
};

export default Testimonials;