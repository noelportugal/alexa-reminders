# alexa-reminders
A nodejs library to create Amazon Echo Alexa Reminders

### This librabry can also be used as a pseudo Push Notification alternative.
## Read more about why [here](http://theappslab.com/2017/12/08/alexa-push-notifications-via-reminders/)

#### Installation
```sh
$ npm install -S alexa-reminders
```

#### Usage
```javascript
var reminders = require('alexa-reminders')

reminders.device('Device Name', 'username', 'password')
reminders.login(function(error, response){
  // pass 'yyyy-mm-dd HH:MM' instead of null for specific date/time
  reminders.setReminder('Ask Alexa team for a proper Reminders API', null, function(error, response){
    console.log(response)
  })
})
```
#### TODO
- [ ] Create Listener example
- [ ] Save cookies and device info in FileSystem file to avoid login every time
