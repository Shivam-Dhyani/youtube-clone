import { createContext, useEffect, useState } from "react";
import { fetchDataFromAPI } from "../utils/api";

export const Context = createContext();

export const AppContext = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState("New");
  const [mobileMenu, setMobileMenu] = useState(false);

  const fetchSelectedDataCategory = (query) => {
    setIsLoading(true);
    fetchDataFromAPI(`search/?q=${query}`)
      .then(({ contents }) => {
        console.log(contents);
        setSearchResults(contents);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchSelectedDataCategory(selectedCategories);
  }, [selectedCategories]);

  return (
    <Context.Provider
      value={{
        isLoading,
        setIsLoading,
        searchResults,
        setSearchResults,
        selectedCategories,
        setSelectedCategories,
        mobileMenu,
        setMobileMenu,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
