const {Client, Events,GatewayIntentBits } = require("discord.js");
const client = new Client({intents:[GatewayIntentBits.Guilds,GatewayIntentBits.GuildMessages,GatewayIntentBits.MessageContent]});

client.on("messageCreate",(message) => {
    if(message.author.bot) return;
    if(message.content.startsWith("create")){
        const url = message.content.split("create")[1];
        return message.reply({
            content:"Generating Short Id for " + url,
        }); 
    }
    message.reply({
        content:"Hi from baat",
    })
});
client.login("YOUR CLIENT ID");

client.on(Events.InteractionCreate,async interaction => {
    if(!interaction.isChatInputCommand()) return;
    if(interaction.commandName === "ping"){
        await interaction.reply("Pong");
    }else if(interaction.commandName === "wassup"){
        await interaction.reply("yoo");
    }

})

