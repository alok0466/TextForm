import React, { useState } from "react";

export default function About() {
  const [mode, newmode] = useState(null);

  const [mystyle, setmystyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  let enable = () => {
    if (mystyle.color === "white") {
      newmode("Enable");
      setmystyle({
        color: "black",
        backgroundColor: "white",
      });
    } else {
      newmode("Disable");
      setmystyle({
        color: "white",
        backgroundColor: "black",
      });
    }
  };

  return (
    <div className="container" style={mystyle}>
      <div className="accordion" id="accordionExample" style={mystyle}>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              style={mystyle}
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <h1>About us </h1>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>

      <div className="container my-3">
        <button type="button" className="btn btn-primary" onClick={enable}>
          {mode} Dark Mode
        </button>
      </div>
    </div>
  );
}
