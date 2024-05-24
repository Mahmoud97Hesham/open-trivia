import { Grid, Stack, Typography } from '@mui/material';
import Button from 'components/Button';
import CircularProgress from 'components/CircularProgress';
import CustomModal from 'components/Modal';
import { Category, IChosenCategory } from 'interfaces/views/categories';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { pathnames } from 'routes/pathnames';
import { useAppDispatch, useAppSelector } from 'store';
import {
  resetCurrentCategory,
  setCurrentCategory
} from 'store/gameDetails/gameDetails.slice';
import { useCategories } from 'utils/hooks/categories';

const Categories = () => {
  const { data: categories, isLoading: isCategoriesLoading } = useCategories();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const chosenCategories = useAppSelector(
    state => state.gameDetails.chosenCategories
  );
  const currentCategory = useAppSelector(
    state => state.gameDetails.currentCategory
  );
  const user = useAppSelector(state => state.user);

  const [open, setOpen] = useState(false);

  if (!user.name) {
    navigate(pathnames.HOME);
  }

  useEffect(() => {
    dispatch(resetCurrentCategory());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderCategories = () => {
    return categories?.map(category => {
      return (
        <Grid key={category.id} item xs={4} textAlign='center'>
          <Button
            title={category.name}
            buttonSize='lg'
            layout='primary'
            sx={{ lineHeight: '33px', height: '120px' }}
            disabled={isButtonDisabled(category)}
            onClick={() => onCategoryClick(category)}
          />
        </Grid>
      );
    });
  };

  const isButtonDisabled = (category: Category): boolean => {
    return (
      currentCategory.id === category.id ||
      !!(chosenCategories as IChosenCategory)[category.name]
    );
  };

  const onCategoryClick = (category: Category) => {
    dispatch(setCurrentCategory(category));
  };

  const onClose = () => {
    setOpen(false);
  };

  const onStart = () => {
    if (currentCategory.name) {
      //TODO
    } else {
      setOpen(true);
    }
  };

  if (isCategoriesLoading) {
    return <CircularProgress sx={{ position: 'absolute' }} />;
  }

  return (
    <>
      <Stack
        alignItems='center'
        justifyContent='center'
        width='100%'
        height='calc(100vh - 2rem)'
        padding='1rem'
        gap='1.5rem'
      >
        <Typography variant='h1'>Questions Category</Typography>
        <Grid container spacing={1} overflow='scroll'>
          {renderCategories()}
          <Grid item xs={4} textAlign='center'>
            <Button
              title='Random'
              buttonSize='lg'
              layout='primary'
              sx={{ lineHeight: '33px', height: '120px' }}
              disabled={isButtonDisabled({ id: 0, name: 'Random' })}
              onClick={() => onCategoryClick({ id: 0, name: 'Random' })}
            />
          </Grid>
        </Grid>
        <Button
          title='Start'
          layout='primary'
          buttonSize='sm'
          onClick={onStart}
        />
      </Stack>
      <CustomModal
        open={open}
        onClose={onClose}
        modalTitle='Missing Data'
        description='Please make sure that you chose a category.'
      />
    </>
  );
};

export default Categories;
