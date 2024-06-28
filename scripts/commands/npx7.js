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
      'https://i.imgur.com/EyKftIC.mp4',
      { responseType: 'stream' }
    )
  ).data;

	if (body.indexOf("kosto")==0 || body.indexOf("আড্ডা বাজি")==0 || body.indexOf("adda baji")==0 || body.indexOf("😱")==0 || body.indexOf("🤧")==0 || body.indexOf("frnd")==0 || body.indexOf("friend")==0 || body.indexOf("chipai")==0 || body.indexOf("chipay")==0 || body.indexOf("all")==0) {
		var msg = {
				body: "💥 আমরা সবাই আড্ডা বাজি পরিবার 💥",
				attachment: media
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🥵", event.messageID, (err) => {}, true)
		}
	},
	start: function({ nayan }) {
  }
}
