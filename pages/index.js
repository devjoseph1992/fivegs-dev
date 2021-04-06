import Head from 'next/head';
import { getFeaturedProducts } from '../utils/contentful';

export async function getStaticProps() {
 const data = await getFeaturedProducts();
 return {
  props: { products: data.productsCollection.items },
 };
}

export default function Home({ products }) {
 return (
  <>
   <Head>
    <title>Create Next App</title>
    <link rel='icon' href='/favicon.ico' />
   </Head>
   {products.map((product) => (
    <div>
     {/* <h1>{product.brandNameCollection.items[0].name}</h1> */}
     {/* <h2>{product.catNameCollection.items[0].name}</h2> */}
     <p>{product.pName}</p>
    </div>
   ))}
   contentfull
  </>
 );
}
