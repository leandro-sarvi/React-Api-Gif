import { useState, useEffect } from "react";
import PuffLoader from "react-spinners/ClipLoader";
import Gif from "./Gif";
function GifList({ gifList }) {
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 500);
  }, [gifList]);
  if (gifList.length === 0) {
    return (
      <div className="gif">
        <h4>Que estás esperando!!</h4>
        <img src="src/assets/giphy.gif"></img>
      </div>
    );
  }
  return (
    <>
      {loading ? (
        <div className="loading">
          <PuffLoader color={"#441285"} loading={loading} size={60} />
        </div>
      ) : (
        <div className="images">
          {gifList.map((image) => {
            return <Gif key={image.id} url={image.url} />;
          })}
        </div>
      )}
    </>
  );
}

export default GifList;
