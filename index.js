const Discord = require("discord.js");
require("dotenv").config();
// const TOKEN =
//   "OTgxNjUyMDc0ODUwODMyNDQ0.Gd32_x.4-vYZ9HyOfSEyUll_spmDJjWFqS2gneo12Ey3k";

const client = new Discord.Client({
  intents: ["GUILDS", "GUILD_MESSAGES"],
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on("messageCreate", (message) => {
  if (message.content == "ay") {
    message.reply("ay");
  }
});

client.login(process.env.TOKEN);
