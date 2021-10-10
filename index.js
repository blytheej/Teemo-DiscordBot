const Discord = require("discord.js");
const client = new Discord.Client();
let tj = 80;
//const GoogleImages  = require('google-images');

client.on("ready", () => {
  console.log("run");
});

client.on("message", (message) => {
  let msg = message.content.split(" ");
  let command = msg[0];

  if (msg[1] !== undefined) {
    for (let i = 1; i < msg.length; i++) {
      contents += msg[i] + " ";
    }
  }

  if (command === "teemo") {
    message.channel.send("is cute");
  }

  if (command === "롤ㄱ" || command === "ㄺ" || command === "ㄹㄱ") {
    message.channel.send("@here 님만오면5인큐");
  }
  if(command === "ㅂㄺ"){
    message.channel.send("@here 님만오면5인큐");
  }

  const now = new Date();
  if(command === "test"){
  client.channels.get("896674459438702592").send("레이드신청하세요");
  }
  
});

client.login(process.env.BOT_TOKEN);
