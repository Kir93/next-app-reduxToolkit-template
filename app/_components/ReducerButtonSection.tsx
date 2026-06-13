'use client';

import { login, logout } from '@store/user';

import { useAppDispatch, useAppSelector } from '@utils/useTypeRedux';

import Button from '@components/ui/Button';

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
    <Button onClick={onClickButton} className="mt-2">
      {me === null ? 'Log In' : 'Log Out'}
    </Button>
  );
};

export default ReducerButtonSection;
