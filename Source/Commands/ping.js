const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('How fast the owl can be?'),
	async execute(interaction, client, config, log, json, lang, checklang) {

		let language = checklang(interaction);

		const Embed = new MessageEmbed()
		.setColor(config.CD)
		.setDescription(config.EP + lang[language].ping.replace('%ping%', client.ws.ping));

		await interaction.editReply({ embeds: [Embed] });

	},
};