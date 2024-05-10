import React, { useEffect, useState } from 'react'
import SectionTitle from '../../../Components/SectionTitle/SectionTitle'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

import quto from '../../../assets/home/Group.png'

function Testomonial() {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className='my-20'>
            <SectionTitle heading={'What Our Clients Say'} subHeading={"TESTIMONIALS"}></SectionTitle>
            <div className='w-2/3 mx-auto '>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                    {
                        reviews.map(res => <SwiperSlide key={res._id}>
                            <div className="p-14  flex flex-col items-center	" >
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={res.rating}
                                    readOnly
                                />
                                <img src={quto} alt="" className='pt-4 pb-4'/>
                                <p className='text-justify'>{res.details}</p>
                                <h3 className='text-3xl pt-5 text-orange-400'>{res.name}</h3>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    )
}

export default Testomonial
