const axios = require('axios')
const BodyForm = require('form-data')
const {
  fromBuffer
} = require('file-type')
const fetch = require('node-fetch')
const fs = require('fs')
const cheerio = require('cheerio')
const crypto = require("crypto");
const FormData = require('form-data')
const fakeUserAgent = require("fake-useragent");
const randomBytes = crypto.randomBytes(5).toString("hex");
const { fileTypeFromBuffer } = require("file-type");

const createFormData = (content, fieldName, ext) => {
  const { mime } = fromBuffer(content) || {};
  const formData = new FormData();
  formData.append(fieldName, content, `${randomBytes}.${ext}`);
  return formData;
};

function TelegraPh(Path) {
  return new Promise(async (resolve, reject) => {
    if (!fs.existsSync(Path)) return reject(new Error("File not Found"))
    try {
      const form = new BodyForm();
      form.append("file", fs.createReadStream(Path))
      const data = await axios({
        url: "https://telegra.ph/upload",
        method: "POST",
        headers: {
          ...form.getHeaders()
        },
        data: form
      })
      return resolve("https://telegra.ph" + data.data[0].src)
    } catch (err) {
      return reject(new Error(String(err)))
    }
  })
}

async function UploadFileUgu(input) {
  return new Promise(async (resolve, reject) => {
    const form = new BodyForm();
    form.append("files[]", fs.createReadStream(input))
    await axios({
      url: "https://uguu.se/upload.php",
      method: "POST",
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
        ...form.getHeaders()
      },
      data: form
    }).then((data) => {
      resolve(data.data.files[0])
    }).catch((err) => reject(err))
  })
}

function webp2mp4File(path) {
  return new Promise((resolve, reject) => {
    const form = new BodyForm()
    form.append('new-image-url', '')
    form.append('new-image', fs.createReadStream(path))
    axios({
      method: 'post',
      url: 'https://s6.ezgif.com/webp-to-mp4',
      data: form,
      headers: {
        'Content-Type': `multipart/form-data; boundary=${form._boundary}`
      }
    }).then(({
      data
    }) => {
      const bodyFormThen = new BodyForm()
      const $ = cheerio.load(data)
      const file = $('input[name="file"]').attr('value')
      bodyFormThen.append('file', file)
      bodyFormThen.append('convert', "Convert WebP to MP4!")
      axios({
        method: 'post',
        url: 'https://ezgif.com/webp-to-mp4/' + file,
        data: bodyFormThen,
        headers: {
          'Content-Type': `multipart/form-data; boundary=${bodyFormThen._boundary}`
        }
      }).then(({
        data
      }) => {
        const $ = cheerio.load(data)
        const result = 'https:' + $('div#output > p.outfile > video > source').attr('src')
        resolve({
          status: true,
          message: "Created By MRHRTZ",
          result: result
        })
      }).catch(reject)
    }).catch(reject)
  })
}

async function floNime(medianya, options = {}) {
  const {
    ext
  } = await fromBuffer(medianya) || options.ext
  var form = new BodyForm()
  form.append('file', medianya, 'tmp.' + ext)
  let jsonnya = await fetch('https://flonime.my.id/upload', {
      method: 'POST',
      body: form
    })
    .then((response) => response.json())
  return jsonnya
}

async function uptotelegra(Path) {
  return new Promise(async (resolve, reject) => {
    if (!fs.existsSync(Path)) return reject(new Error("File not Found"))
    try {
      const form = new FormData();
      form.append("file", fs.createReadStream(Path))
      const data = await axios({
        url: "https://telegra.ph/upload",
        method: "POST",
        headers: {
          ...form.getHeaders()
        },
        data: form
      })
      return resolve("https://telegra.ph" + data.data[0].src)
    } catch (err) {
      return reject(new Error(String(err)))
    }
  })
}

/**
  * Simple uploader by ssa team
  * Weem jangan di hapus yh
**/

async function uploaderSSA(buffer) {
  try {
  const { ext } = await fromBuffer(buffer);
  let form = new FormData();
  form.append("file", buffer, "tmp." + ext);
    const { data } = await axios.post("https://upload.ssateam.my.id/upload", form, {
        headers: {
          accept: "application/json",
          ...form.getHeaders(), 
          "Content-Type": "multipart/form-data",
        },
      },
    );
    return data;
  } catch (e) {
    console.log(e);
  }
}

/*
* Developer: Kuro Zann
* Whatsapp: +6285607265790
* Instagram: @dev.kurozann
* Github: https://github.com/KuroZann
*/

async function uploadCdn(filePath) {
	const formData = new FormData();
	formData.append('fileInput', fs.createReadStream(filePath));
    
	try {
		const response = await fetch('https://cdn.jsdelivr.net', {
			method: 'POST',
			body: formData
		});
        
		if (response.ok) {
			const fileUrl = await response.json();
			console.log('Succesfully:', fileUrl);
		} else {
			const errorResponse = await response.json();
			console.error('oops something went wrong:', errorResponse);
		}
	} catch (error) {
		console.error('oops something went wrong:', error.message);
	}
}

async function catbox(content) {
    try {
      const { ext, mime } = (await fromBuffer(content)) || {};
      const formData = createFormData(content, "fileToUpload", ext);
      formData.append("reqtype", "fileupload");
      const response = await fetch("https://catbox.moe/user/api.php", {
        method: "POST",
        body: formData,
        headers: {
          "User-Agent": fakeUserAgent(),
        },
      });
      return await response.text();
    } catch (error) {
      throw error;
    }
  }

async function uploadPomf2(buffer) {
    try {
        if (!(buffer instanceof Uint8Array || buffer instanceof ArrayBuffer || buffer instanceof Buffer)) {
            throw new TypeError("Expected input to be of type Uint8Array, Buffer, or ArrayBuffer");
        }

        // If the buffer is an ArrayBuffer, convert it to Buffer
        if (buffer instanceof ArrayBuffer) {
            buffer = Buffer.from(buffer);
        }

        const { ext } = (await fromBuffer(buffer)) || {};
        const form = await createFormData(buffer, "files[]", ext);
        const res = await fetch("https://pomf2.lain.la/upload.php", {
            method: "POST",
            body: form,
        });
        const json = await res.json();
        if (!json.success) throw json;

        return json;
    } catch (error) {
        throw error;
    }
}

async function ucarecdn(content) {
    try {
      const { ext } = (await fromBuffer(content)) || {};
      const formData = await createFormData(content, "file", ext);
      formData.append("UPLOADCARE_PUB_KEY", "demopublickey");
      formData.append("UPLOADCARE_STORE", "1");
      const response = await fetch("https://upload.uploadcare.com/base/", {
        method: "POST",
        body: formData,
        headers: {
          "User-Agent": fakeUserAgent(),
        },
      });
      const { file } = await response.json();

      return `https://ucarecdn.com/${file}/${randomBytes}.${ext}`;
    } catch (error) {
      throw false;
    }
  }
  
async function oxo(content) {
    try {
      const { ext, mime } = (await fromBuffer(content)) || {};
      const formData = createFormData(content, "file", ext);
      const response = await fetch("http://0x0.st", {
        method: "POST",
        body: formData,
        headers: {
          "User-Agent": fakeUserAgent(),
        },
      });

      return await response.text();
    } catch (error) {
      throw false;
    }
  }

/** Copyright C Arifi Razzaq 
 * The base of this WhatsApp bot was written by Arifi Razzaq
 * Contact My WhatsApp (+6283193905842)
 * Subscribe My YouTube Channel (Arifi Razzaq Ofc)
 * Donation assistance for a token of appreciation at (https://saweria.co/arzzq)
 */

// *Zippy Scrape By Arifi Razzaq*
  /**
   * Uploads a buffer to ZippyShare.
   * Created By Arifi Razzaq
   * @param {Buffer} buffer - The buffer of the input image.
   * @return {Promise<string>} - A promise that resolves to the URL of the uploaded image.
   */
  async function zippy(buffer) {
    return new Promise(async (resolve, reject) => {
      let { ext } = await fileTypeFromBuffer(buffer);
      let nama = Date.now() + "." + ext;
      fs.writeFileSync(`./database/temp/${nama}`, buffer);
      let form = new formData();
      form.append("file", fs.createReadStream(`./database/temp/${nama}`));
      axios(`https://zippyshare.com/upload`, {
        method: "POST",
        data: form,
        headers: { 'Content-Type': `multipart/form-data; boundary=${form._boundary}` }
      }).then(({ data }) => {
        const $ = cheerio.load(data);
        let url = "https:" + $("div#fimage a").first().attr("href");
        resolve(url);
        fs.unlinkSync(`./database/temp/${nama}`);
      }).catch((e) => resolve(e.message));
    });
  }
/**
 * Script creation information.
 * @copyright: Arifi Razzaq
 * @contactwhatsapp: https://wa.me/6283193905842
 * @subscribeyoutube: https://youtube.com/@arifirazzaqofficial?si=iBzb_3Nh4qqzLokM
 * @instagram: https://www.instagram.com/ar.zzq?igsh=b2R1NHhrdWlkMmZ3
 * @whatsappchannel: https://whatsapp.com/channel/0029VaQvMcp4o7qSiKGs0Y2D
 */  

/*
*[ SHARE SCRAPE CDN WITH cdn.elxyz.me ]*
*[ SOURCE: https://whatsapp.com/channel/0029VaZSdai5Ui2TMoNsYo0J ]*
*/

elxyzFile = async (Path) => {
  new Promise(async (resolve, reject) => {
    if (!fs.existsSync(Path)) return reject(new Error("File not Found"));

    try {
      const form = new FormData();
      form.append("file", fs.createReadStream(Path));

      console.log(`Uploading file from path: ${Path}`);

      const response = await axios.post('https://cdn.elxyz.me/', form, {
        headers: form.getHeaders(),
        onUploadProgress: (progressEvent) => {
          if (progressEvent.lengthComputable) {
            console.log(`🚀 Upload Progress: ${(progressEvent.loaded * 100) / progressEvent.total}%`);
          }
        }
      });

      console.log('🎉 File Upload Success:', response.data);
      resolve(response.data);
    } catch (error) {
      console.error('🚫 Upload Failed:', error);
      reject(error);
    }
  });
}

uploadVidey = async (file) => {
    return new Promise(async (resolve, reject) => {
        try {
            const formData = new FormData();
            formData.append('file', file, 'video.mp4');
            const response = await fetch('https://videy.co/api/upload', {
                method: 'POST',
                body: formData,
            });
            // By Mas`Rens
            if (response.ok) {
                const data = await response.json();
                const result = `https://videy.co/v?id=${data.id}`;
                resolve(result);
                console.log('Upload successful. Video ID:', data.id);
            } else {
                console.error('Upload failed:', response.statusText);
            }
        } catch (error) {
            console.error('Error uploading video:', error);
        }
    });
};

async function uploadFile(media) {
    return new Promise(async (resolve, reject) => {
      let mime = await fileTypeFromBuffer(media);
      let form = new FormData();

      form.append("file", media, `file-${Date.now()}.${mime.ext}`);

      axios
        .post("https://storage.netorare.codes/upload", form, {
          headers: {
            "User-Agent":
              "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Mobile Safari/537.36",
            "Referer": "https://storage.netorare.codes/",
            ...form.getHeaders(),
          },
        })
        .then(({ data }) => resolve(data))
        .catch(reject);
    });
}

/**
 * Upload epheremal file to file.io
 * `Expired in 1 day`
 * `100MB Max Filesize`
 * @param {Buffer} buffer File Buffer
 */
const fileIO = async buffer => {
  const { ext } = await fromBuffer(buffer) || {}
  let form = new FormData
  form.append('file', buffer, 'tmp.' + ext)
  let res = await fetch('https://file.io/?expires=1d', { // 1 Day Expiry Date
    method: 'POST',
    body: form
  })
  let json = await res.json()
  if (!json.success) throw json
  return json.link
}

/**
 * Upload file to storage.restfulapi.my.id
 * @param {Buffer|ReadableStream|(Buffer|ReadableStream)[]} inp File Buffer/Stream or Array of them
 * @returns {string|null|(string|null)[]}
 */
const RESTfulAPI = async inp => {
  let form = new FormData
  let buffers = inp
  if (!Array.isArray(inp)) buffers = [inp]
  for (let buffer of buffers) {
    form.append('file', buffer)
  }
  let res = await fetch('https://storage.restfulapi.my.id/upload', {
    method: 'POST',
    body: form
  })
  let json = await res.text()
  try {
    json = JSON.parse(json)
    if (!Array.isArray(inp)) return json.files[0].url
    return json.files.map(res => res.url)
  } catch (e) {
    throw json
  }
}

async function gofile(url) {
  return new Promise(async (resolve, reject) => {
    try {
      // Validate URL
      if (!/gofile.io\/d\//gi.test(url)) return reject("Invalid URL!");

      // Extract folder ID from URL
      const match = /https:\/\/gofile.io\/d\/([\d\w]+)/gi.exec(url);
      if (!match) return reject("Folder Id Not Found");
      const id = match[1];

      const BASE_API = "https://api.gofile.io";
      const BASE_URL = "https://gofile.io";

      // Create account
      const accResponse = await fetch(BASE_API + "/accounts", {
        method: "POST",
        headers: {
          origin: BASE_URL,
          referer: `${BASE_URL}/`,
          "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      });
      const acc = await accResponse.json();

      if (acc.status !== "ok") return reject("Error making account");
      const { token } = acc.data;

      // Fetch content
      const contentResponse = await fetch(`${BASE_API}/contents/${id}?wt=${token}`, {
        headers: {
          "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
        },
      });
      const content = await contentResponse.json();

      if (content.status !== "ok") return reject("Error fetching content");

      resolve(content.data);
    } catch (error) {
      reject(error.message);
    }
  });
}

async function tmpFiles(buffer) {
  const { ext, mime } = (await fromBuffer(buffer)) || {};
  const form = new FormData();
  form.append("file", buffer, { filename: `tmp.${ext}`, contentType: mime });
  try {
    const { data } = await axios.post(
      "https://tmpfiles.org/api/v1/upload",
      form,
      {
        headers: form.getHeaders(),
      },
    );

    console.log(data);
    const match = /https?:\/\/tmpfiles.org\/(.*)/.exec(data.data.url);
    return `https://tmpfiles.org/dl/${match[1]}`;
  } catch (error) {
    throw error;
  }
};

/*
base website: https://gofile.io
requestan dari @CAF
scrape by shannz
visit: ‮https://whatsapp.com/channel/0029VagBdZ49MF92BygaM53t
*/

async function uploadFileToGofile(filePath, token = null, folderId = null) {
  const serverResponse = await fetch('https://api.gofile.io/servers');
  const serverData = await serverResponse.json();
  if (serverData.status !== 'ok') {
    throw new Error('Gagal mendapatkan server');
  }
  const server = serverData.data.servers[0].name; 

  const formData = new FormData();
  formData.append('file', fs.createReadStream(filePath));
  
  if (folderId) {
    formData.append('folderId', folderId);
  }

  const uploadUrl = `https://${server}.gofile.io/contents/uploadfile`;
  const uploadOptions = {
    method: 'POST',
    body: formData,
  };

  if (token) {
    uploadOptions.headers = {
      ...formData.getHeaders(),
      'Authorization': `Bearer ${token}`
    };
  } else {
    uploadOptions.headers = formData.getHeaders();
  }

  const uploadResponse = await fetch(uploadUrl, uploadOptions);
  const uploadData = await uploadResponse.json();

  if (uploadData.status !== 'ok') {
    throw new Error('Gagal mengunggah file');
  }

  return uploadData.data;
}

/*
lanjut yang pengen request scrape chat me 😋
*/

async function cdnSanzy(buffer) {
const { ext, mime } = (await fromBuffer(buffer)) || {};
const formData = new FormData()
formData.append('file', buffer, `cdn.${ext}`)
const res = await axios({
method: 'post',
url: 'https://cdn.sanzy.co/api',
data: formData,
headers: {
'Content-Type': 'multipart/form-data'
}
})
return res.data
}

module.exports = {
  TelegraPh,
  UploadFileUgu,
  webp2mp4File,
  floNime,
  uptotelegra,
  uploaderSSA,
  uploadCdn,
  catbox,
  uploadPomf2,
  ucarecdn,
  oxo,
  zippy,
  elxyzFile,
  uploadVidey,
  uploadFile,
  fileIO,
  RESTfulAPI,
  gofile,
  tmpFiles,
  uploadFileToGofile,
  cdnSanzy
}