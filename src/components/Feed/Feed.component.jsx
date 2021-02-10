import React from 'react';
import PostCard from './PostCard/PostCard.component';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CancelIcon from '@material-ui/icons/Cancel';
import IconButton from '@material-ui/core/IconButton';
import { useHistory } from 'react-router-dom';
const useStyles = makeStyles(() => ({
  closeButton: {
    position: 'fixed',
    top: '0',
    right: '0',
    margin: '20px 25px 0px 0px',
  },
  postContainer: {
    padding: '50px 0px',
  },
  noDataContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '80vh',
  },
}));

const Feed = ({ posts }) => {
  const classes = useStyles();
  let history = useHistory();
  return (
    <Container maxWidth="sm">
      <IconButton
        onClick={() => history.push('/home')}
        className={classes.closeButton}
      >
        <CancelIcon />
      </IconButton>
      <Grid
        container
        direction="column-reverse"
        spacing={1}
        alignItems="stretch"
        justify="flex-start"
        className={classes.postContainer}
      >
        {posts.length === 0 && (
          <div className={classes.noDataContainer}>No post found </div>
        )}
        {posts.length !== 0 && posts.map((post) => <PostCard post={post} key={post.id} />)}
      </Grid>
    </Container>
  );
};

export default Feed;
