import React from 'react';
import client from '../apollo-client';
import Products, { GET_PRODUCTS } from '../components/Products';

const Home = ({ products, hasNextPage, endCursor }) => (
  <Products
    products={products}
    hasNextPage={hasNextPage}
    endCursor={endCursor}
  />
);

export default Home;

export async function getServerSideProps() {
  const { data } = await client.query({
    query: GET_PRODUCTS,
  });

  return {
    props: {
      products: data.products.edges || [],
      hasNextPage: data.products.pageInfo.hasNextPage,
      endCursor: data.products.edges[data.products.edges.length - 1].cursor,
    },
  };
}
