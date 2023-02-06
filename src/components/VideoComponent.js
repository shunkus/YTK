import React, { useState } from "react";
import YouTube from "react-youtube";

const VideoComponent = (props) => {
  const [videoId, setVideoId] = useState(props.videoId);
  const resetVideo = () => {
    setVideoId("");
    setTimeout(() => {
      setVideoId(props.videoId);
    }, 3000);
  };
  return (
    <YouTube
      videoId={videoId}
      onPause={resetVideo}
      onEnd={resetVideo}
      opts={{ playerVars: { modestbranding: 1, controls: 0, playsinline: 0 } }}
    />
  );
};

export default VideoComponent;
