import { useState } from "react";
import { Brand, Buttons, Item, Items, NavbarDesktop, NavbarResponsive, NavbarResponsiveItem, NavbarResponsiveItems, Navs } from "./styles";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png";

export default function Header() {
  const [responsiveMenu, setResponsiveMenu] = useState<boolean>(false);

  return (
    <Navs>
      <NavbarDesktop>
        <Brand src={Logo} alt="Brand" />
        <Items>
          <Item color="active">
            <NavLink to="/">Sobre</NavLink>
          </Item>
          <Item>
            <NavLink to="/">Embaixadores</NavLink>
          </Item>
          <Item>
            <NavLink to="/">Parceiros</NavLink>
          </Item>
          <Item>
            <NavLink to="/">Mídia</NavLink>
          </Item>
          <Item>
            <NavLink to="/">Agenda</NavLink>
          </Item>
          <Item>
            <NavLink to="/">Startups</NavLink>
          </Item>
        </Items>
        <Buttons>
          <button>Acessar</button>
          <button>Associe-se</button>
        </Buttons>
      </NavbarDesktop>
      <NavbarResponsive>
        <Brand src={Logo} alt="Brand" />
        <button onFocus={() => setResponsiveMenu(!responsiveMenu)} onClick={() => setResponsiveMenu(!responsiveMenu)}>
          <i className="bx bx-menu-alt-right"></i>
        </button>
        {responsiveMenu && (
          <NavbarResponsiveItems opend={responsiveMenu}>
            <button onFocus={() => setResponsiveMenu(!responsiveMenu)} onClick={() => setResponsiveMenu(!responsiveMenu)}>
              <i onClick={() => alert("oii")} className="bx bx-x"></i>
            </button>
            <NavbarResponsiveItem>
              <NavLink to="/">Sobre</NavLink>
            </NavbarResponsiveItem>
            <NavbarResponsiveItem>
              <NavLink to="/">Embaixadores</NavLink>
            </NavbarResponsiveItem>
            <NavbarResponsiveItem>
              <NavLink to="/">Parceiros</NavLink>
            </NavbarResponsiveItem>
            <NavbarResponsiveItem>
              <NavLink to="/">Mídia</NavLink>
            </NavbarResponsiveItem>
            <NavbarResponsiveItem>
              <NavLink to="/">Agenda</NavLink>
            </NavbarResponsiveItem>
            <NavbarResponsiveItem>
              <NavLink to="/">Startups</NavLink>
            </NavbarResponsiveItem>
          </NavbarResponsiveItems>
        )}
      </NavbarResponsive>
    </Navs>
  );
}
