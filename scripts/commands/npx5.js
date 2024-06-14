const fs = require("fs");
module.exports = {
  config:{
	name: "npx5",
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
      'https://i.imgur.com/yF4zBaY.mp4',
      { responseType: 'stream' }
    )
  ).data;

	if (body.indexOf("baby")==0 || body.indexOf("jan")==0 || body.indexOf("suna")==0 || body.indexOf("kolixa")==0 || body.indexOf("kolija")==0 || body.indexOf("kolixa")==0 || body.indexOf("jai")==0 || body.indexOf("aktu")==0 || body.indexOf("drans")==0 || body.indexOf(" kori")==0) {
		var msg = {
				body: "🥱💥FARABI💥🥱",
				attachment: media
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("💃", event.messageID, (err) => {}, true)
		}
	},
	start: function({ nayan }) {
  }
} 
