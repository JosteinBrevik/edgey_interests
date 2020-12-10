import "./VideoPlayer.css"

const VideoPlayer = ({ videoID }) => {
  return (
      <iframe
        title = "YoutubeVideo"
        className= "YoutubeVideo"
        src={ videoID }
        frameborder="0"
        allow="autoplay"
        allowFullScreen="allowfullscreen"
        mozallowfullscreen="mozallowfullscreen" 
        msallowfullscreen="msallowfullscreen" 
        oallowfullscreen="oallowfullscreen" 
        webkitallowfullscreen="webkitallowfullscreen"
      />
  );
};

export default VideoPlayer;