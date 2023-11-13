module.exports = {
    name: 'ban',
    permissions: ["ADMINISTRATOR", "MANAGE_MESSAGES", "CONNECT"],
    description: 'bane alguem',
    execute(message, args, cmd, client, Discord){
        const member = message.mentions.users.first();
        if(member){
            const memberTarger = message.guild.members.cache.get(member.id);
            memberTarger.ban();
            message.channel.send('banido')
        
        }else{
            message.channel.send('VOCE NAO PODE BANI ESSE MEMBRO')
        }
    
    }
}