import React from 'react';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(() => ({
  root: {
    borderRadius: '10px',
    border: '1px solid #D2D6DB',
    backgroundColor: 'white',
    padding: '15px 10px',
  },
  avatar: {
    width: '30px',
    height: '30px',
    fontSize: '14px',
  },
  name: {
    color: '#4d5760',
    fontWeight: '600',
    margin: '0',
    fontFamily: 'segoe UI',
    fontSize: '14px',
  },
  timeStamp: { color: '#4d5760', fontSize: '12px', margin: '0' },
  title: { fontFamily: 'segoe UI', color: '#08090A', margin: '10px 0px' },
  content: {
    fontFamily: 'Palatino Linotype',
    color: '#08090A',
    margin: '5px 0px',
  },
}));
const PostCard = ({ post }) => {
  const { name, timeStamp, title, content } = post;
  const [day, month, date, year, ...rest] = timeStamp.split(' ');
  const classes = useStyles();
  return (
    <Grid item xs={12}>
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Grid container spacing={1} alignItems="center">
            <Grid item>
              <Avatar className={classes.avatar}>{name.charAt(0)}</Avatar>
            </Grid>
            <Grid item>
              <p className={classes.name}>{name}</p>
              <p className={classes.timeStamp}>
                {month} {date} {year}
              </p>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <h2 className={classes.title}>{title}</h2>
        </Grid>
        <Grid item xs={12}>
          <p className={classes.content}>{content}</p>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PostCard;
