const router = require('express').Router();
const nodemailer = require('nodemailer');
require('dotenv').config();

router.post('/contact', (req, res) => {
    let data = req.body;
    if (data.name.length === 0 || data.email.length === 0 || data.message.length === 0) {
        return res.status(400).json({ msg: "Merci de remplir tous les champs du formulaire" });
    }

    let smtpTransporter = nodemailer.createTransport({
        service: "Gmail",
        port: 465,
        auth: {
            user: process.env.EMAIL_USER, 
            pass: process.env.EMAIL_PASS
        },
    });

    let mailOptions = {
        from: data.email,
        to: process.env.EMAIL_USER,
        subject: `message from ${data.name}`,
        html: `
            <h3>Informations</h3>
            <ul>
                <li>Name: ${data.name}</li>
                <li>Email: ${data.email}</li>
            </ul>
            <h3>Message</h3>
            <p>${data.message}</p>
        `
    }

    smtpTransporter.sendMail(mailOptions, (error) => {
        if (error) {
            return res.status(400).json({ msg: "Une erreur s'est produite lors de l'envoi du message" });
        }
        res.status(200).json({ msg: "Merci de m'avoir contacté. Je reviens vers vous rapidement" });
    });
});

module.exports = router;
