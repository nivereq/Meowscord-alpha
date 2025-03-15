/*  📂 Import Libs */
import { Client, ActivityType, MessageType, Message, OmitPartialGroupDMChannel, EmbedBuilder, CategoryChannelResolvable, CategoryChannel, ChannelType } from "discord.js";
import { config } from "./config";
import { commands } from "./commands";
import { deployCommands } from "./registerSlashes"
import { QuickDB } from "quick.db";

let statuses = ["you <3", "your pretty eyes <3", "nivereq", "other cats:3", "ALPHA", "{{GUILDS}} guilds."]

let db = new QuickDB();

const client = new Client({
  intents: ["Guilds", "GuildMessages", "DirectMessages", "DirectMessageTyping"],
});

client.on("ready", async () => {
    console.log("Discord bot is ready! 🤖");
    await client.guilds.fetch();



    let currentStatus = 0;
    await deployCommands({ guildId: "1338083222202093570" });
    setInterval(() => {
        if(!client.user) return;
        client.user.setActivity({
            type: ActivityType.Watching,
            name: statuses[currentStatus].replace(/{{GUILDS}}/g, client.guilds.cache.size.toString())
        });
        
            currentStatus++;
            if(currentStatus + 1 > statuses.length) currentStatus = 0;
    }, 1000 * 60 * 0.25)
    

});


client.on("guildCreate", async (guild) => {
  await client.guilds.fetch(guild.id)
  await deployCommands({ guildId: guild.id });
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) {
    return;
  }
  const { commandName } = interaction;
  if (commands[commandName as keyof typeof commands]) {
    commands[commandName as keyof typeof commands].execute(interaction);
  }
});

client.on("userUpdate", async user => {
    await client.users.fetch(user.id)
})


export function login(){
    client.login(config.DISCORD_TOKEN);
}