const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready!");
});

const rollWords = ["Roll me", "roll me", "Roll Me", "ROLL ME"];
const qoteWords = ["Q me", "q me", "Q Me", "Q ME"];

//Replies

client.on("message", (message) => {
    if( qoteWords.some(word => message.content.startsWith(word)) ) {
      var question = [
        "'Can someone lend me their sweaty armpits?' - Keppi Docko",
        "'I'll drill and screw my way out of here!' - Narancia",
        "'It doesn't meant that your quirk is strong or not!!, Its the will and responsibility of saving everyone!!!' -Kiyoshi Shichiro",
        "'We can go deeper' - Kamui Tenshin",
        "'Keppi Docko come in.' - Chalisa",
        "'Well, hurray for me getting wet...' - Shun/hikai",
        "'I've never had more than one person before!' - Nayami Okoro",
        "'**She held out a bright neon pink bra, that was decorated with little horrible sparkles.**' - Nayami Okoro",
        "'And it keeps making my toesies tingle...' - Keppi Docko",
        "'HOLD ME TIGHT!' - Narancia loota",
        "'**Getting deeper into it**' - Nayami Okoro",
        "'(Kamui is the god of dolls)' - Kamui Tenshin",
        "'(xyth apparently loves to attack Yamaji's crotch)' - Yamaji Azumamaro"];
      var answer = question[Math.floor(question.length * Math.random())];
      message.channel.sendMessage(answer);
    }
  });


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
