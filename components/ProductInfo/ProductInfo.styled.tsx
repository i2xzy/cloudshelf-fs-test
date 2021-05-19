import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: ${props => props.theme.xlargeSpacer}px;
  box-sizing: border-box;
  overflow: auto;

  @media (max-width: 500px) {
    grid-template-columns: unset;
    grid-gap: ${props => props.theme.largeSpacer}px;
  }
`;

export const Images = styled.div`
  display: grid;
  grid-gap: ${props => props.theme.smallSpacer}px;

  @media (max-width: 500px) {
    overflow: auto;
    height: 280px;
    grid-auto-flow: column;
    grid-auto-columns: 200px;
  }
`;

export const Details = styled.div`
  display: grid;
  grid-auto-rows: max-content;
  grid-gap: ${props => props.theme.spacer}px;
  font-size: 14px;
`;

export const Title = styled.h1`
  margin: 0;
`;

export const Price = styled.span`
  font-weight: bold;
  font-size: 18px;
`;

export const Description = styled.div`
  h4 {
    margin: ${props => props.theme.spacer}px 0;
  }
  h3 {
    font-size: 14px;
  }
`;
