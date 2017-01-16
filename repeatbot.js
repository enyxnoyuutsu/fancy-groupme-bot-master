var bot = require('fancy-groupme-bot');

// local configuration read from env.
const TOKEN = process.env['ce80a500bd8f013405c3027b40249c3b'];
const GROUP = process.env['27987748'];
const NAME = process.env['Roland Jarvis'];
const URL = process.env['https://rolandjarvis007.herokuapp.com/'];
const CONFIG = {token:TOKEN, group:GROUP, name:NAME, url:URL};

var mybot = bot(CONFIG);

mybot.on('botRegistered', function(b) {
  console.log("I am registered");
  b.message("WHAT UP BRO?");
});

mybot.on('botMessage', function(b, message) {
  console.log("I got a message, fyi");
  if (message.name != b.name) {
    b.message(message.name + " said " + message.text);
  }
});

console.log("i am serving");
mybot.serve(8000);
