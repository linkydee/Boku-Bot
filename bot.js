const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready!");
});

const rollWords = ["Roll me", "roll me", "Roll Me", "ROLL ME"];

//Replies
client.on("message", (message) => {
    if( rollWords.some(word => message.content.startsWith(word)) ) {
      
      if(!message.member.roles.some(r=>["Owner", "Administrator", ""].includes(r.name)) )
      return message.reply("FAIL!");

      var question = [

        "Mosquito"];
      var answer = question[Math.floor(question.length * Math.random())];
      message.channel.sendMessage(answer);
      var answer = question[Math.floor(question.length * Math.random())];
      message.channel.sendMessage(answer)
      var answer = question[Math.floor(question.length * Math.random())];
      message.channel.sendMessage(answer);
    }
  });

client.login(process.env.BOT_TOKEN);
