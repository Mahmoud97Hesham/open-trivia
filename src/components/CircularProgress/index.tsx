import { Box, CircularProgressProps } from '@mui/material';
import { StyledCircularProgress } from 'styledComponents/CircularProgress';

const CircularProgress = (props: CircularProgressProps) => {
  return (
    <Box width='100%' height='100%' display='contents'>
      <StyledCircularProgress {...props} />
    </Box>
  );
};

export default CircularProgress;
