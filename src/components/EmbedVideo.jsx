import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";

const EmbedVideo = () => {
  const opts1 = {
    height: "300",
    width: "480",
    playerVars: {
      autoplay: 1,
    },
  };

  return <YouTube videoId="RfIZk7hhCGw" opts={opts1} />;
};

export default EmbedVideo;
