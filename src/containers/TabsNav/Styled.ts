import styled from 'styled-components';

export const NavWrapper = styled.nav`
  display: flex;
  font-size: 20px;
  align-items: center;
  padding: 20px;
  margin: 0 10px;
  border-bottom: 1px solid #ccc;
`;

export const LogoLink = styled.h1`
  border-right: 1px solid #ccc;
  padding: 0 30px;
  margin-right: 30px;
  font-weight: 100;
  color: #555;
  cursor: pointer;
  span {
    font-weight: 500;
    color: #4a4a4a;
  }
`;

export const Tabs = styled.div`
  display: flex;
  gap: 20px;
`;

export const Tab = styled.div`
  color: #ccc;
  &.active {
    color: #4a4a4a;
  }
`;
