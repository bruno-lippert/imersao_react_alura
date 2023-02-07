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
            <section>
              <h2>{playlistName}</h2>
              <div>
                {videos.map((video) => {
                  return (
                    <a href={video.url}>
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
