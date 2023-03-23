import React from 'react';
import img1 from '../../../../assets/event/Awards Ceremony/1.jpg'
import img2 from '../../../../assets/event/Awards Ceremony/2.jpg'
import img3 from '../../../../assets/event/Awards Ceremony/3.jpg'
import img4 from '../../../../assets/event/Awards Ceremony/4.jpg'
import img5 from '../../../../assets/event/Awards Ceremony/5.jpeg'
import img6 from '../../../../assets/event/Awards Ceremony/6.jpg'
import img7 from '../../../../assets/event/Awards Ceremony/2.jpg'
import img8 from '../../../../assets/event/Awards Ceremony/7.jpg'
import img9 from '../../../../assets/event/Awards Ceremony/8.jpg'
import img10 from '../../../../assets/event/Awards Ceremony/9.jpg'
import img11 from '../../../../assets/event/Awards Ceremony/10.jpg'
import img12 from '../../../../assets/event/Awards Ceremony/11.jpg'
import img13 from '../../../../assets/event/Awards Ceremony/12.jpg'
import img14 from '../../../../assets/event/Awards Ceremony/13.jpg'
import img15 from '../../../../assets/event/Awards Ceremony/14.jpg'
import img16 from '../../../../assets/event/Awards Ceremony/15.jpg'
import img17 from '../../../../assets/event/Awards Ceremony/16.jpg'
import img18 from '../../../../assets/event/Awards Ceremony/17.jpg'
import img19 from '../../../../assets/event/Awards Ceremony/19.jpg'
import Title from '../../../../Shared/Title/Title';


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
        <section className="max-w-screen-xl mx-auto my-20 px-2">
          <h1>
            <Title title={"Awards Ceremony"} />
          </h1>
          <div className="gap-10 justify-center mt-10 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            {PhotoData.map((photo) => (
              <div className=" bg-base-100 shadow-xl">
                <img className=" rounded " src={photo.img} alt="" />
              </div>
            ))}
          </div>
        </section>
      </>
    );
};
export default AwardsCeremony;