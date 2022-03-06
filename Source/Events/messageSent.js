module.exports = {
	async execute(message, client, config, log, json){

		const db = new json(config.messageSentDB);

		if (message.author.bot || message.channel.type === 'DM') return;

		if ( db.has(message.author.id) ) {

			db.set(message.author.id, db.get(message.author.id) + 1);

		} else {

			db.set(message.author.id, 1);

		}

	}
}