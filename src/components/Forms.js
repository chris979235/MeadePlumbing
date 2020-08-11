import React from 'react';
import emailjs from 'emailjs-com';


export default function Forms() {
  
    function sendEmail(e) {
      e.preventDefault();
      console.log(e.target,4444);
      emailjs.sendForm('gmail', 'template_3Ie4NQ5O', e.target, 'user_NKM17MrLSjdc60o30cYtb')
      .then((result) => {
          if(alert('You message was sent!')){}
          else    window.location.reload(); 
    }, (error) => {
        console.log(error.text);
    });
    }
  
    return (
      <div className='divide'>
        <form className="formcontainer" onSubmit={sendEmail}>
          <input type="text" name="user_name" placeholder='Name' className='name'/>
          <input type="phone" name="contact_number" placeholder='phone' className='phone'/>
          <input type="email" name="user_email" placeholder="Email" className='email'/>
          <textarea name="message" placeholder='Message'className='message'/>
          <input type="submit" value="Send" className='input'/>
        <h1 className='texty'> SCHEDULE  A SERVICE OR FREE ESTIMATE</h1>
        </form>
      </div>
    );
  }
