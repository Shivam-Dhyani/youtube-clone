import React from "react";
import { categories } from "../utils/Constants";
import LeftNavMenuItem from "./LeftNavMenuItem";

const LeftNav = () => {
  return (
    <div className="w-60 py-3 h-full bg-black">
      {categories.map((category, idx) => (
        <React.Fragment key={idx}>
          <LeftNavMenuItem
            name={category.name}
            type={category.type}
            icon={category.icon}
          />
        </React.Fragment>
      ))}
    </div>
  );
};

export default LeftNav;
