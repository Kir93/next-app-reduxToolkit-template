import { Box, Text } from '@chakra-ui/react';

import CommonBar from '@atoms/common/CommonBar';

import { HomeButtonSection, ReducerButtonSection } from '@components/homes';

export default function Home() {
  return (
    <Box w="100%">
      <HomeButtonSection />
      <Text fontSize="lg">Home Style!</Text>
      <CommonBar />
      <ReducerButtonSection />
    </Box>
  );
}
