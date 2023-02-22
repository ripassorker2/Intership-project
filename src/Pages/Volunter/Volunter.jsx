import React from "react";
import GetInTouch from "../../Shared/GetInTouch/GetInTouch";

const Volunter = () => {
  let title = "";
  let photo1 =
    "https://liferay.life/wp-content/uploads/2020/09/Volunteer-with-us.jpg";
  let photo2 =
    "https://jackson.armymwr.com/application/files/5415/8206/2847/volunteers-750x421.jpg";
  return (
    <div className="my-20">
      <GetInTouch title={title} photo1={photo1} photo2={photo2} />
    </div>
  );
};

export default Volunter;
