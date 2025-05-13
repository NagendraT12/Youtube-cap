import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CommentSection.css';

const CommentSection = ({ videoId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [editingComment, setEditingComment] = useState(null);
  const [editText, setEditText] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchComments();
  }, [videoId]);

  const fetchComments = async () => {
    try {
      const response = await fetch(`/api/comments/${videoId}`);
      const data = await response.json();
      setComments(data);
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  const handleAddComment = async (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    try {
      const response = await fetch('/api/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          videoId,
          content: newComment,
        }),
      });

      if (response.ok) {
        setNewComment('');
        fetchComments();
      }
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  const handleDeleteComment = async (commentId) => {
    try {
      const response = await fetch(`/api/comments/${commentId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        fetchComments();
      }
    } catch (error) {
      console.error('Error deleting comment:', error);
    }
  };

  const handleEditComment = async (commentId) => {
    try {
      const response = await fetch(`/api/comments/${commentId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: editText,
        }),
      });

      if (response.ok) {
        setEditingComment(null);
        setEditText('');
        fetchComments();
      }
    } catch (error) {
      console.error('Error updating comment:', error);
    }
  };

  const startEditing = (comment) => {
    setEditingComment(comment._id);
    setEditText(comment.content);
  };

  const cancelEditing = () => {
    setEditingComment(null);
    setEditText('');
  };

  const isAuthenticated = localStorage.getItem('token');

  return (
    <div className="comment-section">
      {isAuthenticated ? (
        <form onSubmit={handleAddComment} className="comment-input-container">
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment..."
            className="comment-input"
          />
          <button type="submit" className="comment-submit-btn">
            Comment
          </button>
        </form>
      ) : (
        <div className="login-prompt">
          <p className="login-message">
            Please <span className="login-link" onClick={() => navigate('/login')}>login</span> to comment
          </p>
        </div>
      )}

      <div className="comments-list">
        {comments.map((comment) => (
          <div key={comment._id} className="comment-card">
            {editingComment === comment._id ? (
              <div className="edit-comment-container">
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="edit-comment-input"
                />
                <div className="edit-actions">
                  <button
                    onClick={() => handleEditComment(comment._id)}
                    className="save-btn"
                  >
                    Save
                  </button>
                  <button onClick={cancelEditing} className="cancel-btn">
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <>
                <p className="comment-content">{comment.content}</p>
                <div className="comment-meta">
                  <span className="comment-author">
                    By <span className="author-name">{comment.user.name}</span>
                  </span>
                  <span>{new Date(comment.createdAt).toLocaleDateString()}</span>
                </div>
                {comment.user._id === localStorage.getItem('userId') && (
                  <div className="comment-actions">
                    <button
                      onClick={() => startEditing(comment)}
                      className="edit-btn"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteComment(comment._id)}
                      className="delete-btn"
                    >
                      Delete
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
