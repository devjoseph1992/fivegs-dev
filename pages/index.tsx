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
} from '@chakra-ui/react';
import Shop from '@/components/layouts/Shop';

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

   <Box py={12}>
    <VStack spacing={2} textAlign='center'>
     <Heading as='h1' fontSize='4xl'>
      Shop Featured
     </Heading>
     <Text fontSize='lg' color={'gray.500'}>
      Start with 14-day free trial. No credit card needed. Cancel at anytime.
     </Text>
    </VStack>
    <Stack
     direction={{ base: 'column', md: 'row' }}
     textAlign='center'
     justify='center'
     spacing={{ base: 4, lg: 10 }}
     py={10}
    >
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
         <Button w='full' colorScheme='green' variant='outline'>
          Shop {product.catNameCollection.items[0].name}
         </Button>
        </Box>
       </VStack>
      </Box>
     ))}
    </Stack>
   </Box>
  </>
 );
}
