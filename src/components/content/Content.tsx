import { useAppContext } from "../../context/App.context"
import Categories from "../categories/Categories"
import HomePageVideos from "../homepage-videos/HomePageVideos";
import { LoadingBackdrop, StyledContent } from "./Content.styles"

const Content = () => {
  const { isFetchingVideos } = useAppContext();
  return (
    <StyledContent>
      <Categories />
      <HomePageVideos />
      {isFetchingVideos && <LoadingBackdrop />}
    </StyledContent>
  )
}

export default Content