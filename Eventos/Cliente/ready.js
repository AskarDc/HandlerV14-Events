const {Client} = require('discord.js');
const config = require("../../config.json");

module.exports = {
    name: "ready",
    once: true,
    async execute(client) {

        console.log(`Evento ready preparado! ${client.user.tag}`);

        const activities = [
            'mencioname ^^',
            'dev !Zer0 🥀|ᵖᵏ', 
            'en mantenimiento'
        ];

        setInterval(() => {
            const status = activities[Math.floor(Math.random() * activities.length)];
            client.user.setPresence({ activities: [{ name: `${status}`}]});
        }, 40000);
        
    },
};