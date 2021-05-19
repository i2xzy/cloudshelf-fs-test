import React from 'react';
import client from '../../apollo-client';
import PageWithBreadcrumbs from '../../components/layouts/PageWithBreadcrumbs';
import ProductInfo, { GET_PRODUCT } from '../../components/ProductInfo';
import { GET_PRODUCTS } from '../../components/Products';
import { ProductEdge } from '../../types';

const Post = ({ product }) => {
  return (
    <PageWithBreadcrumbs title={product.title}>
      <ProductInfo product={product} />
    </PageWithBreadcrumbs>
  );
};

export default Post;

export async function getStaticProps({ params }) {
  const { data } = await client.query({
    query: GET_PRODUCT,
    variables: { handle: params.handle },
  });

  return {
    props: {
      product: data.productByHandle,
    },
  };
}

export async function getStaticPaths() {
  const { data } = await client.query({
    query: GET_PRODUCTS,
  });

  const products: ProductEdge[] = data.products.edges;

  const paths = products.map(({ node }) => ({
    params: { handle: node.handle },
  }));
  return {
    paths,
    fallback: false,
  };
}
