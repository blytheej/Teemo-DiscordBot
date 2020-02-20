const Discord = require("discord.js");
const client = new Discord.Client();
let tj = 80;
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
  if (command === "은셜") {
    message.channel.send("세계최고착하지^.^");
  }
  if (command === "주미") {
    message.channel.send("줌쌤");
  }
  if (command === "줌줌") {
    message.channel.send("부삼먹어주세요");
  }
  if (command === "줌쌤") {
    message.channel.send("가평조자룡찾아떠난다");
  }
  if (command === "준돈") {
    message.channel.send("통장에유강민");
  }
  if (command === "태준") {
    tj += 2;
    message.channel.send(
      `내연녀 생성 완료 ${Math.floor(tj / 10)}명 | 생성중 : ${(tj % 10) * 10}% `
    );
  }
  if (command === "머홍") {
    message.channel.send("개때리고싶다");
  }
  if (command === "하린누나") {
    message.channel.send("뿌링핫도그 대기중");
  }
  if (command === "상윤") {
    message.channel.send("인기녀");
  }
  if (command === "주누") {
    message.channel.send("태준남친");
  }
  if (command === "모래") {
    message.channel.send("고인돌");
  }
  if (command === "종혁") {
    message.channel.send("치-----이이---이--이--익---");
  }
  if (command === "크리티") {
    message.channel.send("간잽e");
  }
  if (command === "준선") {
    message.channel.send("주미꼬봉이준선");
  }
  if (command === "정태준") {
    message.channel.send("권상윤동거남녀?-김태홍");
  }
  if (command === "이준선") {
    message.channel.send("김용문딱가리-주누");
  }
  if (command === "태홍") {
    message.channel.send("ㅉ");
  }
  if (command === "전동환") {
    message.channel.send("상추새기");
  }
  const countDownDatedh = new Date("Jan 1, 2023 00:00:00").getTime();
  if (command === "동환") {
    let now = new Date();
    let left = countDownDatedh - now.getTime();
    let day = Math.floor(left / (1000 * 60 * 60 * 24));
    message.channel.send(`${day}일 남았습니다-군-`);
  }
  const countDownDategm = new Date("FEB 20, 2021 00:00:00").getTime();
  if (command === "강민") {
    let now = new Date();
    let left = countDownDategm - now.getTime();
    let day = Math.floor(left / (1000 * 60 * 60 * 24));
    message.channel.send(`${day}일 남았습니다-군-`);
  }
  const countDownDateyc = new Date("MAY 18, 2021 00:00:00").getTime();
  if (command === "허리피") {
    let now = new Date();
    let left = countDownDateyc - now.getTime();
    let day = Math.floor(left / (1000 * 60 * 60 * 24));
    message.channel.send(`${day}일 남았습니다 -군-`);
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
