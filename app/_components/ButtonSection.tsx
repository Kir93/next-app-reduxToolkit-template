'use client';

import { FC, useState } from 'react';

import { Button } from '@base-ui/react/button';

import { cn } from '@lib/utils';

interface IProps {
  hello?: boolean;
}

const ButtonSection: FC<IProps> = ({ hello }) => {
  const [test, setTest] = useState(false);
  const onClickTest = () => setTest((prev) => !prev);

  return (
    <div className="rounded-lg bg-gray-100 p-4">
      <p className="text-lg">컴포넌트의 경우 state 존재{test && !hello ? '유무로' : ''}</p>
      <Button
        type="button"
        onClick={onClickTest}
        className={cn(
          'mt-2 rounded-md px-4 py-2 font-medium text-white transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none',
          test
            ? 'bg-primary-900 ring-primary-900 hover:bg-primary-800'
            : 'bg-secondary-900 ring-secondary-900 hover:bg-secondary-800'
        )}
      >
        Test
      </Button>
    </div>
  );
};

export default ButtonSection;
