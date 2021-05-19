import Image from 'next/image';
import React from 'react';
import formatCurrency from '../../lib/formatCurrency';
import { ProductNode } from '../../types';
import {
  Wrapper,
  Images,
  Title,
  Details,
  Price,
  Description,
} from './ProductInfo.styled';

interface Props {
  product: ProductNode;
}

const ProductInfo = ({ product }: Props) => {
  const images = product.images.edges.map(({ node }) => node);
  return (
    <Wrapper>
      <Images>
        {images.map(image => (
          <Image
            key={image.id}
            src={image.originalSrc}
            alt={product.title}
            height={image.height}
            width={image.width}
            objectFit="contain"
          />
        ))}
      </Images>
      <Details>
        <Title>{product.title}</Title>
        <Price>
          {formatCurrency(product.priceRange.maxVariantPrice.amount)}
        </Price>
        <Description
          dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
        />
      </Details>
    </Wrapper>
  );
};

export default ProductInfo;
