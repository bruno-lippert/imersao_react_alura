import styled from "styled-components";

export const StyledRegisterVideo = styled.div`
  .add-video {
    width: 70px;
    height: 70px;
    border-radius: 50px;
    background-color: red;
    color: white;
    border: none;
    font-size: 1.5em;
    position: fixed;
    cursor: pointer;
    bottom: 16px;
    right: 16px;
  }

  .close-modal {
    color: ${({ theme }) => theme.colors.textColorBase};
    background-color: transparent;
    border: none;
    margin-left: 85%;
    cursor: pointer;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 100;
    background-color: rgb(0, 0, 0, 0.5);
  }

  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: baseline;
    background-color: ${({ theme }) => theme.colors.backgroundLevel2};
    gap: 10px;
    padding: 30px 0 30px 0;
    width: 400px;
    height: 600px;
    border-radius: 30px;
  }

  .video-info {
    height: 30px;
    width: 300px;
    border: none;
    border-radius: 10px;
    color: ${({ theme }) => theme.colors.textColorBase};
    padding: 0 5px 0 5px;
  }

  .register-videoButton {
    height: 30px;
    width: 150px;
    border: none;
    border-radius: 10px;
    background-color: red;
  }
`;
