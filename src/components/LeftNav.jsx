import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { categories } from "../utills/constants";
import { Context } from "../context/contextApi";
import LeftNavMenuItem from "./LeftNavMenuItem";
import { type } from "@testing-library/user-event/dist/type";

const LeftNav = () => {
  const { selectCategories, setselectCategories, mobileMenu } =
    useContext(Context);
    const navigate= useNavigate();
  const OnClickHandler = (name, type) => {
    switch (type) {
      case "category":
        return setselectCategories(name);

      case "home":
        return setselectCategories(name);
      case "menu":
        return false;
      default:
        break;
    }
  };
  return (
    <div className={`md:block w-[240px] overflow-y-auto h-full py-4 bg-black absolute md:relative z-10 md:translate-x-[0] transition-all ${mobileMenu ? "translate-x-0" : "translate-x-[-240px]"}`}>

      <div className="flex px-3 flex-col">
        {categories.map((item) => {
          return (
            <React.Fragment key={item?.name}>
              <LeftNavMenuItem
                text={item.type === "home" ? "Home" : item.name}
                icon={item.icon}
                action={() => {
                  OnClickHandler(item.name, item.type);
                  navigate("/")
                }}
                className={`${
                  selectCategories === item?.name ? "bg-white/[0.15]" : ""
                }`}
              />
              {item?.divider && <hr className="my-5 border-white/[0.2]" />}
            </React.Fragment>
          );
        })}
        <hr className="my-5 border-white/[0.2]" />
        <div className="text-white/[0.5] text-[12px]">
          Youtube-Clone : By Ali Raza
        </div>
      </div>
    </div>
  );
};

export default LeftNav;
