import React, { useState, useContext, useEffect } from "react";
import { lang } from "./data";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isLanguageBarOpen, setIsLanguageBarOpen] = useState(false);
  const [language, setLanguage] = useState("English");
  const [langList, setLangList] = useState([]);

  // language selector
  const openLanguageBar = () => {
    setIsLanguageBarOpen(true);
  };
  const closeLanguageBar = () => {
    setIsLanguageBarOpen(false);
  };
  const activeLanguage = (id) => {
    const active = lang.find((item) => item.id === id);
    setLanguage(active.language);
  };
  useEffect(() => {
    const newLangList = lang.filter((item) => item.language !== language);
    setLangList(newLangList);
    setIsLanguageBarOpen(false)
  }, [language]);

  return (
    <AppContext.Provider
      value={{
        openLanguageBar,
        closeLanguageBar,
        isLanguageBarOpen,
        langList,
        language,
        activeLanguage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
