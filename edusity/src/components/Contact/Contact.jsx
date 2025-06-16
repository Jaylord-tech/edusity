import React from 'react'
import './Contact.css'
import message_icon from '../../assets/message_icon.png'
import location_icon from '../../assets/location_icon.png'
import phone_icon from '../../assets/phone_icon.png'
import email_icon from '../../assets/email_icon.png'

const contact = () => {
//web3forms.com
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "fc29e3ac-3c69-47a9-9366-319cfa7e73b7");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us message <img src={message_icon} alt="" /></h3>
        <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
         <ul>
            <li> <img src={email_icon} alt="" /> Contact@Greatstack.dev</li>
            <li> <img src={phone_icon} alt="" />+234-810-9500-453</li>
            <li> <img src={location_icon} alt="" /> 77 Massachusetts Ave. Cambridge <br/> MA 02139, United States. </li>
         </ul>
      </div>

       <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type="text" name='name' placeholder='Enter your name' required/>

            <label>Your Phone Number</label>
            <input type="text" name='phone' placeholder='Enter your phone number' required />

            <label>Write your message here</label>
            <textarea name="message" rows="6" placeholder='Comment' required></textarea>

            <button type='submit' className='btn dark-btn'>Submit now</button>
        </form>
        <span>{result}</span>
       </div>
    </div>
  )
}

export default contact
