console.log('Preparing terminal');
const log = require('dilog');
console.clear();

log.info('Loading required Discord.js libraries');
const { Client, Collection, Intents } = require('discord.js');
console.clear();

log.info('Loading configuration file');
const config = require('./config.js');
console.clear();

log.info('Creating new Client Instances');
const client = new Client({ intents: 32711, partials: ["CHANNEL"] });
console.clear();

log.info('Reading all available command(s) files');
const fs = require('fs');
client.commands = new Collection();
const commandFiles = fs.readdirSync('./Source/Commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./Source/Commands/${file}`);
	client.commands.set(command.data.name, command);
}
console.clear();

log.info('Loading JSON DB modules');
const json = require('simple-json-db');
console.clear();

log.info('Loading available language');
const lang = require(config.lang);
console.clear();

log.info('Processing main services');
const bot = require('./Source/bot.js');
bot.execute(client, config, log, json, lang);

client.login(config.token);