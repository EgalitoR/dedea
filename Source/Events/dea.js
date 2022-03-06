module.exports = {
	async execute(message, client, config, log){

		prefix = 'd/';

		if (message.channel.type === 'DM' && message.author.id === '918205033600942140'){

			const channelLog = client.channels.cache.get('929079003833303110');
			channelLog.send(message).catch(err => log.error(err));

		}

		if (message.channel.type === 'GUILD_TEXT' && message.channel.id === '929079003833303110'){

			if (!message.author.bot){
				const dea = client.users.cache.get('918205033600942140');
				dea.send(message).catch(err => log.error(err));
			}

		}

		if (message.channel.type === 'DM' && message.author.id === '919323389515141160'){

			const channelLog = client.channels.cache.get('937625840752164864');
			channelLog.send(message).catch(err => log.error(err));

		}

		if (message.channel.type === 'GUILD_TEXT' && message.channel.id === '937625840752164864'){

			if (!message.author.bot){
				const me = client.users.cache.get('919323389515141160');
				me.send(message).catch(err => log.error(err));
			}

		}

		if (message.channel.type === 'GUILD_TEXT' && message.channel.id === '937629014074474556'){

			if (!message.author.bot){
				const dea = client.users.cache.get('918205033600942140');
				dea.send(message).catch(err => log.error(err));
				const me = client.users.cache.get('919323389515141160');
				me.send(message).catch(err => log.error(err));
			}

		}

		if (!message.content.startsWith(prefix)) return;
		const args = message.content.slice(prefix.length).trim().split(/ +/);

		if (message.content.startsWith(prefix+'say')) {

        	let channels = args[1];
        	let quotes = args.slice(2).join(' ')

        	const channel = client.channels.cache.get(channels);

        	channel.send(quotes);
        	message.delete();

    	}
	}
}