var reminders = require('./alexa-reminders')

reminders.login('Device Name', 'username', 'password', function(error, response, config){
  reminders.setReminder('Ask Alexa team for a proper Reminders API', null, config, function(error, response){
    console.log(response)
  })
})
