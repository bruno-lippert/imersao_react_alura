import styled from "styled-components";

export const StyledFavorites = styled.div `
padding: 16px;

.titleFavorites{
    padding: 0 0 16px 16px;
}

.favorites {
    display: flex;
    flex-direction: row;
}

img {
    border-radius: 50px;
}

a {
    width: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.nameFavorite {
    color: black;
}

`;