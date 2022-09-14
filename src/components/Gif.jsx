import React from "react";

function Gif({ url }) {
  return (
    <div>
      <a href={url} target="_blank">
        <img src={url}></img>
      </a>
    </div>
  );
}

export default Gif;
