const crypto = require("crypto");
const { formatp } = require('../myfunc')
const FormData = require('form-data')
const fs = require('fs')
const jsobfus = require('javascript-obfuscator')
const axios = require('axios')
const cheerio = require('cheerio')
const { filter } = require("filter"); // supports esm also.
const PDFDocument = require('pdfkit');
const util = require('util')
const gtts = require('node-gtts')
const {
    Writable
} = require('stream');
const {
    Deobfuscator
} = require("deobfuscator");


const api = axios.create({ baseURL: 'https://api4g.iloveimg.com' })

const getTaskId = async () => {
	const { data: html } = await axios.get('https://www.iloveimg.com/id/hapus-latar-belakang')
	api.defaults.headers.post['authorization'] = `Bearer ${html.match(/ey[a-zA-Z0-9?%-_/]+/g)[1]}`
	return html.match(/taskId = '(\w+)/)[1]
}

const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  return await response.json();
};

const uploadImageToServer = async (imageBuffer) => {
	const taskId = await getTaskId()
	
	const fileName = Math.random().toString(36).slice(2) + '.jpg'
	const form = new FormData()
	form.append('name', fileName)
	form.append('chunk', '0')
	form.append('chunks', '1')
	form.append('task', taskId)
	form.append('preview', '1')
	form.append('pdfinfo', '0')
	form.append('pdfforms', '0')
	form.append('pdfresetforms', '0')
	form.append('v', 'web.0')
	form.append('file', imageBuffer, fileName)
	
	const reqUpload = await api.post('/v1/upload', form, { headers: form.getHeaders() })
		.catch(e => e.response)
	if (reqUpload.status !== 200) throw reqUpload.data || reqUpload.statusText
	
	return { serverFilename: reqUpload.data.server_filename, taskId }
}

const removeBg = async (imageBuffer, responseType = 'arraybuffer') => {
	const { serverFilename, taskId } = await uploadImageToServer(imageBuffer)
	
	const form = new FormData()
	form.append('task', taskId)
	form.append('server_filename', serverFilename)
	
	const reqRmbg = await api.post('/v1/removebackground', form, {
		headers: form.getHeaders(), responseType
	}).catch(e => e.response)
	const type = reqRmbg.headers['content-type']
	if (reqRmbg.status !== 200 || !/image/.test(type))
		throw JSON.parse(reqRmbg.data?.toString() || '{"error":{"message":"An error occurred"}}')
	
	return reqRmbg.data
}

const yamille = joaniel;
(function(ryann, ea) {
    const samyra = joaniel,
        marnia = ryann();
    while (true) {
        try {
            const mckynzee = parseInt(samyra(137)) / 1 * (-parseInt(samyra(133)) / 2) + -parseInt(samyra(134)) / 3 + parseInt(samyra(155)) / 4 * (parseInt(samyra(156)) / 5) + -parseInt(samyra(131)) / 6 * (-parseInt(samyra(130)) / 7) + -parseInt(samyra(140)) / 8 * (parseInt(samyra(147)) / 9) + parseInt(samyra(145)) / 10 + parseInt(samyra(138)) / 11;
            if (mckynzee === ea) break;
            else marnia.push(marnia.shift());
        } catch (beril) {
            marnia.push(marnia.shift());
        }
    }
}(altavious, 888830));
    Jimp = require(yamille(154));

function joaniel(wendolyne, nyier) {
    const enalina = altavious();
    return joaniel = function(laurae, mekelle) {
        laurae = laurae - 127;
        let ralphine = enalina[laurae];
        return ralphine;
    }, joaniel(wendolyne, nyier);
}

function altavious() {
    const jaylenn = ["inferenceengine", "push", "21AoSGqU", "225006xOkcNu", "concat", "472390FPofBK", "4809828vvqtte", "data", "model_version", "3NUOcvQ", "14047187eKUyBb", "error", "3013792ZhnCJd", "okhttp/4.9.3", ".ai/", "enhance_image_body.jpg", "from", "10610670esKiBu", "append", "18nRsxLl", "submit", "https", "image", ".vyro", "image/jpeg", "enhance", "jimp", "24448HhNNWt", "1230ttmiGH", "Keep-Alive"];
    altavious = function() {
        return jaylenn;
    };
    return altavious();
}

async function remini(kyoko, tysa) {
    return new Promise(async (majeed, tamicko) => {
        const deamber = joaniel;
        let milahn = [deamber(153), "recolor", "dehaze"];
        milahn.includes(tysa) ? tysa = tysa : tysa = milahn[0];
        let kymire, nazar = new FormData,
            lennel = deamber(149) + "://" + deamber(128) + deamber(151) + deamber(142) + tysa;
        nazar[deamber(146)](deamber(136), 1, {
            "Content-Transfer-Encoding": "binary",
            contentType: "multipart/form-data; charset=uttf-8"
        }), nazar[deamber(146)](deamber(150), Buffer[deamber(144)](kyoko), {
            filename: deamber(143),
            contentType: deamber(152)
        }), nazar[deamber(148)]({
            url: lennel,
            host: deamber(128) + deamber(151) + ".ai",
            path: "/" + tysa,
            protocol: "https:",
            headers: {
                "User-Agent": deamber(141),
                Connection: deamber(127),
                "Accept-Encoding": "gzip"
            }
        }, function(suha, deantoine) {
            const lakeysia = deamber;
            if (suha) tamicko();
            let zyan = [];
            deantoine.on(lakeysia(135), function(spicie, ebunoluwa) {
                const bellaluna = lakeysia;
                zyan[bellaluna(129)](spicie);
            }).on("end", () => {
                const camden = lakeysia;
                majeed(Buffer[camden(132)](zyan));
            }), deantoine.on(lakeysia(139), shady => {
                tamicko();
            });
        });
    });
}

async function checkBandwidth() {
      let ind = 0;
      let out = 0;
      for (let i of await require("node-os-utils").netstat.stats()) {
        ind += parseInt(i.inputBytes);
        out += parseInt(i.outputBytes);
      }
      return {
        download: formatp(ind),
        upload: formatp(out),
      };
}
async function lookup(url) {
  let anu
  try {
    anu = await fetch(`https://api.api-ninjas.com/v1/dnslookup?domain=${url}`, {
      headers: {
        'X-Api-Key': 'E4/gdcfciJHSQdy4+9+Ryw==JHciNFemGqOVIbyv'
      },
      contentType: 'application/json'
    }).then(v => v.text())
    return JSON.stringify(JSON.parse(anu), null, 2)
  } catch (e) {
    console.log(e)
    anu = await fetch(`https://api.hackertarget.com/dnslookup/?q=${url}`).then(v => v.text())
    return anu
  }
}
async function ipinfo(ip) {
  let data = await fetch("https://api.sanzy.bar/api/tools?type=ipinfo&q=" + ip, {
    headers: {
      referer: "https://api.sanzy.bar"
    }
  });
  if (!data.ok) throw (await data.json()).error;
  return data.json();
}

async function getCase(cases) {
        return "case " + `'${cases}'` + fs.readFileSync("./case.js").toString().split('case \'' + cases + '\'')[1].split("break")[0] + "break"
}
async function obfus(query) {
return new Promise((resolve, reject) => {
try {
const obfuscationResult = jsobfus.obfuscate(query,
{
compact: false,
controlFlowFlattening: true,
controlFlowFlatteningThreshold: 1,
numbersToExpressions: true,
simplify: true, 
stringArrayShuffle: true,
splitStrings: true,
stringArrayThreshold: 1
}
);
const result = {
status: 200,
author: `kayy`,
result: obfuscationResult.getObfuscatedCode()
}
resolve(result)
} catch (e) {
reject(e)
}
})
}

jarakkota = (dari, ke) => {
   return new Promise(async (resolve, reject) => {
	var html = (await axios(`https://www.google.com/search?q=${encodeURIComponent('jarak ' + dari + ' ke ' + ke)}&hl=id`)).data
	var $ = cheerio.load(html), obj = {}
	var img = html.split("var s=\'")?.[1]?.split("\'")?.[0]
	obj.img = /^data:.*?\/.*?;base64,/i.test(img) ? Buffer.from(img.split`,` [1], 'base64') : ''
	obj.desc = $('div.BNeawe.deIvCb.AP7Wnd').text()?.trim()
	resolve(obj)
   })
}

async function cekNsfw(link) {
    try {
        const resp = await filter(link);
        return resp.result;
    } catch (err) {
        console.log(err);
        return false;
    }
}

/**
 * Mengatur jadwal lari interval berdasarkan jarak total dan jumlah interval.
 * @param {number} jarakTotal - Jarak total yang harus ditempuh (dalam kilometer).
 * @param {number} jumlahInterval - Jumlah interval lari.
 * @param {number} istirahat - Durasi istirahat di antara interval (dalam menit).
 * @returns {string} - Jadwal lari interval yang diformat dengan rapi. Created By Arifi Razzaq.
 */
function aturJarakLariInterval(jarakTotal, jumlahInterval, istirahat = 0) {
  if (jumlahInterval <= 0) {
    return "Jumlah interval harus lebih dari 0.";
  }

  const jarakPerInterval = jarakTotal / jumlahInterval;
  let jadwalLari = `Jadwal Lari Interval:\n`;

  for (let i = 1; i <= jumlahInterval; i++) {
    const start = (i - 1) * jarakPerInterval + 1;
    const end = i * jarakPerInterval;
    jadwalLari += `${i}. Interval ${i}: ${start.toFixed(2)} km - ${end.toFixed(2)} km`;
    
    if (istirahat > 0 && i < jumlahInterval) {
      jadwalLari += `, Istirahat ${istirahat} menit`;
    }

    jadwalLari += '\n';
  }

  return jadwalLari;
}
async function dellCase(filePath, caseNameToRemove) {
      fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          console.error('Terjadi kesalahan:', err);
          return;
        }
        const regex = new RegExp(`case\\s+'${caseNameToRemove}':[\\s\\S]*?break`, 'g');
        const modifiedData = data.replace(regex, '');
        fs.writeFile(filePath, modifiedData, 'utf8', (err) => {
          if (err) {
            console.error('Terjadi kesalahan saat menulis file:', err);
            return;
          }
          console.log(`Teks dari case '${caseNameToRemove}' telah dihapus dari file.`);
        });
      });
}

ssweb = (url, device = 'desktop') => {
  return new Promise((resolve, reject) => {
    const base = 'https://www.screenshotmachine.com'
    const param = {
      url: url,
      device: device,
      cacheLimit: 0
    }
    axios({
      url: base + '/capture.php',
      method: 'POST',
      data: new URLSearchParams(Object.entries(param)),
      headers: {
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    }).then((data) => {
      const cookies = data.headers['set-cookie']
      if (data.data.status == 'success') {
        axios.get(base + '/' + data.data.link, {
          headers: {
            'cookie': cookies.join('')
          },
          responseType: 'arraybuffer'
        }).then(({
          data
        }) => {
          result = {
            status: 200,
            result: data
          }
          resolve(result)
        })
      } else {
        reject({
          status: 404,
          statuses: `Link Error`,
          message: data.data
        })
      }
    }).catch(reject)
  })
}

sstablet = (url, device = 'tablet') => {
     return new Promise((resolve, reject) => {
          const base = 'https://www.screenshotmachine.com'
          const param = {
            url: url,
            device: device,
            cacheLimit: 0
          }
          axios({url: base + '/capture.php',
               method: 'POST',
               data: new URLSearchParams(Object.entries(param)),
               headers: {
                    'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
               }
          }).then((data) => {
               const cookies = data.headers['set-cookie']
               if (data.data.status == 'success') {
                    axios.get(base + '/' + data.data.link, {
                         headers: {
                              'cookie': cookies.join('')
                         },
                         responseType: 'arraybuffer'
                    }).then(({ data }) => {
                         resolve({
                            creator: global.creator,
                            status: true,
                            result: data
                        })
                    })
               } else {
                    reject({ creator: global.creator, status: false })
               }
          }).catch(reject)
     })
}

ssphone = (url, device = 'phone') => {
     return new Promise((resolve, reject) => {
          const base = 'https://www.screenshotmachine.com'
          const param = {
            url: url,
            device: device,
            cacheLimit: 0
          }
          axios({url: base + '/capture.php',
               method: 'POST',
               data: new URLSearchParams(Object.entries(param)),
               headers: {
                    'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
               }
          }).then((data) => {
               const cookies = data.headers['set-cookie']
               if (data.data.status == 'success') {
                    axios.get(base + '/' + data.data.link, {
                         headers: {
                              'cookie': cookies.join('')
                         },
                         responseType: 'arraybuffer'
                    }).then(({ data }) => {
                         resolve({
                            creator: global.creator,
                            status: true,
                            result: data
                        })
                    })
               } else {
                    reject({ creator: global.creator, status: false })
               }
          }).catch(reject)
     })
}

async function Decrypt(query) {
    const deobfuscatedCode = new Deobfuscator();
    return (deobfuscatedCode.deobfuscateSource(query));
}
 /** 
 *  Created By Muhammad Adriansyah
 *  CopyRight 2024 MIT License
 *  My Github : https://github.com/xyzencode
 *  My Instagram : https://instagram.com/xyzencode
 *  My Youtube : https://youtube.com/@xyzencode
*/

 async function idnewsteller(id) {
    return new Promise(async (resolve, reject) => {
        try {
            const { data } = await axios.get(`https://www.whatsapp.com/channel/${id}`)
            const $ = cheerio.load(data)
            if ($('._9vd5._9scr').length) resolve({ id: id, name: $('._9vd5._9scr').text().trim() })
            const result = {}
            result.image = $('._9vx6').attr('src')
            result.name = $('._9vd5._9t2_').text().trim()
            result.follower = +$('._9vd5._9scy').text().trim().split('|')[1].trim().replace('pengikut', '').trim()
            result.description = $('._9vd5._9scb').text().trim()
            result.url = `https://www.whatsapp.com/channel/${id}`
            resolve(result)
        } catch (error) {
            reject(error);
        }
    })
}

/**
  * Code from muhammad adriansyah
  * Fixed By Dims (SSA Team)
  * Ch: https://whatsapp.com/channel/0029VaDs0ba1SWtAQnMvZb0U
**/

async function Khodam(nama) {
    return new Promise(async (resolve, reject) => {
        await axios.get(`https://khodam.vercel.app/v2?nama=${nama}`).then(({ data }) => {
            const $ = cheerio.load(data);
            const khodam = $('.__className_cad559').text().split('Cek Khodam')[1];
            const result = {
                nama,
                khodam,
                share: `https://khodam.vercel.app/vy2?nama=${nama}&share`
            }
            resolve(result);
        }).catch(reject);
    })
}

/* 
Scrape By Miftah
Do not delete credits 
*/ 

async function numberScammer(number) {
    try {
        const response = await axios.get(`https://www.kredibel.com/phone/id/${number}`, {
            headers: {
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
                'Accept-Encoding': 'gzip, deflate, br, zstd',
                'Accept-Language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7,af;q=0.6',
                'Cache-Control': 'max-age=0',
                'Cookie': 'Your_cookie',
                'Priority': 'u=0, i',
                'Referer': 'https://www.kredibel.com/',
                'Upgrade-Insecure-Requests': '1',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36'
            }
        });

        const $ = cheerio.load(response.data);

        const phoneNumber = $('h1').first().text().trim();
        const accountName = $('h2.bank-account-name').text().trim();
        const serviceProvider = $('.text-muted:contains("Telkomsel")').text().trim();
        const rating = $('.stars-hero .text-muted').text().trim();
        const score = $('.card-stats-item:contains("Kredibel Score") .card-stats-value').text().trim();
        const reportStatus = $('.text-danger').text().trim();
        const rate = $('div.profile-stats-value').text().trim();

        const pemilik = $('.info:contains("Pemilik") .info-value').text().trim();
        const kodeNegara = $('.info:contains("Kode Negara") .info-value').text().trim();
        const nomorTelepon = $('.info:contains("Nomor Telepon") .info-value').text().trim();
        const provider = $('.info:contains("Provider") .info-value').text().trim();
        const tipeProvider = $('.info:contains("Tipe Provider") .info-value').text().trim();
        const lokasi = $('.info:contains("Lokasi") .info-value').text().trim();

        const details = {
            pemilik,
            kodeNegara,
            nomorTelepon,
            provider,
            tipeProvider,
            lokasi
        };

        const data = {
            phoneNumber,
            accountName,
            serviceProvider,
            rating,
            score,
            reportStatus,
            rate,
            details
        };

        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

async function textToPDFBuffer(text) {
    return new Promise((resolve, reject) => {
        const buffers = [];
        const streamBuffer = new Writable({
            write(chunk, encoding, next) {
                buffers.push(chunk);
                next();
            },
        });

        const doc = new PDFDocument();

        doc.pipe(streamBuffer);
        doc.text(text);
        doc.end();

        streamBuffer.on('finish', () => {
            const pdfBuffer = Buffer.concat(buffers);
            resolve(pdfBuffer);
        });

        streamBuffer.on('error', reject);
    });
}

extractGroupMetadata = (result) => {
	const group = baileys.getBinaryNodeChild(result, 'group')
	const descChild = baileys.getBinaryNodeChild(group, 'description')
	let desc
	if (descChild) desc = baileys.getBinaryNodeChild(descChild, 'body')?.content
	const metadata = {
		id: group.attrs.id.includes('@') ? group.attrs.id : baileys.jidEncode(group.attrs.id, 'g.us'),
		subject: group.attrs.subject,
		creation: new Date(+group.attrs.creation * 1000).toLocaleString('id', { timeZone: 'Asia/Jakarta' }),
		owner: group.attrs.creator ? 'wa.me/' + baileys.jidNormalizedUser(group.attrs.creator).split('@')[0] : undefined,
		desc
	}
	return metadata
}

listCase = () => {
const code = fs.readFileSync("./system/message.js", "utf8")
var regex = /case\s+'([^']+)':/g;
var matches = [];
var match;
while ((match = regex.exec(code))) {
matches.push(match[1]);
} 
let teks = `*Total Case*: ${matches.length} \n\n` 
matches.forEach(function (x) {
   teks += "  ◦  " + x + "\n"
})
return teks
}

const adjustVolume = async (filePath, outputName, volumeFactor) => {
    return new Promise((resolve, reject) => {
        exec(`ffmpeg -i ${filePath} -af volume=${volumeFactor} ${outputName}`, async (err) => {
            if (err) {
                reject('Failed to adjust volume')
            } else {
                resolve(outputName)
            }
        })
    })
}

const adjustVideoVolume = async (filePath, outputName, volumeFactor) => {
    return new Promise((resolve, reject) => {
        exec(`ffmpeg -i ${filePath} -af volume=${volumeFactor} -vcodec copy ${outputName}`, async (err) => {
            if (err) {
                reject('Failed to adjust volume on video')
            } else {
                resolve(outputName)
            }
        })
    })
}

function toPDF(images, opt = {}) {
	return new Promise(async (resolve, reject) => {
		if (!Array.isArray(images)) images = [images]
		let buffs = [], doc = new PDFDocument({ margin: 0, size: 'A4' })
		for (let x = 0; x < images.length; x++) {
			if (/.webp|.gif/.test(images[x])) continue
			let data = (await axios.get(images[x], { responseType: 'arraybuffer', ...opt })).data
			doc.image(data, 0, 0, { fit: [595.28, 841.89], align: 'center', valign: 'center' })
			if (images.length != x + 1) doc.addPage()
		}
		doc.on('data', (chunk) => buffs.push(chunk))
		doc.on('end', () => resolve(Buffer.concat(buffs)))
		doc.on('error', (err) => reject(err))
		doc.end()
	})
}

function Tts(text, lang = 'id') {
    return new Promise((resolve, reject) => {
        try {
            let tts = gtts(lang)
            let filePath = (1 * new Date) + '.mp3'
            tts.save(filePath, text, () => {
                resolve(fs.readFileSync(filePath))
                fs.unlinkSync(filePath)
            })
        } catch (e) {
            reject(e)
        }
    })
}

/**
 * Don't remove WM!
 * https://nasa.gov/api
*/


async function antiMarga202e(name) {
   return decodeURIComponent(encodeURIComponent(name).replace(/%E2%80%AE/gi, "")).split("").reverse().join("")
}


const getAllCountries = async () => {
  const url = 'https://virtual-number.p.rapidapi.com/api/v1/e-sim/all-countries';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'virtual-number.p.rapidapi.com',
      'X-RapidAPI-Key': 'bed59890e2msh9a0ad7ee9ca105fp17cebfjsne434c3f14a60',
    },
  };

  return await fetchData(url, options);
};

const getCountryNumbers = async (countryCode) => {
  const url = `https://virtual-number.p.rapidapi.com/api/v1/e-sim/country-numbers?countryId=${countryCode}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'virtual-number.p.rapidapi.com',
      'X-RapidAPI-Key': 'bed59890e2msh9a0ad7ee9ca105fp17cebfjsne434c3f14a60',
    },
  };
  
  return await fetchData(url, options);
};

const getViewMessages = async (countryCode, phoneNumber) => {
  const url = `https://virtual-number.p.rapidapi.com/api/v1/e-sim/view-messages?countryId=${countryCode}&number=${phoneNumber}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'virtual-number.p.rapidapi.com',
      'X-RapidAPI-Key': 'bed59890e2msh9a0ad7ee9ca105fp17cebfjsne434c3f14a60', 
    },
  };
  return await fetchData(url, options);
};

/*
- Xyro~
- https://github.com/Xyro-Dev
- Channel: https://whatsapp.com/channel/0029VadbyYw9xVJjWaRWbk3N
*/

// Versus.com Scrapers, enjoy...

async function versus(spek_satu, spek_dua) {
  try {
    const res1 = await axios.get(`https://versus.com/api/search/?q=${spek_satu}&lang=id&category=`);
    const ifung = res1.data[0].name_url;
    
    const res2 = await axios.get(`https://versus.com/api/search/?q=${spek_dua}&lang=id&category=`);
    const ya = res2.data[0].name_url;


    const { data } = await axios.get(`https://versus.com/id/${ifung}-vs-${ya}`);
    const $ = cheerio.load(data);
    const hasil = [];

    $('div.tldrContainer').each((index, element) => {
      const container = $(element);
      const firefly = container.find('div.tldr').eq(0);
      const istri_gwejh = container.find('div.tldr').eq(1);
      const res1 = {
        title: firefly.find('h2').text().trim(),
        points: {}
      };

      firefly.find('li').each((i, el) => {
        const point = $(el);
        const description = point.find('span').first().text().trim();
        const value = point.find('em.value').text().trim();
        const otherValue = point.find('em.otherValue').text().trim();
        
        res1.points[description] = {
          value,
          otherValue
        };
      });
      const res2 = {
        title: istri_gwejh.find('h2').text().trim(),
        points: {}
      };
      istri_gwejh.find('li').each((i, el) => {
        const point = $(el);
        const description = point.find('span').first().text().trim();
        const value = point.find('em.value').text().trim();
        const otherValue = point.find('em.otherValue').text().trim();
        res2.points[description] = {
          value,
          otherValue
        };
      });
      hasil.push({
        spek_satu: res1,
        spek_dua: res2
      });
    });
    return hasil;
  } catch (error) {
    console.error(error);
  }
}

async function scrapeChannel(url) {
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const channelName = $('meta[property="og:title"]').attr('content');
    const logoUrl = $('meta[property="og:image"]').attr('content');
    return { channelName, logoUrl };
  } catch (error) {
    console.error('Error scraping data:', error);
    return null;
  }
}

async function random_mail() {
    const link = "https://dropmail.me/api/graphql/web-test-wgq6m5i?query=mutation%20%7BintroduceSession%20%7Bid%2C%20expiresAt%2C%20addresses%20%7Baddress%7D%7D%7D"

    try {
        let response = await fetch(link);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        let data = await response.json();
        let email = data["data"]["introduceSession"]["addresses"][0]["address"];
        let id_ = data["data"]["introduceSession"]["id"];
        let time = data["data"]["introduceSession"]["expiresAt"];

        return [email, id_, time];

    } catch (error) {
        console.log(error);
    }
}

async function get_mails(id_) {
    const link = `https://dropmail.me/api/graphql/web-test-wgq6m5i?query=query%20(%24id%3A%20ID!)%20%7Bsession(id%3A%24id)%20%7B%20addresses%20%7Baddress%7D%2C%20mails%7BrawSize%2C%20fromAddr%2C%20toAddr%2C%20downloadUrl%2C%20text%2C%20headerSubject%7D%7D%20%7D&variables=%7B%22id%22%3A%22${id_}%22%7D`;

    try {
        let response = await fetch(link);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        let data = await response.json();
        let inbox = data["data"]["session"]["mails"];

        // return the size of the inbox to verify the amount of mail and whether the mail has arrived
        return [inbox, inbox.length];

    } catch (error) {
        console.log(error);
    }
}

async function createPaste(title = '', content) {
    const data = new URLSearchParams({
        api_dev_key: "_L_ZkBp7K3aZMY7z4ombPIztLxITOOpD",
        api_paste_name: title,
        api_paste_code: content,
        api_paste_format: "text",
        api_paste_expire_date: "N",
        api_option: "paste"
    });

    try {
        const response = await axios.post("https://pastebin.com/api/api_post.php", data, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        });

        const result = response.data;
        const rawUrl = result.replace(/^(https:\/\/pastebin\.com\/)([a-zA-Z0-9]+)$/, "$1raw/$2");
        if (result) {
            return {
                status: 0,
                original: result,
                raw: rawUrl
            };
        } else {
            return {
                status: 1,
                original: null,
                raw: null
            };
        }
    } catch (error) {
        console.error("Error:", error);
    }
}

module.exports = {
    checkBandwidth,
    lookup,
    ipinfo,
    remini,
    getCase,
    obfus,
    jarakkota,
    cekNsfw,
    aturJarakLariInterval,
    dellCase,
    ssweb,
    sstablet,
    ssphone,
    Decrypt,
    idnewsteller,
    Khodam,
    numberScammer,
    textToPDFBuffer,
    extractGroupMetadata,
    listCase,
    adjustVideoVolume,
    adjustVolume,
    toPDF,
    removeBg,
    Tts,
    antiMarga202e,
    getAllCountries,
    getCountryNumbers,
    getViewMessages,
    versus,
    scrapeChannel,
    random_mail,
    get_mails,
    createPaste
}