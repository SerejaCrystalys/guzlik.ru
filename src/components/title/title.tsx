import styled, { css } from "styled-components";
import { isMobile } from "react-device-detect";
import { JSX } from "react";

interface TitleProps {
  value?: JSX.Element;
  top?: boolean;
  centered?: boolean;
  decorations?: string;
  fontSize?: number;
}

const StyledTitle = styled.h2<TitleProps>`
  padding-bottom: 5px;

  color: #1a1a1c;
  font-family: sans-serif;
  font-size: ${({ fontSize }) => fontSize + "px"} !important;
  font-style: normal;
  line-height: normal;
  font-weight: 600;

  cursor: default;

  text-decoration: ${({ decorations }) => decorations};

  ${({ top }) =>
    top &&
    css`
      margin-top: 0px;
    `}

  ${({ centered }) =>
    centered &&
    css`
      text-align: center;
    `}

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
