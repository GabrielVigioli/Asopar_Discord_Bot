var Scraper = require('images-scraper');
const google = new Scraper({
    puppeteer: {
      headless: true,
    },
  });

const { description } = require("./ban");

module.exports = {
    name: 'image',
    aliases: ['img'],
    permissions: '',
    description: 'Send a image',
   async execute(message, args, cmd, client, Discord){
       const image_query = args.join(' ');
       if(!image_query) return message.channel.send('Enter a image name')

       const image_results = await google.scrape(image_query, 1);
       message.channel.send(image_results[0].url)
   }
}