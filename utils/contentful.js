import { GraphQLClient, gql } from 'graphql-request';
const endpoint = `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_SPACE_ID}`;

const graphQLClient = new GraphQLClient(endpoint, {
 headers: {
  authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
 },
});

export const getFeaturedProduct = async (slug) => {
 const productsQuerys = gql`
  query getFeaturedProduct($slug: String!) {
   productsCollection(where: { slug: $slug }) {
    items {
     sys {
      id
     }
     name
     pictureUrl
     categories
    }
   }
  }
 `;
 return graphQLClient.request(productsQuerys, {
  slug,
 });
};

export const getFeaturedProducts = async () => {
 const productsQuery = gql`
  {
   productsCollection(where: { featured: true }) {
    items {
     sys {
      id
     }
     categories
     pictureUrl
     slug
    }
   }
  }
 `;

 return graphQLClient.request(productsQuery);
};
