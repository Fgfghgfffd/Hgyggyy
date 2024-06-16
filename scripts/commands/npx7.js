const fs = require("fs");
module.exports = {
  config:{
	name: "npx7",
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
      'https://i.imgur.com/ijiP1I9.mp4',
      { responseType: 'stream' }
    )
  ).data;

	if (body.indexOf("kosto")==0 || body.indexOf("taka")==0 || body.indexOf("ke")==0 || body.indexOf("😱")==0 || body.indexOf("🤧")==0 || body.indexOf("prem")==0 || body.indexOf("prem")==0 || body.indexOf("chipai")==0 || body.indexOf("chipay")==0 || body.indexOf("milk")==0) {
		var msg = {
				body: "❤️‍🔥💥 FARABI 💥❤️‍🔥",
				attachment: media
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🥵", event.messageID, (err) => {}, true)
		}
	},
	start: function({ nayan }) {
  }
}
