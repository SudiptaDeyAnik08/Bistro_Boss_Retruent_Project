import React from 'react'

function SectionTitle({ heading, subHeading }) {

    return (
        <div className="text-center mx-auto md:w-3/12">
          
                <p className="text-yellow-600 text-xl py-4">---{heading}---</p>
                <h2 className="text-4xl antialiased hover:subpixel-antialiased border-y-4 p-4	mb-4">{subHeading}</h2>
          


        </div>
    )
}

export default SectionTitle
