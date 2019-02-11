# SlackBotAssistant  :octocat:


### Creating a project with Twilio Autopilot:

- Create an account if you don't have one. Go to [Twilio](https://www.twilio.com).

- Go to [Twilio](https://www.twilio.com/console/projects/create), select **Products** and then, **Autopilot**.

- Give a name to your project.


### Turn your Assistant into a Slackbot :

- Visit Slack, then:

  - Create a new Public Slack Channel.
  
  - Create a new Outgoing Webhook integration in Slack.
  
  - The custom Slack Outgoing Webhook URL for your Assistant takes this form:

      **https://channels.autopilot.twilio.com/v1/<ACCOUNT_SID>/<ASSISTANT_SID>/slack**

      - As you can see, you'll need two pieces of information from Twilio to complete this URL:

        ``` Account SID ```  (Find  it in [Twilio Console list](https://www.twilio.com/console/autopilot/list))

        ``` Assistant SID ```
      
  - Give a name to your Bot. The name you give it is the one you will see when you invoke the bot in Slack.
  
  - Remember, Trigger Word(s) are required if no Channel is chosen.
  
### In the files provided you will find these fields, change the "xxx" for your information:

  ``` accountSid ```
  
  ``` authToken ```
  
  ``` Assistant SID ```
  
  
  ### command for assistant and task creation  :computer::
  
  
   ``` node assistant.js ```
     
   ``` node task.js  ```
  
  **Note:**  This files are a simple way for assistant and assistant task creation, using Twilio Autopilot and Slack Outgoing WebHook app.
