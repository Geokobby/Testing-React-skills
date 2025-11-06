import React from 'react'
import Chats from './Chats'

function ChatMessages() {

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

            //  this is another way to do the map function and uses the {chatMessageComponent} variable return component in the JSX
            // const chatMessageComponent = chatMessages.map((chatMesage)=>{
            // return <Chats 
            // message={chatMesage.message} 
            // sender = {chatMesage.sender}
            // key ={chatMesage.key}/>
            // })

  return (
    <>
     {/* <Chats message="Hello Bot" sender="user" />
            <Chats message="Hello how can I help you?" sender="bot" />
            <Chats message="What is today" sender="user" />
            <Chats message="Today is Tuesday November 4 " sender="bot" />  */}  

             {/*  This is a test of the chatMessageComponent variable from the map comment before*/}
            {/* {chatMessageComponent}  */}

              {/* This is the map function directly in the JSX */}
              {chatMessages.map((chatMesage)=>{
            return <Chats 
            message={chatMesage.message} 
            sender = {chatMesage.sender}
            key ={chatMesage.key}/>
            })} 

    </>
  )
}

export default ChatMessages