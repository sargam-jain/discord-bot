const {REST, Routes} = require('discord.js');
const commands = [{
    name:"ping",
    description:"Replies with pong",
},
    {
        name:"create",
        description:"creating a short url",
    },
    {
        name:"chutke",
        description:"creating a short url",
    },
    
];

const rest= new REST({version:"10"}).setToken("MTQ1MDM4MjY4NjAxODM0MjkyOA.GPuerz.bQdzA8z49S2Hw22T2j85lo3g7Yqggk3wC1F7XU");
(async () => {
try {
  console.log('Started refreshing application (/) commands.');

  await rest.put(Routes.applicationCommands('1450382686018342928'), { body: commands });

  console.log('Successfully reloaded application (/) commands.');
} catch (error) {
  console.error(error);
}
})();