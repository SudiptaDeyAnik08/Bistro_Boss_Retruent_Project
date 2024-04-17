import React from 'react'
import SectionTitle from '../../../Components/SectionTitle/SectionTitle'
import RecomendationCard from './RecomendationCard/RecomendationCard'
import image from '../../../assets/home/slide1.jpg'

function ChefReco() {
    const card1 = {
        title:"Caeser Salad",
        des:"Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.",
        img: image
    }
    return (
        <div className='mt-10 mb-10'>
            <div className='text-center p-10 text-white bg-black'>
                <h1 className='text-6xl'>Call Us: +88 0192345678910</h1>
            </div>

            <div>
                <SectionTitle heading={"Should Try"} subHeading={"CHEF RECOMMENDS"}></SectionTitle>

                <div className="flex justify-evenly ">
                <RecomendationCard card={card1}></RecomendationCard>
                <RecomendationCard card={card1}></RecomendationCard>
                <RecomendationCard card={card1}></RecomendationCard>
            
                </div>
            </div>
        </div>
    )
}

export default ChefReco
