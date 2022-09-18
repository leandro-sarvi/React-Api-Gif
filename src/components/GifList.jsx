import PuffLoader from "react-spinners/ClipLoader";
import Gif from "./Gif";
function GifList({ gifList, text }) {
  if (text==="") {
    return (
      <>
      <h3>Que estas esperando!!</h3>
        
      </>
    );
  }
  return (
          <>
          {gifList.map((image) => {
            return <Gif key={image.id} url={image.url} />;
          })}
          </>

  );
}

export default GifList;
