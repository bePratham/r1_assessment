import React, { useState }  from 'react'
import Navbar from './Navbar'
import { useFBAuth } from '../../contexts/facebookContext';
import MessageApp from './MainPage';

const AgentScreen = () => {
 
  return (
    <div style={{display:'flex'}}>
      <Navbar />
      <MessageApp/>
    </div>
  );
}

export default AgentScreen