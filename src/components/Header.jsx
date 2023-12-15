import YouTubeLogo from "../images/yt-logo.png";

import { SlMenu } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";
import { CgClose } from "react-icons/cg";

const Header = () => {
  return (
    <div className="h-14 px-5 bg-black flex justify-between items-center sticky top-0">
      <img src={YouTubeLogo} alt="Youtube" className="h-5" />

      <div className="flex group">
        <div className="pl-5 ml-10 flex rounded-l-3xl border border-[#303030] md:group-focus-within:pl-0 md:group-focus-within:ml-5 group-focus-within:border-blue-500">
          {/* <div className="flex h-8 md:h-10 md:ml-10 md:pl-5 border border-[#303030] rounded-l-3xl group-focus-within:border-blue-500 md:group-focus-within:ml-5 md:group-focus-within:pl-0"> */}
          <div className="w-10 hidden group-focus-within:flex items-center justify-center">
            <IoIosSearch className="text-white text-xl" />
          </div>
          <input
            type="text"
            placeholder=" Search"
            className="bg-transparent w-[500px] p-2 text-white outline-none"
            // className="bg-transparent outline-none text-white pr-5 pl-5 md:pl-0 w-44 md:group-focus-within:pl-0 md:w-64 lg:w-[500px]"
          />
        </div>
        <button className="bg-white/[0.1] w-14 border border-[#303030] rounded-r-3xl flex justify-center items-center">
          <IoIosSearch className="text-white text-xl" />
        </button>
      </div>

      <div className="flex items-center">
        <div className="flex">
          <div className="hover:bg-[#303030]/[0.6] h-10 w-10 flex items-center justify-center rounded-full ">
            <RiVideoAddLine className="text-white text-xl cursor-pointer" />
          </div>
          <div className="hover:bg-[#303030]/[0.6] h-10 w-10 ml-2 flex items-center justify-center rounded-full ">
            <FiBell className="text-white text-xl cursor-pointer" />
          </div>
        </div>
        <div className="h-8 w-8 ml-4 rounded-full overflow-hidden">
          <img src="https://xsgames.co/randomusers/assets/avatars/female/67.jpg" />
        </div>
      </div>
    </div>
  );
};

export default Header;
