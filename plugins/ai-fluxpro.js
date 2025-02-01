// Thats Why You Are Single🥲😂

/*
*********************************************************************
* __    __     __  __     __         __         ______     ______   *
*/\ "-./  \   /\ \/\ \   /\ \       /\ \       /\  ___\   /\  == \  *
*\ \ \-./\ \  \ \ \_\ \  \ \ \____  \ \ \____  \ \  __\   \ \  __<  *
* \ \_\ \ \_\  \ \_____\  \ \_____\  \ \_____\  \ \_____\  \ \_\ \_\*
*  \/_/  \/_/   \/_____/   \/_____/   \/_____/   \/_____/   \/_/ /_/*
*********************************************************************

Project Name : Muller MD
Creator      : SFT MULLER ( Muller-MD )
Repo         : https//github.com/Mrabdul13/Muller-MD
Support      : wa.me/2349133628107
*/





























const config = require('../config');
const { cmd, commands } = require('../command');
const { fetchJson } = require('../lib/functions');


cmd({
  pattern: 'fluxpro',
  react: '🧩',
  desc: 'Generate an image using Flux',
  category: 'image',
  filename: __filename
}, async (conn, mek, m, {
  body,
  from,
  quoted,
  isCmd,
  command,
  args,
  q,
  isGroup,
  sender,
  senderNumber,
  botNumber2,
  botNumber,
  pushname,
  isMe,
  isOwner,
  groupMetadata,
  groupName,
  participants,
  groupAdmins,
  isBotAdmins,
  isAdmins,
  reply
}) => {
  try {
    const text = body.trim().replace(command, '').trim();
    if (!text) {
      return reply(`*Usage:* ${command} <prompt>\n\n*Example:* ${command} cat`);
    }

    await reply('> *Subzero Processing Image...*');

    const apiUrl = `https://api.davidcyriltech.my.id/flux?prompt=${encodeURIComponent(text)}`;

    await conn.sendMessage(m.chat, { image: { url: apiUrl }, caption: `🎨 *Flux Image Generator*\n\n📄 *Prompt:* ${text}\n\n> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍʀ ғʀᴀɴᴋ` }, { quoted: m });
  } catch (error) {
    console.error('Error in Flux command:', error);
    reply(`*AN ERROR OCCURRED!! MESSAGE :*\n\n> ${error.message}`);
  }
});


