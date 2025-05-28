import { notoSans } from '@configs/bigContents';

import ChakraUIProvider from '@provider/ChakraUIProvider';
import ReduxProvider from '@provider/ReduxProvider';

import { AppLayout } from '@components/layouts';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NextJS App Router Redux Toolkit Template',
  description: 'Simple NextJS App Route Template'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={notoSans.variable}>
      <body>
        <ReduxProvider>
          <ChakraUIProvider>
            <AppLayout>{children}</AppLayout>
          </ChakraUIProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
