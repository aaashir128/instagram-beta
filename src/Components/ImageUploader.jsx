import { Button } from "@material-ui/core";
import React, { useState } from "react";
import db, { storage } from "../Config/firebase";
import "./ImageUploader.css";
import firebase from "firebase";

function ImageUploader({ username }) {
  const [progress, setProgress] = useState(0);
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState("");

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.random(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        (error) => {
          console.log(error);
          alert(error.message);
        },
        () => {
          storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            db.collection("posts").add({
              caption: caption,
              imageUrl: url,
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              username: username,
            });
            setCaption("");
            setImage(null);
            setProgress(0);
          });
        }
        );
        console.log("System is Uploading >>>>>>>>", username)
  };
  
  return (
    <div className="imageuploader">
      <progress className='progressbar' value={progress} max="100" />

      {/* image input  */}
      <input type="file" onChange={handleChange} />

      {/* user + caption input  */}
      <input
        type="text"
        placeholder="Enter a caption...."
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
      />

      {/* button for post */}
      <Button type="submit" onClick={handleUpload}>
        Post
      </Button>
    </div>
  );
}

export default ImageUploader;
