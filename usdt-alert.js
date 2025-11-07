require('dotenv').config();
const { Telegraf } = require('telegraf');
const Moralis = require('moralis').default;
const bot = new Telegraf(process.env.TG_BOT);
Moralis.start({ apiKey: process.env.MORALIS });

async function run() {
  const res = await Moralis.EvmApi.token.getTokenTransfers({
    address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
    chain: "eth", limit: 1
  });
  const v = Number(res.raw.result[0].value)/1e6;
  if (v>5000) bot.telegram.sendMessage(process.env.CHAT, `USDT ${v} moved!`);
}
setInterval(run, 60_000);
