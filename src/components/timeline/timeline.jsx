import React, { useContext } from "react";
import Favorites from "../favorites/favorites";
import { StyledTimeline } from "./styledTimeline";
import config from "../../../config.json";
import VideoInfoProvider, { VideoInformationProvider } from "../videoPage/videoInfo";
import Link from 'next/link';

export default function Timeline({ playlists, searchValue }) {
  const playlistNames = Object.keys(playlists); //retorna as chaves dos objetos(nomes dos objetos)
  const context = useContext(VideoInformationProvider);

  let getVideoData = (title, id) => {
    context.videoTitle = title;
    context.videoId = id;
  };

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
                        <Link href="/videoPage" key={video.url}>
                          <img src={video.thumb} onClick={getVideoData(video.title, video.id)}/>
                          {console.log(video.id)}
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
