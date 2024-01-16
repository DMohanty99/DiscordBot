const { REST, Routes } = require('discord.js');

const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
  {
    name: 'shortenURL',
    description: 'shortens the url!',
  },
];

const rest = new REST({ version: '10' }).setToken("MTE5Njc1NTMxMjg2MzA5Mjc1Ng.GLSOaZ.7U82jAM55xs2mm58t14cs8uhc84c2gFRUOzjMY"
    );

(async()=>{try {
  console.log('Started refreshing application (/) commands.');

  await rest.put(Routes.applicationCommands("1196755312863092756"), { body: commands });

  console.log('Successfully reloaded application (/) commands.');
} catch (error) {
  console.error(error);
}})();