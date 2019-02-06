# SlackBotAssistant
How to create a simple SlackBot from command line. WIP Project.


### You have to create a project with Twilio Autopilot.

- Visit the Autopilot home in your Twilio console, then:

  - Click on "Create a new Assistant" to create a new Assistant
  
  - Give your Assistant a name
  
  - Click the red Submit button
  

### Turn your Assistant into a Slackbot:

- Visit Slack, then:

  - Create a new Public Slack Channel
  
  - Create new outgoing webhook integration in Slack
  
  - Add your Assistant's custom webhook to the Slack URLs field:
  
    - The custom Slack webhook for your Assistant takes this form:

      **https://channels.autopilot.twilio.com/v1/<ACCOUNT_SID>/<ASSISTANT_SID>/slack**

      As you can see, you'll need two pieces of information from Twilio to complete this URL:

      ``` Account SID ```
      
      ``` Assistant SID ```
      
      You can find your Account SID in the [Twilio Console list](https://www.twilio.com/console/autopilot/list)



### In the files provided you will find these fields, change the "xxx" for your information:

  ``` accountSid ```
  
  ``` authToken ```
  
  ``` Assistant SID ```
  
  
  ### command for assistant and task creation:
  
  
   ``` node assistant.js ```
    
    
   ``` node task.js  ```
  
  **Note:**  This files are a simple way for assistant and assistant task creation, using Twilio Autopilot and Slack WebHook app.
