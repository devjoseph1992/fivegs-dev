import Head from 'next/head';
import { Text } from '@chakra-ui/react';
import { getFeaturedProducts, getFeaturedProduct } from '@/utils/contentful';

export async function getStaticPaths() {
 const data = await getFeaturedProducts();
 return {
  fallback: false,
  paths: data.productsCollection.items.map((product) => ({
   params: { slug: product.slug },
  })),
 };
}
export async function getStaticProps(context) {
 const data = await getFeaturedProduct(context.params.slug);
 console.log(data);
 return {
  props: { products: data.productsCollection.items },
 };
}

export default function Product({ products }) {
 return (
  <>
   <Head>
    <title>FiveGiftShop</title>
   </Head>
   hello from children
   {products.map((product) => (
    <>
     <Text>{product.name}</Text>
    </>
   ))}
  </>
 );
}
