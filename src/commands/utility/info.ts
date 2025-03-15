/*  📂 Import Libs */

import { CommandInteraction, SlashCommandBuilder, EmbedBuilder, time, inlineCode } from "discord.js";
import { commands } from '..'

/*  🔑 Export command data */
export const data = new SlashCommandBuilder()
  .setName("info")
  .setDescription("🤖 Some info about me - cute cat :3")
  .setIntegrationTypes([0,1])
  .setContexts([0,1,2]);

let Uptime = new Date().getTime() - process.uptime();
let UptimeFormatted = time(Math.round(Uptime/1000), "R");

/*  💻 Export command execute function */

export async function execute(interaction: CommandInteraction) {
  let CommandsCount = Object.values(commands).length;
  let Memory = process.memoryUsage();
  let MemoryUsed = Memory.heapUsed;
  let MemoryTotal = Memory.heapTotal;
  let MemoryPercentage = Math.round(MemoryUsed/MemoryTotal * 100);
  let Client = interaction.client;
  let { platform } = process;

  let embed = new EmbedBuilder()
              .setAuthor({name: Client.user.tag, iconURL: Client.user.displayAvatarURL()})
              .setDescription("I'm a cute cat discord bot written by `@nivereq`. \n### There is some stats:")
              .addFields([
                { name: "<:collection:1349414367577378877> Node.JS", value: inlineCode(process.version) },
                { name: "<:terminal:1349414338632355922> Platform", value: inlineCode( platform[0].toUpperCase() + platform.slice(1) ) },
                { name: "<:hourglass:1349414380399497306> Started", value: UptimeFormatted },
                { name: "<:memory:1349414355296456724> Memory Usage", value: inlineCode(MemoryPercentage + "%") },
                { name: "<:slash:1349416452817551454> Commands", value: inlineCode(CommandsCount.toString()) },
                { name: "<:globe:1349414313546481664> Servers", value: inlineCode(Client.guilds.cache.size.toString() )}
              
              ])


  return interaction.reply({embeds: [embed]})
}
