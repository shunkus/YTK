import React, { useState } from "react";
import { TextField, Button, Grid } from "@material-ui/core";

const AddVideoComponent = (props) => {
  const [videoUrl, setVideoUrl] = useState("");
  const getVideoIdFromUrl = (videoUrl) => {
    return videoUrl.replace(/^.+\/([^/]+)$/, "$1");
  };
  const isValidVideoUrl = (videoUrl) => {
    return videoUrl.match(/^https:\/\/youtu.be\/[^/]+$/);
  };
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <TextField
          label="Shared Video URL"
          value={videoUrl}
          fullWidth
          onChange={(e) => {
            setVideoUrl(e.target.value);
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <Button
          variant="contained"
          color="secondary"
          fullWidth
          onClick={() => {
            if (isValidVideoUrl(videoUrl)) {
              const videoId = getVideoIdFromUrl(videoUrl);
              props.onVideoAdded(videoId);
            }
            setVideoUrl("");
          }}
        >
          Add Video
        </Button>
      </Grid>
    </Grid>
  );
};

export default AddVideoComponent;
