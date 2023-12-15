import { createContext, useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/Api";

export const Context = createContext();

export const AppContext = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState(false);
  const [selectCategories, setSelectCategories] = useState("new");
  const [mobileMenu, setMobileMenu] = useState(false);

  const fetchSelectedDataCategory = (query) => {
    setIsLoading(true);
    fetchDataFromApi(`search/?q=${query}`)
      .then(({ contents }) => {
        console.log(contents);
        setSearchResults(contents);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchSelectedDataCategory(selectCategories);
  }, [selectCategories]);

  return (
    <Context.Provider
      value={{
        isLoading,
        setIsLoading,
        searchResults,
        setSearchResults,
        selectCategories,
        setSelectCategories,
        mobileMenu,
        setMobileMenu,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
