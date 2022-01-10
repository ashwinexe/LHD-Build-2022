const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_ACCOUNT_TOKEN;
const client = require('twilio')("AC8dff626029f477398d636f25b03f1f00", "1f6ce05ded7f95983c04b1fa7c922f98");

client.messages.create(
    {
        body: 'You made your first twilio API. yay!',
        from: ' +15707018972',
        to: '+917989294810',
    }
).then(messages => console.log(message.accountSid));