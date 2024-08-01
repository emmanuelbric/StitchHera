import React, { useState } from 'react';

function FileUpload() {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (file) {
      // For now, just log the file or do something with it
      console.log(file);

      // You might want to send the file to a server or handle it here
      // const formData = new FormData();
      // formData.append('file', file);
      // await fetch('/upload', { method: 'POST', body: formData });
    }
  };

  return (
    <div className="FileUpload">
      <h2>Upload Fabric Picture</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" accept="image/*" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

export default FileUpload;
