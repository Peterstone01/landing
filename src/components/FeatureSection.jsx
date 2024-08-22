import { features } from "../constants";

const FeatureSection = () => {
  return (
    <div id="Features" className="mt-2 py-1">
      <div className="text-center">
        <h3 className="text-orange-500 mt-20 font-bold mb-5">FEATURES</h3>
        <h1 className="text-white  text-3xl mb-3">
          Search engine optimiziation tools with{" "}
          <span className="bg-gradient-to-r from-orange-400 text-transparent bg-clip-text to-orange-800">
            automatic integration
          </span>
        </h1>
      </div>

      <div className=" grid md:grid-cols-2 grid-cols-1 px-10 py-5 gap-5 lg:grid-cols-3">
        {features.map((item, index) => {
          const { icon, text, description } = item;
          return (
            <div
              key={index}
              className="w-full border px-5 py-3 border-orange-500 "
            >
              <div className="flex gap-3">
                <div className="text-orange-500">{icon}</div>

                <div>
                  <h1 className="text-xl text-white">{text}</h1>
                  <p className="text-slate-500">{description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeatureSection;
