
const functionn = require('./lib/functions')

global.pairing = '6285723523137'
global.rowner = [["6282313648311", "JustBecause.", true], ["62882003724003", "Someone V0.1.3", true]];
global.botname = "Canalé del Castro bot"
global.ownername = "JustBecause."
global.owner = "6282313648311"
global.idch = "120363334738637201@newsletter"
//hiyasan
global.kyuu = '*'
global.hiasan = '</> .'
global.hiasanB = '╭─ •'
global.hiasanA = '╰──── •'
global.mt = '> '
global.mtB = `> `
global.mtA = `> `
//Thumbnail 
global.thumbnail = 'https://telegra.ph/file/3e69d10453bcaf303f400.jpg'
global.saluran = 'https://whatsapp.com/channel/0029VartD1a7YSd7I1PDOo2g'
global.github = '-'

//Sticker
global.packname = 'ı๋Ɨᧉო࣪ by'
global.author = '᥍ׄƗׄꪱ๋ϲkꫀׄr ϲ𝗎Ɨׄꫀׄ'
global.tag = `© 2024 | ${botname}`
//Plek
global.foter = 'JustBecause.'
global.Tasistent = `Anyone Assistant ✨️`
global.email = 'xx@gmail.com' 

//Mess
global.mess = {
owner: `Only Owner, Cannot be Used by Users`,
bugrespon: `Processs...`,
success: `Successfully sent to target`,
group: `Feature Only Used For Groups !`,
Badmin: `Features can be used after the bot becomes an admin !`,
limit: `Your limit has run out, please wait tomorrow to reset the limit`,
premium: `Khusus Premium!!!`,
}

global.Func = functionn
global.Scraper = {
    Ai: require('./lib/scrape/Ai'),
    Generate: require('./lib/scrape/Generate'),
    Anime: require('./lib/scrape/Anime'),
    Samehadaku: require('./lib/scrape/Samehadaku'),
    Download: require('./lib/scrape/Download'),
    Tools: require('./lib/scrape/Tools'),
    Search: require('./lib/scrape/Search'),
    Emi: require('./lib/scrape/emi'),
    Spotify: require('./lib/scrape/Spotify'),
    Uploader: require('./lib/scrape/uploader'),
    Stalk: require('./lib/scrape/Stalk'),
    Internet: require('./lib/scrape/Internet'),
    Islam: require('./lib/scrape/Islam.js'),
    Convert: require('./lib/scrape/converter'),
    Otakudesu: require('./lib/scrape/otakudesu'),
    Prodia: require('./lib/scrape/Prodia'),
    Meganei: require('./lib/scrape/Meganei'),
    Vn: require('./lib/scrape/Voice.js'),
    YTnew: require('./lib/scrape/ytdlNew'),
    yt2mate: require('./lib/scrape/yt2mate'),
    Ytdl: require('./lib/scrape/ytdl')
};
global.typeReply = '3'

global.media = {
    openAi: "https://telegra.ph/file/f47d75d0d4827356a526d.jpg",
    geminiPro: "https://telegra.ph/file/886619e0a714718453926.jpg",
    bing: "https://telegra.ph/file/41f8a5b1bb8db96590043.jpg",
    bard: "https://telegra.ph/file/fa943a24aa82946cb2f7f.jpg",
    bc: "https://telegra.ph/file/aa76cce9a61dc6f91f55a.jpg",
    gpt: "https://telegra.ph/file/6f3f45190c2f61dc2aa11.jpg",
    tqto: "https://telegra.ph/file/d8cc35238a390646a3c5d.jpg",
    dystopia: "https://telegra.ph/file/bc021e5dbcbd11bb776bd.jpg",
    hercai: "https://telegra.ph/file/9e603f94977a83555719f.png"
}


//SETTINGS PANEL
global.domain = "https://panel-private.kyuurzy.site"
global.apikey = "ptla_zDbXL751u7FoF8iEAdChoUjoXSmIeVXJVNi6RtmjsgE"
global.capikey = "ptlc_gsUu3OMEyV43DafRc8Cw3D5nZsosBTHm7So4ZsELe7S"
global.eggnya = "15"
global.locnya = "1"

//DATABASE 
global.limitawal = 10
global.urldb = ''; // kosongin aja tapi kalo mau pake database mongo db isi url mongo
//Welcome
global.wlcm = []
global.wlcmm = []

//Database game 
global.family100 = {};
global.suit = {};
global.tictactoe = {};
global.tebakbendera = {};
global.caklontong = {};
global.tebakgambar2 = {};
global.gamewaktu = 120 // Game waktu
global.bmin = 1000 // Balance minimal 
global.bmax = 10000 // Balance maksimal


let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})