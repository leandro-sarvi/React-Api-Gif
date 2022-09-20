import Img from "./Img";
function Gif({ url }) {
  return (
    <div>
      <a href={url} target="_blank">
       
        <Img url={url}/>
      </a>
    </div>
  );
}

export default Gif;
