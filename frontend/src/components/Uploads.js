import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Uploads() {
  const [ImageFile, setImageFile] = useState([]);

  // stores the imagefiles into the ImageFile state
  function imageFileHandler(event) {
    const fileList = event.target.files;
    console.log(fileList);
    setImageFile([]); // whenever changes happen again we delete all the image from the curr state.
    for (let index = 0; index < fileList.length; index++) {
      const file = fileList[index];
      setImageFile((prevState) => {
        return [...prevState, { id: uuidv4(), value: file }];
      });
    }
  }

  useEffect(() => {
    console.log(ImageFile);
  }, [ImageFile]);

  return (
    <div>
      <input
        type="file"
        accept="image/png, image/jpeg"
        id="InputImage"
        onChange={imageFileHandler}
        multiple
      />

      {/* <div>
        <img src={ImageFile[0]}></img>
      </div> */}
    </div>
  );
}
