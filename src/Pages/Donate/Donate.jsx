import React from "react";
import GetInTouch from "../../Shared/GetInTouch/GetInTouch";

const Donate = () => {
  let title = "";
  let photo1 =
    "https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvam9iMjlhYmF0Y2g2LXM1OC1kb25hdGUtMDItbC5qcGc.jpg?s=7BQI_lVtQKVtPVu0kJal_NjGgICsIQ_rAn9FvNa6kH0";
  let photo2 =
    "https://media.licdn.com/dms/image/C5622AQFVpHfQSz6dQw/feedshare-shrink_800/0/1667436817730?e=1680134400&v=beta&t=vWpgY1Re0H7_TuX-C86He3WhvWr8YSsqJmBuSkZdoeU";
  return (
    <div className="my-20">
      <GetInTouch title={title} photo1={photo1} photo2={photo2} />
    </div>
  );
};

export default Donate;
