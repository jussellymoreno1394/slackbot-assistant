// GitBot Output
const accountSid = 'xxxxxxxxxxxxxxxxxxx'; // Change this SID for yours
const authToken = 'xxxxxxxxxxxxxxxxxxxxx'; // Put your AUTH Token
const client = require('twilio')(accountSid, authToken);

// Build task actions that say something and listens for a repsonse.
botTaskActions = {
  actions: [
    { say: 'Hello World' }, // Put your output here
    { listen: true }
  ]
};

// Replace 'UAXXX...' with your Assistant's unique SID
client.autopilot.assistants('xxxxxxxxxxxxxxxxxx')
                .tasks
                .create({
                  uniqueName: 'slack-bot', // Change this if you don't like the name ;(
                  actions: botTaskActions,
                })
                .then(assistant => console.log(assistant.sid))
                .done();
