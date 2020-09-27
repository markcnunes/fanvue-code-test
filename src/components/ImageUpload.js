import React from "react";
import Axios from "axios";
import ImageUploader from "react-images-upload";

const ImageUpload = () => {
  const onDrop = (picture) => {
    submitForm(picture);
  };

  const submitForm = (pictures) => {
    let fileUpload = new FormData();
    fileUpload.append("photo", pictures);

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

  return (
    <div>
      <h3>Upload Image</h3>
      <ImageUploader
        withIcon={true}
        buttonText="Choose images"
        onChange={onDrop}
        imgExtension={[".jpg", ".gif", ".png", ".gif"]}
        maxFileSize={5242880}
      />
    </div>
  );
};

export default ImageUpload;
