import React from 'react'
import Textbar from './components/textBar'
import Chats from './components/Chats'

function App() {
    
    const chatMessages =[{message:"Hello Bot", 
            sender:"user",
             key:"1"}, 
          { message:"Hello how can I help you?", 
            sender:"bot",
            key:"2"},
          {message:"What is today",
             sender: "user",
             key:"3"},         
          { message: "Today is Tuesday November 4",
             sender: "bot",
             key:"4"}];

           

  return (
    <div>
    <Textbar />
     {/* <Chats message="Hello Bot" sender="user" />
    <Chats message="Hello how can I help you?" sender="bot" />
    <Chats message="What is today" sender="user" />
    <Chats message="Today is Tuesday November 4 " sender="bot" />  */}
    {chatMessages.map((chatMesage)=>{
            return <Chats 
            message={chatMesage.message} 
            sender = {chatMesage.sender}
            key ={chatMesage.key}/>
            })}
    
    </div>
  )
}

export default App
