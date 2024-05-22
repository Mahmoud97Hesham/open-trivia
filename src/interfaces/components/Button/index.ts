import { ButtonProps } from '@mui/material';

export interface IButton extends ButtonProps {
  title?: string;
  layout?: 'primary';
  buttonSize?: 'sm' | 'md' | 'lg';
}
