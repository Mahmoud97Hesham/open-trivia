import { ButtonProps } from '@mui/material';

export interface IStyledButton extends ButtonProps {
  layout?: 'primary';
  buttonSize?: 'sm' | 'md' | 'lg';
}
