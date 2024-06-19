import React, { useRef } from "react";
import PropTypes from "prop-types";

import "./index.css";

export default function FormImage({ image, onChange }) {
  const fileInput = useRef();

  return (
    <div className="mb-3">
      <label htmlFor="image" className="form-label">
        Image
      </label>
      <input
        ref={fileInput}
        style={{ display: "none" }}
        id="fileInput"
        type="file"
        name="img"
        onChange={onChange}
      ></input>
      {image ? (
        <button
          className="image"
          onClick={(e) => {
            fileInput?.current?.click();
            e.preventDefault();
          }}
        >
          <img className="img-upload" src={image} alt="blog.title" />
        </button>
      ) : (
        <button
          className="image add-image"
          title="Add Image"
          onClick={(e) => {
            fileInput?.current?.click();
            e.preventDefault();
          }}
        >
          <i className="bi bi-plus"></i>
        </button>
      )}
    </div>
  );
}

FormImage.propTypes = {
  image: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
