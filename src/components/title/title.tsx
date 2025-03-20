import styled, { css } from "styled-components";
import { isMobile } from "react-device-detect";
import { JSX } from "react";

interface TitleProps {
  value?: JSX.Element;
  top?: boolean;
  centered?: boolean;
}

const StyledTitle = styled.h2<TitleProps>`
  color: #1a1a1c;
  font-family: sans-serif;
  ${({ top }) =>
    top
      ? css`
          margin-top: 0px;
        `
      : ``}
  ${({ centered }) =>
    centered
      ? css`
          text-align: center;
        `
      : ``}
  

  font-style: normal;
  font-weight: 600;
  line-height: normal;
  ${isMobile
    ? css`
        font-size: 32px;
      `
    : css`
        font-size: 96px;
      `}
`;

const Title = (props: TitleProps) => {
  const { value } = props;

  return (
    <>
      <StyledTitle {...props}>{value}</StyledTitle>
    </>
  );
};
export default Title;
