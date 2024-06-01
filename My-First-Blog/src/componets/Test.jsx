import React from "react";

const Test = () => {
  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      try {
        const base64Data = await blobToBase64(file);
        console.log(base64Data); // Base64 representation of the image data
      } catch (error) {
        console.error("Error reading file:", error);
      }
    }
  };

  const blobToBase64 = (blob) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = function (event) {
        const base64String = event.target.result.split(",")[1]; // Extract the base64 data
        console.log("The converted image is", base64String);
        resolve(base64String);
      };
      reader.onerror = function (event) {
        reject(event.target.error);
      };
      reader.readAsDataURL(blob);
    });
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
    </div>
  );
};

export default Test;
