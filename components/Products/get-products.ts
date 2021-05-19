import gql from 'graphql-tag';

export const GET_PRODUCTS = gql`
  query getProducts($after: String) {
    products(first: 25, after: $after) {
      pageInfo {
        hasNextPage
      }
      edges {
        cursor
        node {
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
          productType
          totalInventory
          images(first: 1) {
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
    }
  }
`;
