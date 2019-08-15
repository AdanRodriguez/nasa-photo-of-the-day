import React, {useState, useEffect} from "react";
import axios from "axios";
import MoonCard from "./Components/MoonCard.js";

import "./App.scss";


function App() {
  // const [title, setTitle] = useState("");
  // const [explanation, setExplanation] = useState("");
  // const [url, setUrl] = useState("");
    const [data, setData] = useState({});
    useEffect(() => {
       // console.log("top");
 axios.get("https://api.nasa.gov/planetary/apod?api_key=EI5yoXHyphNPlmkwpwoC2wQyvGMSh2zGAU1gU8y1")
 .then(response => {
   // console.log(response.data);
   // setTitle(response.data.title);
   // setExplanation(response.data.explanation);
   // setUrl(response.data.url);
   setData(response.data);
 });
 // console.log("bottom");
    }, [])
 
  return (
    <div className="moon-cards">
      <MoonCard title={data.title}
                        url={data.url}
                        date={data.date}
                        explanation={data.explanation} />
    </div>
  );
}

export default App;
