import React from "react";
import backgroundImage from "./Image/mo-U3Kst7MY4Ok-unsplash.jpg";
import backgroundImage2 from "./Image/christina-victoria-craft-ZHys6xN7sUE-unsplash.jpg";

const divStyle1 = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  height: "700px",
};

const divStyle2 = {
  backgroundImage: `url(${backgroundImage2})`,
  backgroundSize: "cover",
  backgroundRepeat: "repeat",
  height: "36rem",
  width: "64rem",
};

export default function Home() {
  return (
    <div className="bg-red-200">
      <div className="py-[30px] h-[400px]">
        <div className="p-4 h-[600px] bg-contain ">
          <div
            style={divStyle2}
            className="font-Inter
            font-size-[32px]
            W-[400]
            line-height: 38.73px;
            text-justified
            "
          >
            Hello,
            <br />
            <div>
              <div className="flex space-x-4">
                <button className="p-2 text-base rounded-full bg-emerald-600 hover:bg-black outline">
                  Register here
                </button>
                <button className="p-2 text-base rounded-full bg-emerald-600 hover:bg-black outline">
                  Logging
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
