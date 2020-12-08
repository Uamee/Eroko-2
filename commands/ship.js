const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://i.imgur.com/Sem7Cyx.gif',
  'https://i.imgur.com/ZoUoHeO.gif',
  'https://i.imgur.com/orpAQmm.gif',
  'https://i.imgur.com/oXW3J9u.jpeg'

];

var rand = list[Math.floor(Math.random() * list.length)];
let user1 = message.mentions.users.first() || client.users.cache.get(args[0]);
let user2 = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user1) {
return message.reply('lembre-se de mencionar um usuários válidos para shipar');
}
if (!user2) {
return message.reply('lembre-se de mencionar um usuários válidos para shipar');
}
/*
message.channel.send(`${message.author.username} **acaba de beijar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = user1.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Ship')
        .setColor('#000000')
        .setDescription(`${message.author} acaba de shipar ${user1} com ${user2}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('<3 <3 <3')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}