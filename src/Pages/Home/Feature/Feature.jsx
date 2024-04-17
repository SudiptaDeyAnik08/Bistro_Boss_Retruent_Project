import React from 'react'
import SectionTitle from '../../../Components/SectionTitle/SectionTitle'
import feturedImage from '../../../assets/home/featured.jpg'

import './Feature.css'


function Feature() {
    return (

        <div className='featureItem bg-fixed text-white '>
            <div id='ftbg'>
                <SectionTitle heading={"Check it out"} subHeading={"FROM OUR MENU"}></SectionTitle>
                <div className=' md:flex justify-center items-center pb-[130px] ps-[100px]'>
                    <div className='pe-[68px]'>
                        <img  src={feturedImage} alt=""/>
                    </div>
                    <div>
                        <p>March 20, 2023</p>
                        <p>WHERE CAN I GET SOME?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <button className="btn btn-outline btn-primary mt-5">Order Now</button>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Feature
