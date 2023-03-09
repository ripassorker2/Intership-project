import React from 'react';
import img1 from '../../../../assets/event/AUGUST 15 - 2020/FGLV4460.jpg'
import img2 from '../../../../assets/event/AUGUST 15 - 2020/LIEY2246.jpg'
import img3 from '../../../../assets/event/AUGUST 15 - 2020/NXKU2235.jpg'
import img4 from '../../../../assets/event/AUGUST 15 - 2020/PJNV7027.jpg'
import img5 from '../../../../assets/event/AUGUST 15 - 2020/SCOV2109.jpg'
import img6 from '../../../../assets/event/AUGUST 15 - 2020/USCD4310.jpg'
import img9 from '../../../../assets/event/AUGUST 15 - 2020/WhatsApp Image 2021-09-08 at 10.16.05 PM (3).jpeg'
import img10 from '../../../../assets/event/AUGUST 15 - 2020/WhatsApp Image 2021-09-08 at 10.16.05 PM.jpeg'


const August20 = () => {
    const PhotoData = [
        {
            id: 1,
            img: img10, 
        },
        {
            id: 2,
            img: img5, 
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
            img: img2, 
        },
        {
            id: 6,
            img: img6, 
        },
      {
            id: 9,
            img: img1, 
        },      {
            id: 10,
            img: img9, 
        }
       
    ];
    return (
        <>
        <section className='max-w-screen-xl mx-auto my-20 px-2'>
            <h1 className='text-4xl font-semibold'>AUGUST 15 - 2020</h1>
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
export default August20;