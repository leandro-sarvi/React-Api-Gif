import { useState, useEffect, useCallback } from "react";
const API_KEY_GIF = "JtPGvjYOeRXQXvGmhTCHWNt6HS3AVySu";
const useFetchTrending = ()=>{
    const [first, setfirst] = useState([]);
    const fetchData =useCallback(
        ()=>{
            fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY_GIF}`)
            .then((response) => response.json())
            .then((respo) => {
             let { data } = respo;
             setfirst(data.map(items=>({id:items.id,url:items.images.fixed_width_small.url})));
           })
         }
    )
    useEffect(()=>{
        fetchData()
    },[first])
    return first;
}
export default useFetchTrending;