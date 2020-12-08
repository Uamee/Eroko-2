const Discord = require('discord.js');

exports.run = async (client, message, args) => {

  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("sem permissão");
  
  let clear = args.slice(0).join(" ");
  if (clear < 2 || clear > 10) return message.reply("Só posso limpar de 2 a 10!");
  if (args.length === 0) return message.reply("Só apaga de 2 pra cima");
  if (isNaN(args[0])) return message.reply ("Somente numeros!");
  try {

    message.channel.bulkDelete(clear);
    message.channel.send(`Chat limpo por: ${message.author}`);

  }catch(e){ 
    console.log(e);
    }
}