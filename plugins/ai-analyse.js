

const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { cmd } = require('../command');

cmd({
  pattern: "gemini",
  react: "🧠",
  desc: "Analyzes an image using the Gemini API.",
  category: "tools",
  filename: __filename,
}, async (conn, mek, m, { reply, quoted }) => {
  try {
    if (!quoted) return reply("❌ Please reply to an image.");
    let mime = (quoted.msg || quoted).mimetype || "";
    if (!mime.startsWith("image"))
      return reply("❌ Please reply to an image message.");

    const imgBuffer = await quoted.download();
    if (!imgBuffer) return reply("❌ Failed to download the image.");

    const tempPath = path.join(os.tmpdir(), 'terra_gemini.jpg');
    fs.writeFileSync(tempPath, imgBuffer);

    const form = new FormData();
    form.append("image", fs.createReadStream(tempPath));
    const imgbbResponse = await axios.post("https://api.imgbb.com/1/upload", form, {
      params: { key: "4a9c3527b0cd8b12dd4d8ab166a0f592" },
      headers: { ...form.getHeaders() }
    });
    if (!imgbbResponse.data || !imgbbResponse.data.data || !imgbbResponse.data.data.url) {
      fs.unlinkSync(tempPath);
      return reply("❌ Error uploading the image.");
    }
    const uploadedUrl = imgbbResponse.data.data.url;
    fs.unlinkSync(tempPath);

    await reply("```muller-md is analyzing the image...```");

    const geminiUrl = "https://api.nexoracle.com/ai/gemini-image";
    const paramsObj = {
      apikey: "free_key@maher_apis",
      prompt: "gemini",
      url: uploadedUrl
    };
    const geminiResponse = await axios.get(geminiUrl, { params: paramsObj });
    if (!geminiResponse.data || geminiResponse.data.status !== 200) {
      return reply("❌ Unable to analyze the image. Please try again later.");
    }
    const analysis = geminiResponse.data.result || "No analysis result available.";
    
    const formattedInfo = `🤖 *Image Analysis Result:*\n\n${analysis}\n\n> 𝗉𝗈𝗐𝖾𝗋𝖾𝖽 𝖻𝗒 𝖽𝖺𝗏𝗂𝖽 𝗍𝖾𝖼𝗁`;
    const GEMINI_IMG = "https://files.catbox.moe/2b6m4m.jpg";

    await conn.sendMessage(m.chat, {
      image: { url: GEMINI_IMG },
      caption: formattedInfo,
      contextInfo: { 
        mentionedJid: [m.sender],
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: '120363419333086422@newsletter',
          newsletterName: 'MULLER GEMINI',
          serverMessageId: 143
        }
      }
    }, { quoted: mek });

  } catch (error) {
    console.error("Error analyzing image:", error);
    reply("❌ Unable to analyze the image. Please try again later.");
  }
});
