const Discord = require("discord.js")

exports.run = async (client, message, args) => {
  var array1 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

  var rand = Math.floor(Math.random() * array1.length);

  if (!args[0] || (args[0].toLowerCase() !== message.author && args[0].toLowerCase() !== message.author)) {
    message.reply("ok");
  } 
else if (args[0].toLowerCase() == array1[rand]) {
    message.channel.send("rand1");
  }
  else if (args[0].toLowerCase() != array1[rand]) {
    message.channel.send("rand2");
    }
    else if (args[0].toLowerCase() != array1[rand]) {
    message.channel.send("rand3");
    }
    
    //TEM COISA ERRADA NESSES IF/ELSEIF ---- VER DEPOIS

    //backup
 
  };