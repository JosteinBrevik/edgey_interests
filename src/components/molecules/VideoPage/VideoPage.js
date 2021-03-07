import './VideoPage.css';
import VideoPlayer from '../../atoms/VideoPlayer/VideoPlayer';
import BackButton from '../../atoms/BackButton/BackButton';

const VideoPage = ({ videoID }) => {
  return (
    <body className='VideoPage-body'>
      <div className='backButton-wrapper'>
        <BackButton BackPage='office' />
      </div>

      <div className='video-wrapper'>
        <VideoPlayer videoID={videoID} />
      </div>
    </body>
  );
};

export default VideoPage;
