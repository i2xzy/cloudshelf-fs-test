type PageInfo = { hasNextPage: boolean };

type ImageNode = {
  id: string;
  originalSrc: string;
  height: string;
  width: string;
};

type ImageConnection = {
  pageInfo: PageInfo;
  edges: { node: ImageNode }[];
};

export type ProductNode = {
  id: string;
  handle: string;
  title: string;
  images: ImageConnection;
  priceRange: {
    maxVariantPrice: {
      amount: number;
    };
  };
  descriptionHtml?: string;
};

export type ProductEdge = {
  cursor: String;
  node: ProductNode;
};
