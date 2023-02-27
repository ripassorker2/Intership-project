import React from 'react';
import img  from '../../../assets/banner-logo/Orange1.png'

const PartnerWithUs = () => {
   return (
      <div className='grid place-content-center  w-[95%] m-auto my-5'>
        <a href="mailto: thechange2k19@gmail.com">
        <img className='w-[500px] h-[400px]' src={img} alt="" />
        </a>
      </div>
   );
};

export default PartnerWithUs;