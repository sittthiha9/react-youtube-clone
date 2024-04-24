import {
  MoreVideosContainer,
  StyledWatchVideoContents,
} from "./WatchVideoContents.styles";
import Categories from "../categories/Categories";
import { useAppContext } from "../../context/App.context";
import RegularVideoItem from "../regular-video-item/RegularVideoItem";

const WatchVideoContents = () => {
  const { videos } = useAppContext();

  return (
    <StyledWatchVideoContents>
      <p>Left</p>
      <MoreVideosContainer>
        <Categories />
        {videos.map((video, index) => (
          <RegularVideoItem smallView key={index} video={video} />
        ))}
      </MoreVideosContainer>
    </StyledWatchVideoContents>
  );
};

export default WatchVideoContents;
