import React from "react";
import GetInTouch from "../../Shared/GetInTouch/GetInTouch";

const PartnarWithUs = () => {
  let title = "Donate us";
  let photo1 =
    "https://thumbs.dreamstime.com/b/hand-clicking-donate-button-drawn-white-chalk-blackboard-31087294.jpg";
  let photo2 =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0An5HuUFazYCHn_rugWAPbC06WUs6PzW69eB-Bdq-3wWDyKbtI0Fol0to1hrDEV_UXho&usqp=CAU";
  return (
    <div className="my-20">
      <GetInTouch title={title} photo1={photo1} photo2={photo2} />
    </div>
  );
};

export default PartnarWithUs;
