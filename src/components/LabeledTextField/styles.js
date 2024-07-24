import { css } from "@emotion/react";

const styles = () => {
  const containerStyles = css`
    display: flex;
    flex-direction: column;
  `;

  const labelStyles = css``;

  const requiredStyles = css`
    color: red;
  `;

  const invalidStyles = css`
    color: red;
    font-size: 12px;
  `;

  const errorTextFieldStyles = css`
    border-color: red !important;
  `;

  return {
    containerStyles,
    labelStyles,
    requiredStyles,
    invalidStyles,
    errorTextFieldStyles,
  };
};

export default styles;
