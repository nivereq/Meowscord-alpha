/*  📂 Import Libs */

import { ChatInputCommandInteraction, CommandInteraction, SlashCommandBuilder } from "discord.js";
import { GiphyFetch } from '@giphy/js-fetch-api';


/*  ⚙ Import Config */
import { config } from "../../config";

/*  🔑 Export command data */
export const data = new SlashCommandBuilder()
  .setName("cat")
  .setDescription("🐱 Responses with random cute cat gif :3.")
  .setIntegrationTypes([0,1])
  .setContexts([0,1,2]);


/*  🖼 Create new GiphyFetch istance */
const FetchGifs = new GiphyFetch(config.GIPHY_KEY);


/*  💻 Export command execute function */
export async function execute(interaction: CommandInteraction) {

    const { data: gifs } = await FetchGifs.search('cat', { offset: Number((Math.random() * 50).toFixed(0)), sort: 'relevant', limit: 1, type: 'gifs' })
    if(!gifs || !gifs[0] || !gifs[0].embed_url) return interaction.reply({content: "I'm sorry, but GIPHY Api sucks sometimes. Please try again later.", ephemeral: true})
    return interaction.reply(gifs[0].embed_url);
}
