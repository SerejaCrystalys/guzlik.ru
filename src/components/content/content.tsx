import styled, { css } from "styled-components";
import { isMobile } from "react-device-detect";
import { JSX } from "react";

interface TitleProps {
  value: JSX.Element;
}

const StyledContent = styled.p<TitleProps>`
  color: #000;
  font-family: sans-serif;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;

  cursor: default;

  margin: 0;
  hyphens: auto;

  ${isMobile
    ? css`
        font-size: 20px;
        line-height: 30px;
      `
    : css`
        font-size: 30px;
        line-height: 45px;
      `}
`;

const Content = (props: TitleProps) => {
  const { value } = props;
  return (
    <>
      <StyledContent {...props} lang="en">
        {value}
      </StyledContent>
    </>
  );
};
export default Content;
