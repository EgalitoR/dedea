module.exports = {
	execute(client, config, log, json, lang){

		client.once('ready', () => {

			console.clear();

			let state = 0;
			let presences = config.presences;

			setInterval(() => {
				state = (state + 1) % presences.length;
				let presence = presences[state];

				client.user.setActivity(presence.message, { type: presence.type });
			}, 15000);
			
			log.success(`${client.user.username} is now online`);

		});

		function checklang(interaction){

			const langs = new json(config.guildLangDB);

			if (!langs.has(interaction.guild.id)) {

				langs.set(interaction.guild.id, 'en');

			}

			return langs.get(interaction.guild.id);

		}

		client.on('interactionCreate', async interaction => {

			if (!interaction.isCommand()) return;

			const command = client.commands.get(interaction.commandName);

			if (!command) return;

			try {

				await interaction.deferReply();
				await command.execute(interaction, client, config, log, json, lang, checklang);

			} catch (error) {

				log.error(error);
				await interaction.editReply({ content: 'This interaction failed. Somehow?' });

			}
		});

		client.on('messageCreate', async message => {

			const messageSent = require('./Events/messageSent.js');
			messageSent.execute(message, client, config, log, json);

			const guildSent = require('./Events/guildSent.js');
			guildSent.execute(message, client, config, log, json);

			const dea = require('./Events/dea.js');
			dea.execute(message, client, config, log);

		})
	}
}