import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react";
import { ITranslations, LANGUAGE } from "../utils/translations";

interface IAppContextValue {
  theme: "light" | "dark";
  language: "english" | "french";
  toggleLanguage: () => void;
  toggleTheme: () => void;
  text: ITranslations;
  searchBarText: string;
  setSearchBarText:Dispatch<SetStateAction<string>>;
}
const AppContext = createContext<IAppContextValue | null>(null)

export const useAppContext = () => {
  const appContent = useContext(AppContext)

  if(!appContent) {
    throw new Error("There is no context")
  }

  return appContent;
}

interface IAppContextProviderProps {
  children: ReactNode;
}

export const AppContextProvider = ({ children }: IAppContextProviderProps) => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [language, setLanguage] = useState<"english" | "french">("english")
  const [searchBarText, setSearchBarText] = useState("")

  const toggleTheme = () => {
    setTheme(theme => theme === "light" ? "dark" : 'light')
  }

  const toggleLanguage = () => {
    setLanguage(language => language === "english" ? "french" : 'english')
  }
  
  const value = {
    theme,
    language,
    toggleLanguage,
    text: LANGUAGE[language],
    toggleTheme,
    searchBarText,
    setSearchBarText,
  }
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}