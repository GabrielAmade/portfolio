const router = require('express').Router();
const nodemailer = require('nodemailer');

router.post('/contact', (req, res)=>{
    let data = req.body;
    if(data.name.length === 0 || data.email.length === 0 || data.message.length === 0){
        return res.json({msg: "Merci de remplir tous les champs du formulaire"})
    }

        let smtpTransporter = nodemailer.createTransport({
            service: "Gmail",
            port: 465,
            auth:{
                user: 'gabriel.amade84@gmail.com',
                pass:'Management1912!'
            },
        });
        let mailOptions = {
            from:data.email,
            to:'gabriel.amade84@gmail.com',
            subject:`message from ${data.name}`,
            html:`
                <h3>Informations</h3>
                <ul>
                    <li>Name: ${data.name}</li>
                    <li>Email: ${data.email}</li>
                </ul>
                <h3>Message</h3>
                <p>${data.message}</p>
            `
        }

        smtpTransporter.sendMail(mailOptions, (error)=>{
            try{
                if(error) return res.status(400).json({msg:"Merci de remplir tous les champs du formulaire"})
                res.status(200).json({msg:"Merci de m'avoir contacté. Je reviens vers vous rapidement"})

            } catch (error){
                if(error)return res.status(500).json({msg: "Erreur du server"})
            }
        });
    

});

module.exports=router