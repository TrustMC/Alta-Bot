const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require ("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

  if(err) console.log (err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) => {
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });

});


bot.on("ready", async () => {
  console.log(`${bot.user.username} is online! CONGRATS`);
  bot.user.setActivity("Being Coded 8/40", {type: "WATCHING"});
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);

//kick
  if(cmd === `${prefix}kick`) {
    return;
  }

  //tempmute
  if(cmd === `${prefix}tempmute`) {
    return;
  }


//ban
  if(cmd === `${prefix}ban`) {
    return;
  }


//report
  if(cmd === `${prefix}report`) {
    return;
  }


//serverinfo
  if(cmd === `${prefix}serverinfo`) {
    return;
  }


//botinfo
  if(cmd === `${prefix}botinfo`) {
    return;
  }

});

bot.login(process.env.NjAyNjE0OTIxMjc1ODk5OTQ2.XTopbA.ZhqBNbSB-A9Z8OwnAnhOYfbqw_g));
