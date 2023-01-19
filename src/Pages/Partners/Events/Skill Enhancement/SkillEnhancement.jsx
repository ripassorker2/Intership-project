import React from 'react';
import img1 from '../../../../assets/event/Skill Enhancement programme-Orphanage/WhatsApp Image 2021-09-08 at 10.13.05 PM (1).jpeg'
import img2 from '../../../../assets/event/Skill Enhancement programme-Orphanage/WhatsApp Image 2021-09-08 at 10.13.05 PM (2).jpeg'
import img3 from '../../../../assets/event/Skill Enhancement programme-Orphanage/WhatsApp Image 2021-09-08 at 10.13.05 PM (3).jpeg'
import img4 from '../../../../assets/event/Skill Enhancement programme-Orphanage/WhatsApp Image 2021-09-08 at 10.13.05 PM (4).jpeg'
import img5 from '../../../../assets/event/Skill Enhancement programme-Orphanage/WhatsApp Image 2021-09-08 at 10.13.05 PM (5).jpeg'
import img6 from '../../../../assets/event/Skill Enhancement programme-Orphanage/WhatsApp Image 2021-09-08 at 10.13.05 PM (6).jpeg'
import img7 from '../../../../assets/event/Skill Enhancement programme-Orphanage/WhatsApp Image 2021-09-08 at 10.13.05 PM (7).jpeg'
import img8 from '../../../../assets/event/Skill Enhancement programme-Orphanage/WhatsApp Image 2021-09-08 at 10.13.05 PM.jpeg'
import img9 from '../../../../assets/event/Skill Enhancement programme-Orphanage/WhatsApp Image 2021-09-08 at 10.13.06 PM (1).jpeg'
import img10 from '../../../../assets/event/Skill Enhancement programme-Orphanage/WhatsApp Image 2021-09-08 at 10.13.06 PM (2).jpeg'
import img11 from '../../../../assets/event/Skill Enhancement programme-Orphanage/WhatsApp Image 2021-09-08 at 10.13.06 PM (3).jpeg'
import img12 from '../../../../assets/event/Skill Enhancement programme-Orphanage/WhatsApp Image 2021-09-08 at 10.13.06 PM.jpeg'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

const SkillEnhancement = () => {
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
        },      {
            id: 10,
            img: img10, 
        },    
       {
            id: 11,
            img: img11, 
        }, 
        {
            id: 12,
            img: img12, 
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


export default SkillEnhancement;