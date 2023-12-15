import { createContext, useEffect, useState } from "react";
import { fetchDataFromAPI } from "../utils/api";

export const Context = createContext();

export const AppContext = (props) => {
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [searchCategories, setSearchCategories] = useState("New");
  const [mobileMenu, setMobileMenu] = useState(false);

  const fetchSelectedCategoryData = (query) => {
    setLoading(true);
    fetchDataFromAPI(`search/?q=${query}`).then(({ contents }) => {
      console.log(contents);
      setSearchResults(contents);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchSelectedCategoryData(searchCategories);
  }, [searchCategories]);

  return (
    <Context.Provider
      value={
        (loading,
        setLoading,
        searchResults,
        setSearchResults,
        searchCategories,
        setSearchCategories,
        mobileMenu,
        setMobileMenu)
      }
    >
      {props.children}
    </Context.Provider>
  );
};
