import React, {useState} from 'react'
import Heading from "../Heading/Heading";
import "./ContactMe.css"
import axios from "axios"
import load1 from "../../../src/assets/ContactMe/load2.gif";


function ContactMe(props) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [banner, setBanner] = useState("");
    const [bool, setBool] = useState(false);

    const handleName = (e)=>{
        setName(e.target.value);
    }
    const handleEmail = (e)=>{
        setEmail(e.target.value);
    }
    const handleMessage = (e)=>{
        setMessage(e.target.value);
    }

    const submitForm = async(e)=>{
        e.preventDefault();
        try{
            let data ={
                name,
                email,
                message
            }

            if(name.length === 0 || email.length === 0 || message.length === 0){
                setBanner("Please fill out all of the fields.")
                setBool (false)
                return
            }

            setBool(true)
            const res = await axios.post(`/contact`, data);
            if(res.status === 200){
                setBanner(res.data.msg)
                setBool (false)

                setName("")
                setEmail("")
                setMessage("")
            } else {
                setBanner(res.data.msg)
                setBool (false)
            }

        } catch(error){
            console.log(error);
        }
        
    }


  return (
      
    <div className="main-container" id="contact">
        <Heading title={"Contact"} />
        <div className='central-form'>
            <div className='col-1'>
                {/* <h1>Contact</h1> */}
                <div className='contact-infos'>
                    <h2>Linkedin</h2>
                    <h2>GitHub</h2>
                    <h2>gabrielamade@icloud.com</h2>
                </div>
            </div>
            <div className='col-2'>
                <div className='form'>
                    <form onSubmit={submitForm}>
                        <label htmlFor='name'>Nom</label>
                        <input type="text" 
                            onChange={handleName}
                            value={name}
                        />
                        <label htmlFor='email'>Email</label>
                        <input type="email" 
                            onChange={handleEmail}
                            value={email}
                        />
                        <label htmlFor='message'>Message</label>
                        <textarea type="text" 
                            onChange={handleMessage}
                            value={message}
                        />
                        <div className='send-btn'>
                            <button type="submit">
                            Envoyer
                            <i className="fa fa-paper-plane" />
                            {bool ? (
                            <b className="load">
                            <img src={load1} alt="image not responding" />
                            </b>
                ) : (
                  ""
                )}
              </button>
                        </div>
                        <p>{banner}</p>
                    </form>
                </div>
            </div>
        </div>

    </div>
    
  )
}

export default ContactMe