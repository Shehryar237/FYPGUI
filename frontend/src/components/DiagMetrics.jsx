import React from "react";
import styled from "styled-components";
import {useState} from 'react';

const DiagMetrics = ({ predictionMetrics, image }) => {
    const readFileAsDataURL = (file) => {
        {/*To be called in handleImg
            We are converting uploaded file to a displayble image
        */}
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = () => reject(new Error("Failed to read file"));
            reader.readAsDataURL(file);
        });
    };
    
    const [imgData, setImgData] = useState(null);
    const handleImgData = async(imgData) =>{
        const imgDataURL = await readFileAsDataURL(imgData);
        setImgData(imgDataURL)
    }
    handleImgData(image);
    
  return (
    <Wrapper>
        <S_MainDiag> 
            <strong>Diagnosis:</strong> {predictionMetrics[0].disease}
        </S_MainDiag>
        <S_LowerPanel>
            <S_DiagProbabilites>
                <p>Probablity of disease</p>
                <ProbImgWrapper>
                    <ul>
                        {predictionMetrics.map((metric, index) => (
                        <li key={index}>
                            {metric.disease}: {metric.probability.toFixed(2)}
                        </li>
                        ))}
                    </ul>
                    <S_ImgDisplay>
                        <img src={imgData} alt="disease image"></img>
                        <span><i> upload preview</i></span>
                    </S_ImgDisplay>
                </ProbImgWrapper>
            </S_DiagProbabilites>
        </S_LowerPanel>
    </Wrapper>
  );
};


const Wrapper = styled.div`
    //border: 1px solid red;
    height: 100%;
    color: lightgrey;
`;
const S_MainDiag = styled.div`
    //border: 1px solid yellow;
    display: flex;
    flex-grow: 2;
    font-size: 1.3rem;
`
const S_LowerPanel = styled.div`
    //border: 1px solid pink;
    display: flex;
    flex-grow: 2;
   
`
const S_DiagProbabilites = styled.div`
    //border: 1px solid pink;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    max-width: 100%;
 
    ul{ padding-left: 10px;

        list-style: none;
        margin: 0;
        width: 50%;
    }
`
const S_ImgDisplay = styled.div`
   // border: 1px solid white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width:50%;

    img{
        width: 65%;
    }
    span{
        font-size: 0.7rem;
        padding: 1px;
    }
`
const ProbImgWrapper = styled.div`//to align both prob list and img
    display: flex;
    
`


export default DiagMetrics;
