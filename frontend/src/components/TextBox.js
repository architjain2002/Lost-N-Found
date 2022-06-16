import React, { useState, useEffect } from "react";
import UploadImage from "./UploadImage.js";

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
    setContact(event.target.value);
  }

  // useEffect(() => {
  //   console.log(Text);
  // }, [Text]);

  return (
    <div className="d-flex align-items-center justify-content-center">
      <form>
        <div className="form-group col-md-6">
          {/* <label for="exampleFormControlTextarea1">Example textarea</label> */}
          <UploadImage />
          <label htmlFor="exampleFormControlTextarea1">Description</label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="5"
            // style={{ width: "70%" }}
            onChange={textHandler}></textarea>
        </div>

        <div className="form-row">
          <div className="form-group col-md-2">
            <label htmlFor="dateId">Date</label>
            <input
              type="date"
              className="form-control"
              onChange={dateHandler}
              id="dateId"></input>
          </div>

          <div className="form-group col-md-2">
            <label htmlFor="formGroupExampleInput">Contact</label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Contact No"
              // style={{ width: "30%" }}
              onChange={contactHandler}></input>
          </div>
        </div>
      </form>
    </div>
  );
}
