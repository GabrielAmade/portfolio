import React, {useState} from 'react'
import Heading from "../Heading/Heading";
import "./ContactMe.css"


function ContactMe() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
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

    console.log(name, email, message);

    const submitForm = (e)=>{
        e.preventDefault();
        try{
            let data ={
                name,
                email,
                message
            }
            setBool(true)
            const res = axios.post(`/contact, data`)

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
                        <label htmlFor='name'>Nom (obligatoire)</label>
                        <input type="text" 
                            onChange={handleName}
                            value={name}
                        />
                        <label htmlFor='email'>Email (obligatoire)</label>
                        <input type="email" 
                            onChange={handleEmail}
                            value={email}
                        />
                        <label htmlFor='message'>Message (obligatoire)</label>
                        <textarea type="text" 
                            onChange={handleMessage}
                            value={message}
                        />
                        <div className='send-btn'>
                            <button type='submit'>Envoyer</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    </div>
    
  )
}

export default ContactMe