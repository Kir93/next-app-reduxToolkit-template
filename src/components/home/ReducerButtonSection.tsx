'use client';

import { Button } from '@chakra-ui/react';

import { login, logout } from '@store/user';

import { useAppDispatch, useAppSelector } from '@utils/useTypeRedux';

const ReducerButtonSection: React.FC = () => {
  const dispatch = useAppDispatch();
  const { me } = useAppSelector((state) => state.user);
  const onClickButton = () => {
    if (me === null) {
      dispatch(login());
    } else {
      dispatch(logout());
    }
  };

  return (
    <Button colorPalette="primary" onClick={onClickButton}>
      {me === null ? 'Log In' : 'Log Out'}
    </Button>
  );
};

export default ReducerButtonSection;
