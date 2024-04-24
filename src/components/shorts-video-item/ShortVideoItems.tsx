import { useState } from "react";
import { Video } from "pexels";
import ReactPlayer from "react-player";
import { useAppContext } from "./../../context/App.context";
import { Text } from "../../utils/Text.styles";
import { getTitle } from "../../utils/videos";
import {
  ShortsVideoThumbnail,
  StyledShortVideoItems,
} from "./ShortVideoItems.styles";

interface IShortsVideoItemProps {
  video: Video;
}

const ShortVideoItems = ({ video }: IShortsVideoItemProps) => {
  const [playTrailer, setPlayTrailer] = useState(false);
  const { isMenuSmall, setVideoToWatch } = useAppContext();
  const TITLE_LENGTH = 50;

  return (
    <StyledShortVideoItems
      onMouseOver={() => setPlayTrailer(true)}
      onMouseOut={() => setPlayTrailer(false)}
      onClick={() => setVideoToWatch(video.id)}
    >
      <ShortsVideoThumbnail $isMenuSmall={isMenuSmall}>
        {playTrailer ? (
          <ReactPlayer
            width={"100%"}
            height={"100%"}
            controls={false}
            volume={1}
            muted={false}
            style={{ height: "100%", width: "100%" }}
            playing={playTrailer}
            url={video.video_files[0].link}
          />
        ) : (
          <img src={video.image} alt="thumbnail" />
        )}
      </ShortsVideoThumbnail>

      <Text className="videoItem">
        {getTitle(video.url).slice(0, TITLE_LENGTH)}
        {getTitle(video.url).length > TITLE_LENGTH && "..."}
      </Text>
      <Text className="details">{video.duration}M views</Text>
    </StyledShortVideoItems>
  );
};

export default ShortVideoItems;
