
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











































































































































































































const { cmd } = require('../command');
const { sleep } = require('../lib/functions');

cmd({
    pattern: "restart",
    desc: "Restart the Muller Md",
    category: "owner",
    filename: __filename
},
async (conn, mek, m, {
    from, quoted, body, isCmd, command, args, q, isGroup, senderNumber, reply
}) => {
    try {
        // Get the bot owner's number dynamically from conn.user.id
        const botOwner = conn.user.id.split(":")[0]; // Extract the bot owner's number
        if (senderNumber !== botOwner) {
            return reply("Only the bot owner can use this command.");
        }

        const { exec } = require("child_process");
        reply("> Muller-MD Bot Restarting...");
        await sleep(1500);
        exec("pm2 restart all");
    } catch (e) {
        console.error(e);
        reply(`${e}`);
    }
});
