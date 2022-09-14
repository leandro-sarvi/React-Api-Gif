import { useState, useEffect } from "react";
import GifList from "./components/GifList";
import Loading from "./components/Loading";
import "./App.css";
const API_KEY_GIF = "JtPGvjYOeRXQXvGmhTCHWNt6HS3AVySu";
const URL_GIF = "https://api.giphy.com/v1/gifs/search";
function App() {
  const [text, setText] = useState("");
  const [gifList, setGif] = useState([]);
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 2000);
  }, []);
  useEffect(() => {
    if (text.length > 0) {
      fetch(URL_GIF + `?api_key=${API_KEY_GIF}&q=${text}`)
        .then((response) => response.json())
        .then((respo) => {
          let { data } = respo;
          setGif(data.map(items=>({id:items.id,url:items.images.fixed_width_small.url})));
        });
    }
  }, [text]);
  return (
    <>
      {loading ? (
        <Loading Loading={loading} />
      ) : (
        <div>
          <h1>unico<span className="cg">dev</span> Gifs</h1>
          <input
            type="text"
            placeholder="🔎 Busca tu GIF"
            name=""
            id=""
            onChange={(e) => {
              setText(e.target.value);
            }}
            value={text}
          />
          <a className="cg" href="https://unicodev.com.ar/" target="_blank">unicodev.com.ar</a>
          <div className="container-images">
            <GifList gifList={gifList} />
          </div>
        </div>
      )}
    </>
  );
}
export default App;
