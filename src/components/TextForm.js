import React, { useState } from "react";
import Footer from "./Footer";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was Clicked"+ text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert(" Converted to Upper Case", "success");
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert(" Converted to Lower Case", "success");
  };
  const handleClearClick = () => {
    let newText ='';
    setText(newText);
    props.showAlert(" Text has been clear", "success");
  };
  //Text to Speech
  const handleSpeakClick = () => {
    if ('speechSynthesis' in window) {
      if (window.speechSynthesis.speaking) {
        // If speech is currently playing, stop it
        window.speechSynthesis.cancel();
        props.showAlert(" Speech stopped", "warning");
      } else {
        // Otherwise, start speaking
        const speech = new SpeechSynthesisUtterance(text);
        speech.lang = 'en-IN'; // Corrected language code for Indian English
        speech.rate = 0.95; // Normal speed
        speech.volume = 1; // Full volume
        speech.pitch = 1; // Normal pitch
  
        window.speechSynthesis.speak(speech);
        props.showAlert(" You can listen your text", "success");
      }
    } else {
      alert('Text-to-Speech is not supported in your browser.');
    }
  };
  
// remove extra spaces
const handleRemoveSpacesClick = () => {
    let newText = text.replace(/\s+/g, ' ').trim(); // Replace multiple spaces with a single space and trim
    setText(newText);
    props.showAlert(" Extras spaces has been removed", "success");
  };
  
  
  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    alert("Text copied to clipboard!");
    props.showAlert(" Text has been copied", "success");
  };
  
  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
   // Word count logic: Split by spaces and filter out empty strings
  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

  // Character count (includes spaces and newlines)
  const charCount = text.length;

  //text="mfbjhghg";  //wrong way of setting text
  //setText("new text");  //right way to set text
  return (
    <>
    <div className="container"  style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}}
          id="myBox"
          rows="8"
        ></textarea>
   {/*    <p><b>Word Count:</b> {wordCount} &nbsp; | &nbsp; <b>Character Count:</b> {charCount}</p>*/}

      </div>
      <button disabled={text.trim().length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
        Convert to Uppercase
      </button>
      <button disabled={text.trim().length===0} className="btn btn-secondary mx-1 my-1" onClick={handleLoClick}>
        Convert to Lowercase
      </button>
      <button disabled={text.trim().length===0} className="btn btn-danger mx-1 my-1" onClick={handleClearClick}>
        Clear Text
      </button>

      <button disabled={text.trim().length===0} className="btn btn-warning mx-1 my-1" onClick={handleCopyClick}>
        Copy Text
      </button>

      <button disabled={text.trim().length===0} className="btn btn-info mx-1 my-1" onClick={handleSpeakClick}>
        Speak/Stop Text
      </button>
      <button disabled={text.trim().length===0} className="btn btn-dark mx-1 my-1" onClick={handleRemoveSpacesClick}>
        Remove Extra Spaces
      </button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>
            Your text summary
        </h2>
        <p>
            {wordCount} words and {charCount} characters
        </p>
        <p>
  {text.trim() === "" ? 0 : (0.008 * text.trim().split(/\s+/).length).toFixed(2)} Minutes read
</p>

        <h2>
            Preview
        </h2>

        <p>
            {text.length>0?text:"Nothing to preview!"}
        </p>
        <div>
        <Footer/>
        </div>
    </div>
    </>
  );
}
