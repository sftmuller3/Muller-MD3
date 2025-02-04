const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
    ALIVE_IMG: process.env.ALIVE_IMG||"https://github.com/MRABDUL13/Muller-MD/blob/main/Mullerbot.jpg"
    ALIVE_MSG: process.env.ALIVE_MSG ||"Hello I'm Alive"
};
