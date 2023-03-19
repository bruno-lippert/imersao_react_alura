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
        src="https://www.youtube.com/embed/FqJHwAW8x4Q"
        title="Resident Evil 4 Remake é SENSACIONAL - Crítica / Análise / Review SEM SPOILER"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </StyledTimeline>
  );
}
