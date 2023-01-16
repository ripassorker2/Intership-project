import React from 'react';
import img1 from "../../../assets/event/Event.jpg";
import img2 from "../../../assets/event/event-2.jpg";


const Events = () => {
    return (
      <div className="max-w-screen-xl mx-auto my-20">
        <h1 className="text-5xl font-bold text-center">EVENTS</h1>
        <div className="flex gap-20 justify-center mt-10">
          <div className="">
            <img className="w-96 h-80" src={img1} alt="" />
          </div>
          <div className="">
            <img className="w-96 h-80" src={img2} alt="" />
          </div>
        </div>
      </div>
    );
};

export default Events;