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
client.login("MTQ1MDM4MjY4NjAxODM0MjkyOA.GPuerz.bQdzA8z49S2Hw22T2j85lo3g7Yqggk3wC1F7XU");

client.on(Events.InteractionCreate,async interaction => {
    if(!interaction.isChatInputCommand()) return;
    if(interaction.commandName === "ping"){
        await interaction.reply("Pong");
    }else if(interaction.commandName === "wassup"){
        await interaction.reply("yoo");
    }

})
