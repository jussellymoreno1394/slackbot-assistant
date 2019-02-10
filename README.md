# SlackBotAssistant  :octocat:


### Creating a project with Twilio Autopilot:

- Create an account if you don't have one. Go to [Twilio](https://www.twilio.com).

- Go to [Twilio](https://www.twilio.com/console/projects/create), select **Products** and then, **Autopilot**.

- Give a name to your project.


### Turn your Assistant into a Slackbot :

- Visit Slack, then:

  - Create a new Public Slack Channel
  
  - Create a new outgoing webhook integration in Slack
  
  - Add your Assistant's custom webhook to the Slack URLs field:
  
    - The custom Slack Outgoing Webhook app for your Assistant takes this form:

      **https://channels.autopilot.twilio.com/v1/<ACCOUNT_SID>/<ASSISTANT_SID>/slack**

      As you can see, you'll need two pieces of information from Twilio to complete this URL:

      ``` Account SID ```
      
      ``` Assistant SID ```
      
      You can find your Account SID in the [Twilio Console list](https://www.twilio.com/console/autopilot/list)



### In the files provided you will find these fields, change the "xxx" for your information:

  ``` accountSid ```
  
  ``` authToken ```
  
  ``` Assistant SID ```
  
  
  ### command for assistant and task creation  :computer::
  
  
   ``` node assistant.js ```
     
   ``` node task.js  ```
  
  **Note:**  This files are a simple way for assistant and assistant task creation, using Twilio Autopilot and Slack Outgoing WebHook app.
