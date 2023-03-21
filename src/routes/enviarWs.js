const accountSid = 'ACab0c84ae790dc339bcc16c7ada70dc17';
const authToken = '1bc662c3c8ed20ae5e1038328ac4f956';
const client = require('twilio')(accountSid, authToken);

client.messages
    .create({
        body: 'Your appointment is coming up on July 21 at 3PM',
        from: 'whatsapp:+14155238886',
        to: 'whatsapp:+5218115383093'
    })
    .then(message => console.log(message.sid))
    .done();