'use client';

import { Button } from '@chakra-ui/react';
import { login, logout } from '@reducers/user';
import { useTypeDispatch, useTypeSelector } from '@utils/useTypeRedux';

const ReducerButtonSection: React.FC = () => {
  const dispatch = useTypeDispatch();
  const { me } = useTypeSelector((state) => state.user);
  const onClickButton = () => {
    if (me === null) {
      dispatch(login());
    } else {
      dispatch(logout());
    }
  };

  return (
    <Button colorScheme='primary' onClick={onClickButton}>
      {me === null ? 'Log In' : 'Log Out'}
    </Button>
  );
};

export default ReducerButtonSection;
