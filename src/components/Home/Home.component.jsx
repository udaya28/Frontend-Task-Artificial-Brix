import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const Home = () => {
  const useStyles = makeStyles(() => ({
    root: {
      backgroundColor: 'white',
    },
    button: {
      borderRadius: '20px',
      backgroundColor: '#3b49df',
    },
  }));

  const classes = useStyles();
  let history = useHistory();

  return (
    <Container maxWidth="xs" className={classes.root}>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        style={{ height: '100vh' }}
        spacing={6}
      >
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            endIcon={<ArrowForwardIcon />}
            className={classes.button}
            onClick={() => history.push('/feed')}
          >
            View Post
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            endIcon={<CreateIcon />}
            className={classes.button}
            onClick={() => history.push('/new-post')}
          >
            Create Post
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
