import { ArrowUp } from "lucide-react";
import { Link } from "react-scroll";
const Footer = () => {
  return (
    <>
      <footer className="py-16 sticky bottom-0 w-full bg-slate-950">
        <div>
          <h1 className="text-2xl text-center text-slate-600">
            peterstone @ STONE<span className="text-orange-700">webworks</span>
          </h1>
          <p className="text-slate-800 text-center mt-5">
            All right reserved, peterogechukwu1@gmail.com
          </p>
        </div>
      </footer>
      <div className="w-8 flex items-center  hover:bg-red-500 duration-300 justify-center right-3 fixed bottom-3 h-8 bg-orange-500 rounded-full">
        <Link to="HeroSection" spy={true} offset={-100} smooth={true}>
          <ArrowUp className="size-5 cursor-pointer hover:bg-red-500 text-white" />
        </Link>
      </div>
    </>
  );
};

export default Footer;
