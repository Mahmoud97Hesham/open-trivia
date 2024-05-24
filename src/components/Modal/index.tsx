import { Fade, Modal, Stack, Typography } from '@mui/material';
import Button from 'components/Button';
import { IModal } from 'interfaces/components/Modal';

const CustomModal = ({
  open,
  onClose,
  modalTitle,
  description,
  ...rest
}: IModal) => {
  return (
    <Modal open={open} onClose={onClose} {...rest}>
      <Fade in={open}>
        <Stack
          alignItems='center'
          justifyContent='space-between'
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            borderRadius: '12px',
            boxShadow:
              '0px 20px 24px -4px rgba(16, 24, 40, 0.08), 0px 8px 8px -4px rgba(16, 24, 40, 0.03)',
            backgroundColor: 'white !important',
            padding: '2rem',
            border: '1px solid white',
            height: 'fit-content'
          }}
        >
          <Stack
            width='100%'
            height='100%'
            alignItems='center'
            justifyContent='center'
            gap='2rem'
          >
            <Typography variant='h4'>{modalTitle}</Typography>
            <Typography variant='textMd'>{description}</Typography>
          </Stack>
          <Button
            title='Close'
            layout='primary'
            buttonSize='sm'
            onClick={onClose}
          />
        </Stack>
      </Fade>
    </Modal>
  );
};

export default CustomModal;
