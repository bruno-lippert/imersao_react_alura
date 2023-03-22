import React, { useContext } from "react";
import { StyledTimeline } from "../../../timeline/styledTimeline";
import { VideoInformationProvider } from "../../videoInfo";
import YouTube from "react-youtube";



export default function TimelineVideoPage() {
  const context = useContext(VideoInformationProvider);
  console.log(context.videoTitle)
  console.log(context.videoId)

  const videoId = context.videoId;

  return (
    <StyledTimeline>
      <YouTube videoId={videoId}></YouTube>
      <h2>{context.videoTitle}</h2>
    </StyledTimeline>
  );
}
