module.exports = {
    name: 'commands',
    aliases: ['command'],
    permissions: ["ADMINISTRATOR", "MANAGE_MESSAGES", "CONNECT"],
    description: 'Embeds',
    execute(message, args, cmd, client, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#23272a')
        .setTitle('Commands')
        .setURL('')
        .setDescription('Bot commands')
        .addFields(
            {name: '!avatar', value: '``Show the avatar of who was mentioned``'},
            {name: '!ban', value: '``Ban someone if you have permission``'},
            {name: '!clear', value: '``Clear messages``'},
            {name: '!image', value: '``Show a google image according to your second argument``'},
            {name: '!kick', value: '``Expel someone if you have permissions``'},
            {name: '!server', value: '``Pull some minecraft server, the arguments are !server hypixel.net 25565``'},
            {name: '!mute', value: '``Silence someone if you have permissions``'},
            {name: '!ping', value: '``Measure your ping``'},
            {name: '!p, !fs, !stop', value: '``Play a song, fs skip a song and stop, stop a song`` '},
            {name: '!roles', value: '``Color roles``'},
            {name: '!8ball', value: '``Any random answer to your question``'},
            {name: '!unmute', value: '``Unmute someone who is mutated if you have permissions``'},
            {name: '!weather', value: '``Shows the weather from somewhere in the world``'}
        )

        .setFooter('These are the server commands')

        message.channel.send(newEmbed);
    }

}