import React, { useState, useEffect } from "react";

export default function TextBox() {
  const [Text, setText] = useState(""); // this will store the description text
  const [Date, setDate] = useState(); // contains date of lost
  function textHandler(event) {
    setText(event.target.value);
    // console.log(Text);
  }
  function dateHandler(event) {
    setDate(event.target.value);
  }

  // useEffect(() => {
  //   console.log(Text);
  // }, [Text]);

  return (
    <form>
      <div className="form-group">
        {/* <label for="exampleFormControlTextarea1">Example textarea</label> */}
        <textarea
          className="form-control col-sm"
          id="exampleFormControlTextarea1"
          rows="5"
          style={{ width: "70%" }}
          onChange={textHandler}></textarea>
        <input type="date" onChange={dateHandler}></input>
      </div>
    </form>
  );
}
