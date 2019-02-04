// ASSISTANT CREATION
const accountSid = 'xxxxxxxxxxxxxxxxxxx'; // Change this SID for yours
const authToken = 'xxxxxxxxxxxxxxxxxxxxx'; // Put your AUTH Token
const client = require('twilio')(accountSid, authToken);

client.autopilot.assistants
                .create({
                   friendlyName: 'Git Bot assistant', // c
                   uniqueName: 'git-bot-assistant'
                 })
                .then(assistant => console.log(assistant.sid))
                .done();
