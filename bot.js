const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require('fs');

client.on("ready", () => {
  console.log("I am ready!");
  client.user.setGame("B.Help for help!");
});

var userData = JSON.parse(fs.readFileSync('storage/userData.json', 'utf8'));

client.on("message", (message) => {
  var sender = message.author
if (!userData[sender.id]) userData[sender.id] = {
  messagesSent: 0
  }
  
  userData[sender.id].messagesSent++;
  
  fs.writeFile('storage/userData.json', JSON.stringify(userData), (err) => {
  if (err) console.error(err);
  });
});

const roll1Words = ["Roll me 1", "roll me 1", "Roll Me 1", "ROLL ME 1"];
const roll2Words = ["Roll me 2", "roll me 2", "Roll Me 2", "ROLL ME 2"];
const roll3Words = ["Roll me 3", "roll me 3", "Roll Me 3", "ROLL ME 3"];
const rollWords = ["Roll me 3", "roll me 3", "Roll Me 3", "ROLL ME 3", "Roll me 2", "roll me 2", "Roll Me 2", "ROLL ME 2", "Roll me 1", "roll me 1", "Roll Me 1", "ROLL ME 1", "Roll me"];
const qoteWords = ["Q me", "q me", "Q Me", "Q ME"];
const csheetWords = ["HGASJAKFA"];
const qsheetWords = ["HGASJAKFA"];
const lennyWords = ["HGASJAKFA"];
const creepWords = ["HGASJAKFA"];
const rateWords = ["Boku rate", "boku rate", "Boku Rate", "BOKU RATE"];
const eps1Words = ["Boku Eps 1 s 1"];
const kmsWords = ["B.Kms", "B.kms", "B.KMS"];
const helpWords = ["B.help", "B.help", "B.HELP", "Boku Help", "Boku help", "boku help", "BOKU HELP"]
const slimeWords = ["B.KILLSLIME", "B.Killslime", "B.killslime"];
const mesWords = ["B.Myw", "B.myw", "B.MYW"];

client.on("message", (message) => {
  if( mesWords.some(word => message.content.includes(word)) ) {
    var sender1 = message.author
    var prs = `<@${message.author.id}>, `
    message.channel.send(prs + userData[sender1.id].messagesSent)
  }
}); 




client.on("message", (message) => {
  if( helpWords.some(word => message.content.includes(word)) ) {
message.author.sendMessage({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    fields: [{
        name: "Kms",
        value: "Ways to die! Use: **B.Kms**"
      },
      {
        name: "Blank",
        value: "Blank"
      },
      {
        name: "Quote",
        value: "View a **__random__** quote. Use: **Q me**"
      },
      {
        name: "Blank",
        value: "Blank"
      },
      {
        name: "Rate",
        value: "Let Boku rate somthing 1-10. Use: **Boku Rate**"
      },
      {
        name: "Blank",
        value: "Blank"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© Boku Bot"
    }
  }
})
  }
});

client.on("message", (message) => {
    if( kmsWords.some(word => message.content.includes(word)) ) {
	
      var question = [
	", You died",
      	", You died. Congrats"];
      var answer = question[Math.floor(question.length * Math.random())];
    	var prs = `<@${message.author.id}>`
      message.channel.sendMessage(prs + answer)
    }
});

/*
const marryWords = ["Boku marry me", "boku marry me", "Boku Marry Me", "BOKU MARRY ME"];
client.on("message", (message) => {
  if( marryWords.some(word => message.content.includes(word)) ) {
    var prs = `<@${message.author.id}>`
    message.channel.sendMessage(">marry " + prs)
  }
});
*/

client.on("message", (message) => {
  if( eps1Words.some(word => message.content.startsWith(word)) ) {
    message.channel.sendMessage("https://lh3.googleusercontent.com/6-JV_ZyNAsOO1te9KqD2aAdHwJ3piyejc9LvXY306FeIS_eAW5Mn-Bw1Vm9BIxKuztsTyTRGut4=m22")
  }
});

client.on("message", (message) => {
    if( creepWords.some(word => message.content.includes(word)) ) {
      var question = ["It smells bad", "It smells good"];
      var answer = question[Math.floor(question.length * Math.random())];
      message.channel.sendMessage(answer)
    }
  });

client.on("message", (message) => {
    if( rateWords.some(word => message.content.startsWith(word)) ) {
      var question = ["I rate that 1/10", "I rate that 2/10", "I rate that 3/10", "I rate that 4/10", "I rate that 5/10", "I rate that 6/10", "I rate that 7/10", "I rate that 8/10", "I rate that 9/10", "I rate that 10/10"];
      var answer = question[Math.floor(question.length * Math.random())];
      message.channel.sendMessage(answer)
    }
  });

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
        "'(xyth apparently loves to attack Yamaji's crotch)' - Yamaji Azumamaro",
        "'**She'd kiss kamui's cheek, walking away quickly**' - Nayami Okoro",
        "'I don't like people.' - Kaiya Sauki",
        "'**One would be unlocekd.** spekking.' - Someone",
        "'She'd look back to Oku and Kiaya.' - Nayami",
        "'Oya Oya?' - Red",
        "'**She'd look over to Aiko.**' - Aiko Yamitsu",
        "https://cdn.discordapp.com/attachments/371676750075265026/373102671307210753/unknown1.png",
        "'I-Isnt it a bit too h-huge..?' - Narancia Loota",
        "'Im black.' - Mitsuo Shunichi",
        "'Oh man, this is gonna be intense!' - Yuuro/Yakuto/Shin",
        "'**Crying on the inside.**' - Nayami Okoro",
        "'(Because Narancia has the ability to arm-o-DICK)' - Kiyoshi/Mitsuru/DS",
        "'**The raccoon would suddenly grow rockets out of its asshole**' - Kamui Tenshin",
        "'Except make him a bit wet.' - Yamaji/Hirokazu",
        "'She'd run inbetween Naya's legs, She trying to look up her skirt.' - Kemo-Kemo/Minaski",
        "'(Nice another teen dad.)' - Kamui Tenshin",
        "'Ah! I dont care who wins! I JUST WANNA SEE TWO STUDENTS GO AT IT!' - Rix (Rip she's gone)",
        "'He'd pin her to the ground, smiling. He gripped her tiddies.' - Renai The Perv",
        "'(If I was just able to kiss him I might have won...)' - Eceer Notrod",
        "'Unkink Penis.' - Finnagan",
        "'Ill blow untill he dies.' - Maica",
        "'You two where really going at it!' - Alex William",
        "'**Dab whip nae nae**' - Kamui Tenshin",
        "https://cdn.discordapp.com/attachments/371676750075265026/374151562873929731/Screen_Shot_2017-10-29_at_18.04.20.png",
        "'Sake blowing in the background.' - Nayami Okoro",
        "'Hey, mind if I... **He gestured to touch Alex**' - Yamaji/Hirokazu/Kuron",
        "'**He walked up to Kamui, and tapped him on the shoulder, cloning him as well.**' - Yamaji/Hirokazu/Kuron",
        "'**She stood up normally, tearing a bit for once.**' - Aiko Yamitsu",
        "'Sick, I'm Kamoo **He'd ignore his hand**' - Kamui Tenshin",
        "'I-i d-didn't know y-y-you felt tha-that way towards me...k-kyoji-chan' - Kanoric Shizawara",
        "'Ey ey bb,it's yo boi detective conan.' - Uruki Kawisui",
        "'So I'll go easy on you.' - Kiyoshi Shichiro",
        "'I'm trap again.' - Kiyoshi Shichiro",
        "https://cdn.discordapp.com/attachments/371676750075265026/374906678719676426/image.png",
        "':exciteee: :eggplant: ' - e N a p o l e o n",
        "'>missouri smash @Aiko Yamitsu, s-shoot, my smashes aren't working.' - ",
        "'**He'd keep smashing**' - Uruki Kawisui",
        "'You're my bitch now. **Virosh said, excited as he slowly grabbed her boobs, foondling around it**' - Viroshi Mukuro/Okura Sasuto/Perv Man",
        "'He might rape me.. **She'd tear**' - Yumiko Terrashi",
        "https://cdn.discordapp.com/attachments/371676750075265026/375979052323831809/Screen_Shot_2017-11-03_at_19.06.16.png",
        "'**She'd grab an old soft one.** Hard*' - Aiko Yamitsu",
        "'I don't want any! **She'd shout over again**' - Aiko Yamitsu",
        "'**I'd look at Aiko, I'd smack her across the face**' - Jelly belly drug addict",
        "'**I'd make it go deeper**' - Jelly belly drug addict",
        "'**He looked down again** Hey can you get off. I'm not really allowed to be touching you, sorry.' - Yamaji Azumamaro",
        "'@Nori Mimikayo release your true colors.' - Kiyoshi Shichiro",
        "'(Where was DS?) (In Akari)' - Kyioshi and Kamui Tenshin",
        "'Wait kamoo is gay? Why is he raping young boys.' - Cerise Sattoya",
        "'(W t f) Daadddy, I can't eat that!' - Akari Tenshin",
        "'I'll get you to bed then.' - Kamui Tenshin",
        "'Stop jerking off.' - Oku Kenada",
        "'Man, I thought she had a dick!' - Renai",
        "'Baby... Baby- babyyy... oooohh..' - Renai",
        "'Mmp- yeeaaahhh...' - Yumiko Terrashi",
        "'**She walked, thinking** *Now he's gonna try and touch my ass....*' - Shizuki¥Kemo-Kemo¥Minaski",
        "'(She's getting inside me without asking)' - Yamaji 'N Stuff",
        "'**Some of nayami's water would get into his mouth**' - Takora",
        "'There are many small things, my dick is not one of them.' - Zetsubō Yami",
        "'Wha- Oh. I got gender changed.' - Yamaji/Yoshihiro/Ezekiel",
        "'(Just wait, until you come out)' - Aiko Yamitsu",
        "https://cdn.discordapp.com/attachments/371676750075265026/377083688464154625/Screen_Shot_2017-11-06_at_20.15.45.png",
        "https://cdn.discordapp.com/attachments/371676750075265026/377084511797641227/Screen_Shot_2017-11-06_at_20.18.55.png",
        "'SORRY I'M A CUNT.' - Kiyoshi Shichiro",
        "'**Zetsu's eyes widened.**  W-was that a girl? **He muttered to himself**?' - Zetsubō Yami",
        "'(Also, did he notice the girl touched him.)' - Yamaji Azumamaro",
        "'And did she p-poke me?' - Zetsubō Yami",
        "'What's the matter? **He said, commenting on the fact he was panting so much** I thought you said you didn't have a limit, has it gone down? Or...' - Yamaji and others",
        "'I- I have no limit...' - Kamui Tenshin",
	      "'LEMME TELL YOU SOMETHIN BOTH STRANGERS THAT ARE TRYING TO LIT ME ON FIRE, YOU START A WAR WITH THE BIG BAD WOLF AND I'LL RIP YOUR INTESTINES AND TURN IT INTO A SWEATER!' - Kossha Saito",
        "'Can I make people soft..? **Keppi thought**' - Keppi Docko",  
	      "'**He smirked, cockily** I've gotten a whole lot better!' - Yamaji",
        "'***I LOVE DICKS***' - Kiyoshi Shichiro/DickLover69",
        "'Mah cock... **Sad face**' - Drex",
        "'Someone hurt Sake's cock.' - Yamaji Azumamaro (Maybe you did last night)",
        "'My cock need to be stronk' - Drex",
        "'Rip Nori's cock.' - Drex",
        "'I WILL ACTUALLY SUCK OFF ALL THE ADMINS' - Yoroi Endo (Im waiting...)"];
      var answer = question[Math.floor(question.length * Math.random())];
      message.channel.sendMessage(answer);
    }
  });
	
client.login(process.env.BOT_TOKEN);
