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

      // start of the coversion to base64 creation using file reader
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = function () {
        console.log("RESULT", reader.result);
        setImageFile((prevState) => {
          return [...prevState, { id: uuidv4(), value: reader.result }];
        });
      };
    }
  }

  useEffect(() => {
    console.log(ImageFile);
  }, [ImageFile]);

  function imageBlob() {}

  return (
    <div>
      <input
        type="file"
        accept="image/png, image/jpeg"
        id="InputImage"
        onChange={imageFileHandler}
        multiple
      />

      <ul>
        {ImageFile.map((images) => (
          <>
            {/* <li key={images.id}>{images.value.name}</li>
            <img src={URL.createObjectURL(images.value)}></img> */}
            <li key={images.id}>{images.value}</li>
          </>
        ))}
      </ul>
    </div>
  );
}
