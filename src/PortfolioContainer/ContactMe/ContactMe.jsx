import React, {useState, useEffect} from 'react'
import Heading from "../Heading/Heading";
import "./ContactMe.css"
import axios from "axios"
import data_fr from "../../datas_fr.json";
import data_en from "../../datas_en.json";
import data_it from "../../datas_it.json";


function ContactMe(props) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [banner, setBanner] = useState("");
    const [language, setLanguage] = useState("en"); // Default to English

  useEffect(() => {
    const detectedLanguage = navigator.language.split("-")[0];
    if (detectedLanguage === "fr" || detectedLanguage === "en" || detectedLanguage === "it") {
      setLanguage(detectedLanguage);
    } else {
      setLanguage("en"); 
    }
  }, []);

  const data = language === "en" ? data_en : language === "it" ? data_it : data_fr;


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
                setBanner("Merci de remplir tous les champs du formulaire.")
                return
            }

            const res = await axios.post(`/contact`, data);
            if(res.status === 200){
                setBanner(res.data.msg)

                setName("")
                setEmail("")
                setMessage("")
            } else {
                setBanner(res.data.msg)
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
                <div className='contact-infos'>
                    <h2>Linkedin</h2>
                    <h2>GitHub</h2>
                    <h2>gabrielamade@icloud.com</h2>
                </div>
            </div>
            <div className='col-2'>
                <div className='form'>
                    <form onSubmit={submitForm}>
                        <label htmlFor='name'>{data.contact_name}</label>
                        <input type="text" 
                            onChange={handleName}
                            value={name}
                        />
                        <label htmlFor='email'>{data.contact_email}</label>
                        <input type="email" 
                            onChange={handleEmail}
                            value={email}
                        />
                        <label htmlFor='message'>{data.contact_message}</label>
                        <textarea type="text" 
                            onChange={handleMessage}
                            value={message}
                        />
                        <div className='send-btn'>
                            <button type="submit">
                            {data.contact_send}
                            
              </button>
                        </div>
                        <p className='banner'>{banner}</p>
                    </form>
                </div>
            </div>
        </div>

    </div>
    
  )
}

export default ContactMe