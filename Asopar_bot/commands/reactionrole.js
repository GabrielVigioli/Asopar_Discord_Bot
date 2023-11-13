const { Client } = require("discord.js");

module.exports = {
    name: 'reactionrole',
    aliases: ['roles'],
    description: "Sets up a reaction role message!",
    permissions: ["ADMINISTRATOR", "MANAGE_MESSAGES", "CONNECT"],
    async execute(message, args, cmd, client, Discord) {
        const channel = 'channelid';
        const channel2 = 'channelid';
        const channel3 = 'channelid'

        const blackrole = message.guild.roles.cache.find(role => role.name === "Black");
        const whiterole = message.guild.roles.cache.find(role => role.name === "White");
        const redrole = message.guild.roles.cache.find(role => role.name === "Red");
        const cianrole = message.guild.roles.cache.find(role => role.name === "Cian");
        const orangerole = message.guild.roles.cache.find(role => role.name === "Orange");
        const purplerole = message.guild.roles.cache.find(role => role.name === "Purple");
        const grayrole = message.guild.roles.cache.find(role => role.name === "Gray");
        const bluerole = message.guild.roles.cache.find(role => role.name === "Blue");
        const greenrole = message.guild.roles.cache.find(role => role.name === "Green");
        const yellowrole = message.guild.roles.cache.find(role => role.name === "Yellow");
 
        const blackEmoji = '⚫';
        const whiteEmoji = '⚪';
        const redEmoji = '🔴';
        const greenEmoji = '🟢';
        const purpleEmoji = '🟣';
        const yellowEmoji = '🟡';
        const orangeEmoji = '🟠';
        const blueEmoji = '🔵';
        const cianEmoji = '☄️';
        const grayEmoji = '🦾';

 
        let embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle('Choose a color for you!')
            .setDescription('Choosing a color will allow you to interact with your colormates!\n\n'
                + `${redEmoji} For red color\n`
                + `${whiteEmoji} For white color\n`
                + `${blackEmoji} For black color\n`
                + `${greenEmoji} For green color\n`
                + `${yellowEmoji} For yellow color\n`
                + `${orangeEmoji} For orange color\n`
                + `${blueEmoji} For blue color\n`
                + `${purpleEmoji} For purple color\n`
                + `${cianEmoji} For cian color\n`
                + `${grayEmoji} For gray color\n`);
 
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(redEmoji);
        messageEmbed.react(whiteEmoji);
        messageEmbed.react(blackEmoji);
        messageEmbed.react(greenEmoji);
        messageEmbed.react(yellowEmoji);
        messageEmbed.react(orangeEmoji);
        messageEmbed.react(blueEmoji);
        messageEmbed.react(purpleEmoji);
        messageEmbed.react(cianEmoji);
        messageEmbed.react(grayEmoji);
 
        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === redEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(redrole);
                }
                if (reaction.emoji.name === whiteEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(whiterole);
                }
                if (reaction.emoji.name === blackEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(blackrole);
                }
                if (reaction.emoji.name === greenEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(greenrole);
                }
                if (reaction.emoji.name === yellowEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(yellowrole);
                }
                if (reaction.emoji.name === cianEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(cianrole);
                }
                if (reaction.emoji.name === grayEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(grayrole);
                }
                if (reaction.emoji.name === purpleEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(purplerole);
                }
                if (reaction.emoji.name === orangeEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(orangerole);
                }
                if (reaction.emoji.name === blueEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(bluerole);
                }
            } else {
                return;
            }
 
        });
 
        
        client.on('messageReactionRemove', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === redEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(redrole);
                }
                if (reaction.emoji.name === whiteEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(whiterole);
                }
                if (reaction.emoji.name === blackEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(blackrole);
                }
                if (reaction.emoji.name === greenEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(greenrole);
                }
                if (reaction.emoji.name === yellowEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(yellowrole);
                }
                if (reaction.emoji.name === cianEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(cianrole);
                }
                if (reaction.emoji.name === grayEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(grayrole);
                }
                if (reaction.emoji.name === purpleEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(purplerole);
                }
                if (reaction.emoji.name === orangeEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(orangerole);
                }
                if (reaction.emoji.name === blueEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(bluerole);
                }
            } else {
                return;
            }
 
        });
        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel2) {
                if (reaction.emoji.name === redEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(redrole);
                }
                if (reaction.emoji.name === whiteEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(whiterole);
                }
                if (reaction.emoji.name === blackEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(blackrole);
                }
                if (reaction.emoji.name === greenEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(greenrole);
                }
                if (reaction.emoji.name === yellowEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(yellowrole);
                }
                if (reaction.emoji.name === cianEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(cianrole);
                }
                if (reaction.emoji.name === grayEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(grayrole);
                }
                if (reaction.emoji.name === purpleEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(purplerole);
                }
                if (reaction.emoji.name === orangeEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(orangerole);
                }
                if (reaction.emoji.name === blueEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(bluerole);
                }
            } else {
                return;
            }
 
        });
 
        
        client.on('messageReactionRemove', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel2) {
                if (reaction.emoji.name === redEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(redrole);
                }
                if (reaction.emoji.name === whiteEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(whiterole);
                }
                if (reaction.emoji.name === blackEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(blackrole);
                }
                if (reaction.emoji.name === greenEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(greenrole);
                }
                if (reaction.emoji.name === yellowEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(yellowrole);
                }
                if (reaction.emoji.name === cianEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(cianrole);
                }
                if (reaction.emoji.name === grayEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(grayrole);
                }
                if (reaction.emoji.name === purpleEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(purplerole);
                }
                if (reaction.emoji.name === orangeEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(orangerole);
                }
                if (reaction.emoji.name === blueEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(bluerole);
                }
            } else {
                return;
            }
 
        });
        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel3) {
                if (reaction.emoji.name === redEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(redrole);
                }
                if (reaction.emoji.name === whiteEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(whiterole);
                }
                if (reaction.emoji.name === blackEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(blackrole);
                }
                if (reaction.emoji.name === greenEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(greenrole);
                }
                if (reaction.emoji.name === yellowEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(yellowrole);
                }
                if (reaction.emoji.name === cianEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(cianrole);
                }
                if (reaction.emoji.name === grayEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(grayrole);
                }
                if (reaction.emoji.name === purpleEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(purplerole);
                }
                if (reaction.emoji.name === orangeEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(orangerole);
                }
                if (reaction.emoji.name === blueEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(bluerole);
                }
            } else {
                return;
            }
 
        });
 
        
        client.on('messageReactionRemove', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel3) {
                if (reaction.emoji.name === redEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(redrole);
                }
                if (reaction.emoji.name === whiteEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(whiterole);
                }
                if (reaction.emoji.name === blackEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(blackrole);
                }
                if (reaction.emoji.name === greenEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(greenrole);
                }
                if (reaction.emoji.name === yellowEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(yellowrole);
                }
                if (reaction.emoji.name === cianEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(cianrole);
                }
                if (reaction.emoji.name === grayEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(grayrole);
                }
                if (reaction.emoji.name === purpleEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(purplerole);
                }
                if (reaction.emoji.name === orangeEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(orangerole);
                }
                if (reaction.emoji.name === blueEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(bluerole);
                }
            } else {
                return;
            }
 
        });
    }
 
}   