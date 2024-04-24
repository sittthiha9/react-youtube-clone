import { Video } from "pexels";
import {
  MoreLessButton,
  MoreLessContainer,
  ShortsVideoContainer,
  StyledVideoShorts,
  VideoShortsHeading,
} from "./VideoShorts.styles";
import { SiYoutubeshorts } from "react-icons/si";
import { Text } from "../../utils/Text.styles";
import { useAppContext } from "../../context/App.context";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import ShortVideoItems from "../shorts-video-item/ShortVideoItems";

interface IVideoShortProps {
  videos: Video[];
}

const VideoShorts = ({ videos }: IVideoShortProps) => {
  const [showLess, setShowLess] = useState(true);
  const videoList = showLess ? videos.slice(0, videos.length / 2) : videos;
  const { text } = useAppContext();

  return (
    <StyledVideoShorts>
      <VideoShortsHeading>
        <SiYoutubeshorts size={25} color="red" />
        <Text>{text.shorts}</Text>
      </VideoShortsHeading>
      <ShortsVideoContainer>
        {videoList.map((video, index) => (
          <ShortVideoItems video={video} />
        ))}
      </ShortsVideoContainer>
      <MoreLessContainer>
        <MoreLessButton onClick={() => setShowLess((state) => !state)}>
          <Text>{showLess ? text.showMore : text.showLess}</Text>
          {showLess ? (
            <IoIosArrowDown className="icon" size={20} />
          ) : (
            <IoIosArrowUp className="icon" size={20} />
          )}
        </MoreLessButton>
      </MoreLessContainer>
    </StyledVideoShorts>
  );
};

export default VideoShorts;
