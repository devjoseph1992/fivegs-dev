import Navbar from '@/components/layouts/Navbar';
import { ChakraProvider } from '@chakra-ui/react';
import Footer from '@/components/layouts/Footer';

function MyApp({ Component, pageProps }) {
 return (
  <ChakraProvider resetCSS>
   <Navbar />
   <Component {...pageProps} />
   <Footer />
  </ChakraProvider>
 );
}

export default MyApp;
