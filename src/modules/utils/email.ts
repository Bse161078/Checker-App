
import * as SgMail from '@sendgrid/mail';

const {SEND_GRID} = process.env;

console.log("SEND_GRID= ",SEND_GRID)
SgMail.setApiKey(SEND_GRID);


export const sendEmail=async (email,checkerName,itemName,quantity)=>{
    const msg = {
        to: email,
        from: 'checkerdmn@gmail.com',
        subject: 'New material list order',
        html: `<h2><strong>Checker Name</strong> : ${checkerName}<br/><strong>Item Name</strong> : ${itemName}<br/> <strong>Quantity</strong> : ${quantity}<br/> </h2>`,
    };
    try {
        await SgMail.send(msg);
    }catch (e) {
        console.log(e);
    }
}