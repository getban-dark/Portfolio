import React from "react";

import Spacexdemo from "../assets/spacexdemo.png";
import Awsdemo from "../assets/awsdemo.png";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6">Check out some of my recent work</p>
        </div>

        {/* container div */}
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-10">
          {/* Grid 1 */}
          <div
            style={{ backgroundImage: `url(${Spacexdemo})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100 duration-500">
              <span className="text-2xl font-bold text-white tracking-wider">
                SpaceX React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://spacex-demo-getban.netlify.app">
                  <button className="text-center hover:scale-110 duration-300 rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/getban-dark/SpaceXdemo">
                  <button className="text-center rounded-lg hover:scale-110 duration-300 px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* grid 2 */}
          <div
            style={{ backgroundImage: `url(${Awsdemo})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100 duration-500">
              <span className="text-2xl font-bold text-white tracking-wider">
                AWS React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://aws-demo-getban.netlify.app">
                  <button className="text-center rounded-lg hover:scale-110 duration-300 px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/getban-dark/Awsdemo">
                  <button className="text-center rounded-lg hover:scale-110 duration-300 px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
