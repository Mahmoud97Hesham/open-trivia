import { StandardTextFieldProps } from '@mui/material';
import React from 'react';
import { StyledTextField } from 'styledComponents/TextField';

const TextField = ({ ...rest }: StandardTextFieldProps) => {
  return <StyledTextField {...rest} />;
};

export default TextField;
