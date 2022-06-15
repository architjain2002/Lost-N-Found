import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export default function UploadImage() {
  const [ImageFile, setImageFile] = useState([]);

  // stores the imagefiles into the ImageFile state
  function imageFileHandler(event) {
    const fileList = event.target.files;
    console.log(fileList);
    setImageFile([]); // whenever changes happen again we delete all the image from the curr state.
    for (let index = 0; index < fileList.length; index++) {
      const file = fileList[index];
      var reader = new FileReader();

      // start of the coversion to base64 creation using file reader
      reader.onload = function (event) {
        console.log("RESULT", event.target.result); // base64 value

        // var bindata = new Buffer.alloc(
        //   event.target.result.split(",")[1],     //! this snippet of code should be in nodejs
        //   "base64"                               //! basically conversion of base64 to buffer and store it in mongodb buffer
        // );

        setImageFile((prevState) => {
          return [...prevState, { id: uuidv4(), value: event.target.result }];
        });
      };
      reader.readAsDataURL(file);
    }
  }

  useEffect(() => {
    console.log(ImageFile);
  }, [ImageFile]);

  return (
    <div>
      <input
        type="file"
        accept="image/*;capture=camera" //camera option given
        id="InputImage"
        onChange={imageFileHandler}
        multiple
      />

      <ul>
        {ImageFile.map((images) => (
          <>
            {/* <li key={images.id}>{images.value.name}</li> */}
            {/* <img src={images.value}></img> */}
            <li key={images.id}>{images.value}</li>
          </>
        ))}
      </ul>
    </div>
  );
}
