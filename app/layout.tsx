import '@styles/global.css';
import type { Metadata } from 'next';

import ChakraUIProvider from '@providers/ChakraUIProvider';
import ReactQueryProvider from '@providers/ReactQueryProvider';
import { notoSans } from '@configs/bigContents';
import { AppLayout } from '@components/Layout';

export const metadata: Metadata = {
  title: 'NextJS App Router Zustand ReactQuery Template',
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
        <ReactQueryProvider>
          <ChakraUIProvider>
            <AppLayout>{children}</AppLayout>
          </ChakraUIProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
