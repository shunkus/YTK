import React from "react";

const VideoComponent = (props) => {
  const videoSrc = `https://www.youtube.com/embed/${props.videoId}`;
  return (
    <iframe
      title={props.videoId}
      src={videoSrc}
      frameBorder="0"
      allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};

export default VideoComponent;
