const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
    ALIVE_IMG: process.env.ALIVE_IMG ||"https://github.com/MRABDUL13/Muller-MD/blob/main/20250126_220630.jpg"
    ALIVE_IMG: process.evn.ALIVE_IMG || "Hello, I'm Alive
};
