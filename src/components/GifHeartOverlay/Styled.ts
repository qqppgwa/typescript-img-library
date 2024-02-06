import styled from 'styled-components';

export const Overlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  color: white;
  justify-content: center;
  align-items: center;
  background-image: url(like.png);
  background-size: 24px;
  background-repeat: no-repeat;
  background-position: bottom 5px right 5px;
  opacity: 0.3;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }

  &.like{
    opacity: 1;
  }
`;
