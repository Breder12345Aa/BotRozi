const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let handler = async (m, {conn}) => {
const vcard = `BEGIN:VCARD
VERSION:3.0
N:;;;
FN: ᴹᴿ᭄B O T-Offcོ_1ঔৣ꧂
item.ORG: ᴹᴿ᭄BOT-vcོ_1ঔৣ꧂
item1.TEL;waid=6283183321692:6283183321692@s.whatsapp.net
item1.X-ABLabel:owner selalu ada 
item2.EMAIL;type=INTERNET: xiomi78aa@gmail.com
item2.X-ABLabel:📧Email
item3.ADR:;;🎍Medan;;;;
item3.X-ABADR:ac
item3.X-ABLabel:asal kota
item4.URL:https//github.com/Botynyakamu
item4.X-ABLabel:Website
END:VCARD`
const sentMsg  = await conn.sendMessage(
    m.chat,
    { 
        contacts: { 
            displayName: 'OWNER BOT', 
            contacts: [{ vcard }]  
        }
    }
)
let rozi = 'https://telegra.ph/file/6de3ca8fe283f2e236ec4.jpg'
await conn.send3ButtonImg(m.chat, rozi, "*Hai kak👋,  Itu nomor owner gw…*", '📮: jngn di spam kack', 'Source code', '.sc', 'Back', '.menu', 'Donasi', '.donasi', sentMsg)}
handler.help = ['owner2', 'creator2']
handler.tags = ['info']

handler.command = /^(owner2|creator2)$/i

module.exports = handler
