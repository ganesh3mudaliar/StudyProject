// import { useSelector } from "react-redux"
// import { Outlet } from "react-router-dom"

// import Sidebar from "../components/core/Dashboard/Sidebar"
import React, { useState } from 'react';
import { Container, Button, Form, Card } from 'react-bootstrap';

const initialPosts = [
  { id: 1, user: 'Alice Johnson', content: 'Excited to start the new JavaScript course!', date: '2024-06-10' },
  { id: 2, user: 'Bob Smith', content: 'Just finished the React tutorial. It was awesome!', date: '2024-06-09' },
  { id: 3, user: 'Carol White', content: 'Looking for study partners for the Python course.', date: '2024-06-08' },
];

export default function Dashboard() {
  const [posts, setPosts] = useState(initialPosts);
  const [newPost, setNewPost] = useState('');
  const [userId, setUserId] = useState('');
  const [isChatEnabled, setIsChatEnabled] = useState(false);

  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (newPost) {
      const date = new Date().toISOString().split('T')[0];
      const newPostObj = { id: posts.length + 1, user: 'Current User', content: newPost, date };
      setPosts([newPostObj, ...posts]);
      setNewPost('');
    }
  };

  const handleChatConnect = () => {
    if (userId) {
      setIsChatEnabled(true);
    }
  };

  return (
    <Container fluid className="join-community-page">
      <h2 className="text-center my-4">Join the Community</h2>

      <section className="new-post-section mb-5">
        <h3 className="mb-3">Share an update</h3>
        <Form onSubmit={handlePostSubmit}>
          <Form.Control
            as="textarea"
            rows={3}
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            placeholder="What's on your mind?"
            className="mb-3"
          />
          <Button variant="primary" type="submit">Post</Button>
        </Form>
      </section>

      <section className="posts-section mb-5">
        <h3 className="mb-3">Latest Updates</h3>
        {posts.map(post => (
          <Card key={post.id} className="mb-3">
            <Card.Body>
              <Card.Title>{post.user}</Card.Title>
              <Card.Text>{post.content}</Card.Text>
              <Card.Footer className="text-muted">{post.date}</Card.Footer>
            </Card.Body>
          </Card>
        ))}
      </section>

      <section className="chat-section text-center mt-5">
        <h3>Connect with Peers</h3>
        <Form className="d-flex justify-content-center my-3">
          <Form.Control
            type="text"
            placeholder="Enter User ID"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            className="w-25 me-2"
          />
          <Button variant="success" onClick={handleChatConnect}>Connect</Button>
        </Form>
        {isChatEnabled && (
          <div className="chat-box p-3">
            <p>Chat with user {userId}</p>
            <Form.Control type="text" placeholder="Type a message..." className="mt-3" />
          </div>
        )}
      </section>
    </Container>
  );
}
