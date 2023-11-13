module.exports = async (client, message, args, Discord) =>{
    const guild = client.guilds.cache.get('seuchanellid');
    setInterval(() =>{
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('seuchanellid');
        channel.setName(`Total Members: ${memberCount.toLocaleString()}`);
        console.log('Updating Member Count');
    }, 5000);
}
 
