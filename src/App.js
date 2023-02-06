import React, { useState, useEffect } from "react";
import {
  Container,
  AppBar,
  Toolbar,
  Typography,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core";
import VideosComponent from "./components/VideosComponent";
import AddVideoComponent from "./components/AddVideoComponent";
import "./styles.css";

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: "#DC472E",
    },
  },
});

export default function App(props) {
  const [videos, setVideos] = useState(props.videos);
  useEffect(() => {
    const videosString = JSON.stringify(videos);
    localStorage.setItem("videos", videosString);
  });
  return (
    <ThemeProvider className="App" theme={theme}>
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
            if (
              prompt("What is the answer to 12 multiplied by 12?") === "144"
            ) {
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
    </ThemeProvider>
  );
}
