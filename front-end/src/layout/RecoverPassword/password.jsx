/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import "./password.css"

const Password = () => {
    const [password , setPassword] = useState();
    const [comfirmPassword, setComfirmPassword]= useState();
    const ReveiwPassword =()=>{

    }
    const HandleSumbit  = async(e)=>{
        e.prevertDefault()
            try {
                if (password===comfirmPassword) {
             const response = await fetch('http://serverDomain/api/v1/auth/user/forgetpassword', {
                        method: 'POST',
                        headers: {
                        'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({                              
                        password: password
                        })
                    });   
                
            
           if (response.ok) {
            const data = await response.json();
            alert('ForgetPassword successful!'); 
            console.log(data); 
           }
          } else {        
            alert(`ForgetPassword failed`); 
          }
        } catch (error) {
          console.error('Error:', error);
          alert('An error occurred. Please try again.'); 
        }                      
          
    }
  return (
    <div className='container'>
      <h1>Iboy Technology Drone App </h1>
      <h2>Change Password</h2>  
      <form action="">
        <div className='inputContainer'>
        <label htmlFor="Password">New Password</label>
        <input type="password" placeholder='Enter Password ' name="Password" id="Password" />        
        </div>
        <div className='inputContainer'>
        <label htmlFor="Password">Comfirm Password</label>
        <input type="password" placeholder='Comfirm Password ' name="Password" id="Password" />        
        </div>
        <div className='inputContainer'>
               <button type="submit" className='submitBtn'>Save</button>
        </div>
        
      <button id="reveal" disabled="disabled"><span></span></button>

        </form>           
      
    </div>
  )
}

export default Password
