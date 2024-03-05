import { useAppContext } from "../../context/App.context"
import RegularVideoItem from "../regular-video-item/RegularVideoItem";
import { RegularVideoThumbnailContainer, StyledHomePageVideos } from "./HomePageVideos.styels"

const HomePageVideos = () => {
  const { videos } = useAppContext();

  const FIRST_VIDEO_SECTION = videos.slice(0, 8);
  // const SECOND_VIDEO_SECTION = videos.slice(8, 20);
  // const THIRD_VIDEO_SECTION = videos.slice(20, 28);

  return (
    <StyledHomePageVideos>
      <RegularVideoThumbnailContainer>
        {FIRST_VIDEO_SECTION.map((video, index) => (
          <RegularVideoItem video={video} key={index}/>
        ))}
      </RegularVideoThumbnailContainer>
    </StyledHomePageVideos>
  )
}

export default HomePageVideos