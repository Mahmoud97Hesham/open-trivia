import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { IStyledButton } from 'interfaces/styledComponents/button';

const sizes = {
  sm: {
    width: '12rem',
    height: '2.875rem',
    fontSize: '1.5rem'
  },
  md: {
    width: '6.25rem',
    height: '6.25rem',
    fontSize: '1.5rem'
  },
  lg: {
    width: '20.625rem',
    height: '6.25rem',
    fontSize: '2.5rem'
  }
};

export const StyledButton = styled(Button)<IStyledButton>(
  ({ theme, layout, buttonSize = 'md' }) =>
    layout === 'primary' && {
      borderRadius: '8px',
      backgroundColor: theme.palette.primary[500],
      '&:hover': {
        backgroundColor: theme.palette.primary[700]
      },
      color: 'black',
      textTransform: 'none',
      width: sizes[buttonSize].width,
      height: sizes[buttonSize].height,
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: sizes[buttonSize].fontSize,
      boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
      '&:disabled': {
        backgroundColor: `${theme.palette.grey[100]} !important`,
        cursor: 'not-allowed'
      }
    }
);
