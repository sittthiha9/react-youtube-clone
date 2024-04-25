import {
  MoreVideosContainer,
  StyledWatchVideoContents,
  SubscribeButton,
  UserAccount,
  VideoDetail,
  VideoDetailsActions,
  VideoDetailsInfo,
  VideoScreen,
  WatchVideoContainer,
} from "./WatchVideoContents.styles";
import { useAppContext } from "../../context/App.context";
import RegularVideoItem from "../regular-video-item/RegularVideoItem";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getTitle } from "../../utils/videos";
import { LoadingBackdrop } from "../content/Content.styles";
import ReactPlayer from "react-player";
import { Text } from "../../utils/Text.styles";
import { RegularVideoPic } from "../regular-video-item/RegularVideoItem.styles";

const WatchVideoContents = () => {
  const { videos, fetchVideo, videoToWatchData, isFetchingVideos, text } =
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
            style={{ width: "100%" }}
            playing={true}
            url={videoToWatchData?.video_files[0].link}
          />
        </VideoScreen>
        <VideoDetail>
          <Text className="videoScreenTitle">
            {getTitle(videoToWatchData?.url + "")}
          </Text>
          <VideoDetailsActions>
            <VideoDetailsInfo>
              <RegularVideoPic>
                <img src={videoToWatchData?.image} alt="profile" />
              </RegularVideoPic>
              <UserAccount>
                <Text className="name">{videoToWatchData?.user.name}</Text>
                <Text className="subscribers">{videoToWatchData?.duration}k {text.subscribers}</Text>
              </UserAccount>
              <SubscribeButton>
                {text.subscribe}
              </SubscribeButton>
            </VideoDetailsInfo>
          </VideoDetailsActions>
        </VideoDetail>
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
