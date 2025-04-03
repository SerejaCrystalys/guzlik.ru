import { HeaderContainer, Logo } from "./header_styled";
import { isMobile } from "react-device-detect";
import { Navbar } from "./navbar";
import { useState } from "react";
import { MobileNavBar } from "./mobile_menu";

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
