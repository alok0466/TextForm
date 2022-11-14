import React, { useState } from "react";

export default function Textform(props) {


let details = 
{
  color: 'white',
  backgroundColor: 'navy',

}



  // here we copy the code

  const copy = () => {
    navigator.clipboard.writeText(text);
    alert("copied to clipboard");
  };


  // here we clear the input texts 
  

  const clear = () => {
    setText(" ")
   
  };



  // here is change function which change lowerCase to UpperCase

  const upper = () => {
    let upper = text.toUpperCase();
    setText(upper);
  };

  // here is change function which change upperCase to lowerCase

  const lower = () => {
    let upper = text.toLowerCase();
    setText(upper);
  };

  const handleOnChange = (event) => {
    console.log("on change ");
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter text here ");

  return (
    <>
      <div className="container my-3">
        <h1>{props.heading} - </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="mybox"
            value={text}
            onChange={handleOnChange}
            rows={6}
          />
        </div>

        <button className="btn btn-success my-2 mx-2" onClick={upper}>
          Convert to Uppercase
        </button>

        <button className="btn btn-success my-2 mx-2" onClick={lower}>
          Convert to lowercase
        </button>

        <button className="btn btn-primary my-2 mx-2" onClick={copy}>
          Copy
        </button>

        <button className="btn btn-primary my-2 mx-2" onClick={clear}>
          Clear
        </button>
      </div>

      <div className="other container" style={details}>
        <h1>Text Details</h1>
        <b>
          <p>Total character - {text.length}</p>
        </b>

        <b>
          <p>Total words - {text.split(" ").length - 1}</p>
        </b>

        <b>
          <p>
            Approx Read time - {(text.split(" ").length - 1) * 0.008} minuts
          </p>
        </b>

        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
