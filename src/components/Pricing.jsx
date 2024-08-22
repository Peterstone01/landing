import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";

CheckCircle2;
const Pricing = () => {
  return (
    <div className="py-10">
      <h1 className="text-center text-white text-3xl uppercase font-bold">
        Pricing
      </h1>
      <div className="grid md:grid-cols-3">
        {pricingOptions.map((item, index) => {
          const { title, price, features } = item;
          return (
            <div
              id="Pricing"
              key={index}
              className="py-5 mr-5  border rounded-xl mt-5 px-5"
            >
              <div className="text-4xl font-bold border-orange-500 text-center border-b bg-gradient-to-r from-orange-400 to-orange-700 text-transparent bg-clip-text">
                <h1>{title}</h1>
              </div>

              <p className="text-white font-bold text-2xl py-3">{price}</p>
              <ul>
                {features.map((feature, index) => {
                  return (
                    <div
                      key={index}
                      className="flex items-center text-slate-300 gap-5"
                    >
                      <li className="text-white">
                        <CheckCircle2 size={20} />
                      </li>
                      {feature}
                    </div>
                  );
                })}
              </ul>
              <button className="bg-gradient-to-r text-white text-lg font-semibold from-orange-400 to-orange-600 px-5 py-1 mt-5 rounded-lg">
                Explore
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pricing;
