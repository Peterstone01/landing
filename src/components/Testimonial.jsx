import { testimonials } from "../constants";

testimonials;
const Testimonial = () => {
  return (
    <div id="Testimonials">
      <h1 className="text-white text-3xl text-center font-bold py-10 mt-20">
        Testimonial
      </h1>
      <div className="grid lg:grid-cols-3 gap-4 md:grid-cols-2 grid-cols-1">
        {testimonials.map((item, index) => {
          const { user, company, image, text } = item;
          return (
            <div
              key={index}
              className="border rounded-lg border-orange-500  px-5 py-5 my-5 "
            >
              <div className=" flex ">
                <img
                  src={image}
                  alt="user"
                  className="mr-4 w-[50px] h-[50px]  rounded-full"
                />
                <div>
                  <h1 className="text-orange-500 text-2xl">{user}</h1>
                  <h3 className="text-slate-400 text-xl ">{company}</h3>
                </div>
              </div>
              <div>
                <p className="text-slate-400">{text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonial;
