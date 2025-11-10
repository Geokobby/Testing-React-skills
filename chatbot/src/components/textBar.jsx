import React from 'react'
import { useState } from 'react';

function Textbar() {
  // State to hold the input text value
  const [inputText, setInputText] = useState("");
  function saveInputText(event){
    setInputText(event.target.value);
  }
// Function to handle sending the message
  function sendMessage(){
    console.log(inputText)
  }
  return (
    <div>
      {/* Input box to type message, onChange text the vaule of the inputText */}
      <input type="text" placeholder="Type your message..."
      onChange={saveInputText} />

      {/* OnClick to add text from the inputText box */}
      <button
      onClick={sendMessage }>Send</button>
    </div>
  )
}

export default Textbar