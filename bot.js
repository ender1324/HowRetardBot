const { Telegraf } = require('telegraf');

const bot = new Telegraf("PUT YO TOKEN HERE");
bot.catch((err, ctx) => {
    console.log(`Encountered an error for ${ctx.updateType}`, err)
  });
bot.start((ctx) => ctx.reply("I'm alive, use /help to see the many of my command"));
bot.help((ctx) => ctx.reply('use "/howretard [Something]" to check how retard is the something'));
bot.command('source', (ctx) => ctx.reply('Source Code: https://github.com/ender1324/HowRetardBot'));
bot.hears(/howretard(?:@HowRetard_bot)? (.+)/, ({ match, reply }) => {
    const randomnumber = Math.floor(Math.random() * 100) + "%";
    reply(match[1] + " is " + randomnumber + " retarded").catch((err) => { 
    console.log(err)
    const trimerr = err.toString().trim()
    reply(trimerr)
 })
});

bot.launch(
  console.log("Bot launching")
);
