module.exports = {
	async execute(message, client, config, log, json){

		const db = new json(config.guildSentDB);

		if (message.author.bot || message.channel.type === 'DM') return;

		if ( db.has(message.guild.id) ) {

			db.set(message.guild.id, db.get(message.guild.id) + 1);

		} else {

			db.set(message.guild.id, 1);

		}

	}
}