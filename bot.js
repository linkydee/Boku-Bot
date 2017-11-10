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
        "Absorb and Release",
        "Acid", 
        "Age", 
        "Air Propulsion", 
        "Animal Voice", 
        "Artistic Creation", 
        "Bear - Form", 
        "Black Hole", 
        "Blood Manipulation", 
        "Bloodcurdle",  
        "Brainwashing", 
        "Bunny - Form", 
        "Cat - Form", 
        "Cemedine", 
        "Cement", 
        "Centipede", 
        "Chronostasis", 
        "Compression", 
        "Confession", 
        "Copy", 
        "Creation", 
        "Cremation", 
        "Crystallization", 
        "Dark Shadow", 
        "Desutegoro's Quirk", 
        "Disintegration", 
        "Dog - Form", 
        "Double", 
        "Dragon Form", 
        "Dream Creation", 
        "Dust Manipulation", 
        "Earphone Jack",
        "Earth Flow", 
        "Emotional Control", 
        "Erasure", 
        "Explosion", 
        "Falcanary", 
        "Fat Adsorption", 
        "Fear", 
        "Fire Breath", 
        "Fish - Form", 
        "Flame hair", 
        "Fold", 
        "Foldabody", 
        "Forcible Quirk Activation", 
        "Fortune Teller", 
        "Four Arms", 
        "Fox - Form", 
        "Frog - Form", 
        "Gatling", 
        "Half Cold Half Hot", 
        "Hallucination", 
        "Halo Rings", 
        "Hardening", 
        "Hell Flame", 
        "High Spec", 
        "Homing", 
        "Honey", 
        "Horns", 
        "Hydrokinesis", 
        "Hypertrophy", 
        "Impact Recoil", 
        "Innsmouth's quirk", 
        "Jet", 
        "Large Fists", 
        "Lion - Form", 
        "Longevity", 
        "Lost Sense", 
        "Luck", 
        "Lullaby", 
        "Lumber", 
        "Luminous", 
        "Lust", 
        "Magnetism", 
        "Manuel's Quirk", 
        "Monster",
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
