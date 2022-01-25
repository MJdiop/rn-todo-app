import { Text, Box, Center, VStack, useColorModeValue } from 'native-base';
import { ThemeToggle } from '../components';

export default function Main() {
  return (
    <Center
      _dark={{ bg: 'blueGray.900' }}
      _light={{ bg: 'blueGray.50' }}
      px={4}
      flex={1}
    >
      <VStack space={5} alignItems="center">
        <Box bg={useColorModeValue('red.500', 'yellow.500')} p={10}>
          <Text>Hello word </Text>
        </Box>
        <ThemeToggle />
      </VStack>
    </Center>
  );
}
