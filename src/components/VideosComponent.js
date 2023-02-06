import React from "react";
import { Grid } from "@material-ui/core";
import VideoComponent from "./VideoComponent";
import RemoveVideoButton from "./RemoveVideoButton";

const VideosComponent = (props) => {
  const videos = props.videos.map((videoId, index) => {
    return (
      <Grid item xs={12} sm={6} md={6} lg={3} key={index}>
        <div className="video-container">
          <VideoComponent videoId={videoId} />
          <div className="video-overlay"></div>
        </div>
        <RemoveVideoButton
          onRemoveVideoClicked={() => {
            props.onRemoveVideoClicked(videoId);
          }}
        />
      </Grid>
    );
  });
  return (
    <Grid container spacing={1}>
      {videos}
    </Grid>
  );
};

export default VideosComponent;
