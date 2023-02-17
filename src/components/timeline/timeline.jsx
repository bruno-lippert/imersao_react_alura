import React from "react";
import Favorites from "../favorites/favorites";
import { StyledTimeline } from "./styledTimeline";
import config from '../../../config.json'

export default function Timeline({playlists, searchValue, sliderButtonIsOn}) {
  const playlistNames = Object.keys(playlists); //retorna as chaves dos objetos(nomes dos objetos)
  return (
    <div>
      <StyledTimeline sliderButtonIsOn={sliderButtonIsOn}>
        {playlistNames.map((playlistName) => {
          const videos = playlists[playlistName];
          return (
            <section key={playlistName}>
              <h2>{playlistName}</h2>
              <div>
                {videos.filter((video) =>{
                  return video.title.toLowerCase().includes(searchValue.toLowerCase())
                }).map((video) => {
                  return (
                    <a key={video.url} href={video.url}>
                      <img src={video.thumb} />
                      <span>{video.title}</span>
                    </a>
                  );
                })}
              </div>
            </section>
          );
        })}
      </StyledTimeline>
      <Favorites favorites={config.favorites} />
    </div>
  );
}
