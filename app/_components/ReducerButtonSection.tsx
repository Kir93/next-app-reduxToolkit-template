'use client';

import { Button } from '@base-ui/react/button';

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
    <Button
      type="button"
      onClick={onClickButton}
      className="mt-2 rounded-md bg-primary-900 px-4 py-2 font-medium text-white transition-colors hover:bg-primary-800 focus-visible:ring-2 focus-visible:ring-primary-900 focus-visible:ring-offset-2 focus-visible:outline-none"
    >
      {me === null ? 'Log In' : 'Log Out'}
    </Button>
  );
};

export default ReducerButtonSection;
