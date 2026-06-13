'use client';

import { FC, useState } from 'react';

import Button from '@components/ui/Button';

interface IProps {
  hello?: boolean;
}

const ButtonSection: FC<IProps> = ({ hello }) => {
  const [test, setTest] = useState(false);
  const onClickTest = () => setTest((prev) => !prev);

  return (
    <div className="rounded-lg bg-gray-100 p-4">
      <p className="text-lg">컴포넌트의 경우 state 존재{test && !hello ? '유무로' : ''}</p>
      <Button variant={test ? 'primary' : 'secondary'} onClick={onClickTest} className="mt-2">
        Test
      </Button>
    </div>
  );
};

export default ButtonSection;
