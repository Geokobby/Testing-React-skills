import React from 'react'
import './chats.css'

function Chats({message, sender}) {

    // const { message } = props;
    // const { sender } = props;
    /*
    if (sender === "bot"){
        return (
            <div>
                <img src="../src/assets/image/robot.png" alt="bot" width={60}  /> 
                 {message}
                
            </div>
          )
    }
          */
    
  return (
    <div className='chat-message-container'>
        <div className={sender === "user" ? 
          "chat-message-user" : 
          "chat-message-bot"}>
            {sender === "bot" && 
             (<img src="../src/assets/image/robot.png" alt="bot" width={60} className='chat-profile-bot' /> 
            )}
         <div className="chat-message"> 
            {message }
          </div>
           
           { sender === "user" && 
             (<img src="../src/assets/image/user.png" alt="user" width={60}  className='chat-profile-user'/> 
            )} 
        </div>
     
        
    </div>
  )
}

export default Chats