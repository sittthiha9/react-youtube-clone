import {
  MoreVideosContainer,
  StyledWatchVideoContents,
  VideoScreen,
  WatchVideoContainer,
} from "./WatchVideoContents.styles";
import Categories from "../categories/Categories";
import { useAppContext } from "../../context/App.context";
import RegularVideoItem from "../regular-video-item/RegularVideoItem";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getTitle } from "../../utils/videos";
import { LoadingBackdrop } from "../content/Content.styles";
import ReactPlayer from "react-player";

const WatchVideoContents = () => {
  const { videos, fetchVideo, videoToWatchData, isFetchingVideos } =
    useAppContext();
  const { id } = useParams();

  document.title = getTitle(videoToWatchData?.url!);

  useEffect(() => {
    if (id) {
      fetchVideo(id);
    }
  }, [id]);

  if (isFetchingVideos) {
    return <LoadingBackdrop />;
  }

  return (
    <StyledWatchVideoContents>
      <WatchVideoContainer>
        <VideoScreen>
          <ReactPlayer
            width={"100%"}
            height={"100%"}
            controls={true}
            volume={1}
            muted={false}
            style={{  width: "100%" }}
            playing={true}
            url={videoToWatchData?.video_files[0].link}
          />
        </VideoScreen>
      </WatchVideoContainer>
      <MoreVideosContainer>
        {/* <Categories /> */}
        {videos.map((video, index) => (
          <RegularVideoItem smallView key={index} video={video} />
        ))}
      </MoreVideosContainer>
    </StyledWatchVideoContents>
  );
};

export default WatchVideoContents;
