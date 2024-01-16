const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds,GatewayIntentBits.GuildMessages,GatewayIntentBits.MessageContent] });

client.on("messageCreate",(message)=>{
    if(message.author.bot) return;
    if(message.content.startsWith("createURL")){
        const url= message.content.split("createURL")[1]
        return message.reply({
            content:"Generating short id for "+url,
        })
    }
    console.log(message.content)
    message.reply("hi from bot")
})
client.on("interactionCreate",(interaction)=>{
    console.log(interaction);
    interaction.reply("pong");
})
client.login("MTE5Njc1NTMxMjg2MzA5Mjc1Ng.GLSOaZ.7U82jAM55xs2mm58t14cs8uhc84c2gFRUOzjMY");