import { ComponentProps } from 'react';

import Link from 'next/link';

type IProps = ComponentProps<typeof Link>;

export default function NextLink({ href, children, ...rest }: IProps) {
  return (
    <Link href={href} {...rest}>
      {children}
    </Link>
  );
}
