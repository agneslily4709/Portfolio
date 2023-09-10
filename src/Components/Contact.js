import React from 'react'
import bye from '../Assets/bye.png'
import emailjs from "emailjs-com"
import Swal from 'sweetalert2';
import {FiSend} from 'react-icons/fi'

const Contact = () => {
  const SERVICE_ID = "service_x1botxp";
  const TEMPLATE_ID = "template_sj1pdk6";
  const USER_ID = "1ueGVojCge8VE1EvM";
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          title: 'Message Sent Successfully',
          imageUrl:"https://i.ibb.co/jW579tW/thumbsup.png",
          imageHeight:200,
          imageWidth:200,
          imageAlt:"Got it"
        })
      }, (error) => {
        Swal.fire({
          title: 'Ooops, something went wrong',
          text: error.text,
          imageUrl:"https://i.ibb.co/XJ1ph7Q/sleepglasses.png",
          imageHeight:200,
          imageWidth:200,
          imageAlt:"Lost it"
        })
      });
    e.target.reset()
  };
  return (
    <section className='container form mt-2' style={{color:"navy"}} id='contact'>
                <h1 className='section-header'>CONTACT</h1>
        <div className='contact row'>
          <form className='formContent col' onSubmit={handleOnSubmit} noValidate>
          <h3 style={{textAlign:"center"}}>Write To Me...</h3>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            <div id="emailHelp" className="form-text">I will never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputTitle1" className="form-label">Title</label>
            <input type="text" className="form-control" id="exampleInputTitle1"/>
          </div>
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          <button className='btn btn-info btn-lg mt-3 mb-3 w-100' type="submit">Send Me !!! <FiSend/></button>
          </form>
          <img className='contactImg col' src={bye} alt="..."/>
        </div>
    </section>
  )
}

export default Contact