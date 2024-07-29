import React from 'react';
import { Alert, Box, IconButton, Modal } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface CustomAlertProps {
  open: boolean;
  handleClose: () => void;
  alertTitle: string;
}

export const CustomAlert = ({
  open,
  handleClose,
  alertTitle,
}: CustomAlertProps) => {
  return (
    <Modal open={open} closeAfterTransition>
      <Box sx={{ ...style, width: 200 }}>
        <IconButton
          onClick={handleClose}
          sx={{
            display: 'flex',
            width: '100%',
            justifyContent: 'flex-end',
          }}
        >
          <CloseIcon />
        </IconButton>
        <Alert variant="filled" severity="error">
          {alertTitle}
        </Alert>
      </Box>
    </Modal>
  );
};

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};
