import DarkModeSwitch from './DarkModeSwitch';
import { Flex, Stack, Text, Button } from '@chakra-ui/react';

const Navbar = () => {
 return (
  <Flex justifyContent='space-between' alignItems='center' p={4} bg={'red'}>
   <Stack spacing={2} isInline justifyContent='center' alignItems='center'>
    <Text>Logo</Text>
    <Button variant='solid' size='md'>
     Button text
    </Button>
    <Button variant='solid' size='md'>
     Button text
    </Button>
   </Stack>
   <Stack spacing={2} alignItems='center'>
    <DarkModeSwitch />
   </Stack>
  </Flex>
 );
};

export default Navbar;
