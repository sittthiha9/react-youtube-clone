import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react";
import { ITranslations, LANGUAGE } from "../utils/translations";

interface IAppContextValue {
  theme: "light" | "dark";
  language: "english" | "french";
  toggleLanguage: () => void;
  toggleTheme: () => void;
  text: ITranslations;
  searchBarText: string;
  setSearchBarText: Dispatch<SetStateAction<string>>;
  isMenuSmall: boolean;
  toggleMenuSize: () => void;
  activeMenuText: string;
  activeCategory: string;
  setActiveCategory: Dispatch<SetStateAction<string>>
}
const AppContext = createContext<IAppContextValue | null>(null)

export const useAppContext = () => {
  const appContent = useContext(AppContext)

  if (!appContent) {
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
  const [searchBarText, setSearchBarText] = useState("");
  const [isMenuSmall, setIsMenuSmall] = useState(false);
  const [activeMenuText, setActiveMenuText] = useState("home")
  const [activeCategory, setActiveCategory] = useState("all")

  const toggleTheme = () => {
    setTheme(theme => theme === "light" ? "dark" : 'light')
  }

  const toggleLanguage = () => {
    setLanguage(language => language === "english" ? "french" : 'english')
  }

  const toggleMenuSize = () => {
    setIsMenuSmall(state => !state)
  }

  const value = {
    theme,
    language,
    toggleLanguage,
    text: LANGUAGE[language],
    toggleTheme,
    searchBarText,
    setSearchBarText,
    isMenuSmall,
    toggleMenuSize,
    activeMenuText,
    setActiveCategory,
    activeCategory,
  }
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}