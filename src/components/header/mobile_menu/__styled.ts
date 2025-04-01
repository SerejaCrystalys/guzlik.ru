import styled from "styled-components";

export const MenuButton = styled.div`
  color: #1a1a1c;
  text-align: right;
  font-family: "Inter", sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px; /* 150% */
`;

interface MenuProps {
  menu: boolean;
}

export const MenuBody = styled.div<MenuProps>`
  position: fixed;
  z-index: 1000;

  left: 0;
  float: bottom;
  bottom: 0px;
  width: calc(100vw - 60px);
  height: fit-content;

  border-radius: 8px 8px 0px 0px;
  background: #fff;
  box-shadow: 0px -10px 7px -7px rgba(144, 144, 144, 0.23);

  color: #1a1a1c;
  text-align: left;
  font-family: "Inter", sans-serif;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 30px 30px;

  display: grid;
  grid-template-rows: repeat(2, 80px);

  transition: transform 0.2s ease-in-out;
  transform: ${({ menu }) => (menu ? "translateY(0)" : "translateY(100%)")};

  & > *:nth-child(n) {
    text-align: left;
    align-items: center;
    vertical-align: middle;
    display: flex;
    justify-content: center;
    justify-content: left;
    & > img {
      margin-right: 25px;
    }
    /* background-color: black; */
  }
`;
