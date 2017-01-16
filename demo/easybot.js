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
  console.log("my id " + b.botId);
  console.log("my room " + b.group);
  console.log("my token " + b.token);
  b.message("WHAT UP BRO? " + b.botId);
});

module.exports = mybot;
