const fs = require("fs");
module.exports = {
  config:{
	name: "npx12",
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
      'https://i.imgur.com/zBIHf7f.mp4',
      { responseType: 'stream' }
    )
  ).data;

	if (body.indexOf("gf")==0 || body.indexOf("bow")==0 || body.indexOf("farabi")==0 || body.indexOf("🤦🏻")==0 || body.indexOf("🤦🏻")==0 || body.indexOf("🤦🏻")==0 || body.indexOf("🤦🏻")==0 || body.indexOf("🤦🏻")==0 || body.indexOf("baby")==0 || body.indexOf("sona")==0) {
		var msg = {
				body: "❤️‍🔥আমি আবার জন্ম নিলে তোমার প্রেম এ পড়তে চাই❤️‍🔥",
				attachment: media
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🥰", event.messageID, (err) => {}, true)
		}
	},
	start: function({ nayan }) {
  }
} 
