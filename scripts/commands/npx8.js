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
      'https://i.imgur.com/kyqwl7o.mp4',
      { responseType: 'stream' }
    )
  ).data;

	if (body.indexOf("😤")==0 || body.indexOf("🫤")==0 || body.indexOf(" ")==0 || body.indexOf("😨")==0 || body.indexOf("🤥")==0 || body.indexOf("bidesh")==0 || body.indexOf("বিদেশ")==0 || body.indexOf("probasi")==0 || body.indexOf("প্রবাসী")==0 || body.indexOf("valo na")==0) {
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
}..
