import React from "react";
import { Grid } from "@material-ui/core";
import VideoComponent from "./VideoComponent";
import RemoveVideoButton from "./RemoveVideoButton";

const VideosComponent = (props) => {
  const videos = props.videos.map((videoId, index) => {
    return (
      <Grid item xs={6} lg={3} key={index}>
        <VideoComponent videoId={videoId} />
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
