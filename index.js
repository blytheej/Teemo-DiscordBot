const Discord = require("discord.js");
const client = new Discord.Client();
let tj = 0;
//const GoogleImages  = require('google-images');

client.on("ready", () => {
  console.log("run");
});

client.on("message", message => {
  let msg = message.content.split(" ");
  let command = msg[0];
  let contents = "";
  if (msg[1] !== undefined) {
    for (let i = 1; i < msg.length; i++) {
      contents += msg[i] + " ";
    }
  }

  console.log(command + " + " + contents);
  if (command === "teemo") {
    message.channel.send("is cute");
  }
  if (command === "티모") {
    message.channel.send("기여어");
  }
  if (command === "태준") {
    tj += 1;
    message.channel.send(`내연녀 스택 : ${tj}`);
  }
  if (command === "머홍") {
    message.channel.send("권상윤 남자친구");
  }

  if (command === "^j") {
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          connection.playFile("laugh.mp3");
        })
        .catch(console.log);
    } else {
      message.reply("you're not in voice channel");
    }
  }

  if (command === "^leave") {
    message.member.voiceChannel.leave();
  }

  if (command === "^bpg") {
    // Set the client user's presence
    client.user
      .setPresence({ game: { name: "top teemo" }, status: "idle" })
      .then(console.log)
      .catch(console.error);
  }

  if (command === "^game") {
    // gameplaying
    let m = message.member.presence.game;
    if (m === null) {
      m = "not playing game";
    }
    message.channel.send(m);
  }

  if (command === "^pgame") {
    if (msg[1] === undefined) {
      message.channel.send("write game ex) League of Legends");
    } else {
      message.channel.send("@everyone " + " " + msg[1] + "하자");
    }
  }

  if (command === "^sgame") {
    // stop game
    if (msg[1] === undefined) {
      message.channel.send("write user name!");
    } else {
      let user = message.guild.members;
      user.forEach(function(member) {
        if (member.user.username === msg[1]) {
          console.log(member.user);
          let game = member.user.presence.game;
          if (game == null) {
            message.channel.send("not playing game");
          } else {
            message.channel.send(
              "<@" + member.user.id + "> " + game.name + " 그만하셈"
            );
          }
        }
      });
    }
  }
});

client.login(process.env.BOT_TOKEN);
