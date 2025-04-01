import styled, { css } from "styled-components";
import { isMobile } from "react-device-detect";

export const ContactsContainer = styled.div`
  height: 100%;
  border-radius: 40px;
  background-color: var(--color-white);

  ${isMobile
    ? css`
        padding: 40px 20px;
      `
    : css`
        padding: 70px 40px;
      `}
`;

export const Contacts = styled.div`
  display: flex;

  margin-inline: auto;
  gap: 30px;

  /* & div:first-child {
    border-top: 1px solid black;
    border-bottom: 1px solid black;
  }
  & div:not(:first-child) {
    border-bottom: 1px solid black;
  }
  & div {
    padding: 15px 0;
  } */
`;

export const ContactItem = styled.div`
  ${isMobile
    ? css`
        grid-template-columns: 40px 1fr;

        column-gap: 40px;
        max-height: 40px;
        & img {
          height: 40px;
          width: 40px;
        }
        height: 40px;
      `
    : css`
        grid-template-columns: 90px repeat(2, 1fr);
        column-gap: 20px;
        max-height: 90px;
        height: 90px;
      `}
`;
