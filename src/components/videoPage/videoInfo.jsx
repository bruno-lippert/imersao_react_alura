import React, { createContext, useState } from "react";

export const VideoInformationProvider = createContext({
  videoTitle: "",
  videoId: ""
});

export default function VideoInfoProvider(props) {
  return (
    <VideoInformationProvider.Provider >
      {props.children}
    </VideoInformationProvider.Provider>
  );
}
