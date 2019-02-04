// GitBot Output
const accountSid = 'xxxxxxxxxxxxxxxxxxx'; // Change this SID for yours
const authToken = 'xxxxxxxxxxxxxxxxxxxxx'; // Put your AUTH Token
const client = require('twilio')(accountSid, authToken);

// Build task actions that say something and listens for a repsonse.
botTaskActions = {
  actions: [
    { say: 'Hi there, I\'m your GitHub commit tracker! How can I help you?' },
    { listen: true }
  ]
};

// Replace 'UAXXX...' with your Assistant's unique SID
client.autopilot.assistants('UAd804899ec9fdd6eb13e2f53bd749cb3f')
                .tasks
                .create({
                  uniqueName: 'git-bot',
                  actions: botTaskActions,
                })
                .then(assistant => console.log(assistant.sid))
                .done();