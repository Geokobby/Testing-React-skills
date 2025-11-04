import React from 'react'
import Textbar from './components/textBar'
import Chats from './components/Chats'

function App() {
  return (
    <div>
    <Textbar />
    <Chats message="Hello Bot" sender="user" />
    <Chats message="Hello how can I help you?" sender="bot" />
    <Chats message="What is today" sender="user" />
    <Chats message="Today is Tuesday November 4 " sender="bot" />

    
    </div>
  )
}

export default App
