import "./VideoPage.css";
import VideoPlayer from "../../atoms/VideoPlayer/VideoPlayer";
import BackButton from "../../atoms/BackButton/BackButton";

const VideoPage = ({ videoID }) => {
  return (
    <body className="VideoPage-body">
      <div className="video-back-button">
        <BackButton BackPage="" />
      </div>
      <VideoPlayer videoID={videoID} />
    </body>
  );
};

export default VideoPage;
