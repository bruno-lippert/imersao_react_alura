import React, { createContext, useContext } from "react";

export const VideoInformationProvider = createContext({
  getVideoTitle: (videoTitle) => {
    return videoTitle
  },
  getVideoUrl: (videoUrl) => {
    return videoUrl
  }
});

export default function VideoInfoProvider(props) {
  return (
    <VideoInformationProvider.Provider>
      {props.children}
    </VideoInformationProvider.Provider>
  );
}
