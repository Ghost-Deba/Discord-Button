const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});
//environment
require('dotenv').config()

function formatTime() { 
  const date = new Date();
  const options = {
    timeZone: 'America/New_York', 
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}
const express = require("express")
const app = express();
var listener = app.listen(process.env.PORT || 2000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
app.listen(() => console.log("I'm Ready To Work..! 24H"));
app.get('/', (req, res) => {
  res.send(`
  <body>
  <center><h1>Bot 24H ON!</h1></center
  </body>`)
});
client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('1265825059692609587')
    .setType('PLAYING')
    .setURL('https://open.spotify.com/user/nour2282005?si=_lkQtKu2QlC-UVLCkxUL1A') 
    .setState('𓂺𝙵𝚞𝚌𝚔 𝚃𝚑𝚒𝚜 𝙻𝚒𝚏𝚎𓂸')
    .setName('quaaxz')
    .setDetails(`Nitro is now`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://cdn.discordapp.com/attachments/905256599906558012/1307526399128637460/cb2da9b8e06f5e2addc04d92d9fb64a1.jpg?ex=673aa05a&is=67394eda&hm=96a8cd82e58cc28a8b57286c3d6842e63c826716caf129199cbbe9efebf8d222&') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('Nitro') 
    .setAssetsSmallImage('https://cdn.discordapp.com/attachments/905256599906558012/1307526398243639346/4465f820ea97137a6e16b362edf946bc.jpg?ex=673aa05a&is=67394eda&hm=c81d39f7ff264115c8806aafc32f15cb7e73fafc7741c431ee135d3c376b2e36&') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('Small Text') 
    .addButton('Spotify', '');

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
