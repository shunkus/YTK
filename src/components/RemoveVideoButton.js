import React from "react";
import { Button } from "@material-ui/core";

const RemoveVideoButton = (props) => {
  return (
    <Button variant="contained" fullWidth onClick={props.onRemoveVideoClicked}>
      Remove Video
    </Button>
  );
};

export default RemoveVideoButton;
