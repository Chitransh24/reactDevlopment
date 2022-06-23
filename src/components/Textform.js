import React, { useState } from "react";

export default function Textform(props) {
  const onChanged = (event) => {
    console.log("onChanged Encountered.");
    setText(event.target.value);
  };
  const toUpperCase = () => {
    console.log("Uppercase Was Clicked");
    setText(text.toUpperCase());
    props.showAlert("Converted to UpperCase.", "success");
  };
  const toLowerCase = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to LowerCase.", "success");
  };
  const clearCase = () => {
    let texty = '';
    setText(texty);
    props.showAlert("Text area has been Cleared.", "success");
  };
  const copyText = () => {
    var copy =document.getElementById("exampleFormControlTextarea1");
    copy.select();
    navigator.clipboard.writeText(copy.value);

    props.showAlert("Copied to Clipboard.", "success");
    
  };
  const removeWhiteSpace = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Whitespaces has been removed.", "success");
  }
  
  const [text, setText] = useState("");
  let time = (text.split(" ").length -1) * 0.008;
  time = Math.ceil(time);
  return (
    <>
      <div className="container" style={{color: props.mode==='light'?'black':'white'}}>
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
            style={{backgroundColor: props.mode==='dark'?'primary':'white', color: props.mode==='light'?'black':'white'}}
          ></textarea>
        </div>
        <br />
        <button className="btn btn-info mx-1" onClick={toUpperCase}>
          To Uppercase
        </button>
        <button className="btn btn-info mx-2" onClick={toLowerCase}>
          To Lowercase
        </button>
        <button className="btn btn-info mx-2" onClick={clearCase}>
          Clear
        </button>
        <button className="btn btn-info mx-2" onClick={copyText}>
        Copy Text
        </button>
        <button className="btn btn-info mx-2" onClick={removeWhiteSpace}>
        Remove Whitespaces
        </button>
      </div>
      <div className="container my-3" style={{color: props.mode==='light'?'black':'white'}}>
        <h1>Your Text Summary.</h1>
        <p>
          The number of Characters you've written = {text.length} & number of
          Words that you'vee written = {text.split(" ").length - 1}
        </p>
        <p>
            Minimum amount of time to read this = {time} Minutes
        </p>
        <h1>Preview</h1>
        <p>
          {text.length>0 ? text: "Enter the text in the above Text Area to preview your text here."}
        </p>
      </div>
    </>
  );
}
