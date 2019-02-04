// GitBot Output
const accountSid = 'xxxxxxxxxxxxxxxxxxx'; // Change this SID for yours
const authToken = 'xxxxxxxxxxxxxxxxxxxxx'; // Put your AUTH Token
const client = require('twilio')(accountSid, authToken);

// Build task actions that say something and listens for a repsonse.
botTaskActions = {
  actions: [
    { say: 'Hi there, I\'m your GitHub commit tracker! How can I help you?' }, // Put your output here
    { listen: true }
  ]
};

// Replace 'UAXXX...' with your Assistant's unique SID
client.autopilot.assistants('xxxxxxxxxxxxxxxxxx')
                .tasks
                .create({
                  uniqueName: 'git-bot',
                  actions: botTaskActions,
                })
                .then(assistant => console.log(assistant.sid))
                .done();
