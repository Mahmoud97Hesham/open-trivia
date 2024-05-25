import { Stack, Typography, useTheme } from '@mui/material';
import Button from 'components/Button';
import CustomPieChart from 'components/PieChart';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { pathnames } from 'routes/pathnames';
import { useAppSelector } from 'store';

const Statistics = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const user = useAppSelector(state => state.user);
  const timer = useAppSelector(state => state.gameDetails.timer);
  const gameDetails = useAppSelector(state => state.gameDetails);

  useEffect(() => {
    if (!user.name) {
      navigate(pathnames.HOME);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onNewGame = () => {
    navigate(pathnames.HOME);
  };

  const createPieData = () => {
    const data = [];
    data.push({ name: 'Correct Count', value: gameDetails.correctCount });
    data.push({ name: 'Incorrect Count', value: gameDetails.incorrectCount });
    data.push({ name: 'Skipped Count', value: gameDetails.skippedCount });
    return data;
  };

  return (
    <Stack
      alignItems='center'
      justifyContent='space-around'
      width='100%'
      height='calc(100vh - 2rem)'
      padding='1rem'
    >
      <Typography
        variant='h3'
        fontWeight={theme.typography.fontWeightRegular}
        alignSelf='flex-start'
      >
        {user.name}
      </Typography>
      <Stack
        direction='row'
        justifyContent='center'
        alignItems='center'
        width='100%'
        gap='2rem'
      >
        <Stack
          justifyContent='center'
          alignItems='center'
          flex={1}
          gap='1rem'
          height='100%'
          bgcolor={theme.palette.primary[300]}
          border='1px solid black'
          maxWidth='20.625rem'
        >
          <Typography
            variant='h3'
            fontWeight={theme.typography.fontWeightRegular}
          >
            Time
          </Typography>
          <Typography
            variant='h3'
            fontWeight={theme.typography.fontWeightLight}
          >
            {timer < 60
              ? `${timer}sec`
              : `${Math.floor(timer / 60)}min ${
                  timer - Math.floor(timer / 60) * 60
                }sec`}
          </Typography>
        </Stack>
        <CustomPieChart
          title='Gender'
          data={createPieData()}
          outerRadius={50}
          innerRadius={30}
          pieChartHeight={120}
          pieChartWidth={120}
          alignItems='center'
          containerMaxWidth={280}
        />
      </Stack>
      <Button
        title='New Game'
        layout='primary'
        buttonSize='lg'
        onClick={onNewGame}
      />
    </Stack>
  );
};

export default Statistics;
