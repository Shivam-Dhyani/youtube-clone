// import React, { useContext } from "react";
// import { categories } from "../utils/constants";
// import LeftNavMenuItem from "./LeftNavMenuItem";
// import { Context } from "../context/contextApi";
// import { Link } from "react-router-dom";

// const LeftNav = () => {
//   const { selectedCategories, setSelectedCategories } = useContext(Context);
//   return (
//     <div className="py-4 bg-black h-full relative overflow-y-scroll">
//       <div className="w-50 ">
//         {categories.map((category, idx) => (
//           <React.Fragment key={idx}>
//             <LeftNavMenuItem
//               className={
//                 selectedCategories === category?.name ? "bg-white/[0.15]" : ""
//               }
//               name={category?.name === "New" ? "Home" : category?.name}
//               type={category?.type}
//               icon={category?.icon}
//               onClick={() => setSelectedCategories(category?.name)}
//             />
//             {category.divider && <hr className="m-5 border-white/[0.2]" />}
//           </React.Fragment>
//         ))}
//         <hr className="m-5 border-white/[0.2]" />
//         <div className="text-white/[0.5] text-[12px] text-center">
//           Clone by :{" "}
//           <Link to="https://www.linkedin.com/in/shivam-dhyani/" target="blank">
//             Shivam Dhyani
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LeftNav;

import React, { useContext, useState } from "react";
import { categories } from "../utils/constants";
import LeftNavMenuItem from "./LeftNavMenuItem";
import { Context } from "../context/contextApi";
import { Link } from "react-router-dom";

const LeftNav = () => {
  const { selectedCategories, setSelectedCategories } = useContext(Context);

  return (
    <div className="py-4 bg-black h-full relative overflow-y-hidden hover:overflow-y-scroll custom-scrollbar">
      <div className="w-50">
        {categories.map((category, idx) => (
          <React.Fragment key={idx}>
            <LeftNavMenuItem
              className={
                selectedCategories === category?.name ? "bg-white/[0.15]" : ""
              }
              name={category?.name === "New" ? "Home" : category?.name}
              type={category?.type}
              icon={category?.icon}
              onClick={() => setSelectedCategories(category?.name)}
            />
            {category.divider && <hr className="m-5 border-white/[0.2]" />}
          </React.Fragment>
        ))}
        <hr className="m-5 border-white/[0.2]" />
        <div className="text-white/[0.5] text-[12px] text-center">
          Clone by:{" "}
          <Link to="https://www.linkedin.com/in/shivam-dhyani/" target="_blank">
            Shivam Dhyani
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LeftNav;
