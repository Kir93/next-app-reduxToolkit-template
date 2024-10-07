import CustomColorBar from '@atoms/CustomColorBar/CustomColorBar';
import { Text } from '@chakra-ui/react';
import CommonBar from '@components/Common/CommonBar';
import { HomeButtonSection, ZustandButtonSection } from '@components/Home';

export default function Home() {
  return (
    <main>
      <HomeButtonSection />
      <Text size='lg'>Home Style!</Text>
      <CommonBar />
      <CustomColorBar color='#ff9595' />
      <ZustandButtonSection />
    </main>
  );
}
