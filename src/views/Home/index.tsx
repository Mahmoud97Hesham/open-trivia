import { Stack, useTheme } from '@mui/material';
import Button from 'components/Button';
import CustomModal from 'components/Modal';
import TextField from 'components/TextField';
import { ChangeEvent, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'store';
import {
  setDifficulty,
  resetGameSettings
} from 'store/gameSettings/gameSettings.slice';
import { setUserName, resetUserName } from 'store/user/user.slice';
import { difficulty } from 'utils/constants';

const Home = () => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const currentDifficulty = useAppSelector(
    state => state.gameSettings.difficulty
  );
  const [name, setName] = useState('');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    dispatch(resetGameSettings());
    dispatch(resetUserName());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onUserNameChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setName(event.target.value);
  };

  const onButtonClick = (difficulty: difficulty) => {
    dispatch(setDifficulty(difficulty));
  };

  const onClose = () => {
    setOpen(false);
  };

  const onPlay = () => {
    if (name && currentDifficulty) {
      dispatch(setUserName(name));
    } else {
      setOpen(true);
    }
  };

  return (
    <>
      <Stack
        height='100vh'
        width='100%'
        alignItems='center'
        justifyContent='center'
        gap='1rem'
      >
        <Stack
          alignItems='center'
          justifyContent='center'
          gap='2rem'
          width='38.5rem'
          height='28rem'
          borderRadius='1.375rem'
          sx={{ backgroundColor: theme.palette.primary[300] }}
        >
          <TextField
            placeholder='Enter your name'
            value={name}
            onChange={onUserNameChange}
          />
          <Stack justifyContent='center' gap='2rem' direction='row'>
            <Button
              layout='primary'
              buttonSize='md'
              title='Easy'
              onClick={() => {
                onButtonClick(difficulty.EASY);
              }}
              disabled={currentDifficulty === difficulty.EASY}
            />
            <Button
              layout='primary'
              buttonSize='md'
              title='Medium'
              onClick={() => {
                onButtonClick(difficulty.MEDIUM);
              }}
              disabled={currentDifficulty === difficulty.MEDIUM}
            />
            <Button
              layout='primary'
              buttonSize='md'
              title='Hard'
              onClick={() => {
                onButtonClick(difficulty.HARD);
              }}
              disabled={currentDifficulty === difficulty.HARD}
            />
          </Stack>
        </Stack>
        <Button
          layout='primary'
          buttonSize='sm'
          title='Play'
          onClick={onPlay}
        />
      </Stack>
      <CustomModal
        open={open}
        onClose={onClose}
        modalTitle='Missing Data'
        description='Please make sure that you entered a name and chose a difficulty.'
      />
    </>
  );
};

export default Home;
