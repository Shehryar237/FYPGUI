import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import styled from 'styled-components';
import './App.css';
import PredictorApp from './components/PredictorApp.jsx';
import NavBar from './components/NavBar.jsx';
import InfoBlock from './components/InfoBlock.jsx';


function App() {
  const [prediction, setPrediction] = useState(null); // Shared state

  return (
    <Wrapper>
      <NavBar>CSCS-460</NavBar>
      <S_AppWrapper>
        <PredictorApp setPrediction={setPrediction} />
        <InfoBlock prediction={prediction}/>
      </S_AppWrapper>
   
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #070022;
  height: 100vh;
`

const S_AppWrapper = styled.div`
  //border: 1px solid red;
  margin-top: 50px;
  width: 100%;
  padding: 10px 0;
  align-items: center;
  display: flex; 
  flex-direction: column;
  gap: 50px;
`



export default App
