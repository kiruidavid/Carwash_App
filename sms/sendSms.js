import dotenv from 'dotenv' 
import twilio from 'twilio' 

dotenv.config()

const accountSid = process.env.ACCOUNT_SID 
const authToken = process.env.AUTH_TOKEN 

const client = new twilio(accountSid, authToken) 

function sendSms(phone, message){  
    client.messages.create({
            body: message, 
            to: phone, 
            from: process.env.TWILIO_TOKEN
    }) 
    .then(message => console.log(message.sid)) 
    .catch((error) => console.log(error))

}

export default sendSms