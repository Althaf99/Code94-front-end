import { css } from "@emotion/react";
import * as colors from "@mui/material/colors";
import { colorPallet } from "../../constents";
const styles = (theme) => {
  const head = css`
    font-family: Satoshi, sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 19px;
    line-height: 25px;
    color: ${colorPallet.blue};
  `;

  const row = css`
    background: rgba(255, 255, 255, 0.11);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(6.9px);
    -webkit-backdrop-filter: blur(6.9px);
    border: 7px rgba(255, 255, 255, 0.82);
    border-width: 60px;
    height: 66px;
  `;

  const cell = css`
    font-family: Satoshi, sans-serif;
    font-style: normal;
    font-size: 16px;
    font-weight: bold;
    color: Black;
    padding: 4px;
  `;

  const cellDeleted = css`
    font-family: Satoshi, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    color: #878787;
  `;

  const textTruncate = css`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    &:last-child {
      text-align: right;
    },
  `;

  const textTruncateTextWrap = css`
    overflow: hidden;
    text-overflow: ellipsis;
    &:last-child {
      text-align: right;
    },
  `;
  const tableHeaderForSticky = css`
    position: sticky;
    z-index: 999;
  `;

  return {
    head,
    row,
    cell,
    cellDeleted,
    // hoveredCell,
    textTruncate,
    textTruncateTextWrap,
    tableHeaderForSticky,
  };
};

export default styles;
