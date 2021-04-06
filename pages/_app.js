import { ChakraProvider } from '@chakra-ui/react';
import Container from '@/components/layouts/Container';

function MyApp({ Component, pageProps }) {
 return (
  <ChakraProvider resetCSS>
   <Container>
    <Component {...pageProps} />
   </Container>
  </ChakraProvider>
 );
}

export default MyApp;
