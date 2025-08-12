const { Markup } = require("telegraf");

const menuKeyboard = () =>
  Markup.inlineKeyboard([
    Markup.button.webApp("Open web-version", "https://planer-web.vercel.app"),
  ])
    .oneTime()
    .resize();

module.exports = { menuKeyboard };
