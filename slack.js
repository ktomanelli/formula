const Slack = require('slack');
const config = require('./config.js');

const token = config.SLACK_TOKEN;
const bot = new Slack({ token });
bot.chat.postMessage({
  token,
  channel: 'CSCE1HD9T',
  text: 'hello',
});
