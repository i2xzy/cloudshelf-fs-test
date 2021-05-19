import React from 'react';

import { useRouter } from 'next/router';
import Image from 'next/image';
import InfiniteScroll from 'react-infinite-scroller';
import { useQuery } from '@apollo/client';

import { ProductEdge } from '../../types';
import formatCurrency from '../../lib/formatCurrency';
import { GET_PRODUCTS } from './get-products';
import { Wrapper, Item, Details, Title, Price } from './Products.styled';

interface Props {
  products: ProductEdge[];
  hasNextPage: boolean;
  endCursor: string;
}

const Products = (props: Props) => {
  const router = useRouter();

  const { data, fetchMore } = useQuery(GET_PRODUCTS);

  const hasNextPage: boolean =
    data?.products.pageInfo.hasNextPage || props.hasNextPage;
  const items: ProductEdge[] = data?.products.edges || props.products;

  // attempt to load more data by scrolling
  const loadMore = () => {
    fetchMore({ variables: { after: items[items.length - 1].cursor } });
  };

  return (
    <InfiniteScroll loadMore={loadMore} hasMore={hasNextPage} element={Wrapper}>
      {items.map(({ node }) => (
        <Item
          key={node.id}
          onClick={() => router.push(`/product/${node.handle}`)}
        >
          <Image
            src={node.images.edges[0].node.originalSrc}
            alt={node.title}
            width={node.images.edges[0].node.width}
            height={node.images.edges[0].node.height}
            objectFit="contain"
          />
          <Details>
            <Title>{node.title}</Title>
            <Price>
              {formatCurrency(node.priceRange.maxVariantPrice.amount)}
            </Price>
          </Details>
        </Item>
      ))}
    </InfiniteScroll>
  );
};

export default Products;
