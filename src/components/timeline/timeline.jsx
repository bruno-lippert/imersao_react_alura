import React from "react";
import Favorites from "../favorites/favorites";
import { StyledTimeline } from "../Timeline";
import config from '../../../config.json'

export default function Timeline(props) {
  const playlistNames = Object.keys(props.playlists); //retorna as chaves dos objetos(nomes dos objetos)
  return (
    <div>
      <StyledTimeline>
        {playlistNames.map((playlistName) => {
          const videos = props.playlists[playlistName];
          return (
            <section key={playlistName}>
              <h2>{playlistName}</h2>
              <div>
                {videos.filter((video) =>{
                  return video.title.toLowerCase().includes(props.searchValue.toLowerCase())
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
