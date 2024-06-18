const fs = require("fs");
module.exports = {
  config:{
	name: "npx4",
        version: "1.0.1",
        prefix: false,
	permssion: 0,
	credits: "nayan", 
	description: "Fun",
	category: "no prefix",
	usages: "😒",
        cooldowns: 5, 
},

handleEvent: async function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
  const axios = require('axios')
const media = (
    await axios.get(
      'https://i.imgur.com/8qPTWMU.mp4',
      { responseType: 'stream' }
    )
  ).data;

	if (body.indexOf("vlobasi")==0 || body.indexOf("love u")==0 || body.indexOf("love")==0 || body.indexOf("i love u")==0 || body.indexOf("janu")==0 || body.indexOf("prem")==0 || body.indexOf("😊")==0 || body.indexOf("☺️")==0 || body.indexOf(" jan")==0 || body.indexOf("Love")==0) {
		var msg = {
				body: "💥সব শেষে যে তোমাকে পাইলো যে জন্য তোমাকে খুব করে আগলে রাখে💥",
				attachment: media
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😊", event.messageID, (err) => {}, true)
		}
	},
	start: function({ nayan }) {
  }
} 
