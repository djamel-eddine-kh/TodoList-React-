import React, { useState } from 'react';
import { Typography, Button, Grid, Box, Checkbox, Dialog, DialogTitle, DialogActions } from '@mui/material';

const Line = ({ text, state, setState, onDelete }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const handleCheckboxClick = () => {
    setIsChecked(!isChecked);
    if (!isChecked) {
      setOpenDialog(true);
    }
  };

  const handleConfirmDelete = () => {
    setOpenDialog(false);
    onDelete();
  };

  const handleCancelDelete = () => {
    setOpenDialog(false);
  };

  return (
      <Box mb={1}>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={2}>
            <Checkbox
                variant="contained"
                color="secondary"
                onClick={handleCheckboxClick}
                checked={isChecked}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography>{text}</Typography>
          </Grid>
          <Grid item xs={2}>
            <Button variant="contained" color="secondary" onClick={onDelete}>Delete</Button>
          </Grid>
        </Grid>
        <Dialog open={openDialog} onClose={handleCancelDelete}>
          <DialogTitle>{"This Todo is complete now. Do you want to delete it?"}</DialogTitle>
          <DialogActions>
            <Button onClick={handleConfirmDelete} color="secondary">
              Yes
            </Button>
            <Button onClick={handleCancelDelete} color="primary">
              No
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
  );
};

export default Line;
