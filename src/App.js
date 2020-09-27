import React from "react";
import ImageUpload from "./components/ImageUpload";
import LoadImage from "./components/LoadImage";
import LoadXml from "./components/LoadXml";

import "./App.css";

export default () => {
  return (
    <div className="App">
      <LoadImage />
      <ImageUpload />
      <LoadXml />
    </div>
  );
};
