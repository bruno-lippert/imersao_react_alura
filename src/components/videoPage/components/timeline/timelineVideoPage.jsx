import React, { useContext } from "react";
import { StyledTimeline } from "../../../timeline/styledTimeline";
import { VideoInformationProvider } from "../../videoInfo";

export default function TimelineVideoPage() {
  const context = useContext(VideoInformationProvider);

  return (
    <StyledTimeline>
      <iframe
        width="727"
        height="409"
        src={context.getVideoUrl.toString()}
        title={context.getVideoTitle.toString()}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </StyledTimeline>
  );
}
