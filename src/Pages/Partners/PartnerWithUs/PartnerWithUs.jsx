import React from 'react';
import img  from '../../../assets/Donate-part-voluteer/part.png'

const PartnerWithUs = () => {
   return (
      <div className='grid place-content-center  w-[95%] m-auto my-14'>
        <a href="mailto: thechange2k19@gmail.com">
        <img className='w-[500px] h-[400px]' src={img} alt="" />
        </a>
      </div>
   );
};

export default PartnerWithUs;