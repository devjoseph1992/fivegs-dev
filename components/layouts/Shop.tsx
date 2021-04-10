import {
 Box,
 Stack,
 HStack,
 Heading,
 Text,
 VStack,
 useColorModeValue,
 List,
 ListItem,
 ListIcon,
 Button,
 Image,
} from '@chakra-ui/react';

export default function Shop() {
 return (
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
    <Box
     mb={4}
     shadow='base'
     borderWidth='1px'
     alignSelf={{ base: 'center', lg: 'flex-start' }}
     borderColor={useColorModeValue('gray.200', 'gray.500')}
     borderRadius={'xl'}
    >
     <Box
      rounded={'lg'}
      mt={-12}
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
       objectFit={'cover'}
       src={product.photoUrl}
      />
     </Box>
     <VStack
      bg={useColorModeValue('gray.50', 'gray.700')}
      py={4}
      borderBottomRadius={'xl'}
     >
      <Box w='80%' pt={7}>
       <Button w='full' colorScheme='red' variant='outline'>
        Start trial
       </Button>
      </Box>
     </VStack>
    </Box>
   </Stack>
  </Box>
 );
}
