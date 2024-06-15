const fs = require("fs");
module.exports = {
  config:{
	name: "npx14",
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
      'https://i.imgur.com/ofXo4us.mp4',
      { responseType: 'stream' }
    )
  ).data;

	if (body.indexOf("bidesh")==0 || body.indexOf("বিদেশ")==0 || body.indexOf("প্রবাস")==0 || body.indexOf("প্রবাসী")==0 || body.indexOf("probas")==0 || body.indexOf("probasi")==0 || body.indexOf("🐸")==0 || body.indexOf("bye")==0 || body.indexOf("allah")==0 || body.indexOf("take")==0) {
		var msg = {
				body: "❤️‍🔥 Farabi💥❤️‍🔥",
				attachment: media
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😓", event.messageID, (err) => {}, true)
		}
	},
	start: function({ nayan }) {
  }
}
