import './VideoPage.css';
import VideoPlayer from '../../atoms/VideoPlayer/VideoPlayer'

const VideoPage = ({videoID}) =>{
  return (
      <body className="VideoPage-body">
        <VideoPlayer videoID={videoID} />
      </body>
  );
}

export default VideoPage;
