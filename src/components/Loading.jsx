import React from "react";
import PuffLoader from "react-spinners/PuffLoader";
function Loading(loading) {
  return (
    <div className="loading">
      <h1>unico<span className="cg">dev</span></h1>
      <PuffLoader color={"#441285"} loading={loading} size={60} />
    </div>
  );
}

export default Loading;
