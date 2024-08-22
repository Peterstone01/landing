import { Menu, X } from "lucide-react";
import { navItems } from "../constants";
import { useState } from "react";
import { Link } from "react-scroll";
const Nav = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const toggle = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <nav className="sticky top-0 backdrop-blur-lg border-b border-neutral-700/80 md:py-5 py-5 md:px-10 px-2">
      <div className="flex justify-between items-center">
        <h1 className="bold text-white text-2xl lg:text-4xl">
          STONE<span className="text-orange-500">webworks</span>
        </h1>
        <ul className="lg:flex items-center justify-center hidden  space-x-12">
          {navItems.map((item, index) => {
            return (
              <li key={index} className="text-white">
                <a href={item.href}>{item.label}</a>
              </li>
            );
          })}
        </ul>
        <div className="lg:flex justify-center items-center gap-2 hidden">
          <button className="py-2 px-3 border rounded-lg font-bold border-orange-500 text-white hover:bg-red-500 duration-300">
            sign in
          </button>
          <button className="py-2 px-3  rounded-lg font-bold bg-orange-700 text-white hover:bg-red-500 duration-300">
            Register
          </button>
        </div>
        <div className="lg:hidden text-white">
          <button onClick={toggle}>{toggleMenu ? <X /> : <Menu />}</button>
        </div>
      </div>
      {toggleMenu && (
        <div className="bg-slate-900 right-0 z-50 flex justify-center flex-col items-center gap-5 py-5 font-semibold text-white px-5">
          <ul>
            {navItems.map((item, index) => {
              return (
                <li key={index} className="mt-3">
                  <a href={item.href}>{item.label}</a>
                </li>
              );
            })}
          </ul>
          <div className="lg:flex justify-center items-center text-white gap-4 mt-5 ">
            <button className="py-1 px-2 mr-3 text-white  border rounded  border-orange-500">
              sign in
            </button>
            <button className="py-1 px-2 mr-3 hover:bg-red-500 bg-gradient-to-r hover:text-blue-600  rounded  from-orange-300 to-orange-500">
              Register
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
