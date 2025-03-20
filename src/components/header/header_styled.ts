import styled from "styled-components";

import { isMobile } from "react-device-detect";

export const HeaderContainer = styled.div`
  position: fixed;
  top: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  width: ${isMobile ? `calc(100% - 80px)` : ` calc(100% - 360px)`};
  height: 50px;

  padding: ${isMobile ? `0px 40px` : ` 0px 180px`};
  background-color: var(--color-white);

  box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px,
    rgba(17, 17, 26, 0.1) 0px 0px 8px;

  z-index: 1000;
`;
