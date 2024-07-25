import { css } from "@emotion/react";

const styles = () => {
  const container = css`
    display: flex;
    flex-direction: column;
  `;

  const label = css`
    padding-top: 10px;
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

  return {
    container,
    label,
    required,
    invalid,
    errorTextField,
  };
};

export default styles;
