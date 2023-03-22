import React from 'react';
import img1 from '../../../../assets/event/Quality Education Session-Bowrampet/1.jpg'
import img2 from '../../../../assets/event/Quality Education Session-Bowrampet/2.jpg'
import img3 from '../../../../assets/event/Quality Education Session-Bowrampet/3.jpg'
import img4 from '../../../../assets/event/Quality Education Session-Bowrampet/4.jpg'
import img5 from '../../../../assets/event/Quality Education Session-Bowrampet/5.jpg'
import img6 from '../../../../assets/event/Quality Education Session-Bowrampet/6.jpg'
import img7 from '../../../../assets/event/Quality Education Session-Bowrampet/7.jpg'
import img8 from '../../../../assets/event/Quality Education Session-Bowrampet/child.png'


const QualityEducation = () => {
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
    ];
    return (
      <>
        <section className="max-w-screen-xl mx-auto lg:my-16 md:my-10 my-5 px-2">
          <h1 className="lg:text-4xl md:text-2xl text-xl font-semibold uppercase text-center">
            Quality Education Session-Bowrampet
          </h1>
          <div className="flex justify-center md:my-8 my-2">
            <img className="md:h-[350px] h-[250px]" src={img8} alt="" />
          </div>
          <p className="text-[18px]">
            Every child has the fundamental right to quality education, an
            education one that helps them to acquire basic literacy and
            numeracy, enjoy learning without fear and feel valued and included
            irrespective of where they come from. Besides this, Covid-19
            Pandemic, Digital divide, lack of basic amenities in schools etc.
            have contributed to difficulty to access quality education. We focus
            to do one on one tutoring, collaborative learning, group learning,
            creative designing as the ways to increase the quality of learning.
          </p>
          <div className="gap-10 justify-center mt-10 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
            {PhotoData.map((photo) => (
              <div className=" bg-base-100  shadow-xl">
                <img className="w-80 h-72 rounded" src={photo.img} alt="" />
              </div>
            ))}
          </div>
        </section>
      </>
    );
};
export default QualityEducation;