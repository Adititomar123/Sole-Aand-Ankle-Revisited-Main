import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, QUERIES, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import Icon from '../Icon';
import UnstyledButton from '../UnstyledButton';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import VisuallyHidden from '../VisuallyHidden';


const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <DesktopNav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </DesktopNav>
        <MobileNav>
          <UnstyledButton>
            <Icon id="shopping-bag" />
            <VisuallyHidden>Open cart</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton>
            <Icon id="search" />
            <VisuallyHidden>search</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" />
            <VisuallyHidden>Open menu</VisuallyHidden>
          </UnstyledButton>
        </MobileNav>
        <Filler />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
border-bottom: 1px solid ${COLORS.gray[300]};
display:flex;
padding:20px 32px;
align-items:baseline;
overflow:auto;

  @media ${QUERIES.tabletAndSmaller}{
    justify-content:space-between;
    align-items:center;
    border-top: 3px solid ${COLORS.gray[900]};
  }
  @media ${QUERIES.phoneAndSmaller}{
    padding-left:16px;
    padding-right:16px;
  }
  `;


const DesktopNav = styled.nav`
display:flex;
gap: clamp(1rem, 9.2vw - 4rem, 3rem);
margin: 0 48px;
@media ${QUERIES.tabletAndSmaller}{
  display:none;
}
`;
const MobileNav = styled.nav`
display:none;
@media ${QUERIES.tabletAndSmaller}{
  display:flex;
  gap:20px;
}
`;
const LogoWrapper = styled.div`
  flex:1;
  @media ${QUERIES.tabletAndSmaller}{
    flex:revert;
  }
`;
const Filler = styled.div`
  flex:1;
  @media ${QUERIES.tabletAndSmaller}{
    display:none;
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;
