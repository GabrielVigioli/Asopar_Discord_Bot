module.exports = {
  name: 'clear',
  aliases: ['c'],
  permissions: '',
  description: "mensagens limpa kroi",
  async execute(message,args, cmd, client, Discord) {
    if (!args[0]) return message.reply("burro apaga com numero animal");
    if (isNaN(args[0])) return message.reply('entrea um numero real')

    if (args[0] > 100) return message.reply("menos de 100 por favor ")
    if (args[0] < 0) return message.reply('nao sei oq bota aq')

    await message.channel.messages.fetch({ limit: args[0] }).then(messages => {
      message.channel.bulkDelete(messages);
    })
  }
}