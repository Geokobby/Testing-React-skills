import React from 'react'
import { useState } from 'react';
import './textBar.css'

function Textbar({chatMessages, setChatMessages}) 
//passing chatMessages and setChatMessages as props from App component
{
  // State to hold the input text value
  const [inputText, setInputText] = useState("");
  function saveInputText(event){
    setInputText(event.target.value);
  }

  // Function to handle sending the message
  //lifting the sendMessage function to App component so that it can update the chatMessages state.
  function sendMessage(){
    setChatMessages([
      ...chatMessages, 
      {message:inputText, 
      sender:"user", 
      id: crypto.randomUUID()}
    ]);

    setInputText(""); // Clear the input box after sending the message  
  }
  return (
    <div className='text-bar'>
      {/* Input box to type message, onChange text the vaule of the inputText */}
      <input type="text" 
      placeholder="Type your message..."
      onChange={saveInputText}
      //value to clear the input box after sending the message 
      value={inputText}
      className='text-input'
      />

      {/* OnClick to add text from the inputText box */}
      <button
      onClick={sendMessage } className='send-button'>Send</button>
    </div>
  )
}

export default Textbar