import React from 'react';
import img1 from "../../../assets/Covid/1.jpeg";
import img2 from "../../../assets/Covid/2.jpeg";
import img3 from "../../../assets/Covid/3.jpeg";
import img4 from "../../../assets/Covid/4.jpeg";
import img5 from "../../../assets/Covid/5.jpeg";
import img6 from "../../../assets/Covid/6.jpeg";
import img7 from "../../../assets/Covid/7.jpeg";
import img8 from "../../../assets/Covid/8.jpeg";

const Covid = () => {
    const covid_img = [
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
        id: 6,
        img: img7,
      },
      {
        id: 6,
        img: img8,
      },
    ];

    return (
      <div className="max-w-screen-xl w-[85%] mx-auto mb-6">
        <div className="mt-14 mb-6 text-center">
          <h1 className="about-title mb-6">COVID RELIEF</h1>
          <h2>
            Covid-19 is a severe pandemic that this generation has witnessed.
            when Governments and civil society came together to work on Right to
            Food, we worked under the leadership of Mrs. Rachel Rani for the
            same. Under this initiative, food and essentials are delivered to
            more than 200 families in various parts of Andhra Pradesh,
            Telangana. Following are the pictures of "Bread Donation" under the
            same campaign.
          </h2>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
          {covid_img.map((img) => (
            <img
              className="md:h-[400px] h-[350px] w-full rounded-lg"
              src={img.img}
              alt="covid"
            />
          ))}
        </div>
      </div>
    );
};

export default Covid;