require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_ACCOUNT_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.messages.create(
    {
        body: 'You made your first twilio API. yay!',
        from: ' +15707018972',
        to: '+917989294810',
    }
).then(messages => console.log(message.accountSid));