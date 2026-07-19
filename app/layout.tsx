import './globals.css';

import { notoSans } from '@config/bigContents';

import ReduxProvider from '@provider/ReduxProvider';

import AppLayout from './_components/AppLayout';

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
          <AppLayout>{children}</AppLayout>
        </ReduxProvider>
      </body>
    </html>
  );
}
