import React, { useState, useEffect } from "react";
import Axios from "axios";

const LoadImage = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    Axios.get("https://picsum.photos/200/300.jpg", {
      "Content-Type": "application/xml; charset=utf-8",
    })
      .then(function (response) {
        setData(response.config.url);
      })
      .catch(function (error) {
        console.log(error);
      });
    setLoading(false);
  }, []);

  return (
    <div>
      {loading ? (
        <div>...loading</div>
      ) : (
        <div>
          <h3>Get Image</h3>
          <img alt="picsum-api" src={`${data}`} />
        </div>
      )}
    </div>
  );
};

export default LoadImage;
