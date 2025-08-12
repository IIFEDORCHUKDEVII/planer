require("dotenv").config();
const { Telegraf, Scenes, session } = require("telegraf");
const { menuScene } = require("./scenes/menuScene");

const bot = new Telegraf(process.env.BOT_TOKEN);

const stage = new Scenes.Stage([menuScene]);

const setupBot = () => {
  bot.use(session());
  bot.use(stage.middleware());
  bot.use((ctx, next) => {
    next();
  });
  bot.command("start", async (ctx) => {
    try {
      ctx.scene.enter("menuScene");
    } catch (error) {}
  });

  return bot;
};
module.exports = {
  setupBot,
};

// Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
