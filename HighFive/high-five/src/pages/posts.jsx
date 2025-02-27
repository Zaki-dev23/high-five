import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid"; // Import UUID
import "./post.css"; // Import CSS

const PostsPage = () => {
    const [posts, setPosts] = useState([]);

    // Load posts from localStorage on mount
    useEffect(() => {
        const storedComments = JSON.parse(localStorage.getItem("comments")) || {};
        const initialPosts = [
            {
                id: 1,
                name: "Tesla Model S",
                image: "https://cdn.motor1.com/images/mgl/G4z31/s1/tesla-roadster.jpg",
                description: "A high-performance electric vehicle.",
                comments: storedComments[1] || []
            },
            {
                id: 2,
                name: "Ford Mustang",
                image: "https://via.placeholder.com/200",
                description: "A classic American muscle car.",
                comments: storedComments[2] || []
            }
        ];
        setPosts(initialPosts);
    }, []);

    // Function to handle adding comments
    const handleAddComment = (postId, commentText) => {
        if (!commentText.trim()) return;

        const newComment = { id: uuidv4(), text: commentText };

        // Update comments in local state
        const updatedPosts = posts.map((post) =>
            post.id === postId
                ? { ...post, comments: [...post.comments, newComment] }
                : post
        );
        setPosts(updatedPosts);

        // Store only comments in localStorage
        const storedComments = JSON.parse(localStorage.getItem("comments")) || {};
        storedComments[postId] = [...(storedComments[postId] || []), newComment];
        localStorage.setItem("comments", JSON.stringify(storedComments));

        // 🔵 Debugging: Log only comments from localStorage
        console.log("🛠️ Stored Comments in LocalStorage:", storedComments);
    };

    return (
        <div className="posts-container">
            <h2 className="posts-title">🚗 Car Posts</h2>
            {posts.map((post) => (
                <Post key={post.id} post={post} onAddComment={handleAddComment} />
            ))}
        </div>
    );
};

const Post = ({ post, onAddComment }) => {
    const [comment, setComment] = useState("");

    return (
        <div className="post-card">
            <img src={post.image} alt={post.name} className="post-image" />
            <h3 className="post-title">{post.name}</h3>
            <p className="post-description">{post.description}</p>

            <h4 className="comment-title"><i className="bi bi-chat"></i> Comments:</h4>
            <ul className="comment-list">
                {post.comments.length > 0 ? (
                    post.comments.map((c) => (
                        <li key={c.id} className="comment">
                            <strong>#{c.id.slice(0, 8)}</strong>: {c.text}
                        </li>
                    ))
                ) : (
                    <p className="no-comment">No comments yet.</p>
                )}
            </ul>

            <div className="comment-box">
                <input
                    type="text"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Write your comment..."
                    className="comment-input"
                />
                <button
                    className="comment-button"
                    onClick={() => {
                        if (comment.trim()) {
                            onAddComment(post.id, comment);
                            setComment("");
                        }
                    }}
                >
                    Add Comment
                </button>
            </div>
        </div>
    );
};

export default PostsPage;
