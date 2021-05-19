import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://dev-cloudshelf.myshopify.com/api/2021-04/graphql.json',
  headers: {
    'X-Shopify-Storefront-Access-Token': 'e78aab9ceb653dc9c6748c32da2bc114',
  },
  cache: new InMemoryCache(),
});

export default client;
