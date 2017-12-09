# alexa-reminders
A nodejs library to create Amazon Echo Alexa Reminders

#### Installation
```sh
$ npm install -S alexa-reminders
```

#### Usage
```javascript
var reminders = require('alexa-reminders')

reminders.device('Device Name', 'username', 'password')
reminders.login(function(error, response){
  reminders.setReminder('Ask Alexa team for a proper Reminders API', null, function(error, response){
    console.log(response)
  })
})
```
#### TODO
- [ ] Create Listener example
- [ ] Save cookies and device info in FileSystem file to avoid login every time
