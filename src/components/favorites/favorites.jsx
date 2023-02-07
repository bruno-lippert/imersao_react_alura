import React from "react";
import { StyledFavorites } from "./favoritesCSS";

export default function Favorites(props) {
    const favorites = Object.keys(props.favorites)
    const youtubers = props.favorites[favorites]
    return (
        <StyledFavorites>
            <section>
                <h3 className="titleFavorites">Favoritos</h3>

                <div className="favorites">
                    {youtubers.map((favorites) => {
                        return (
                            <a href={favorites.url} target="_blank">
                                <img src={favorites.img} className="imgFavorite"/>
                                <p className="nameFavorite">{favorites.name}</p>
                            </a>
                        );
                    })}
                </div>
            </section>
        </StyledFavorites>

    );
}