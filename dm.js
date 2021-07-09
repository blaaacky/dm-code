const Discord = require('discord.js');
const fs = require("fs");
const { PREFIX } = require("../../config");
const db = require('quick.db');




module.exports = {
  config: {
    name: 'dm',
    description: 'dm command',
        aliases: ["dm"],
        usage: '!dm',
        accessableby: "dm",
  },
  run: async (bot, message, args) => {
    
    if (!message.member.hasPermission('ADMINISTRATOR'))
  return message.lineReply("**You Dont Have A Permission To Do That!**");
    
    let user = message.mentions.users.first()
    if(!user) return message.lineReply("**I Cant Find This Member!**")
    
    
    let dm = args.slice(1).join(" ")
    if(!dm) return message.lineReply("**You Must Type Something!**")
    
    
    
    try {
      await user.send(`\`\`\`${message.author.tag}\`\`\` **Went To Say:** ${dm}`)
      
    } catch (error){
      return message.lineReply("**I Cant Dm Him Because His Dm Is Locked!**")
    }
    
    message.lineReply(`**Success Send To ${user}!**`)
  
    
  }
}
