import { Avatar, Button, Input } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import db from "../Config/firebase";
import "./Post.css";
import firebase from "firebase";

function Post({ caption, imageUrl, username, timestamp, user, postId }) {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  useEffect(() => {
    if (postId) {
      db.collection("posts")
        .doc(postId)
        .collection("comments")
        .orderBy("timestamp", "asc")
        .onSnapshot((snaphot) => {
          setComments(snaphot.docs.map((doc) => doc.data()));
        });
    }
  }, [postId]);

  const postComment = (e) => {
    e.preventDefault();

    db.collection("posts").doc(postId).collection("comments").add({
      text: comment,
      username: user.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setComment("");
  };

  return (
    <div className="post">
      <div className="post__header">
        <Avatar className="userPost" src alt="khan" />
        <h4 className="username">{username}</h4>
      </div>

      <div className="post__body">
        <img className="postImg" src={imageUrl} alt="user_post" />
      </div>

      <div className="post__caption">
        <p>
          <strong>Castlewood</strong> {caption}
        </p>
        <p className="post__timestamp">
          {new Date(timestamp?.toDate()).toUTCString()}
        </p>

        {comments.map((comment, id) => (
          <p className='comments' key={id}>
            <strong className='commentUser'>{comment.username}</strong> {comment.text} {''}
            <p className='commentDate'>{new Date(timestamp?.toDate()).toUTCString()}</p>
          </p>
        ))}
      </div>

      {/* Working for Comments */}
      <div>
        <form className='commentForm'>
          <Input
            type="text"
            className="commentInput"
            placeholder="Post a comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <Button className='commentButton' disabled={!comment} type="submit" onClick={postComment}>
            Post
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Post;
