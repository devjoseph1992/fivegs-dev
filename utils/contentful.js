import { GraphQLClient, gql } from 'graphql-request';
const endpoint = `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_SPACE_ID}`;

const graphQLClient = new GraphQLClient(endpoint, {
 headers: {
  authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
 },
});

export const getFeaturedProducts = async () => {
 const productsQuery = gql`
  {
   productsCollection(where: { featured: true }) {
    items {
     pName
     brandNameCollection(limit: 1) {
      items {
       name
      }
     }
    }
   }
  }
 `;

 return graphQLClient.request(productsQuery);
};
