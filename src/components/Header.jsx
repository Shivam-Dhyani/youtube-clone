import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Context } from "../context/ContextApi";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const { loading, mobileMenu, setMobileMenu } = useContext(Context);

  const searchQueryHandler = (event) => {
    if (
      (event?.key === "Enter" || event === "searchButton") &&
      searchQuery?.length > 0
    ) {
      navigate(`/searchResults/${searchQuery}`);
    }
  };

  const { pathname } = useLocation();
  const pageName = pathname?.split("/")?.filter(Boolean)?.[0];
  console.log(pageName);

  return (
    <div className="bg-white dark:bg-black h-14 px-4 md:px-5 sticky top-0 z-10 flex flex-row items-center justify-between">
      Header
    </div>
  );
};

export default Header;
