const { Scenes } = require("telegraf");
const { menuKeyboard } = require("../keyboards/keyboards");

const menuScene = new Scenes.BaseScene("menuScene");

menuScene.enter(async (ctx) => {
  ctx.replyWithHTML("Відкрити web-версію", menuKeyboard());
});

module.exports = { menuScene };
