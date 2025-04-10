import { menu } from "../data/Navbar";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "./../assets/logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faMagnifyingGlass,
  faShoppingCart,
  faUser,
  faX,
} from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  useEffect(() => {
    if (openMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openMenu]);

  return (
    <>
      <div
        className={`${
          openSearch ? "h-[60px] visible" : "h-0 invisible"
        } w-full bg-white flex justify-center items-center transition-all duration-300 box-border`}
      >
        <div className="w-fit h-full flex items-center relative">
          <input
            className="mr-5 outline-none border-2 border-gray-800/50 pl-4 pr-8 rounded-full h-[70%] lg:w-[700px] md:w-[500px] w-[300px]"
            type="text"
            placeholder="Search"
          />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="absolute right-8 cursor-pointer text-gray-800/70"
          />
        </div>
        <FontAwesomeIcon
          icon={faX}
          className="absolute right-8 cursor-pointer text-gray-800/70"
          onClick={() => setOpenSearch(!openSearch)}
        />
      </div>
      <div
        className={`lg:hidden 
          ${openMenu ? "translate-x-0 " : "-translate-x-full"}
          w-full h-screen bg-white absolute transition-all duration-500`}
      >
        <div className="w-full h-fit flex items-center justify-center p-5 relative">
          <div className="w-[190px] h-[30px]">
            <img src={Logo} className="h-full" alt="" />
          </div>
          <FontAwesomeIcon
            icon={faX}
            onClick={() => setOpenMenu(!openMenu)}
            className="absolute right-[20px] text-md translate-y-[-50%] top-[50%] cursor-pointer"
          />
        </div>
        <ul className="w-full h-fit border-y-4 border-gray-500/20 flex flex-col gap-5 py-5 my-3">
          {menu.map(({ name, path }, index) => (
            <Link
              key={index}
              onClick={() => setOpenMenu(false)}
              className="uppercase font-medium py-2.5 px-5 text-2xl hover:text-[#4daf66]"
              to={path}
            >
              {name}
            </Link>
          ))}
        </ul>
        <div className="w-full h-[50px] px-5 flex flex-row gap-5 items-center">
          <Link className="w-fit h-[30px] bg-green-500 px-8 hover:bg-green-600 flex justify-center items-center text-white font-medium rounded-sm text-lg">
            Login
          </Link>
          <Link className="w-fit h-[30px] bg-orange-500 px-8 hover:bg-orange-600 flex justify-center items-center text-white font-medium rounded-sm text-lg">
            Register
          </Link>
        </div>
      </div>
      <nav className="w-full h-[90px] bg-white flex justify-center">
        <div className="w-[95%] h-full flex justify-between items-center">
          <div className="md:w-[280px] md:h-[60%] w-[150px] h-[30%]">
            <img className="w-full h-full" src={Logo} alt="" />
          </div>
          <div className="lg:w-[65%] w-fit h-full flex flex-row justify-between items-center">
            <ul className="lg:flex w-fit h-full hidden gap-5 items-center">
              {menu.map(({ name, path }, index) => (
                <li
                  key={index}
                  className=" px-2 flex items-center justify-center text-[15px] font-medium text-black"
                >
                  <Link
                    className="hover:text-[#4daf66] uppercase"
                    to={path}
                    onClick={() => setOpenMenu(false)}
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="w-fit h-1/2 flex flex-row gap-2 items-center">
              <span className="w-[30px] h-[30px]  flex justify-center items-center">
                <FontAwesomeIcon
                  className="cursor-pointer"
                  icon={faMagnifyingGlass}
                  onClick={() => setOpenSearch(true)}
                />
              </span>
              <span className="w-[30px] h-[30px]  flex justify-center items-center">
                <FontAwesomeIcon className="cursor-pointer" icon={faUser} />
              </span>
              <span className="w-[30px] h-[30px]  flex justify-center items-center">
                <FontAwesomeIcon
                  className="cursor-pointer"
                  icon={faShoppingCart}
                />
              </span>
              <span className="lg:hidden flex w-[30px] h-[30px]  justify-center items-center">
                <FontAwesomeIcon
                  className="cursor-pointer"
                  onClick={() => setOpenMenu(!openMenu)}
                  icon={faBars}
                />
              </span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
