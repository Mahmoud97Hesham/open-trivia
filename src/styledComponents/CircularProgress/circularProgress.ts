import { CircularProgress } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledCircularProgress = styled(CircularProgress)(() => ({
  top: '50%',
  left: '50%',
  marginRight: '-50%',
  transform: 'translate(-50%, -50%)',
}));
