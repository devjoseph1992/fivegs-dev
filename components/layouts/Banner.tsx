import {
 Flex,
 Stack,
 Text,
 Button,
 useBreakpointValue,
 VStack,
} from '@chakra-ui/react';

export default function Banner() {
 return (
  <Flex
   w={'full'}
   h={'80vh'}
   backgroundImage={
    'url(https://images.unsplash.com/photo-1558368204-cc52a4a4e519?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDl8fHNob3BwaW5nJTIwYmFnfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)'
   }
   backgroundSize={'cover'}
   backgroundPosition={'center center'}
  >
   <VStack
    w={'full'}
    justify={'center'}
    px={useBreakpointValue({ base: 4, md: 8 })}
    bgGradient={'linear(to-r, blackAlpha.600, transparent)'}
   >
    <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
     <Text
      color={'white'}
      fontWeight={700}
      lineHeight={1.2}
      fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}
     >
      Find your Gift's item
     </Text>
     <Stack direction={'row'}>
      <Button
       bg={'blue.400'}
       rounded={'full'}
       color={'white'}
       _hover={{ bg: 'blue.500' }}
      >
       Shop Now!!
      </Button>
      <Button
       bg={'whiteAlpha.300'}
       rounded={'full'}
       color={'white'}
       _hover={{ bg: 'whiteAlpha.500' }}
      >
       Show me more
      </Button>
     </Stack>
    </Stack>
   </VStack>
  </Flex>
 );
}
