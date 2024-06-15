module.exports.config = {
    name: "admin",
    version: "1.0.0",
    permission: 0,
    credits: "nayan",
    prefix: true,
    description: "",
    category: "prefix",
    usages: "",
    cooldowns: 5,
    dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【hh:mm:ss】");
  
var callback = () => api.sendMessage({body:`
--------------------------------------------
𝐍𝐚𝐦𝐞       : ❤️‍🔥💥ফারাবী✨ইসলাম✨রনি💥❤️‍🔥
𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 : FARABI ISLAM RONY 
𝐑𝐞𝐥𝐢𝐠𝐢𝐨𝐧   : ইসলাম
𝐏𝐞𝐫𝐦𝐚𝐧𝐞𝐧𝐭 𝐀𝐝𝐝𝐫𝐞𝐬𝐬: টাঙ্গাইল, ঢাকা
𝐂𝐮𝐫𝐫𝐞𝐧𝐭 𝐀𝐝𝐝𝐫𝐞𝐬𝐬: বলবো না, কালিহাতী, টাঙ্গাইল, ঢাকা, 
𝐆𝐞𝐧𝐝𝐞𝐫.   : ছেলে
𝐀𝐠𝐞           : ২৩+
𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧𝐬𝐡𝐢𝐩 : সিঙ্গেল
𝐖𝐨𝐫𝐤        : JOB (কাজ)
𝐆𝐦𝐚𝐢𝐥       : farabii708@gmail.com
𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩: wa.me/+966531079542
𝐓𝐞𝐥𝐞𝐠𝐫𝐚𝐦  : t.me/farabi0173210
𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐋𝐢𝐧𝐤 : https://www.facebook.com/farabi0173210`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => 
    fs.unlinkSync(__dirname + "/cache/1.png"));  
      return request(encodeURI(`https://i.imgur.com/DaDMWxd.jpeg`)).pipe(
fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
   };
