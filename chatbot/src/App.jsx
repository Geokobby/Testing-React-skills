import React from 'react'
import { useState } from 'react';
import Textbar from './components/textBar'
import ChatMessages from './components/ChatMessages'

function App() {
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
    <div>
      <Textbar chatMessages={chatMessages}
      setChatMessages= {setChatMessages}/>
      <ChatMessages chatMessages={chatMessages} />
    </div>
  )
}

export default App
