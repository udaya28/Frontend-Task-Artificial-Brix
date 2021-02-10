import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Home from './components/Home/Home.component';
import Feed from './components/Feed/Feed.component';
import NewPost from './components/NewPost/NewPost.component';
function App() {
  const [posts, setPosts] = useState([]);
  const getPost = async () => {
    try {
      let response = await fetch('http://localhost:3001/posts/');
      let posts = await response.json();
      setPosts(posts);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPost();
    return () => {};
  }, []);
  return (
    <Container maxWidth="md" style={{ height: '100vh' }}>
      <Router>
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/feed">
            <Feed posts={posts} />
          </Route>
          <Route exact path="/new-post">
            <NewPost refreshFeed={getPost} />
          </Route>
          <Redirect to="/home" />
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
