import React, { useState, useEffect } from "react";
import { Container, AppBar, Toolbar, Typography } from "@material-ui/core";
import VideosComponent from "./components/VideosComponent";
import AddVideoComponent from "./components/AddVideoComponent";
import "./styles.css";

export default function App(props) {
  const [videos, setVideos] = useState(props.videos);
  useEffect(() => {
    const videosString = JSON.stringify(videos);
    localStorage.setItem("videos", videosString);
  });
  return (
    <div className="App">
      <AppBar color="secondary" position="static">
        <Toolbar>
          <Typography variant="h5" style={{ fontFamily: "Bebas Neue" }}>
            YouTube Keeper
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <VideosComponent
          videos={videos}
          onRemoveVideoClicked={(videoId) => {
            // eslint-disable-next-line no-restricted-globals
            if (prompt("What is the answer to 12 multiplied by 12?") === "144") {
              setVideos(videos.filter((id) => id !== videoId));
            }
          }}
        />
        <AddVideoComponent
          onVideoAdded={(videoId) => {
            setVideos(videos.concat([videoId]));
          }}
        />
      </Container>
    </div>
  );
}
