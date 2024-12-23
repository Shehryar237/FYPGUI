import React from "react";
import styled from "styled-components";
import { useState, useEffect } from 'react';

const UploadButton = ({children,onFileUpload}) => {
    const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      onFileUpload(file); // Call the passed function with the selected file
    }
};

    return (
        <ButtonWrapper>
            <label htmlFor="file-upload">{children}</label>
            <input
                id="file-upload"
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleFileChange}
            />
        </ButtonWrapper>
    );
};


const ButtonWrapper=styled.div`
    width: fit-content;
    background-color: #23174e;
    border: 1px solid var(--app-border-color);
    color: white;
    font-family: Raleway;
    border-radius: 4px;
    padding: 4px 6px;
    justify-self: start;
    cursor: pointer;
    label {
        cursor: pointer;
    }
`

export default UploadButton;