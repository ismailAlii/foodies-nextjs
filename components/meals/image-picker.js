'use client';
import { useRef, useState } from 'react';
import classes from './image-picker.module.css';
import Image from 'next/image';

export default function ImagePicker({ label, name = 'image' }) {
  const [image, setImage] = useState(null);
  const inputRef = useRef();
  const handlePickClick = () => {
    inputRef.current.click();
  };
  const handleImageInput = (event) => {
    const file = event.target.files[0];
    if (!file) {
      setImage(null);
      return;
    }
    // convert it into src
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  };

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {image ? (
            <Image
              src={image}
              alt={label}
              fill
            />
          ) : (
            <p>no image picked yet</p>
          )}
        </div>

        <input
          className={classes.input}
          type='file'
          name={name}
          id={name}
          accept='image/png, image/jpeg'
          ref={inputRef}
          onChange={handleImageInput}
          required
        />
        <button
          className={classes.button}
          type='button'
          onClick={handlePickClick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
