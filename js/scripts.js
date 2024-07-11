/*!
* ProFive Solutions - Modern Business v5.0.7 (https://startbootstrap.com/template-overviews/modern-business)
* Copyright 2024 Start Bootstrap
*/
// Contact Submission

var discordWebhook = ''; // Make sure to add your webhook URL here

async function sendMessage(name, email, message) {
  const request = require('request');
  const options = {
    method: 'POST',
    url: discordWebhook,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      embeds: [
        {
          title: 'Contact Submission',
          color: 0x00ff00,
          fields: [
            {
              name: 'Name',
              value: name
            },
            {
              name: 'Email',
              value: email
            },
            {
              name: 'Message',
              value: message
            }
          ]
        }
      ]
    })
  };

  request.post(options, function (error, response, body) {
    if (error) {
      console.log('Error sending message to Discord webhook:', error);
    } else {
      console.log('Message sent to Discord webhook:', body);
    }
  });
}