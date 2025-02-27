import React, { useState, useEffect } from "react";
import axios from "axios";
import "./posts.css";

const API_URL = "http://localhost:8080/comments";

const PostsPage = () => {
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState("");
    const [editingCommentId, setEditingCommentId] = useState(null);
    const [editText, setEditText] = useState("");

    useEffect(() => {
        fetchComments(); // Fetch all comments when the component mounts
        const interval = setInterval(fetchComments, 5000); // Re-fetch comments every 5 seconds
        return () => clearInterval(interval); // Clear interval when component unmounts
    }, []);

    const fetchComments = async () => {
        try {
            const response = await axios.get(API_URL);  // Fetch all comments
            console.log("Fetched comments:", response.data);
            setComments(response.data);  // Update the state with the fetched comments
        } catch (error) {
            console.error("Failed to fetch comments", error);
        }
    };

    const handleAddComment = async () => {
        if (!comment.trim()) return;
        try {
            const response = await axios.post(API_URL, { username: "User", comment });
            fetchComments(); // Re-fetch comments after adding a new one
            setComment(""); // Clear the comment input field
        } catch (error) {
            console.error("Failed to add comment", error);
        }
    };

    const handleEditComment = async (commentId) => {
        try {
            const response = await axios.put(`${API_URL}/${commentId}`, {
                username: "User",
                comment: editText
            });
            fetchComments(); // Re-fetch comments after editing
            setEditingCommentId(null); // Clear editing state
            setEditText(""); // Clear the edit input field
        } catch (error) {
            console.error("Failed to edit comment", error);
        }
    };

    const handleDeleteComment = async (commentId) => {
        try {
            await axios.delete(`${API_URL}/${commentId}`);
            fetchComments();  // Re-fetch comments after deletion
        } catch (error) {
            console.error("Failed to delete comment", error);
        }
    };

    return (
        <div className="posts-container">
            <h2 className="posts-title">🚗 Car Post</h2>
            <div className="post-card">
                <img src="https://cdn.motor1.com/images/mgl/G4z31/s1/tesla-roadster.jpg" alt="Tesla Model S" className="post-image" />
                <h3 className="post-title">Tesla Model S</h3>
                <p className="post-description">A high-performance electric vehicle.</p>

                <h4 className="comment-title">Comments:</h4>
                <ul className="comment-list">
                    {comments.length > 0 ? (
                        comments.map((c) => (
                            <li key={c._id} className="comment">
                                {/* If editing, show input field, else show comment */}
                                {editingCommentId === c._id ? (
                                    <>
                                        <input
                                            type="text"
                                            value={editText}
                                            onChange={(e) => setEditText(e.target.value)}
                                            className="comment-input"
                                        />
                                        <button onClick={() => handleEditComment(c._id)} className="edit-btn">Save</button>
                                        <button onClick={() => setEditingCommentId(null)} className="edit-btn">Cancel</button>
                                    </>
                                ) : (
                                    <>
                                        <strong>{c.username}</strong> {c.comment.replace(":", "")} {/* Remove the colon */}
                                        <button onClick={() => { setEditingCommentId(c._id); setEditText(c.comment); }} className="edit-btn">
                                            Edit
                                        </button>
                                        <button onClick={() => handleDeleteComment(c._id)} className="delete-btn">Delete</button>
                                    </>
                                )}
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
                    <button onClick={handleAddComment} className="edit-btn">Add Comment</button>
                </div>
            </div>
        </div>
    );
};

export default PostsPage;