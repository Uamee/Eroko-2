const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://cdn.discordapp.com/attachments/770280235588517949/782040362713088010/Screenshot_20201126-022948_Manga_Reader.jpg'
];
var rand = list[Math.floor(Math.random() * list.length)];

let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido!');
}

message.delete().catch(O_o => {});

let avatar = user.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Pode pegar se quiser <3')
        .setColor('#000000')
        .setDescription(`${user}`)
        .setImage(rand)
        .setTimestamp()
        //.setThumbnail(avatar)
        .setFooter('extra ticc')
        .setAuthor(user.tag, avatar);
  await message.channel.send(embed);

//backup
/*${message.author} acaba de beijar*/

}