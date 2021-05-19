import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  padding: ${props => props.theme.xlargeSpacer}px;
  grid-gap: ${props => props.theme.xlargeSpacer}px;
  background: rgba(194, 210, 189, 0.3);
  height: 100vh;
  box-sizing: border-box;
  overflow: auto;

  &:after {
    content: '';
    height: 1em;
  }
`;

export const Item = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: 1fr auto;
  padding: ${props => props.theme.spacer}px;
  background: white;
  border-radius: 4px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  transition: box-shadow 500ms;
  &:hover {
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;

export const Details = styled.div`
  display: grid;
  grid-gap: ${props => props.theme.smallSpacer}px;
  padding: ${props => props.theme.spacer}px;
  font-size: 14px;
`;

export const Title = styled.h4`
  margin: 0;
`;

export const Price = styled.span``;
