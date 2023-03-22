import React from 'react';
import img1 from '../../../../assets/event/AUGUST 15-2019/1.jpg'
import img2 from '../../../../assets/event/AUGUST 15-2019/2.jpg'
import img3 from '../../../../assets/event/AUGUST 15-2019/3.jpg'
import img4 from '../../../../assets/event/AUGUST 15-2019/4.jpg'
import img5 from '../../../../assets/event/AUGUST 15-2019/5.jpg'
import img7 from '../../../../assets/event/AUGUST 15-2019/7.jpg'
import img8 from '../../../../assets/event/AUGUST 15-2019/8.jpg'
import img9 from '../../../../assets/event/AUGUST 15-2019/9.jpg'
import img10 from '../../../../assets/event/AUGUST 15-2019/10.jpg';
import Title from '../../../../Shared/Title/Title';

const August19 = () => {
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
       
    ];
    return (
      <>
        <section className="max-w-screen-xl mx-auto my-20 px-2">
          <h1>
            <Title title={"AUGUST 15-2019"} />
          </h1>
          <div className="gap-10 justify-center mt-10 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            {PhotoData.map((photo) => (
              <div className="">
                <img className=" rounded" src={photo.img} alt="" />
              </div>
            ))}
          </div>
        </section>
      </>
    );
};

export default August19;