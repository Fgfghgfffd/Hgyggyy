const fs = require("fs");
module.exports = {
  config:{
	name: "npx10",
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
      'https://i.imgur.com/5lotuML.mp4',
      { responseType: 'stream' }
    )
  ).data;

	if (body.indexOf("🤪")==0 || body.indexOf("🙊")==0 || body.indexOf("🤦🏻")==0 || body.indexOf("ex")==0 || body.indexOf("এক্স")==0 || body.indexOf("অবহেলা")==0 || body.indexOf("obohela")==0 || body.indexOf("ovohela")==0 || body.indexOf("আহারে")==0 || body.indexOf("amon")==0) {
		var msg = {
				body: "❤️‍🔥 Farabi💥❤️‍🔥",
				attachment: media
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🤦🏻", event.messageID, (err) => {}, true)
		}
	},
	start: function({ nayan }) {
  }
}
