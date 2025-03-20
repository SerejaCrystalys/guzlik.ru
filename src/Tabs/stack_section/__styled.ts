import styled from "styled-components";

interface Props {
  language?: string;

  bordered?: boolean;
}
export const StackTitle = styled.h2<Props>`
  color: #000;
  font-family: "Inter", sans-serif;
  font-size: 90px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  @media (max-width: 599px) {
    color: #1a1a1c;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  @media (min-width: 600px) and (max-width: 899px) {
    /* стили для мобильных устройств (ландшафтная ориентация) и планшетов (портретная ориентация)  */
  }

  @media (min-width: 900px) and (max-width: 1199px) {
    /* стили для планшетов (ландшафтная ориентация) и маленьких десктопов  */
  }

  @media (min-width: 1200px) {
    /* стили для десктопов  */
  }
`;

export const StackContent = styled.div<Props>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 30px;

  /* border-top: 2px solid black; */

  color: #000;
  text-align: right;
  font-family: "Inter", sans-serif;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  :nth-child(-n + 2) {
    border-top: 2px solid black;
  }

  @media (max-width: 599px) {
    color: #1a1a1c;
    text-align: right;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    grid-template-columns: 1fr;
    :first-child {
      border-top: 2px solid black !important;
    }

    :nth-child(-n + 2) {
      border-top: none;
    }
  }

  @media (min-width: 600px) and (max-width: 899px) {
    /* стили для мобильных устройств (ландшафтная ориентация) и планшетов (портретная ориентация)  */
  }

  @media (min-width: 900px) and (max-width: 1199px) {
    /* стили для планшетов (ландшафтная ориентация) и маленьких десктопов  */
  }

  @media (min-width: 1200px) {
    /* стили для десктопов  */
  }
`;

export const StackItem = styled.div<Props>`
  display: grid;
  grid-template-columns: repeat(2, 100px) 1fr;
  padding: 27px 0;
  :nth-child(n) {
    border-top: none;
  }
  border-bottom: 2px solid black;
  vertical-align: middle;
  line-height: 77px;

  & img {
    margin: auto 0;
  }

  @media (max-width: 599px) {
    display: grid;
    grid-template-columns: 100px 1fr;
    padding: 10px 0;

    .stack_arrow {
      display: none;
    }
  }

  @media (min-width: 600px) and (max-width: 899px) {
    /* стили для мобильных устройств (ландшафтная ориентация) и планшетов (портретная ориентация)  */
  }

  @media (min-width: 900px) and (max-width: 1199px) {
    /* стили для планшетов (ландшафтная ориентация) и маленьких десктопов  */
  }

  @media (min-width: 1200px) {
    /* стили для десктопов  */
  }
`;
