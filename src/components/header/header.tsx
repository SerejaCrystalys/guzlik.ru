import { HeaderContainer } from "./header_styled";
import { isMobile } from "react-device-detect";
import { Navbar } from "./navbar";
import { useState } from "react";
import { MobileNavBar } from "./mobile_menu";
import styled from "styled-components";

const Logo = styled.div`
  color: #1a1a1c;
  text-align: right;
  font-family: "Inter", sans-serif;
  font-size: ${isMobile ? `20px` : `25px`};
  font-style: normal;
  font-weight: 600;
  line-height: 30px; /* 150% */
`;

const Header = () => {
  const [menu, setMenu] = useState<boolean>(false);
  return (
    <>
      <HeaderContainer>
        <Logo>{"<Sergey />"}</Logo>
        {isMobile ? <MobileNavBar menu={menu} setMenu={setMenu} /> : <Navbar />}
      </HeaderContainer>
    </>
  );
};
export default Header;
