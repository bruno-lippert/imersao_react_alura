import React, { useContext } from "react";
import { StyledTimeline } from "../../../timeline/styledTimeline";
import { VideoInformationProvider } from "../../videoInfo";
import YouTube from "react-youtube";
import { StyledTimelineVidePages } from "./styledTimelineVideoPage";



export default function TimelineVideoPage() {
  const context = useContext(VideoInformationProvider);

  const videoId = context.videoId;

  return (
    <StyledTimeline>
      <StyledTimelineVidePages>
          <YouTube videoId={videoId}></YouTube>
          <h2>{context.videoTitle}</h2>
      </StyledTimelineVidePages>
    </StyledTimeline>
  );
}
