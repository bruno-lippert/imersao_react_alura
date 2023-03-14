import styled from "styled-components";
import config from "../../../config.json";

export const StyledBanner = styled.div`
  width: 100%;
  height: 230px;
  background-image: url(${config.banner});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
`;

export const StyledHeader = styled.div`
  .perfilImg {
    width: 80px;
    height: 80px;
    border-radius: 50px;
  }
  .user-info {
    margin-top: 0px;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
    background-color: ${(props) => props.theme.colors.backgroundLevel1};
  }

  .headerImgs {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
  }

  .perfil {
    display: flex;
    align-items: center;
    gap: 10px;
    background-color: ${(props) => props.theme.colors.backgroundLevel1};

    > div > h2, p {
      background-color: ${(props) => props.theme.colors.backgroundLevel1};
    }
  }
`;
