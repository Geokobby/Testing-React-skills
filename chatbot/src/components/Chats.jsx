import React from 'react'

function Chats(props) {

    const { message } = props;
    const { sender } = props;
    if (sender === "bot"){
        return (
            <div>
                <img src="../src/assets/image/robot.png" alt="bot" width={60}  /> 
                 {message}
                
            </div>
          )
    }
    
  return (
    <div>
        <div>
            {message}
            <img src="../src/assets/image/user.png" alt="user" width={60}  /> 
        </div>
     
        
    </div>
  )
}

export default Chats