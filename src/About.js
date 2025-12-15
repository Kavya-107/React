
import React from "react";

function About(props) {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Welcome to the about Page</h1>
      <p>This is a simple React component.</p>
      <p>value in about : {props.val}</p>
      {console.log("about")}
      <button onClick={()=>props.setval(props.val+1)}>Increase</button>

    </div>
  );
}

export default About;
