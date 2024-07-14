
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [text,setText]=useState();
  const [text1,setText1]=useState();
  const [text2,setText2]=useState();
  const onChange = (e)=>{
    setText1("Hello ");
    setText2("!");
    setText(e.target.value);
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <label>Enter your name:</label>
        <input type="text"  onChange={onChange}/>
        <p>{text1}{text}{text2}</p>
    </div>
  )
}

export default App
