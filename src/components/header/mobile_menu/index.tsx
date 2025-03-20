import { useEffect, useRef } from "react";
import { MenuBody, MenuButton } from "./__styled";
import { Link } from "react-scroll";

interface Props {
  menu: boolean;
  setMenu: (e: boolean) => void;
}
export const MobileNavBar = ({ menu, setMenu }: Props) => {
  const menuRef = useRef<any>(null);

  useEffect(() => {
    if (!menu) return;
    const handleMouseClick = (e: any) => {
      if (!menuRef.current) return;
      if (!menuRef.current.contains(e.target) && e.target.id !== "menubutton") {
        setMenu(false);
      }
    };
    document.addEventListener("click", handleMouseClick);
    return () => {
      document.removeEventListener("click", handleMouseClick);
    };
  }, [menu, setMenu]);

  const ScrollHandle = () => {
    setTimeout(() => {
      setMenu(false);
    }, 500);
  };

  return (
    <>
      <MenuButton id="menubutton" onClick={() => setMenu(!menu)}>
        Menu
      </MenuButton>
      <MenuBody ref={menuRef} menu={menu}>
        <Link activeClass="qwe" smooth spy to="about" onClick={ScrollHandle}>
          <img src="/icons/arrow.svg" alt="arrow" />
          About
        </Link>
        {/* <Link
          activeClass="qwe"
          smooth
          spy
          to="stack"
          onClick={() => setMenu(false)}
        >
          <img src="/icons/arrow.svg" alt="arrow" />
          Stack
        </Link>
        <Link
          activeClass="qwe"
          smooth
          spy
          to="projects"
          onClick={() => setMenu(false)}
        >
          <img src="/icons/arrow.svg" alt="arrow" />
          Projects
        </Link> */}
        <Link
          activeClass="qwe"
          smooth
          spy
          to="sayhi"
          onClick={() => setMenu(false)}
        >
          <img src="/icons/arrow.svg" alt="arrow" />
          Say Hi
        </Link>
      </MenuBody>
    </>
  );
};
