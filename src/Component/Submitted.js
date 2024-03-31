import React from "react";
import backgroundImage from "./Image/mo-U3Kst7MY4Ok-unsplash.jpg";

const divStyle = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  height: "700px",
};

export default function Submitted() {
  return (
    <div style={divStyle} className="py-[110px] px-[380px] ">
      <div className=" w-fit  border-[.5px] border-transparent  rounded-[30px] px-[100px] py-[250px] backdrop-blur-sm bg-cover ">
        <div className="text-2xl font-bold text-white font-xl decoration-from-font border-b-current">
          You are registered user now.
        </div>
      </div>
    </div>
  );
}
