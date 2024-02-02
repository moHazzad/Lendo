import notification from "/public/Group 19.png";
import avatar from "/public/Avatar.png";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="px-[30.25px] ">
      <div className=" flex justify-between  border-b-[1px] text-gray-400 navBar">
        <div className="h-[81.86px] px-[4px] flex items-center gap-5 text-[10.5px] ">
          <NavLink
            to="/Overview"
            className={({ isActive }) => {
              return isActive ? "text-[#0D0F52] font-medium  " : "text-gray-400";
            }}
          >
            Overview
          </NavLink>
          <NavLink
            to="/invest"
            className={({ isActive }) => {
              return isActive ? "text-[#0D0F52] font-medium " : "text-gray-400";
            }}
          >
            Invest
          </NavLink>
          <NavLink
            to="/"
            className={({ isActive }) => {
              return isActive ? "text-[#0D0F52]  font-medium" : "text-gray-400";
            }}
          >
            Auto-Invest
          </NavLink>
          <NavLink
            to="/myPortfolio"
            className={({ isActive }) => {
              return isActive ? "text-[#0D0F52] font-medium" : "text-gray-400";
            }}
          >
            My Portfolio
          </NavLink>
        </div>
        <div className="h-[81.86px] flex gap-5 items-center">
          <p className="text-[10px] text-gray-400">En</p>
          <img className="w-[20px] h-[20px]" src={notification} alt="" />
          <img className="w-[24.81px] h-[24.81px]" src={avatar} alt="" />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
