const fs = require("fs");
module.exports = {
  config:{
	name: "npx9",
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
      'https://i.imgur.com/fBNaIes.mp4',
      { responseType: 'stream' }
    )
  ).data;

	if (body.indexOf("ভাব")==0 || body.indexOf("vab")==0 || body.indexOf("এটিটিউড")==0 || body.indexOf("attitude")==0 || body.indexOf("pagol")==0 || body.indexOf("🐸")==0 || body.indexOf("pabna")==0 || body.indexOf("bose")==0 || body.indexOf("admin")==0 || body.indexOf("bye")==0) {
		var msg = {
				body: "FARABI",
				attachment: media
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("💔", event.messageID, (err) => {}, true)
		}
	},
	start: function({ nayan }) {
  }
}
