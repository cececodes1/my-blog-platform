import React, { useState, useEffect, useMemo, useCallback } from 'react';
import axios from 'axios';
import PostList from './components/PostList';
import UserFilter from './components/UserFilter';
import './App.css';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(data);
    };
    fetchPosts();
  }, []);

  const filteredPosts = useMemo(() => {
    return userId ? posts.filter(post => post.userId === userId) : posts;
  }, [posts, userId]);

  const handleUserChange = useCallback((id) => {
    setUserId(id);
  }, []);

  return (
    <div>
      <h1>Blog Platform</h1>
      <UserFilter onUserChange={handleUserChange} />
      <PostList posts={filteredPosts} />
    </div>
  );
};

export default App;

