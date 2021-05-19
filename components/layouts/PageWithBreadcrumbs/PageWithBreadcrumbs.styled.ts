import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  grid-gap: ${props => props.theme.largeSpacer}px;
  padding: ${props => props.theme.xlargeSpacer}px;
  height: 100vh;
  box-sizing: border-box;

  @media (max-width: 500px) {
    grid-gap: ${props => props.theme.spacer}px;
    padding: ${props => props.theme.largeSpacer}px;
  }
`;

export const Breadcrumbs = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: max-content;
  grid-gap: ${props => props.theme.smallSpacer}px;

  font-size: 12px;
`;

export const A = styled.a`
  font-weight: bold;
  cursor: pointer;
`;
