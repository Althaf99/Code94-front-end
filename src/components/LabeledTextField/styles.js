import { css } from "@emotion/react";

const styles = () => {
  const container = css`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    flex-wrap: wrap;
  `;

  const gridContainer = css`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    flex-wrap: nowrap;
    padding: 30px;
    minheight: 100vh;
  `;

  const section = css`
    padding-top: 10px;
    height: 100%;
    padding-bottom: 30px;
  `;

  const label = css`
    padding: 6px 10px 0px 0px;
    font-size: 19px;
    font-weight: 500;
  `;

  const required = css`
    color: red;
  `;

  const invalid = css`
    color: red;
    font-size: 12px;
  `;

  const errorTextField = css`
    border-color: red !important;
  `;

  const textField = css`
    index: 9999;
  `;

  return {
    label,
    required,
    invalid,
    errorTextField,
    textField,
    container,
    section,
    gridContainer,
  };
};

export default styles;
