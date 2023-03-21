import React from 'react';
import img1 from '../../../../assets/event/Gender Awarness and  Well-Being Session/1.jpg'
import img2 from '../../../../assets/event/Gender Awarness and  Well-Being Session/2.jpg'
import img3 from '../../../../assets/event/Gender Awarness and  Well-Being Session/3.jpg'
import img4 from '../../../../assets/event/Gender Awarness and  Well-Being Session/4.jpg'
import img5 from '../../../../assets/event/Gender Awarness and  Well-Being Session/5.jpg'
import img6 from '../../../../assets/event/Gender Awarness and  Well-Being Session/6.jpg'
import img7 from '../../../../assets/event/Gender Awarness and  Well-Being Session/7.jpg'
import img8 from '../../../../assets/event/Gender Awarness and  Well-Being Session/8.jpg'
const GenderAwarness = () => {
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
        }, 
    ];
    return (
      <>
        <section className="max-w-screen-xl mx-auto lg:my-16 md:my-10 my-5 px-2">
          <h1 className="lg:text-4xl md:text-1xl text-xl font-semibold text-center uppercase">
            Gender Awarness and Well-Being Session
          </h1>
          <p className="text-[18px] mt-2">
            “A gender-equal society would be the one where the word “gender”
            doesn’t exist; where everyone can be themselves.” Gloria Steinem
            Gender bias is a prejudice of one gender over another. It can be
            conscious or unconscious and can manifest in various ways ranging
            from subtle glances to obvious reactions. When children are about 2
            years old, they learn about the physical differences between boys
            and girls and by the age of 4, they have a stable sense of their
            identity. During this time, they also learn about “things girls do”
            vs “things boys do”. In order to create an open classroom
            environment, it is essential to avoid stereotyping. Schools
            generally affect gender differentiation via 2 primary sources:
            teachers and peers. Teachers and peers directly influence gender
            differentiation by providing boys and girls with different learning
            opportunities and feedback.
          </p>
          <div className="mt-5">
            <p className="text-[18px]">
              We highly encourage the schools to be gender neutral and adopt the
              following through our sessions:
            </p>
            <ul className="font-semibold">
              <li>a. Using Inclusive Language</li>
              <li>b. Being aware of current Gender Bias</li>
              <li>c. Conduct of Teachers.</li>
            </ul>
          </div>
          <div className="gap-10 justify-center md:mt-10 mt-2 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
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
export default GenderAwarness;