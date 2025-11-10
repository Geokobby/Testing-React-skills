import React from 'react'
// import { useState } from 'react';
import Chats from './Chats'

function ChatMessages({chatMessages}) {

  // Using array destructuring to manage the state of the chat messages.
  
  
 // This array was used before array desturcturing was implemented to manage the state of the chat messages.
  // const array = useState([{message:"Hello Bot", 
  //           sender:"user",....   
  // const chatMessages = array[0];
  // const setChatMessages = array[1]; 
  
  // function sendMessage() {
  //   setChatMessages([
  //     ...chatMessages, 
  //     {message:"Thanks alot you made my day", 
  //     sender:"user", 
  //     id: crypto.randomUUID()}
  //   ]);
  // }
  // chatMessages

  // this is an array of objects that contains the chat messages and their senders we will map through this array to display the chat messages on the screen. And were used to display the chat messages on the screen before useState was implemented to manage the state of the chat messages.
    //  const chatMessages =[{message:"Hello Bot", 
    //         sender:"user",
    //          key:"1"}, 
    //       { message:"Hello how can I help you?", 
    //         sender:"bot",
    //         key:"2"},
    //       {message:"What is today",
    //          sender: "user",
    //          key:"3"},         
    //       { message: "Today is Tuesday November 4",
    //          sender: "bot",
    //          key:"4"}];

            //  this is another way to do the map function and uses the {chatMessageComponent} variable return component in the JSX
            // const chatMessageComponent = chatMessages.map((chatMesage)=>{
            // return <Chats 
            // message={chatMesage.message} 
            // sender = {chatMesage.sender}
            // key ={chatMesage.key}/>
            // })

            // This function is used to test the onClick event of the button to send a message which console logs the chatMessages array with the new message added to it in the console.
          //   function sendMessage() {
          //   chatMessages.push({message:"Thanks alot you made my day", sender:"user", key: crypto.randomUUID()})
          //   console.log(chatMessages)
          // }

            
  return (
    <>
    
    {/* this onClick is an event handle to the send button to add message to website. test and runs an event when we click */}
    {/* <button onClick={sendMessage}>send</button> */}
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