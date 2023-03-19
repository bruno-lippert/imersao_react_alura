import React, { createContext, useContext } from "react";

export const VideoInformationProvider = createContext({
  getVideoData: (videoTitle, videoUrl) => {
    
  }
});

export default function VideoInfoProvider(props) {
  return (
    <VideoInformationProvider.Provider>
      {props.children}
    </VideoInformationProvider.Provider>
  );
}
