import { BaseTextFieldProps } from '@mui/material';
import React from 'react';
import { StyledTextField } from 'styledComponents/TextField';

const TextField = ({ ...rest }: BaseTextFieldProps) => {
  return <StyledTextField {...rest} />;
};

export default TextField;
