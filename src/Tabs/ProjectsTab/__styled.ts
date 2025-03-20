import styled from "styled-components";
interface Props {
  language: string;
}
export const ProjectsTitle = styled.h2<Props>`
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

export const ProjectContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 40%);
  grid-template-areas:
    "t t"
    "bl br";
  grid-template-rows: auto 1fr;
  column-gap: 20%;
  row-gap: 10px;
  color: #1a1a1c;
  font-family: "Inter", sans-serif;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 45px; /* 150% */
  &:not(:last-child) {
    margin-bottom: 40px;
    padding-bottom: 30px;
    border-bottom: 1.5px solid black;
  }

  & .react-3d-carousel {
    grid-area: t;
  }

  & h2 {
    margin-bottom: 60px;
    & a {
      color: #ea4335;
    }
  }
  word-wrap: normal;

  @media (max-width: 599px) {
    grid-template-areas:
      "t t"
      "bl bl"
      "br br";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px; /* 150% */
    row-gap: 10px;
    & h2 {
      margin-bottom: 20px;
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

export const ProjectInfo = styled.div`
  position: relative;
  grid-area: bl;
`;
export const ProjectRole = styled.div`
  position: relative;

  grid-area: br;
`;
