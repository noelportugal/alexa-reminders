var reminders = require('./alexa-reminders')

reminders.device('Device Name', 'username', 'password')
reminders.login(function(error, response){
  reminders.setReminder('Ask Alexa team for a proper Reminders API', null, function(error, response){
    console.log(response)
  })
})
