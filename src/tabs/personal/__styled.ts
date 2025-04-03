import { isMobile } from "react-device-detect";
import styled, { css } from "styled-components";

export const ProjectsContainer = styled.div`
  display: grid;

  ${isMobile
    ? css`
        grid-template-rows: repeat(2, 1fr);
      `
    : css`
        grid-template-columns: repeat(2, 1fr);
      `}

  gap: 20px;
  width: 100%;
  height: fit-content;
`;

export const ProjectItem = styled.div`
  display: flex;
  ${isMobile
    ? css`
        flex-direction: column;
      `
    : css`
        flex-direction: row;
      `}

  gap: 10px;
  position: relative;
  min-height: 250px;
  border: 1px solid #eee;
  border-radius: 5px;
  padding: 10px;

  & img {
    width: 300px;
    height: 250px;
    border-radius: 5px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
`;

export const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  position: relative;
  padding-bottom: 40px;
`;

export const LinkContainer = styled.div`
  position: absolute;
  bottom: 10px;
  left: 0;
  display: flex;
  gap: 20px;

  & a {
    color: black;
    text-decoration: none;
    font-weight: 600;
    display: inline-block;
    padding-bottom: 5px;
    position: relative;
  }

  & a:before {
    content: "";
    position: absolute;
    width: 40%;
    height: 1px;
    bottom: 0;
    right: 0%;
    border-bottom: 3px solid black;
    transition: width 0.3s ease;
  }

  & a:hover:before {
    width: 100%;
  }
`;
