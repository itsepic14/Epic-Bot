const Discord = require('discord.js');
const client = new Discord.Client();
 
const prefix = 'e.';
 
const fs = require('fs');
 
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command); 
}
 
 
client.once('ready', () => {
    console.log('Epic Bot is online!');
    client.user.setActivity("e.yt");
}); 
 
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    } else if (command == 'yt'){
        client.commands.get('yt').execute(message, args);
    } else if (command == 'owns'){
        client.commands.get('owns').execute(message, args);
    } else if (command == 'kick'){
        client.commands.get('kick').execute(message, args);
    } else if (command == 'ban'){
        client.commands.get('ban').execute(message, args);
    }
});

client.login(process.env.token);