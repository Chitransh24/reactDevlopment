import React, { useState } from "react";

export default function Textform(props) {
  const onChanged = (event) => {
    console.log("onChanged Encountered.");
    setText(event.target.value);
  };
  const toUpperCase = () => {
    console.log("Uppercase Was Clicked");
    setText(text.toUpperCase());
  };
  const toLowerCase = () => {
    setText(text.toLowerCase());
  };
  const clearCase = () => {
    let texty = '';
    setText(texty);
  };
  const capitalized = () => {
    var str='';
    str+={text};
    str.charAt(0).toUpperCase();
    setText(str);
  };
  
  const [text, setText] = useState("");
  let time = (text.split(" ").length -1) * 0.008;
  time = Math.ceil(time);
  return (
    <>
      <div className="container">
        <div>
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            {props.text}
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            value={text}
            onChange={onChanged}
            rows="6"
          ></textarea>
        </div>
        <br />
        <button className="btn btn-primary mx-1" onClick={toUpperCase}>
          To Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={toLowerCase}>
          To Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={clearCase}>
          Clear
        </button>
        <button className="btn btn-primary mx-2" onClick={capitalized}>
        Capitalized
        </button>
      </div>
      <div className="container my-3 ">
        <h1>Your Text Summary.</h1>
        <p>
          The number of Characters you've written = {text.length} & number of
          Words that you'vee written = {text.split(" ").length - 1}
        </p>
        <p>
            Minimum amount of time to read this = {time} Minutes
        </p>
      </div>
    </>
  );
}
