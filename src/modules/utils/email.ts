import * as SgMail from '@sendgrid/mail';

var smtpTransport = require('nodemailer-smtp-transport');
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

const {SEND_GRID} = process.env;

console.log("SEND_GRID= ", SEND_GRID)
SgMail.setApiKey(SEND_GRID);

const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
    },
});




export const sendEmail = async (email, checkerName, itemName, quantity) => {




    //let emailTransporter = await createTransporter();
    await transporter.sendMail({
        subject: 'New material list order',
        html: `<h2><strong>Checker Name</strong> : ${checkerName}<br/><strong>Item Name</strong> : ${itemName}<br/> <strong>Quantity</strong> : ${quantity}<br/> </h2>`,
        to: email,
        from: process.env.EMAIL
    });

}
