import React, { useState } from "react";
import styled from "styled-components";

const DragAndDrop = () => {
    const handleDragOver = (e) => {
        e.preventDefault(); // Allow dropping by preventing the default behavior
    };
    const handleDrop = async (e) => {
        e.preventDefault();
        const files = e.dataTransfer.files; // Get files from the drop event
        
        if (files && files[0]) 
            {
                const file = files[0];
                console.log("File dropped:", file);

                // Create a FormData object
                const formData = new FormData();
                formData.append("file", file);

                try {
                    // Send file to backend (replace with your endpoint)
                    const response = await fetch("https://your-backend-endpoint.com/upload", {
                        method: "POST",
                        body: formData,
                    });

                    if (response.ok)
                         {
                        console.log("File uploaded successfully!");
                    } else 
                    {
                        console.error("Upload failed:", response.statusText);
                    }
                } 
                catch (error) {
                    console.error("Error during upload:", error);
                }
        }
    };

    return (
        <DragDropArea onDrop={handleDrop} onDragOver={handleDragOver}> 
            Drop image here 
        </DragDropArea>
    );
};

// Styled component for the drag-and-drop area
const DragDropArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px dashed #b6b6b6;
    height: 150px;
    font-size: 0.8rem;
    color: #b6b6b6;
    z-index: 10; /* Ensure it appears above other elements */
`;

export default DragAndDrop;
