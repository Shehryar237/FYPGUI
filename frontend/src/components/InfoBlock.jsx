import React from 'react';
import styled from 'styled-components';

const InfoBlock = ({ prediction }) => {
    return (
        <Wrapper>
            {prediction &&(
                <>  
                    <DetailBlock>
                        Details
                    </DetailBlock>
                    <div className="title">
                        <h1>{prediction}</h1>
                    </div>
                    <p>
                        This is a placeholder description for the disease: <strong>{prediction}</strong>.
                    </p>)
                </>
            )
            }
        </Wrapper>
    );
};

export default InfoBlock;

const Wrapper = styled.div`
    width: 830px;
    min-height: 100px; /* Ensure it always has some height */
    background-color: #05055c;
    color: white;
    padding: 20px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px; /* Add space between elements */
`;

const DetailBlock = styled.div`
    background-color: #1f1fa3;
    border-bottom: 2px solid darkblue;
    padding: 10px;
    color: white;
    width: fit-content;
    padding: 10px 20px;
    border-radius:5px;
    font-size: 1.5rem;
    margin-left: -35px;
    margin-top: -30px;
`;
