import { CheckCircle } from "lucide-react";

import codeImg from "../assets/code.jpg";
import { checklistItems } from "../constants";
const WorkFlow = () => {
  return (
    <div id="Workflow" className="py-10 my-5 shadow-lg">
      <h1 className="text-center mb-5 text-3xl uppercase bg-gradient-to-r from-orange-400 text-transparent bg-clip-text to-orange-700 font-bold">
        Optimize your workflow
      </h1>
      <div className=" grid lg:px-56 md:grid-cols-2 md:px-10 px-8 lg:grid-cols-2 grid-cols-1">
        <div className="">
          <img src={codeImg} alt="code image" className="w-[300px] h-[380px]" />
        </div>
        <div>
          {checklistItems.map((items, index) => {
            const { title, description } = items;
            return (
              <div
                key={index}
                className="flex items-center gap-5 justify-center"
              >
                <div className="text-white">
                  <CheckCircle />
                </div>
                <div className=" ">
                  <h3 className="mr-5 mt-5 text-white">{title}</h3>
                  <p className="text-slate-600">{description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WorkFlow;
