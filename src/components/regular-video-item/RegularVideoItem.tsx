import { useState } from "react";
import {
  RegularVideoContent,
  RegularVideoPic,
  RegularVideoThumbnail,
  RegularVideoTile,
  StyledRegularVideoItem,
  Time,
} from "./RegularVideoItem.styles";
import { Video } from "pexels";
import ReactPlayer from "react-player";
import { useAppContext } from "./../../context/App.context";
import { Text } from "../../utils/Text.styles";
import { getTitle } from "../../utils/videos";

interface IRegularVideoItemProps {
  video: Video;
  smallView?: boolean;
}

const RegularVideoItem = ({ video, smallView }: IRegularVideoItemProps) => {
  const [playTrailer, setPlayTrailer] = useState(false);
  const { isMenuSmall, setVideoToWatch } = useAppContext();
  const TITLE_LENGTH = 60;

  return (
    <StyledRegularVideoItem
      onMouseOver={() => setPlayTrailer(true)}
      onMouseOut={() => setPlayTrailer(false)}
      onClick={() => setVideoToWatch(video.id)}
      className={`${smallView && "smallView"}`}
    >
      <RegularVideoThumbnail
        $isMenuSmall={isMenuSmall}
        className={`${smallView && "smallView"}`}
      >
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
        <Time>
          <Text>
            {Math.floor(video.duration / 60)}:{Math.floor(video.duration % 60)}
          </Text>
        </Time>
      </RegularVideoThumbnail>

      <RegularVideoContent className={`${smallView && "smallView"}`}>
        <RegularVideoPic className={`${smallView && "smallView"}`}>
          <img src={video.image} alt="profile pic" />
        </RegularVideoPic>
        <RegularVideoTile className={`${smallView && "smallView"}`}>
          <Text className="videoItem">
            {getTitle(video.url).slice(0, TITLE_LENGTH)}
            {getTitle(video.url).length > TITLE_LENGTH && "..."}
          </Text>
          <Text className="name">{video.user.name}</Text>
          <Text className="details">
            {video.duration}M views
            <span className="dot">&#9679;</span>2 hours ago
          </Text>
        </RegularVideoTile>
      </RegularVideoContent>
    </StyledRegularVideoItem>
  );
};

export default RegularVideoItem;
