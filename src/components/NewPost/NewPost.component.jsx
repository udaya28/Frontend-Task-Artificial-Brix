import React, { useState } from 'react';
import ConfirmDialog from './ConfirmDialog/ConfirmDialog.component';
import Grid from '@material-ui/core/Grid';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import SendIcon from '@material-ui/icons/Send';
import CancelIcon from '@material-ui/icons/Cancel';
import Snackbar from '@material-ui/core/Snackbar';

const useStyles = makeStyles(() => ({
  heading: {
    color: '#64707D',
  },
  form: {
    padding: '10px 0px',
    borderRadius: '10px',
    border: '2px solid #D2D6DB',
    backgroundColor: 'white',
  },
  formElements: {
    width: '100%',
  },
  button: {
    fontWeight: '600',
  },
}));

const NewPost = ({ refreshFeed }) => {
  const classes = useStyles();
  let history = useHistory();
  const [openDialog, setOpenDialog] = useState(false);
  const [validationState, setValidationState] = useState(false);
  const [openSnackBar, setOpenSnackBar] = useState({
    open: false,
    message: '',
  });
  const [complaintData, setComplaintData] = useState({
    name: '',
    title: '',
    content: '',
  });
  const handleInput = (e) => {
    setComplaintData({ ...complaintData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    setValidationState(true);
    if (
      complaintData.name !== '' &&
      complaintData.title !== '' &&
      complaintData.content !== ''
    ) {
      setOpenDialog(true);
    }
  };

  const handleConfirmPost = async () => {
    const { name, title, content } = complaintData;
    setOpenDialog(false);
    setValidationState(false);
    try {
      let response = await fetch('http://localhost:3001/posts/', {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
          name,
          title,
          content,
          timeStamp: new Date().toString(),
        }),
      });
      if (response.status === 201) {
        console.log('posted');
        refreshFeed();
        setOpenSnackBar({ open: true, message: 'Posted successfully' });
        setComplaintData({
          name: '',
          title: '',
          content: '',
        });
      } else {
        setOpenSnackBar({ open: true, message: 'Failed to post' });
        console.log('failed to post');
      }
    } catch (error) {
      console.log(error);
      setOpenSnackBar({ open: true, message: 'Failed to post' });
      console.log('failed to post');
    }
  };

  return (
    <Container maxWidth="xl">
      <Grid container justify="space-between" alignItems="center">
        <h1 className={classes.heading}>Create Post</h1>
        <div>
          <IconButton onClick={() => history.push('/home')}>
            <CancelIcon />
          </IconButton>
        </div>
      </Grid>
      <Grid
        container
        alignItems="center"
        justify="center"
        className={classes.form}
      >
        <Grid item>
          <Grid container spacing={2} style={{ padding: '15px' }}>
            <Grid item xs={12}>
              <FormControl className={classes.formElements}>
                <TextField
                  label="Name"
                  variant="outlined"
                  name="name"
                  value={complaintData.name}
                  error={validationState && complaintData.name === ''}
                  helperText={
                    validationState &&
                    complaintData.name === '' &&
                    'Name can not be empty'
                  }
                  onInput={handleInput}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl className={classes.formElements}>
                <TextField
                  label="Title"
                  variant="outlined"
                  name="title"
                  value={complaintData.title}
                  error={validationState && complaintData.title === ''}
                  helperText={
                    validationState &&
                    complaintData.title === '' &&
                    'Title can not be empty'
                  }
                  onInput={handleInput}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl className={classes.formElements}>
                <TextField
                  id="outlined-multiline-static"
                  label="Content"
                  multiline
                  rows={8}
                  variant="outlined"
                  name="content"
                  value={complaintData.content}
                  error={validationState && complaintData.content === ''}
                  helperText={
                    validationState &&
                    complaintData.content === '' &&
                    'Content can not be empty'
                  }
                  onInput={handleInput}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Grid container justify="flex-end" spacing={2}>
                <Grid item>
                  <Button
                    variant="text"
                    color="primary"
                    endIcon={<SendIcon />}
                    className={classes.button}
                    onClick={() => handleSubmit()}
                  >
                    Post
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="text"
                    color="secondary"
                    endIcon={<CancelIcon />}
                    className={classes.button}
                    onClick={() => history.push('/home')}
                  >
                    Cancel
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <ConfirmDialog
        open={openDialog}
        handleConfirm={handleConfirmPost}
        handleClose={() => setOpenDialog(false)}
      />
      <Snackbar
        open={openSnackBar.open}
        message={openSnackBar.message}
        onClose={() => setOpenSnackBar({ open: false, message: '' })}
        autoHideDuration={3000}
      />
    </Container>
  );
};

export default NewPost;
