const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { token, clientId, guildId } = require('../config.js');
const fs = require('fs');

const commands = [];
const commandFiles = fs.readdirSync('../Source/Commands/').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`../Source/Commands/${file}`);
	commands.push(command.data.toJSON());
}

const rest = new REST({ version: '9' }).setToken(token);

(async () => {
	
	try {
		console.log('Started refreshing application (/) commands.');

		await rest.put(
			Routes.applicationGuildCommands(clientId, guildId),
			{ body: commands },
		);

		console.log('Successfully reloaded application (/) commands.');

	} catch (error) {

		console.error(error);

	}

})();