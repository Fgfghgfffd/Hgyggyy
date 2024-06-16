const fs = require("fs");
module.exports = {
  config:{
	name: "npx15",
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
      'https://i.imgur.com/4f9VmUf.mp4',
      { responseType: 'stream' }
    )
  ).data;

	if (body.indexOf("😭")==0 || body.indexOf("sad")==0 || body.indexOf("স্বপ্ন")==0 || body.indexOf("sopno")==0 || body.indexOf("good night")==0 || body.indexOf("good morning")==0 || body.indexOf("bye")==0 || body.indexOf("probasi")==0 || body.indexOf("প্রবাসী")==0 || body.indexOf("gd n8")==0) {
		var msg = {
				body: "❤️‍🔥💥 FARABI 💥❤️‍🔥"
				attachment: media
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🥵", event.messageID, (err) => {}, true)
		}
	},
	start: function({ nayan }) {
  }
}..
