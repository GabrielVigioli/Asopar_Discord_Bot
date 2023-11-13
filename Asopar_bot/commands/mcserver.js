const util = require('minecraft-server-util');
 
module.exports = {
    name: 'server',
    aliases: ['mcinform', 'checkmine', 'mineservers', 'mc'],
    permissions: '',
    description: 'get information about a minecraft server',
    execute(message, args, cmd, client, Discord){
        
        if(cmd === 'server'){
            if(!args[0]) return message.channel.send('Please enter a minecraft server ip');
        if(!args[1]) return message.channel.send('Please enter a minecraft server port');
 
        util.status(args[0], {port: parseInt(args[1])}).then((response) =>{
            console.log(response);
            const embed = new Discord.MessageEmbed()
            .setColor('#BFCDEB')
            .setTitle('Minecraft server status')
            .addFields(
                {name: 'Server IP', value: response.host},
                {name: 'Online Players', value: response.onlinePlayers},
                {name: 'Max Players', value: response.maxPlayers},
                {name: 'Version', value: response.version}
            )
            .setFooter('Mincraft server util by Asopar');
 
            message.channel.send(embed);
        })
        .catch ((error) =>{
            message.channel.send('there was an error finding this server');
            throw error;
        })
        }
        if(cmd === 'mc'){
           message.channel.send('This is not an mc serve')

        }
    }
    
}