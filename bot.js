const Discord = require("discord.js");
  const client = new Discord.Client();
    const clienttoken = "MzI3NzM2NTMyOTMwOTIwNDUw.DGmnLA.QFbtYXPzTAvZsoFW70wNLyVm3lE"
      client.on('ready', () => {
        client.user.setGame(`❖ Virex For Ever ❖ | ❖ -bc ❖`,'https://www.twitch.tv/VForEver');
          console.log('Im Ready!');
  
        });

  client.on('message', message => {
       var prefix = "-";
    if (message.content.split(' ')[0] == 'bc')
       message.guild.members.forEach( member => {
         if (!message.member.hasPermission("ADMINISTRATOR"))  return;


           member.send( `${member} ! ` + message.content.substr(3));
                                                      message.delete();
            
                                                    });
            
                                                  });
   client.on("message", message => {
       var prefix = "-";
 
             var args = message.content.substring(prefix.length).split(" ");
                if (message.content.startsWith(prefix + "b")) {
                          if (!message.member.hasPermission("ADMINISTRATOR"))  return;

                          if (!args[1]) {
                            
                                 let embed3 = new Discord.RichEmbed()
                                     .setDescription(":white_check_mark: | تم ارسال رسالة لا يوجد فيها شيء")
                                       .setColor("#FF00FF")
                                          message.channel.sendEmbed(embed3);
                            
                                        } else {

                            
                                           let embed4 = new Discord.RichEmbed()
                                                            .setDescription(':white_check_mark: | تم ارسال الرساله للجميع ..')
                                                                .setColor("#99999")
                               
                                                                message.channel.sendEmbed(embed4);
                                                      message.delete();
                            }
                          }
});

client.login(process.env.BOT_TOKEN);

