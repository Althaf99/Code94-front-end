import { css } from "@emotion/react";

const styles = () => {
  const body = css`
    background-attachment: fixed;
    background-size: cover;
    display: grid;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 40%;
    margin-left: 30%;
  `;

  const container = css`
    width: 56rem;
    height: max-content;
    box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    position: relative;
    z-index: 1;
    background: inherit;
    overflow: hidden;
    padding: 50px;

    &:before {
      content: "";
      position: absolute;
      background: inherit;
      z-index: -1;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      box-shadow: inset 0 0 2000px rgba(255, 255, 255, 0.5);
      filter: blur(100px);
      margin: -20px;
    }
  `;

  const image = css`
    max-width: 90%;
    max-height: 90%;
    display: flex;
    z-index: 99;
    position: relative;
  `;

  return {
    container,
    image,
    body,
  };
};

export default styles;
