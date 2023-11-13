module.exports = {
    name: 'kick',
    description: 'kika alguem',
    permissions: ["ADMINISTRATOR", "MANAGE_MESSAGES", "CONNECT"],
    execute(message, args, cmd, client, Discord){
        const member = message.mentions.users.first();
        if(member){
            const memberTarger = message.guild.members.cache.get(member.id);
            memberTarger.kick();
            message.channel.send('kickado')
        
        }else{
            message.channel.send('VOCE NAO PODE kikca ESE MENMRO')
        }
    
    }
}