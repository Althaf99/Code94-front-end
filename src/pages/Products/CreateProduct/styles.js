import { css } from "@emotion/react";
import { colorPallet } from "../../../constents";

const styles = () => {
  const topCards = css`
    padding-top: 10px;
    padding-bottom: 30px;
    flex: 1;
  `;

  const container = css`
    flex: 1;
  `;

  const icon = css`
    margin-top: 100px;
  `;
  const subHeading = css`
    font-size: 24px;
    color: ${colorPallet.blue};
  `;

  const label = css`
    padding-top: 10px;
    font-size: 19px;
    font-weight: 500;
    padding-bottom: 10px;
  `;

  const imageUpload = css`
    index: 999;
  `;

  const description = css`
    margin-bottom: 50px;
  `;
  return {
    topCards,
    icon,
    subHeading,
    description,
    label,
    container,
    imageUpload,
  };
};

export default styles;
