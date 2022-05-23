import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@mui/material';
import { useState } from 'react';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface CreateTableProps {}

const StyledCreateTable = styled.div`
  color: pink;
`;

export function CreateTable(props: CreateTableProps) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <StyledCreateTable>
      <Button onClick={handleClickOpen} variant="outlined">
        Add Table
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Table</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Tables are the building blocks of your system. A table could be
            actually a table or just a place that you allow customers to receive
            service to. Like a drive through window.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Table Name"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Add</Button>
        </DialogActions>
      </Dialog>
    </StyledCreateTable>
  );
}

export default CreateTable;
