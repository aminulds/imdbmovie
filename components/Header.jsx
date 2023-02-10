import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Link from "next/link";
import ThemeToggler from "./ThemeToggler";
// import DarkModeSwitch from "./DarkModeSwitch";

export default function Header() {
  return (
    <div className="flex justify-between items-center py-4 md:py-6">
      <div className="flex">
        <MenuItem title="HOME" link="/" Icon={AiFillHome} />
        <MenuItem title="ABOUT" link="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <div className="flex items-center space-x-5">
        {/* <DarkModeSwitch /> */}
        <ThemeToggler />

        {/* Logo */}
        <Link href="/">
          <h2 className="text-2xl">
            <span className="font-bold bg-indigo-500 hover:bg-indigo-700 py-1 px-2 rounded-lg mr-1 text-white">
              IMDB
            </span>

          </h2>
        </Link>
      </div>
    </div>
  );
}