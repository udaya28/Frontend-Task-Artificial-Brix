import React from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const ConfirmDialog = ({open,handleConfirm,handleClose}) => {
    return (
        <Dialog open={open}>
            <DialogTitle>Confirm</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Are you sure to post?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button
            onClick={handleClose}
            variant="text"
            color="secondary"
            size="small"
            style={{fontWeight: '600'}}
          >
            Cancel
          </Button>
          <Button
            onClick={handleConfirm}
            variant="contained"
            color="primary"
            size="small"
            autoFocus
          >
            Confirm
          </Button>
            </DialogActions>
        </Dialog>
    )
}

export default ConfirmDialog
