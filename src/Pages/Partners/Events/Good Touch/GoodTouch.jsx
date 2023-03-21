import React from 'react';
import img1 from '../../../../assets/event/Good Touch and Bad Touch Session and Skill Enhancement Programme-pragartinagar/1.jpg'
import img2 from '../../../../assets/event/Good Touch and Bad Touch Session and Skill Enhancement Programme-pragartinagar/2.jpg'
import img3 from '../../../../assets/event/Good Touch and Bad Touch Session and Skill Enhancement Programme-pragartinagar/3.jpg'
import img4 from '../../../../assets/event/Good Touch and Bad Touch Session and Skill Enhancement Programme-pragartinagar/4.jpg'
import img5 from '../../../../assets/event/Good Touch and Bad Touch Session and Skill Enhancement Programme-pragartinagar/5.jpg'
import img6 from '../../../../assets/event/Good Touch and Bad Touch Session and Skill Enhancement Programme-pragartinagar/6.jpg'
import img7 from '../../../../assets/event/Good Touch and Bad Touch Session and Skill Enhancement Programme-pragartinagar/7.jpg'
import img8 from '../../../../assets/event/Good Touch and Bad Touch Session and Skill Enhancement Programme-pragartinagar/8.jpg'

const GoodTouch = () => {
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
            Good Touch and Bad Touch Session and Skill Enhancement
            Programme-pragartinagar
          </h1>
          <article className="text-[18px]">
            <p className="mt-2">
              In today’s times, we hear a lot about child abuse and molestation.
              It’s high time, we start teaching young children about “Good Touch
              Bad Touch” to help prevent more damage. Most of the time, targets
              are very young children, below 6-7 years of age. They are too
              young to understand the difference between right and wrong.
            </p>
            <p className="mt-2">
              Every single day, the media reports such cases where young
              children, both boys and girls, are sexually abused by an adult
              around them. The problem is, that they do not even know what is
              happening.
            </p>
            <p className="mt-2">
              It is still a sensitive topic for parents to talk to their
              children, so most of them do not want to go there. The same goes
              for schools as well. At times, we hesitate to take up and speak on
              sensitive topics.
            </p>
            <p className="mt-2">
              But, the fact remains that it is very important for the betterment
              of our young children that they know about all this and can deal
              with it if they ever come across a situation like this. What is
              good touch bad touch? The goal here is to inform your child about
              the dangers, without causing any anxiety.
            </p>
          </article>
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

export default GoodTouch;