import React from 'react';
import img1 from '../../../../assets/event/Skill Enhancement programme-Orphanage/1.jpg'
import img2 from '../../../../assets/event/Skill Enhancement programme-Orphanage/2.jpg'
import img3 from '../../../../assets/event/Skill Enhancement programme-Orphanage/3.jpg'
import img4 from '../../../../assets/event/Skill Enhancement programme-Orphanage/4.jpg'
import img5 from '../../../../assets/event/Skill Enhancement programme-Orphanage/5.jpg'
import img6 from '../../../../assets/event/Skill Enhancement programme-Orphanage/6.jpg'
import img7 from '../../../../assets/event/Skill Enhancement programme-Orphanage/7.jpg'
import img8 from '../../../../assets/event/Skill Enhancement programme-Orphanage/8.jpg'
import img9 from '../../../../assets/event/Skill Enhancement programme-Orphanage/SKILLS.jpg'


const SkillEnhancement = () => {
    const PhotoData = [
        {
            id: 1,
            img: img4, 
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
            img: img1, 
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
            Skill Enhancement programme
          </h1>
          <div className="flex justify-center md:my-8 my-2">
            <img className="md:h-[350px] h-[250px]" src={img9} alt="" />
          </div>
          <p className="text-[18px]">
            Skill-based education gives students ownership of their learning and
            helps them close the comprehension gap. The evaluation, rather than
            grades, proves their proficiency. The education process is a
            beautiful advantage for dropouts since they may go ahead without the
            need for a gap.
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


export default SkillEnhancement;