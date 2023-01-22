import React from 'react';
import img1 from '../../../../assets/event/Nutritous food drive/WhatsApp Image 2021-09-08 at 10.07.39 PM (1).jpeg'
import img2 from '../../../../assets/event/Nutritous food drive/WhatsApp Image 2021-09-08 at 10.07.39 PM (2).jpeg'
import img3 from '../../../../assets/event/Nutritous food drive/WhatsApp Image 2021-09-08 at 10.07.39 PM (3).jpeg'
import img4 from '../../../../assets/event/Nutritous food drive/WhatsApp Image 2021-09-08 at 10.07.39 PM (4).jpeg'
import img5 from '../../../../assets/event/Nutritous food drive/WhatsApp Image 2021-09-08 at 10.07.39 PM.jpeg'
import img6 from '../../../../assets/event/Nutritous food drive/WhatsApp Image 2021-09-08 at 10.44.04 PM.jpeg'


const NutritousFood = () => {
    const PhotoData = [
        {
            id: 1,
            img: img1, 
        },
        {
            id: 2,
            img: img2, 
        },
        {
            id: 3,
            img: img3, 
        },
        {
            id: 4,
            img: img4, 
        },
        {
            id: 5,
            img: img5, 
        },
        {
            id: 6,
            img: img6, 
        },
    ];
    return (
        <>
        <section className='max-w-screen-xl mx-auto my-20'>
        <h1 className='text-4xl font-semibold'>Nutritous food drive</h1>
             <div className="gap-10 justify-center mt-10 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
                {PhotoData.map((photo) => (
                    <div className=" bg-base-100 shadow-xl">
                    <img className='w-80 h-72 rounded' src={photo.img} alt="" />
                </div>
                ))}
            </div>
        </section>
          
        </>
    );
};

export default NutritousFood;