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









































































































































































































const config = require('../config')
const l = console.log
const { cmd, commands } = require('../command')
const dl = require('@bochilteam/scraper')  
const ytdl = require('yt-search');
const fs = require('fs-extra')
var videotime = 60000 // 1000 min
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
cmd({
    pattern: "yts",
    alias: ["ytsearch"],
    use: '.yts sameer kutti',
    react: "🔎",
    desc: "Search and get details from youtube.",
    category: "search",
    filename: __filename

},

async(conn, mek, m,{from, l, quoted, body, isCmd, umarmd, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!q) return reply('*Please give me words to search *E.g* .yts SUBZERO-MD*')
try {
let yts = require("yt-search")
var arama = await yts(q);
} catch(e) {
    l(e)
return await conn.sendMessage(from , { text: '*Error !!*' }, { quoted: mek } )
}
var mesaj = '';
arama.all.map((video) => {
mesaj += ' *🖲️' + video.title + '*\n🔗 ' + video.url + '\n\n'
});
await conn.sendMessage(from , { text:  mesaj }, { quoted: mek } )
} catch (e) {
    l(e)
  reply('*Error !!*')
}
});
