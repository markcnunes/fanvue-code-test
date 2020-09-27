import React from "react";
import Axios from "axios";

const ImageUpload = () => {
  const submitForm = (picture) => {
    let fileUpload = new FormData();
    fileUpload.append("photo", picture);

    // REACT_APP_AWS e.g. = https://xxxx.xxxx.amazonaws.com/
    const UPLOAD_URL =
      process.env.REACT_APP_AWS +
      "new-image--" +
      Math.floor(Math.random() * 100);

    Axios.put(UPLOAD_URL, fileUpload)
      .then((res) => {
        alert("File Upload success");
      })
      .catch((err) => alert("File Upload Error"));
  };

  const onChangeHandler = (event) => {
    const picture = event.target.files[0];
    submitForm(picture);
  };

  return (
    <div>
      <h3>Upload Image</h3>
      <input type="file" name="file" onChange={onChangeHandler} />
    </div>
  );
};

export default ImageUpload;
