import React from 'react';
import img1 from '../../../../assets/event/Awards Ceremony/WhatsApp Image 2021-09-08 at 2.37.50 PM (1).jpeg'
import img2 from '../../../../assets/event/Awards Ceremony/WhatsApp Image 2021-09-08 at 2.37.50 PM (2).jpeg'
import img3 from '../../../../assets/event/Awards Ceremony/WhatsApp Image 2021-09-08 at 2.37.50 PM.jpeg'
import img4 from '../../../../assets/event/Awards Ceremony/WhatsApp Image 2021-09-08 at 2.37.51 PM.jpeg'
import img5 from '../../../../assets/event/Awards Ceremony/WhatsApp Image 2021-09-08 at 2.37.52 PM.jpeg'
import img6 from '../../../../assets/event/Awards Ceremony/WhatsApp Image 2021-09-08 at 2.37.53 PM.jpeg'
import img7 from '../../../../assets/event/Awards Ceremony/WhatsApp Image 2021-09-08 at 2.37.54 PM.jpeg'
import img8 from '../../../../assets/event/Awards Ceremony/WhatsApp Image 2021-09-08 at 2.37.55 PM.jpeg'
import img9 from '../../../../assets/event/Awards Ceremony/WhatsApp Image 2021-09-08 at 2.38.54 PM.jpeg'
import img10 from '../../../../assets/event/Awards Ceremony/WhatsApp Image 2021-09-08 at 2.38.55 PM (1).jpeg'
import img11 from '../../../../assets/event/Awards Ceremony/WhatsApp Image 2021-09-08 at 2.38.55 PM.jpeg'
import img12 from '../../../../assets/event/Awards Ceremony/WhatsApp Image 2021-09-08 at 2.38.56 PM.jpeg'
import img13 from '../../../../assets/event/Awards Ceremony/WhatsApp Image 2021-09-08 at 2.38.57 PM.jpeg'
import img14 from '../../../../assets/event/Awards Ceremony/WhatsApp Image 2021-09-08 at 2.38.58 PM.jpeg'
import img15 from '../../../../assets/event/Awards Ceremony/WhatsApp Image 2021-09-08 at 2.38.59 PM.jpeg'
import img16 from '../../../../assets/event/Awards Ceremony/WhatsApp Image 2021-09-08 at 2.39.00 PM (1).jpeg'
import img17 from '../../../../assets/event/Awards Ceremony/WhatsApp Image 2021-09-08 at 2.39.00 PM.jpeg'
import img18 from '../../../../assets/event/Awards Ceremony/WhatsApp Image 2021-09-08 at 2.39.01 PM.jpeg'
import img19 from '../../../../assets/event/Awards Ceremony/WhatsApp Image 2021-09-08 at 2.40.11 PM.jpeg'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

const AwardsCeremony = () => {
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
        {
            id: 7,
            img: img7, 
        },
        {
            id: 8,
            img: img8, 
        },      {
            id: 9,
            img: img9, 
        }, 
         {
            id: 10,
            img: img10, 
        },      {
            id: 11,
            img: img11, 
        },
        {
            id: 12,
            img: img12, 
        },
        {
            id: 13,
            img: img13, 
        },
        {
            id: 14,
            img: img14, 
        },
        {
            id: 15,
            img: img15, 
        },
        {
            id: 16,
            img: img16, 
        },
        {
            id: 17,
            img: img17, 
        },
        {
            id: 18,
            img: img18, 
        },      {
            id: 19,
            img: img19, 
        },  
       
    ];
    return (
        <>
        <section className='max-w-screen-xl mx-auto my-20'>
             <div className="gap-10 justify-center mt-10 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
                {PhotoData.map((photo) => (
                    <div className=" bg-base-100 shadow-xl">
                    <Zoom> 
                        <img className='w-80 h-72' src={photo.img} alt="" />
                    </Zoom>
                    </div>
                ))}
            </div>
        </section>
          
        </>
    );
};
export default AwardsCeremony;