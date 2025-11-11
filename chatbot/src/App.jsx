import React from 'react'
import { useState } from 'react';
import Textbar from './components/textBar'
import ChatMessages from './components/ChatMessages'
import './App.css'

function App() {
  //lifting the state of chatMessages and setChatMessages to the App component so that it can be passed down to both Textbar and ChatMessages components as props.
    const [chatMessages, setChatMessages] = useState([{message:"Hello Bot", 
            sender:"user",
             key:"1"}, 
          { message:"Hello how can I help you?", 
            sender:"bot",
            key:"2"},
          {message:"What is today",
             sender: "user",
             key:"3"},         
          { message: "Today is Tuesday November 4",
             sender: "bot",key:"4"}]);
   
  return (
    <div className="app-container">
       {/* Passing chatMessages and setChatMessages as props to Textbar and chatMessages to ChatMessages component. */}
      
      <ChatMessages chatMessages={chatMessages} />
      <Textbar chatMessages={chatMessages}
      setChatMessages= {setChatMessages}/>
    </div>
  )
}

export default App
