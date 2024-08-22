import video1 from "../assets/video1.mp4";
// import video2 from "../assets/video2.mp4";
const HeroSection = () => {
  return (
    <div id="HeroSection" className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-3xl lg:text-7xl mt-10 text-white text-center sm:text-6xl tracking-wide">
        Hey! am peterstone, welcome to my FrontEnd web{" "}
        <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
          project workflow
        </span>
        <p className="text-sm md:text-lg mt-5 tracking-wide bg-gradient-to-r from-orange-300 to-orange-700 text-transparent bg-clip-text text-center">
          react.js project for advanced state management
        </p>
      </h1>
      <div className="text-white flex  py-2 px-3">
        <Button>free trial</Button>
        <Button>Documentation</Button>
      </div>
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-full md:w-4/5 border border-orange-500 shadow-orange-400 mx-2 my-4"
        >
          <source src={video1} />
          Your browser does not support this video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
const Button = ({ children }) => {
  return (
    <div>
      <button className="gap-5 bg-gradient-to-r mr-5 py-2 px-3 rounded-xl font-semibold  hover:bg-red-500 duration-300 mt-5 from-orange-400 to-orange-600 ">
        {children}
      </button>
    </div>
  );
};
