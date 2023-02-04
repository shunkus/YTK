import React, { useState } from "react";
import YouTube from "react-youtube";

const VideoComponent = (props) => {
  const [videoId, setVideoId] = useState(props.videoId);
  const resetVideo = () => {
    setVideoId("");
    setVideoId(props.videoId);
  }
  return (
    <YouTube videoId={videoId} onPause={resetVideo} onEnd={resetVideo} />
  );
};

export default VideoComponent;
