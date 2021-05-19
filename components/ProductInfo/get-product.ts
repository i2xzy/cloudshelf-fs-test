import gql from 'graphql-tag';

export const GET_PRODUCT = gql`
  query getProduct($handle: String!) {
    productByHandle(handle: $handle) {
      id
      handle
      title
      priceRange {
        maxVariantPrice {
          amount
        }
        minVariantPrice {
          amount
        }
      }
      descriptionHtml
      productType
      totalInventory
      images(first: 10) {
        edges {
          node {
            id
            originalSrc
            height
            width
          }
        }
      }
    }
  }
`;
