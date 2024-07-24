import { css } from "@emotion/react";

const styles = (theme) => {
  const textBox = css`
    width: 757px;
    height: 64px;
    gap: 0px;
    border-radius: 50;
    opacity: 0px;
  `;
  const label = css`
    color: rgba(0, 24, 71, 1);
    font-family: Satoshi, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 0.875rem;
    padding-bottom: 4px;
    text-transform: uppercase;
  `;
  const error = css`
    padding-left: 4px;
    color: red;
  `;
  const section = css`
    flex-direction: row;
  `;
  return {
    label,
    error,
    section,
    textBox,
  };
};

export default styles;
