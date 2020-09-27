import React, { useState, useEffect } from "react";
import Axios from "axios";

const LoadXml = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    // REACT_APP_AWS e.g. = https://xxxx.xxxx.amazonaws.com/
    Axios.get(process.env.REACT_APP_AWS, {
      "Content-Type": "application/xml; ; charset=utf-8",
    })
      .then(function (response) {
        const parser = new DOMParser();
        const dom = parser.parseFromString(response.data, "application/xml");
        const htmlSections = dom.childNodes[0].childNodes;
        setData(htmlSections);
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
          <h3>Get XML</h3>
          {data !== null &&
            Object.values(data).map((value, i) => {
              let contents = [<p key={i}>{value.innerHTML}</p>];
              return <div key={i}>{contents}</div>;
            })}
        </div>
      )}
    </div>
  );
};

export default LoadXml;
