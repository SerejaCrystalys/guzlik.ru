import styled, { css } from "styled-components";
import { isMobile } from "react-device-detect";
import { JSX } from "react";

interface TitleProps {
  value: JSX.Element;
  contacts?: boolean;
}

const StyledContent = styled.p<TitleProps>`
  color: #000;
  font-family: sans-serif;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;

  margin: 0;

  /* word-wrap: break-word; */
  /* word-break: break-all;  */
  hyphens: auto;

  & a {
    text-decoration: none;
    color: #000;
    font-family: sans-serif;
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
  }

  a {
    overflow: hidden;
    position: relative;
    display: inline-block;
  }

  a::before,
  a::after {
    content: "";
    position: absolute;
    width: 100%;
    left: 0;
  }
  a::before {
    background-color: var(--color-red);
    height: 2px;
    bottom: 0;
    transform-origin: 100% 50%;
    transform: scaleX(0);
    transition: transform 0.3s cubic-bezier(0.76, 0, 0.24, 1);
  }
  a::after {
    content: attr(data-replace);
    height: 100%;
    top: 0;
    transform-origin: 100% 50%;
    transform: translate3d(200%, 0, 0);
    transition: transform 0.3s cubic-bezier(0.76, 0, 0.24, 1);
    color: var(--color-red);
  }

  a:hover::before {
    transform-origin: 0% 50%;
    transform: scaleX(1);
  }
  a:hover::after {
    transform: translate3d(0, 0, 0);
  }

  a span {
    display: inline-block;
    transition: transform 0.3s cubic-bezier(0.76, 0, 0.24, 1);
  }

  a:hover span {
    transform: translate3d(-200%, 0, 0);
  }

  ${isMobile
    ? css`
        font-size: 20px;
        line-height: 30px;
      `
    : css`
        font-size: 30px;
        line-height: 45px;
      `}

  ${({ contacts }) =>
    contacts
      ? css`
          & a {
            text-decoration: none;
            color: #000;
            font-family: sans-serif;
            ${isMobile ? `font-size: 20px;` : ``}
            font-style: normal;
            font-weight: 400;
          }
        `
      : ``}
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
