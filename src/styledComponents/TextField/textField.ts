import { BaseTextFieldProps, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledTextField = styled(TextField)<BaseTextFieldProps>(
  ({ theme }) => ({
    borderRadius: '8px',
    boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
    border: '1px solid black',
    width: '25.625rem',
    height: '6.875rem',
    padding: '0 2rem',
    backgroundColor: theme.palette.grey[100],
    '.MuiInputBase-root': {
      height: '100%'
    },
    '.MuiOutlinedInput-notchedOutline': {
      border: 'none'
    },
    '.MuiInputBase-input': {
      padding: '0rem',
      '&::placeholder': {
        fontSize: theme.typography.subtitle1,
        fontWeight: theme.typography.fontWeightRegular,
        lineHeight: '2.063rem',
        color: 'black'
      }
    }
  })
);
