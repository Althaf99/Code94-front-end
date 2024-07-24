import React, { useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";

const ImageUploadAndDisplay = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [uploadStatus, setUploadStatus] = useState("");

  // Handle file selection
  const handleFileChange = (event) => {
    setSelectedFiles(event.target.files);
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Create a FormData object to store the files
    const formData = new FormData();
    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append("images", selectedFiles[i]);
    }

    try {
      // Send the form data to the server
      const response = await axios.post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // Handle successful upload and update the state with image URLs
      setUploadStatus("Files uploaded successfully");
      setUploadedImages([...uploadedImages, response.data.files]);
    } catch (error) {
      // Handle upload error
      setUploadStatus("Error uploading files");
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          name="images"
          multiple
          onChange={handleFileChange}
          accept="image/*"
        />
        <Button type="submit" color="primary">
          Add Images
        </Button>
      </form>
      {uploadStatus && <p>{uploadStatus}</p>}

      <div>
        <h2>Uploaded Images</h2>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {uploadedImages.map((image, index) => (
            <div key={index} style={{ margin: "10px" }}>
              <img
                src={image}
                alt={`Uploaded ${index}`}
                style={{ width: "200px", height: "200px" }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageUploadAndDisplay;
