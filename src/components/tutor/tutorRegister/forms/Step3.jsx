import React, { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";

const Step3 = ({ formData, setFormData }) => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [selectedCVs, setSelectedCVs] = useState([]);

  const handleChange = (e) => {
    setFormData((prev) =>({
        ...prev,
        [e.target.id]: e.target.value,
      }));
  };

  
  const formOnChageHandler = (e) => {
    e.preventDefault();
  };
  const fromOnSubmitHandler = (e) => {
    e.preventDefault();
  };


  const handleImageChange = (event) => {
    const imageFiles = Array.from(event.target.files);
    setSelectedImages([...selectedImages, ...imageFiles]);

    // You can also display a preview of the selected images here if needed.
  };

  const handleCVChange = (event) => {
    const cvFiles = Array.from(event.target.files);
    setSelectedCVs([...selectedCVs, ...cvFiles]);

    // You can also display the names of the selected CV files here.
  };

  const removeImage = (index) => {
    const newImages = [...selectedImages];
    newImages.splice(index, 1);
    setSelectedImages(newImages);
  };

  const removeCV = (index) => {
    const newCVs = [...selectedCVs];
    newCVs.splice(index, 1);
    setSelectedCVs(newCVs);
  };

  return (
    <div className="w-full max-w-sm">
      <form onChange={formOnChageHandler} onSubmit={fromOnSubmitHandler} className="border border-midnight-blue-700 shadow-md  px-20 pt-16 pb-10 mb-6 rounded-md">
        {/* <div className="grid gap-4 place-content-center items-center"> */}
        <h1 className="text-white pb-8 font-light text-xl">Personal Info</h1>
        {/* </div> */}
        <div className="mb-4">
          <label className="text-white text-md font-light mt-4 mb-2">
            Upload CVs:
          </label>
          <input
            type="file"
            accept=".pdf, .doc, .docx"
            onChange={handleCVChange}
            multiple
            className="bg-transparent text-white border border-midnight-blue-800 rounded-md p-2"
          />
          {selectedCVs.length > 0 && (
            <div className="mt-2">
              {selectedCVs.map((cv, index) => (
                <div key={index} className="mb-2">
                  <p className="text-white">
                     CV {index + 1}: {cv.name}
                  </p>
                  <button
                    onClick={() => removeCV(index)}
                    className="text-red-500 mt-1"
                  >
                    <FaRegTrashAlt />
                  </button>
                </div>
              ))}
            </div>
          )}
          <label className="text-white text-md font-light mb-2">
            Upload Certificates (If Any):
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            multiple
            className="bg-transparent text-white border border-midnight-blue-800 rounded-md p-2"
          />
          {selectedImages.length > 0 && (
            <div className="mt-2">
              {selectedImages.map((image, index) => (
                <div key={index} className="mb-2">
                  <img
                    src={URL.createObjectURL(image)}
                    alt={`Selected Image ${index + 1}`}
                    className="max-w-md max-h-40"
                  />
                  <button
                    onClick={() => removeImage(index)}
                    className="text-red-500 mt-1"
                  >
                     <FaRegTrashAlt />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default Step3;
