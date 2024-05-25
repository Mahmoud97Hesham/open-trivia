import { Grid, Stack, Typography } from '@mui/material';
import Button from 'components/Button';
import CircularProgress from 'components/CircularProgress';
import CustomModal from 'components/Modal';
import { IAnsweredCategory } from 'interfaces/views/categories';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { pathnames } from 'routes/pathnames';
import { useAppDispatch, useAppSelector } from 'store';
import {
  setAnsweredCategories,
  setChosenCategories,
  setCorrectCount,
  setIncorrectCount,
  setRoundCount,
  setSkippedCount,
  setTimer
} from 'store/gameDetails/gameDetails.slice';
import { difficulty, timerValues } from 'utils/constants';
import { decodeHtml, shuffle } from 'utils/helpers';
import { useQuestions } from 'utils/hooks/questions';

const Questions = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.user);
  const gameSettings = useAppSelector(state => state.gameSettings);
  const currentCategory = useAppSelector(
    state => state.gameDetails.currentCategory
  );
  const gameDetails = useAppSelector(state => state.gameDetails);
  const { data: questions, isLoading: isQuestionsLoading } = useQuestions(
    gameSettings.questionsNo,
    gameSettings.difficulty,
    currentCategory.id === 0 ? undefined : currentCategory.id
  );

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questionAnswers, setQuestionAnswers] = useState<string[]>([]);
  const [chosenAnswer, setChosenAnswer] = useState('');
  const [open, setOpen] = useState(false);
  const [currentQuestionTimer, setCurrentQuestionTimer] = useState(0);

  useEffect(() => {
    if (!user.name) {
      navigate(pathnames.HOME);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentQuestionTimer(prev => prev + 1);
      if (
        currentQuestionTimer >=
        timerValues[gameSettings.difficulty as difficulty]
      ) {
        onSkip();
      }
    }, 1000);
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentQuestionTimer]);

  const createAnswers = () => {
    const allAnswers =
      questions &&
      questions[currentQuestion] &&
      questions[currentQuestion].correct_answer &&
      questions[currentQuestion].incorrect_answers
        ? [
            questions[currentQuestion]?.correct_answer,
            ...questions[currentQuestion].incorrect_answers
          ]
        : [];
    shuffle(allAnswers);
    return allAnswers;
  };

  const onAnswerClick = (answer: string) => {
    setChosenAnswer(answer);
  };

  const handleEmptyChosenAnswer = () => {
    if (!chosenAnswer) {
      setOpen(true);
      return true;
    }
    return false;
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    setChosenAnswer('');
    dispatch(setTimer(currentQuestionTimer + gameDetails.timer));
    setCurrentQuestionTimer(0);
    if (currentQuestion >= gameSettings.questionsNo - 1) {
      currentCategory.id !== 0 &&
        dispatch(setChosenCategories(currentCategory.name));
      if (gameDetails.roundCount >= gameSettings.roundsNo) {
        navigate(pathnames.STATISTICS);
      } else {
        dispatch(setRoundCount(gameDetails.roundCount + 1));
        navigate(pathnames.CATEGORIES);
      }
    } else {
      setCurrentQuestion(prev => prev + 1);
    }
  };

  const onSkip = () => {
    dispatch(setSkippedCount(gameDetails.skippedCount + 1));
    if (
      questions &&
      (gameDetails.answeredCategories as IAnsweredCategory)[
        questions[currentQuestion].category as string
      ]
    ) {
      const counts = (gameDetails.answeredCategories as IAnsweredCategory)[
        questions[currentQuestion].category as string
      ];
      dispatch(
        setAnsweredCategories({
          categoryName: questions?.[currentQuestion].category || '',
          counts: {
            ...counts,
            skippedCount: counts.skippedCount + 1
          }
        })
      );
    } else {
      dispatch(
        setAnsweredCategories({
          categoryName: questions?.[currentQuestion].category || '',
          counts: {
            correctCount: 0,
            incorrectCount: 0,
            skippedCount: 1
          }
        })
      );
    }
    handleSubmit();
  };

  const onNext = () => {
    if (handleEmptyChosenAnswer()) {
      return;
    }
    const isCorrect =
      chosenAnswer === questions?.[currentQuestion].correct_answer;
    isCorrect
      ? dispatch(setCorrectCount(gameDetails.correctCount + 1))
      : dispatch(setIncorrectCount(gameDetails.incorrectCount + 1));
    if (
      questions &&
      (gameDetails.answeredCategories as IAnsweredCategory)[
        questions[currentQuestion].category as string
      ]
    ) {
      const counts = (gameDetails.answeredCategories as IAnsweredCategory)[
        questions[currentQuestion].category as string
      ];
      dispatch(
        setAnsweredCategories({
          categoryName: questions?.[currentQuestion].category || '',
          counts: {
            skippedCount: counts.skippedCount,
            correctCount: isCorrect
              ? counts.correctCount + 1
              : counts.correctCount,
            incorrectCount: isCorrect
              ? counts.incorrectCount
              : counts.incorrectCount + 1
          }
        })
      );
    } else {
      dispatch(
        setAnsweredCategories({
          categoryName: questions?.[currentQuestion].category || '',
          counts: {
            correctCount: isCorrect ? 1 : 0,
            incorrectCount: isCorrect ? 0 : 1,
            skippedCount: 0
          }
        })
      );
    }
    handleSubmit();
  };

  const renderAnswers = () => {
    return questionAnswers?.map(questionAnswer => {
      return (
        <Grid key={questionAnswer} item xs={6} textAlign='center'>
          <Button
            title={decodeHtml(questionAnswer)}
            buttonSize='lg'
            layout='primary'
            sx={{ lineHeight: '33px', height: '150px' }}
            disabled={chosenAnswer === questionAnswer}
            onClick={() => onAnswerClick(questionAnswer)}
          />
        </Grid>
      );
    });
  };

  useEffect(() => {
    if (!isQuestionsLoading) {
      setQuestionAnswers(createAnswers());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isQuestionsLoading, currentQuestion, questions]);

  if (isQuestionsLoading) {
    return <CircularProgress sx={{ position: 'absolute' }} />;
  }

  return (
    <>
      <Stack
        alignItems='center'
        justifyContent='center'
        width='100%'
        height='calc(100vh - 4rem)'
        padding='2rem'
      >
        <Stack
          alignItems='center'
          justifyContent='center'
          width='100%'
          gap='2rem'
          marginTop='auto'
        >
          <Typography>
            {decodeHtml(questions?.[currentQuestion]?.question || '')}
          </Typography>
          <Grid container spacing={1} width='50rem'>
            {renderAnswers()}
          </Grid>
        </Stack>
        <Stack
          direction='row'
          justifyContent='center'
          alignItems='center'
          gap='4rem'
          marginTop='auto'
        >
          <Button
            title='Skip'
            layout='primary'
            buttonSize='sm'
            onClick={onSkip}
          />
          <Button
            title='Next'
            layout='primary'
            buttonSize='sm'
            onClick={onNext}
          />
        </Stack>
      </Stack>
      <CustomModal
        open={open}
        onClose={onClose}
        modalTitle='Missing Data'
        description='Please make sure that you chose an answer.'
      />
    </>
  );
};

export default Questions;
