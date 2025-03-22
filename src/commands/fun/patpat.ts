/*  📂 Import Libs */

import { ChatInputCommandInteraction, CommandInteraction, SlashCommandBuilder } from "discord.js";

/*  🔑 Export command data */

export const data = new SlashCommandBuilder()
  .setName("patpat")
  .setDescription("😽 Responses with cutie text!")
  .setIntegrationTypes([0,1])
  .setContexts([0,1,2]);

/*  💻 Export command execute function */

export async function execute(interaction: CommandInteraction) {

    let responses = [
        "*purrs~*",
        "*meow~*",
        "*chirps~*",
        "*trills~*",
        "*coos~*",
        "*growls...*",
        "*hisses!*",
        "*spits!*",
        "*howls...*",
        "*screeches!!*",
        "*yowls...*",
        "*mutters...*",
        "*chatters teeth*",
        "*grunts~*",
        "*short meow~*",
        "*annoyed 'eee'~*",
        "*soft 'mmm'~*",
        "*deep murmuring...*",
        "*long meow~*",
        "*brings you a toy while meowing~*",
        "*rubs against your legs~*",
        "*headbutts you~*",
        "*kneads with paws~*",
        "*raises tail up~*",
        "*flicks tail quickly!*",
        "*slow blinks at you~*",
        "*licks you~*",
        "*gently bites you~*",
        "*chews on nails...*",
        "*jumps onto a high place!*",
        "*kicks with hind legs!*",
        "*covers eyes with paw while sleeping~*",
        "*curls up to sleep~*",
        "*lies on back, belly exposed~*",
        "*hides in a box!*",
        "*attacks your feet playfully!*",
        "*chews on cables!*",
        "*lies on your keyboard~*",
        "*drops prey into the food bowl...*",
        "*jumps up in excitement!*"
      ];

    return interaction.reply(
      responses[Math.floor(Math.random() * responses.length)]
    );
}
