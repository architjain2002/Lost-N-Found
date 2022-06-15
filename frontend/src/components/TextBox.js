import React, { useState, useEffect } from "react";
import Uploads from "./Uploads.js";

export default function TextBox() {
  const [Text, setText] = useState(""); // this will store the description text
  const [Date, setDate] = useState(""); // contains date of lost
  const [Contact, setContact] = useState(""); //
  function textHandler(event) {
    setText(event.target.value);
  }
  function dateHandler(event) {
    setDate(event.target.value);
  }
  function contactHandler(event) {
    setDate(event.target.value);
  }

  // useEffect(() => {
  //   console.log(Text);
  // }, [Text]);

  return (
    <form>
      <div className="form-group">
        {/* <label for="exampleFormControlTextarea1">Example textarea</label> */}
        <Uploads />
        <textarea
          className="form-control col-sm"
          id="exampleFormControlTextarea1"
          rows="5"
          style={{ width: "70%" }}
          onChange={textHandler}></textarea>
      </div>
      <input type="date" onChange={dateHandler}></input>
      <input
        type="text"
        className="form-control"
        id="formGroupExampleInput"
        placeholder="Contact No"
        style={{ width: "30%" }}
        onChange={contactHandler}></input>
    </form>
  );
}
