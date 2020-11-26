import "./VideoPlayer.css"

const VideoPlayer = ({ videoID }) => {
  return (
      <iframe
        title = "YoutubeVideo"
        className= "YoutubeVideo"
        src={"https://www.youtube.com/embed/" + videoID + "?autoplay=1"}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
  );
};

export default VideoPlayer;