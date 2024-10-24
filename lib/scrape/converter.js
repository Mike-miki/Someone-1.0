const fs = require('fs')
const path = require('path')
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const {
  spawn
} = require('child_process')
const cheerio = require('cheerio');
const request = require('request');
const axios = require('axios') 

function ffmpeg(buffer, args = [], ext = '', ext2 = '') {
  return new Promise(async (resolve, reject) => {
    try {
      let tmp = path.join(__dirname, '../../temp', +new Date + '.' + ext)
      let out = tmp + '.' + ext2
      await fs.promises.writeFile(tmp, buffer)
      spawn(ffmpegPath, [
          '-y',
          '-i', tmp,
          ...args,
          out
        ])
        .on('error', reject)
        .on('close', async (code) => {
          try {
            await fs.promises.unlink(tmp)
            if (code !== 0) return reject(code)
            resolve(await fs.promises.readFile(out))
            await fs.promises.unlink(out)
          } catch (e) {
            reject(e)
          }
        })
    } catch (e) {
      reject(e)
    }
  })
}

/**
 * Convert Audio to Playable WhatsApp Audio
 * @param {Buffer} buffer Audio Buffer
 * @param {String} ext File Extension 
 */
function toAudio(buffer, ext) {
  return ffmpeg(buffer, [
    '-vn',
    '-ac', '2',
    '-b:a', '128k',
    '-ar', '44100',
    '-f', 'mp3'
  ], ext, 'mp3')
}

/**
 * Convert Audio to Playable WhatsApp PTT
 * @param {Buffer} buffer Audio Buffer
 * @param {String} ext File Extension 
 */
function toPTT(buffer, ext) {
  return ffmpeg(buffer, [
    '-vn',
    '-c:a', 'libopus',
    '-b:a', '128k',
    '-vbr', 'on',
    '-compression_level', '10'
  ], ext, 'opus')
}

/**
 * Convert Audio to Playable WhatsApp Video
 * @param {Buffer} buffer Video Buffer
 * @param {String} ext File Extension 
 */
function toVideo(buffer, ext) {
  return ffmpeg(buffer, [
    '-c:v', 'libx264',
    '-c:a', 'aac',
    '-ab', '128k',
    '-ar', '44100',
    '-crf', '32',
    '-preset', 'slow'
  ], ext, 'mp4')
}

function videoConvert(buffer, input = []) {
    return new Promise(async (resolve, reject) => {
        try {
            const tmp = path.join('./media', `${+new Date()}.mp4`);
            await fs.promises.writeFile(tmp, buffer);
            const out = tmp.replace('.mp4', '_converted.mp4');
            const args = [
                '-y',
                '-i', tmp,
                ...input,
                out
            ];

            spawn('ffmpeg', args)
                .on('error', reject)
                .on('close', async (code) => {
                    try {
                        await fs.promises.unlink(tmp);
                        if (code !== 0) return reject(code);
                        const outputVideoBuffer = await fs.promises.readFile(out);
                        await fs.promises.unlink(out);
                        resolve(outputVideoBuffer);
                    } catch (e) {
                        reject(e);
                    }
                });
        } catch (e) {
            reject(e);
        }
    });
}

ttp = async (text, color = 'FFFFFF') => {
return new Promise((resolve, reject) => {
const options = {
method: 'POST',
url: `https://www.picturetopeople.org/p2p/text_effects_generator.p2p/transparent_text_effect`,
headers: {
"Content-Type": "application/x-www-form-urlencoded",
"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36",
"Cookie": "_ga=GA1.2.1667267761.1655982457; _gid=GA1.2.77586860.1655982457; __gads=ID=c5a896288a559a38-224105aab0d30085:T=1655982456:RT=1655982456:S=ALNI_MbtHcmgQmVUZI-a2agP40JXqeRnyQ; __gpi=UID=000006149da5cba6:T=1655982456:RT=1655982456:S=ALNI_MY1RmQtva14GH-aAPr7-7vWpxWtmg; _gat_gtag_UA_6584688_1=1"
},
formData: {
'TextToRender': text,
'FontSize': '100',
'Margin': '30',
'LayoutStyle': '0',
'TextRotation': '0',
'TextColor': color,
'TextTransparency': '0',
'OutlineThickness': '3',
'OutlineColor': '000000',
'FontName': 'Lekton',
'ResultType': 'view'
}
};
request(options, async function(error, response, body) {
if (error) return resolve({status: false, message: error})
const $ = cheerio.load(body)
const result = 'https://www.picturetopeople.org' + $('#idResultFile').attr('value')
resolve({ status: true, author: "expar animej", result: result })
});
})
}

async function quote(text, avatar, name) {
  const json = {
    type: "quote",
    format: "png",
    backgroundColor: "#FFFFFF",
    width: 512,
    height: 768,
    scale: 2,
    messages: [
      {
        entities: [],
        avatar: true,
        from: {
          id: 1,
          name: name,
          photo: {
            url: avatar,
          },
        },
        text: text,
        replyMessage: {},
      },
    ],
  };
  const res = await axios.post("https://quotly.netorare.codes/generate", json, {
    headers: { "Content-Type": "application/json" },
  });
  const buffer =  Buffer.from(res.data.result.image, "base64")
  return buffer;
}

async function addExifAvatar(buffer, packname, author, categories = [''], extra = {}) {
    const {
         Image
    } = require('node-webpmux')
    const img = new Image()
    const json = {
        'sticker-pack-id': 'Natsxe',
        'sticker-pack-name': packname,
        'sticker-pack-publisher': author,
        'emojis': categories,
        'is-avatar-sticker': 1,
        ...extra
    }
    let exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
    let jsonBuffer = Buffer.from(JSON.stringify(json), 'utf8')
    let exif = Buffer.concat([exifAttr, jsonBuffer])
    exif.writeUIntLE(jsonBuffer.length, 14, 4)
    await img.load(buffer)
    img.exif = exif
    return await img.save(null)
}

async function Quotly(obj) {
	let json;

	try {
		json = await axios.post(
			"https://bot.lyo.su/quote/generate",
			obj,
			{
				headers: {
					"Content-Type": "application/json",
				},
			},
		);
				} catch (e) {
					return e;
				}
			

	const results = json.data.result.image;
	const buffer = Buffer.from(results, "base64");
	return buffer;
}

module.exports = {
  toAudio,
  toPTT,
  toVideo,
  ffmpeg,
  videoConvert,
  ttp,
  quote,
  addExifAvatar,
  Quotly
}