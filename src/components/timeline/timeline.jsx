import React, { useContext } from "react";
import Favorites from "../favorites/favorites";
import { StyledTimeline } from "./styledTimeline";
import config from "../../../config.json";
import VideoInfoProvider, { VideoInformationProvider } from "../videoPage/videoInfo";
import Link from 'next/link';

export default function Timeline({ playlists, searchValue, sliderButtonIsOn }) {
  const playlistNames = Object.keys(playlists); //retorna as chaves dos objetos(nomes dos objetos)
  const context = useContext(VideoInformationProvider)
  return (
    <div>
      <VideoInfoProvider>
        <StyledTimeline>
          {playlistNames.map((playlistName) => {
            const videos = playlists[playlistName];
            return (
              <section key={playlistName}>
                <h2>{playlistName}</h2>
                <div>
                  {videos
                    .filter((video) => {
                      return video.title
                        .toLowerCase()
                        .includes(searchValue.toLowerCase());
                    })
                    .map((video) => {
                      return (
                        <Link href="/videoPage.jsx">
                          <img src={video.thumb} onClick={() => context.getVideoData(video.title)}/>
                          <span id="videoTitle">{video.title}</span>
                        </Link>
                        
                      );
                    })}
                </div>
              </section>
            );
          })}
        </StyledTimeline>
        <Favorites favorites={config.favorites} />
      </VideoInfoProvider>
    </div>
  );
}
