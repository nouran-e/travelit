import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import ActivityForm from './ActivityForm';
import CloseIcon from '@mui/icons-material/Close';
import '../../styles/itinerary.scss';

const style = {
  position: 'absolute',
  top: '38%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: 6,
  boxShadow: 24,
  p: 2,
};

export default function AddActivityModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button className="add-activities-link" onClick={handleOpen}><AddRoundedIcon /> Add to-do</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
        <Button className="closeButton" onClick={handleClose}><CloseIcon className="closeIcon" /></Button>
          <ActivityForm />
        </Box>
      </Modal>
    </div>
  );
}

