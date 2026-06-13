import { FC, ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}

const AppLayout: FC<IProps> = ({ children }) => (
  <div className="mx-auto mt-auto mb-0 flex min-h-screen min-w-[414px] px-[21px] sm:min-w-[768px] sm:px-[22px] lg:min-w-[1200px]">
    {children}
  </div>
);

export default AppLayout;
