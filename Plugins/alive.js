const { cmd } = require('../command');
const os = require('os');
const packageJson = require('../package.json');

cmd({
  pattern: 'alive',
  alias: ['status', 'uptime'],
  react: '⚡',
  desc: 'Check if Mulle-MD is alive and show system stats',
  category: 'general',
  use: '.alive',
}, async (conn, m) => {
  console.log('✅ Alive command triggered!');
  console.log('Chat ID:', m?.chat);
  console.log('Sender:', m?.sender);
  console.log('Text:', m?.text);

  if (!m || !m.chat) {
    console.error('❌ No valid chat ID found. Exiting command.');
    return;
  }

  const totalMem = (os.totalmem() / 1024 / 1024).toFixed(0);
  const freeMem = (os.freemem() / 1024 / 1024).toFixed(0);
  const cpu = os.cpus()[0].model;
  const seconds = process.uptime();

  const formatUptime = () => {
    const d = Math.floor(seconds / (3600 * 24));
    const h = Math.floor((seconds % (3600 * 24)) / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.floor(seconds % 60);
    return `${d}d ${h}h ${m}m ${s}s`;
  };

  const message = `
╭───[ *🤖 Muller-MD ALIVE* ]───╮
│ ⏱️ *Uptime:* ${formatUptime()}
│ 💾 *RAM:* ${freeMem}/${totalMem} MB
│ 🧠 *CPU:* ${cpu}
│ ⚙️ *Platform:* ${os.platform()} (${os.arch()})
│ 📦 *Bot Version:* ${packageJson.version}
╰────────────────────────────╯

🟢 *SEPTORCH_BOT is Alive!*
🌐 Powered by *Septorch Network*
  `.trim();

  try {
    console.log('📤 Sending alive status message...');
    await conn.sendMessage(m.chat, { text: message }, { quoted: m });
    console.log('✅ Message sent successfully!');
  } catch (error) {
    console.error('❌ Error sending primary message:', error);

    try {
      await conn.reply(m.chat, '🟢 *Muller-MD is Alive!*', m);
      console.log('✅ Fallback message sent successfully!');
    } catch (fallbackError) {
      console.error('❌ Error sending fallback message:', fallbackError);
    }
  }
});
