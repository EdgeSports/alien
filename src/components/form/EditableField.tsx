import React, { useState, useEffect, useRef } from "react";
import TextareaAutosize from "react-textarea-autosize";

import { useDataConsumer } from "api/ApiUtil";
import "./form.css";

type EditableFieldProps = {
  url: string;
  formKey: string;
};

type EditableTextFieldProps = EditableFieldProps & {
  placeholder?: string;
  initialText: string;
  minRows?: number;
};

type EditableImageFieldProps = EditableFieldProps & {
  initialImageUrl: string;
  alt: string;
  style?: React.CSSProperties;
};

const EditableTextField = ({
  url,
  formKey,
  placeholder = "",
  initialText,
  minRows = 1,
}: EditableTextFieldProps) => {
  const [text, setText] = useState(initialText);
  const [originalText, setOriginalText] = useState(initialText);
  const [isFocused, setIsFocused] = useState(false);
  const { submitData, loading } = useDataConsumer(url);

  // Simplifying logic
  const modified = text !== originalText;

  const submitChanges = () => {
    submitData({ [formKey]: text }).then(() => {
      setOriginalText(text);
    });
  };

  const handleCtrlS = (event: KeyboardEvent) => {
    if (event.code !== "KeyS" || !event.ctrlKey) {
      return;
    }
    // Cancel saving the page
    event.preventDefault();

    // Only submit the data if the textbox is in focus
    if (!isFocused) {
      return;
    }

    // Do nothing if loading or no changes have been made
    !loading && modified && submitChanges();
  };

  useEffect(() => {
    document.addEventListener("keydown", handleCtrlS);
    return () => {
      document.removeEventListener("keydown", handleCtrlS);
    };
  });

  return (
    <div onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)}>
      <TextareaAutosize
        className="form-clickable"
        minRows={minRows}
        value={text}
        disabled={loading}
        placeholder={placeholder}
        onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
          setText(event.target.value);
        }}
      />
      {modified && (
        <button disabled={loading} onClick={submitChanges}>
          Submit
        </button>
      )}
    </div>
  );
};

const EditableImageField = ({
  url,
  formKey,
  initialImageUrl,
  alt,
  style,
}: EditableImageFieldProps) => {
  const [imageUrl, setImageUrl] = useState(initialImageUrl);
  const { submitData, loading } = useDataConsumer(url);
  const inputFile = useRef<HTMLInputElement>(null);

  const grabFile = () => {
    if (inputFile.current !== null) {
      inputFile.current.click();
    }
  };

  const selectImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const reader = new FileReader();

      // Read the File object as a base64 string
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = () => {
        const url = reader.result;
        submitData({ [formKey]: url }).then(() => {
          setImageUrl(url as string);
        });
      };
    }
  };

  return (
    <div onClick={grabFile} style={{ cursor: "pointer" }}>
      <img src={imageUrl} width="100%" alt={alt} style={style} />
      <input
        disabled={loading}
        type="file"
        id="fileUpload"
        name={formKey}
        accept="image/png, image/jpeg"
        hidden
        ref={inputFile}
        onChange={selectImage}
      />
    </div>
  );
};

export { EditableTextField, EditableImageField };
