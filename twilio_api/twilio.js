require('dotenv').config();
// hello
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_ACCOUNT_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.messages.create(
    {
        body: 'You made your first twilio API. yay!',
        from: '', //enter the Twilio Number you bought
        to: '', //enter the phone number you want to send sms
    }
).then(messages => console.log(message.accountSid));