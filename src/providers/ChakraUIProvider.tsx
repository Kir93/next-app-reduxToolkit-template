'use client';

import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '@styles/theme';

export default function ChakraUIProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
