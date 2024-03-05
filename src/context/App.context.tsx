import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useEffect, useState } from "react";
import { ITranslations, LANGUAGE } from "../utils/translations";
import { Video, Videos, createClient } from "pexels";
import { PEXELS_API_KEY } from "../utils/pexels";

interface IAppContextValue {
  theme: "light" | "dark";
  language: "english" | "thai";
  toggleLanguage: () => void;
  toggleTheme: () => void;
  text: ITranslations;
  searchBarText: string;
  setSearchBarText: Dispatch<SetStateAction<string>>;
  isMenuSmall: boolean;
  toggleMenuSize: () => void;
  activeMenuText: string;
  activeCategory: string;
  setActiveCategory: Dispatch<SetStateAction<string>>;
  videos: Video[];
  isFetchingVideos: boolean;
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

const client = createClient(PEXELS_API_KEY);

export const AppContextProvider = ({ children }: IAppContextProviderProps) => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [language, setLanguage] = useState<"english" | "thai">("english")
  const [searchBarText, setSearchBarText] = useState("");
  const [isMenuSmall, setIsMenuSmall] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeMenuText, setActiveMenuText] = useState("home")
  const [activeCategory, setActiveCategory] = useState("all")
  const [videos, setVideos] = useState<Video[]>([]);
  const [isFetchingVideos, setIsFetchingVideos] = useState(true);

  useEffect(() => {
    activeCategory && fetchVideo(activeCategory);
  }, [activeCategory, searchBarText])

  useEffect(() => {
    searchBarText && fetchVideo(searchBarText);
  }, [searchBarText])

  const fetchVideo = async (query: string) => {
    setIsFetchingVideos(true);
    try {
      if (!query) {
        return;
      }
      const response = await client.videos.search({
        query,
        per_page: 44
      })
      setVideos((response as Videos).videos)
    } catch (error) {
      console.log("There was an error fetching videos:", error)
    }
    setIsFetchingVideos(false);
  }

  const toggleTheme = () => {
    setTheme(theme => theme === "light" ? "dark" : 'light')
  }

  const toggleLanguage = () => {
    setLanguage(language => language === "english" ? "thai" : 'english')
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
    videos,
    isFetchingVideos,
  }
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}