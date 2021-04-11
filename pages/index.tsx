import Head from 'next/head';
import { getFeaturedProducts } from '@/utils/contentful';
import Banner from '@/components/layouts/Banner';
import {
 Text,
 Image,
 Center,
 Box,
 VStack,
 Button,
 useColorModeValue,
 Flex,
 Stack,
 Heading,
 Grid,
 SimpleGrid,
} from '@chakra-ui/react';

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
    <title>FiveGiftShop</title>
   </Head>
   <Banner />
   <Flex justifyContent='center' alignItems='center'>
    <Box py={12}>
     <VStack spacing={2} textAlign='center'>
      <Heading as='h1' fontSize='4xl'>
       Shop Featured
      </Heading>
      <Text fontSize='lg' color={'gray.500'} pb={4}>
       Start with 14-day free trial. No credit card needed. Cancel at anytime.
      </Text>
     </VStack>
     <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
      {products.map((product) => (
       <Box
        key={product.sys.id}
        mb={4}
        shadow='base'
        borderWidth='1px'
        maxW={'330px'}
        w={'full'}
        alignSelf={{ base: 'center', lg: 'flex-start' }}
        borderColor={useColorModeValue('gray.200', 'gray.500')}
        borderRadius={'xl'}
       >
        <Box
         py={4}
         px={12}
         rounded={'lg'}
         pos={'relative'}
         height={'230px'}
         _after={{
          transition: 'all .3s ease',
          content: '""',
          w: 'full',
          h: 'full',
          pos: 'absolute',
          top: 5,
          left: 0,
          filter: 'blur(15px)',
          zIndex: -1,
         }}
         _groupHover={{
          _after: {
           filter: 'blur(20px)',
          },
         }}
        >
         <Image
          rounded={'lg'}
          height={230}
          width={282}
          src={product.pictureUrl}
          transform='scale(1.0)'
          transition='0.3s ease-in-out'
          _hover={{
           transform: 'scale(1.05)',
          }}
         />
        </Box>
        <VStack
         bg={useColorModeValue('gray.50', 'gray.700')}
         py={4}
         borderBottomRadius={'xl'}
        >
         <Box w='80%' pt={7}>
          <Button
           as={'a'}
           w='full'
           colorScheme='green'
           variant='outline'
           href={`/shop/${product.slug}`}
          >
           Shop {product.categories}
          </Button>
         </Box>
        </VStack>
       </Box>
      ))}
     </SimpleGrid>
    </Box>
   </Flex>
  </>
 );
}
