import '@styles/global.css';
import type { Metadata } from 'next';

import ReduxProvider from '@providers/ReduxProvider';
import ChakraUIProvider from '@providers/ChakraUIProvider';

import { notoSans } from '@configs/bigContents';
import { AppLayout } from '@components/Layout';

export const metadata: Metadata = {
  title: 'NextJS App Router Redux Toolkit Template',
  description: 'Simple NextJS App Route Template',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko' className={notoSans.variable}>
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
