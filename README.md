# alexa-reminders
A nodejs library to create Amazon Echo Alexa Reminders

### This librabry can also be used as a pseudo Push Notification alternative.
### Read more about why [here](http://theappslab.com/2017/12/08/alexa-push-notifications-via-reminders/)

#### Installation
```sh
$ npm install -S alexa-reminders
```

#### Usage
```javascript
var reminders = require('alexa-reminders')
reminders.login('Device Name', 'username', 'password', function(error, response, config){
  reminders.setReminder('Ask Alexa team for a proper Reminders API', null, config, function(error, response){
    console.log(response)
  })
})
```
#### TODO
- [ ] Create Listener example
- [ ] Save cookies and device info in FileSystem file to avoid login every time
