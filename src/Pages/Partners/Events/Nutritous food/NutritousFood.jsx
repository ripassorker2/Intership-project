import React from 'react';
import img1 from '../../../../assets/event/Nutritous food drive/1.jpg'
import img2 from '../../../../assets/event/Nutritous food drive/2.jpg'
import img3 from '../../../../assets/event/Nutritous food drive/3.jpg'
import img4 from '../../../../assets/event/Nutritous food drive/4.jpg'
import img5 from '../../../../assets/event/Nutritous food drive/5.jpg'
import img6 from '../../../../assets/event/Nutritous food drive/6.jpg'
import img7 from '../../../../assets/event/Nutritous food drive/Nutritous1.png'
import img8 from '../../../../assets/event/Nutritous food drive/Nutritous2.png'




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
        <section className="max-w-screen-xl mx-auto lg:my-16 md:my-10 my-5 px-2">
          <h1 className="lg:text-4xl md:text-2xl text-xl font-semibold text-center uppercase">
            Nutritous food drive
          </h1>
          <div className="md:flex gap-2 lg:gap-12 align-middle justify-center lg:my-8 md:mt-6 my-2">
            <img className="lg:h-[250px] md:h-[200px]" src={img7} alt="" />
            <img className="lg:h-[250px] md:h-[200px] md:mt-0 mt-2" src={img8} alt="" />
          </div>
          <p className="text-[18px]">
            <span className="font-semibold">
              “ Man is What He Eats” – Lucretius.
            </span>
            Above facts from the National Family and Health Survey 2019-21,
            highlights the importance and the the need of nutrition in the
            children. We, acknowledge this and strive our way best in providing
            nutritious food at Orphanages, Old Age Homes and on streets for
            destitutes.
          </p>

          <div className="gap-10 justify-center mt-10 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
            {PhotoData.map((photo) => (
              <div className=" bg-base-100 shadow-xl">
                <img className="w-80 h-72 rounded" src={photo.img} alt="" />
              </div>
            ))}
          </div>
        </section>
      </>
    );
};

export default NutritousFood;