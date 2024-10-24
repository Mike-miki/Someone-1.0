const crypto = require("crypto");
const cheerio = require('cheerio');
const axios = require('axios');
const fetch = require('node-fetch');
const qs = require("qs")
const { JSDOM } = require('jsdom')
const FormData = require('form-data')
const cookie = require("cookie")

async function ttdl(url) {
    try {
        const data = new URLSearchParams({
            'id': url,
            'locale': 'id',
            'tt': 'RFBiZ3Bi'
        });

        const headers = {
            'HX-Request': true,
            'HX-Trigger': '_gcaptcha_pt',
            'HX-Target': 'target',
            'HX-Current-URL': 'https://ssstik.io/id',
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Mobile Safari/537.36',
            'Referer': 'https://ssstik.io/id'
        };

        const response = await axios.post('https://ssstik.io/abc?url=dl', data, {
            headers
        });
        const html = response.data;

        const $ = cheerio.load(html);

        const author = $('#avatarAndTextUsual h2').text().trim();
        const title = $('#avatarAndTextUsual p').text().trim();
        const video = $('.result_overlay_buttons a.download_link').attr('href');
        const audio = $('.result_overlay_buttons a.download_link.music').attr('href');
        const imgLinks = [];
        $('img[data-splide-lazy]').each((index, element) => {
            const imgLink = $(element).attr('data-splide-lazy');
            imgLinks.push(imgLink);
        });

        const result = {
            isSlide: video ? false : true,
            author: "balxzzy",
            title,
            result: video || imgLinks,
            audio
        };
        return result
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
}

/**
@credit Tio
@threads downloader
**/

async function threads(url) {

    const regex = /post\/([^/?]+)/;
    const match = url.match(regex);
    const id = match ? match[1] : null;

    if (id) {
        let headers = {
            accept: "*/*"
        };

        let {
            data
        } = await axios.get(`https://threadster.app/download/${id}`, {
            headers
        });
        let $ = cheerio.load(data);
        const result = [];

        // jikok ling gambar 
        $('.download__items .image img').each((index, element) => {
    const imgUrl = $(element).attr('src');
    if (imgUrl) {
        result.push(imgUrl);
    } else {
      false
     }
});

        // jikok ling video bokep
        $('.download__wrapper .download__items .download_item.active .video_wrapper .video video').each((index, element) => {
            const videoUrl = $(element).attr('src');
            if (videoUrl) {
                result.push(videoUrl);
            } else {
                false
            }
        });

        return {
            result
        }

    } else {
        return {
            msg: "koe pekok su ra enek id ne"
        }
    }

}

async function mediafireDl(url) {
const res = await axios.get(url) 
const $ = cheerio.load(res.data)
const hasil = []
const link = $('a#downloadButton').attr('href')
const size = $('a#downloadButton').text().replace('Download', '').replace('(', '').replace(')', '').replace('\n', '').replace('\n', '').replace('                         ', '')
const seplit = link.split('/')
const nama = seplit[5]
mime = nama.split('.')
mime = mime[1]
hasil.push({ nama, mime, size, link })
return hasil
}

/*
SCRAPER INI MILIK SANZY 
DONT CLAIM AND DONT HAPUS WM

THANK TO:
 * SANZY
 * AMIRUL DEV
 * DLL

MEDSOS:
 * GITHUB: https://github.com/sanzydev 
 
 
SOURCE: https://whatsapp.com/channel/0029Vai8oxEGE56lX2JMya3Q

*/

async function TT(downloadUrl) {
  return new Promise(async (resolve, reject) => {
  const apiUrl = "https://www.veed.io/video-downloader-ap/api/download-content";
  const headers = {
    'Content-Type': 'application/json'
};
    try {
      const data = {
        "url": downloadUrl
      };

      const response = await axios.post(apiUrl, data, { headers: headers });

      const result = response.data;
      result.media = result.media.map(mediaItem => ({
        ...mediaItem,
        url: `https://www.veed.io${mediaItem.url}`
      }));

      resolve(result);
    } catch (error) {
      reject(`Error ${error.response ? error.response.status : 'unknown'}: ${error.response ? error.response.statusText : error.message}`);
    }
  });
}

/*
SCRAPER INI MILIK SANZY 
DONT CLAIM AND DONT HAPUS WM

THANK TO:
 * SANZY
 * AMIRUL DEV
 * DLL

MEDSOS:
 * GITHUB: https://github.com/sanzydev 
 
 
SOURCE: https://whatsapp.com/channel/0029Vai8oxEGE56lX2JMya3Q

*/

async function instagramdl(url) {
  return new Promise(async (resolve, reject) => {
  const apiUrl = "https://sssinstagram.com/api/convert";
  const headers = {
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
};
    try {
      const data = {
        "url": url,
        "ts": 1720397475406,
        "_ts": 1720083932019,
        "_tsc": 0,
        "_s": "985e996b5792ab9069ba1148dbbb9081fbc6ee8cad24667615d3469e427ec993"
      };

      const response = await axios.post(apiUrl, data, { headers: headers });
      const result = response.data;
      console.log(result);
      resolve(result);
    } catch (error) {
      console.error(error); 
      reject(`Error ${error.response ? error.response.status : 'unknown'}: ${error.response ? error.response.statusText : error.message}`);
    }
  });
}

async function igdl(url) {
  try {
    const response = await axios({
      method: 'post',
      url: 'https://v3.igdownloader.app/api/ajaxSearch',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Accept': '*/*'
      },
      data: qs.stringify({
        recaptchaToken: '',
        q: url,
        t: 'media',
        lang: 'en'
      })
    })

    const $ = cheerio.load(response.data.data)
    const result = []
    $('ul.download-box li').each((index, element) => {
      const thumbnail = $(element).find('.download-items__thumb img').attr('src')
      const options = []
      $(element).find('.photo-option select option').each((i, opt) => {
        options.push({
          resolution: $(opt).text(),
          url: $(opt).attr('value')
        })
      })
      const download = $(element).find('.download-items__btn a').attr('href')

      result.push({
        thumbnail: thumbnail,
        options: options,
        download: download
      })
    })

    return result
  } catch (error) {
    console.error(error)
  }
}

async function tiktok(url) {
    return new Promise(async (resolve) => {
        try {
            function formatNumber(integer) {
                let numb = parseInt(integer);
                return Number(numb).toLocaleString().replace(/,/g, ".");
            }

            function formatDate(n, locale = "en") {
                let d = new Date(n);
                return d.toLocaleDateString(locale, {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                    second: "numeric"
                });
            }
            let domain = "https://www.tikwm.com/api/";
            let res = await (
                await axios.post(
                    domain, {}, {
                        headers: {
                            Accept: "application/json, text/javascript, */*; q=0.01",
                            "Accept-Language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
                            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                            Origin: "https://www.tikwm.com",
                            Referer: "https://www.tikwm.com/",
                            "Sec-Ch-Ua": '"Not)A;Brand" ;v="24" , "Chromium" ;v="116"',
                            "Sec-Ch-Ua-Mobile": "?1",
                            "Sec-Ch-Ua-Platform": "Android",
                            "Sec-Fetch-Dest": "empty",
                            "Sec-Fetch-Mode": "cors",
                            "Sec-Fetch-Site": "same-origin",
                            "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36",
                            "X-Requested-With": "XMLHttpRequest"
                        },
                        params: {
                            url: url,
                            count: 12,
                            cursor: 0,
                            web: 1,
                            hd: 1
                        }
                    }
                )
            ).data.data;
            if (!res.play)
                return resolve({
                    status: false
                });
            let data = [];
            if (!res.size) {
                res.images.map((v) => {
                    data.push({
                        type: "photo",
                        url: v
                    });
                });
            } else {
                data.push({
                    type: "watermark",
                    url: "https://www.tikwm.com" + res.wmplay
                }, {
                    type: "nowatermark",
                    url: "https://www.tikwm.com" + res.play
                }, {
                    type: "nowatermark_hd",
                    url: "https://www.tikwm.com" + res.hdplay
                });
            }
            let json = {
                status: true,
                title: res.title,
                taken_at: formatDate(res.create_time).replace("1970", ""),
                region: res.region,
                id: res.id,
                durations: res.duration,
                duration: res.duration + " Seconds",
                cover: "https://www.tikwm.com" + res.cover,
                size_wm: res.wm_size,
                size_nowm: res.size,
                size_nowm_hd: res.hd_size,
                data: data,
                music_info: {
                    id: res.music_info.id,
                    title: res.music_info.title,
                    author: res.music_info.author,
                    album: res.music_info.album ? res.music_info.album : "Unknown",
                    url: "https://www.tikwm.com" + res.music || res.music_info.play
                },
                stats: {
                    views: formatNumber(res.play_count),
                    likes: formatNumber(res.digg_count),
                    comment: formatNumber(res.comment_count),
                    share: formatNumber(res.share_count),
                    download: formatNumber(res.download_count)
                },
                author: {
                    id: res.author.id,
                    fullname: res.author.unique_id,
                    nickname: res.author.nickname,
                    avatar: "https://www.tikwm.com" + res.author.avatar
                }
            };
            return resolve(json);
        } catch (e) {
            console.log(e);
            return resolve({
                status: false,
                msg: e.message
            });
        }
    });
};
douyindl = (videoUrl) => {
      return new Promise(async (resolve, reject) => {
      const apiUrl = 'https://tikvideo.app/api/ajaxSearch';
      const headers = {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      'Referer': 'https://tikvideo.app/id/download-douyin-video',
      };
      try {
      const response = await axios.post(apiUrl, `q=${encodeURIComponent(videoUrl)}&lang=id`, { headers });
      const inidata = response.data;
      const videoHDMatch = inidata.data.match(/href="(.*?)"/);
      const videoHD = videoHDMatch ? videoHDMatch[1] : '';
      const audioMatch = inidata.data.match(/href="(.*?)"/g);
      const audio = audioMatch && audioMatch.length > 1 ? audioMatch[1].match(/"(.*)"/)[1] : '';
      const descriptionMatch = inidata.data.match(/<h3>(.*?)<\/h3>/);
      const description = descriptionMatch ? descriptionMatch[1] : '';
      const videoMatch = inidata.data.match(/href="(.*?)"/g);
      const video = videoMatch ? videoMatch[0].match(/"(.*)"/)[1] : '';
      const stickerMatch = inidata.data.match(/<img src="(.*?)"/);
      const sticker = stickerMatch ? stickerMatch[1] : '';
      resolve({description, "Video_HD": videoHD, "Video": video, "Audio": audio, "Sticker": sticker });
      } catch (error) {
      reject(new Error(error.message));
     }
     });
     };

videy = async (link) => {
  return new Promise(async (resolve, reject) => {
    try {
      // Fetch the webpage content
      let response = await fetch(link, {
        method: 'GET',
        headers: {
          'User-Agent': 'GoogleBot'
        }
      });
      // Check if the response is okay
      if (!response.ok) {
        reject('Failed to fetch the page');
        return;
      }
      let text = await response.text();
      let dom = new JSDOM(text);
      let doc = dom.window.document;
      var videoLink = doc.querySelector('div.video video source').getAttribute('src');
      console.log(videoLink);
      resolve({ result: videoLink });
    } catch (error) {
      reject(error);
    }
  });
};
async function videy2(url) {
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    const videoSrc = $('source[type="video/mp4"]').attr('src');
    return videoSrc;
  } catch (error) {
    console.error(`Error fetching the URL: ${error.message}`);
  }
}

async function threads(url) {
  try {
  const response = await axios.get(`https://api.threadsphotodownloader.com/v2/media?url=${encodeURIComponent(url)}`)
  return response.data
  } catch (error) {
    console.error(error)
  }
}
fbdl = url => {
   return new Promise(async (resolve, reject) => {
      try {
         let Go = await fetch('https://fbreels.app/en', {
            method: 'GET',
            headers: {
               'User-Agent': 'GoogleBot'
            }
         })
         let isCookie = Go.headers.get('set-cookie').split(',').map((v) => cookie.parse(v)).reduce((a, c) => {
            return {
               ...a,
               ...c
            }
         }, {})
         let isHtml = await Go.text()
         isCookie = {
            '.AspNetCore.Antiforgery.oY8VhknnI_Q': isCookie['.AspNetCore.Antiforgery.oY8VhknnI_Q'],
         }
         isCookie = Object.entries(isCookie).map(([name, value]) => cookie.serialize(name, value)).join(' ')
         let $ = cheerio.load(isHtml)
         let token = $('input[name=__RequestVerificationToken]').attr('value')
         let form = new FormData
         form.append('__RequestVerificationToken', token)
         form.append('q', url)
         let json = await (await fetch('https://fbreels.app/api/ajaxSearch', {
            method: 'POST',
            headers: {
               Accept: '*/*',
               'Accept-Language': 'en-US,enq=0.9',
               'User-Agent': 'GoogleBot',
               Cookie: isCookie,
               'X-CSRF-TOKEN': token,
               ...form.getHeaders()
            },
            body: form
         })).json()
         let ch = cheerio.load(json.data)
         let data = []
         ch('tr').each((i, e) => data.push({
            type: /HD/.test($(e).find('td.video-quality').text()) ? 'HD' : 'SD',
            url: $(e).find('td > a').attr('href'),
            response: $(e).find('td > a').attr('href') ? 200 : 404
         }))
         const result = data.filter(v => v.url)
         if (result.ength == 0) return resolve({
            creator: global.creator,
            status: false
         })
         return resolve({
            creator: global.creator,
            status: true,
            data: result
         })
      } catch (e) {
         console.log(e)
         resolve({
            creator: global.creator,
            status: false
         })
      }
   })
}

twitter = (link) => {
	return new Promise((resolve, reject) => {
		let config = {
			'URL': link
		}
		axios.post('https://twdown.net/download.php',qs.stringify(config),{
			headers: {
				"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
				"sec-ch-ua": '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
				"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
				"cookie": "_ga=GA1.2.1388798541.1625064838; _gid=GA1.2.1351476739.1625064838; __gads=ID=7a60905ab10b2596-229566750eca0064:T=1625064837:RT=1625064837:S=ALNI_Mbg3GGC2b3oBVCUJt9UImup-j20Iw; _gat=1"
			}
		})
		.then(({ data }) => {
		const $ = cheerio.load(data)
		resolve({
		        creator: global.creator,
                status: true,
				desc: $('div:nth-child(1) > div:nth-child(2) > p').text().trim(),
				thumb: $('div:nth-child(1) > img').attr('src'),
				HD: $('tbody > tr:nth-child(1) > td:nth-child(4) > a').attr('href'),
				SD: $('tr:nth-child(2) > td:nth-child(4) > a').attr('href'),
				audio: 'https://twdown.net/' + $('body > div.jumbotron > div > center > div.row > div > div:nth-child(5) > table > tbody > tr:nth-child(3) > td:nth-child(4) > a').attr('href')
			})
		})
	.catch(reject)
	})
} 

function xnxxdl(URL) {
	return new Promise((resolve, reject) => {
		fetch(`${URL}`, {method: 'get'})
		.then(res => res.text())
		.then(res => {
			let $ = cheerio.load(res, {
				xmlMode: false
			});
			const title = $('meta[property="og:title"]').attr('content');
			const duration = $('meta[property="og:duration"]').attr('content');
			const image = $('meta[property="og:image"]').attr('content');
			const videoType = $('meta[property="og:video:type"]').attr('content');
			const videoWidth = $('meta[property="og:video:width"]').attr('content');
			const videoHeight = $('meta[property="og:video:height"]').attr('content');
			const info = $('span.metadata').text();
			const videoScript = $('#video-player-bg > script:nth-child(6)').html();
			const files = {
				low: (videoScript.match('html5player.setVideoUrlLow\\(\'(.*?)\'\\);') || [])[1],
				high: videoScript.match('html5player.setVideoUrlHigh\\(\'(.*?)\'\\);' || [])[1],
				HLS: videoScript.match('html5player.setVideoHLS\\(\'(.*?)\'\\);' || [])[1],
				thumb: videoScript.match('html5player.setThumbUrl\\(\'(.*?)\'\\);' || [])[1],
				thumb69: videoScript.match('html5player.setThumbUrl169\\(\'(.*?)\'\\);' || [])[1],
				thumbSlide: videoScript.match('html5player.setThumbSlide\\(\'(.*?)\'\\);' || [])[1],
				thumbSlideBig: videoScript.match('html5player.setThumbSlideBig\\(\'(.*?)\'\\);' || [])[1],
			};
			resolve({
				status: 200,
				result: {
					title,
					URL,
					duration,
					image,
					videoType,
					videoWidth,
					videoHeight,
					info,
					files
				}
			})
		})
		.catch(err => reject({code: 503, status: false, result: err }))
	})
}

function facebook(link){
	return new Promise((resolve,reject) => {
	let config = {
		'url': link
		}
	axios('https://www.getfvid.com/downloader',{
			method: 'POST',
			data: new URLSearchParams(Object.entries(config)),
			headers: {
				"content-type": "application/x-www-form-urlencoded",
				"user-agent":  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
				"cookie": "_ga=GA1.2.1310699039.1624884412; _pbjs_userid_consent_data=3524755945110770; cto_bidid=rQH5Tl9NNm5IWFZsem00SVVuZGpEd21sWnp0WmhUeTZpRXdkWlRUOSUyQkYlMkJQQnJRSHVPZ3Fhb1R2UUFiTWJuVGlhVkN1TGM2anhDT1M1Qk0ydHlBb21LJTJGNkdCOWtZalRtZFlxJTJGa3FVTG1TaHlzdDRvJTNE; cto_bundle=g1Ka319NaThuSmh6UklyWm5vV2pkb3NYaUZMeWlHVUtDbVBmeldhNm5qVGVwWnJzSUElMkJXVDdORmU5VElvV2pXUTJhQ3owVWI5enE1WjJ4ZHR5NDZqd1hCZnVHVGZmOEd0eURzcSUyQkNDcHZsR0xJcTZaRFZEMDkzUk1xSmhYMlY0TTdUY0hpZm9NTk5GYXVxWjBJZTR0dE9rQmZ3JTNEJTNE; _gid=GA1.2.908874955.1625126838; __gads=ID=5be9d413ff899546-22e04a9e18ca0046:T=1625126836:RT=1625126836:S=ALNI_Ma0axY94aSdwMIg95hxZVZ-JGNT2w; cookieconsent_status=dismiss"
			}
		})
	.then(async({ data }) => {
		const $ = cheerio.load(data)	
		resolve({
			video_sd: $('body > div.page-content > div > div > div.col-lg-10.col-md-10.col-centered > div > div:nth-child(3) > div > div.col-md-4.btns-download > p:nth-child(1) > a').attr('href'),
			video_hd: $('body > div.page-content > div > div > div.col-lg-10.col-md-10.col-centered > div > div:nth-child(3) > div > div.col-md-4.btns-download > p:nth-child(1) > a').attr('href'),
			audio: $('body > div.page-content > div > div > div.col-lg-10.col-md-10.col-centered > div > div:nth-child(3) > div > div.col-md-4.btns-download > p:nth-child(2) > a').attr('href')
			})
		})
	.catch(reject)
	})
}

async function facebookdl(url) {
	return new Promise((resolve, reject) => {
axios("https://getmyfb.com/process", {
  headers: {
    "cookie": "PHPSESSID=mtkljtmk74aiej5h6d846gjbo4; __cflb=04dToeZfC9vebXjRcJCMjjSQh5PprejufZXs2vHCt5; _token=K5Qobnj4QvoYKeLCW6uk"
  },
  data: { 
     id: url,
     locale: "en"
    },
  "method": "POST"
}).then(res => { 
let $ = cheerio.load(res.data)
let result = {}
result.caption = $("div.results-item-text").eq(0).text().trim()
result.thumb = $(".results-item-image-wrapper img").attr("src") 
result.result = $("a").attr("href")
 resolve(result) 
  })
 })
}

instagram = async (url) => {
    try {
    const response = await axios.post('https://v3.igdownloader.app/api/ajaxSearch', qs.stringify({ recaptchaToken: '', q: url, t: 'media', lang: 'en' }), { headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8', 'Accept': '*/*' } });
    const $ = cheerio.load(response.data.data);
    return $('ul.download-box li').map((index, element) => ({
    thumbnail: $(element).find('.download-items__thumb img').attr('src'),
    options: $(element).find('.photo-option select option').map((i, opt) => ({
    resolution: $(opt).text(),
    url: $(opt).attr('value')
    })).get(),
   download: $(element).find('.download-items__btn a').attr('href')
    })).get();   
    } catch (error) {
    console.error(error);
    throw error;
    }
}

async function GDriveDl(url) {
	let id = (url.match(/\/?id=(.+)/i) || url.match(/\/d\/(.*?)\//))?.[1]
	if (!id) throw 'ID Not Found'
	let res = await fetch(`https://drive.google.com/uc?id=${id}&authuser=0&export=download`, {
		method: 'POST',
		headers: {
			'accept-encoding': 'gzip, deflate, br',
			'content-length': 0,
			'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
			'origin': 'https://drive.google.com',
			'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36',
			'x-client-data': 'CKG1yQEIkbbJAQiitskBCMS2yQEIqZ3KAQioo8oBGLeYygE=',
			'x-drive-first-party': 'DriveWebUi',
			'x-json-requested': 'true' 
		}
	})
	let { fileName, sizeBytes, downloadUrl } =  JSON.parse((await res.text()).slice(4))
	if (!downloadUrl) throw 'Link Download Limit!'
	let data = await fetch(downloadUrl)
	if (data.status !== 200) throw data.statusText
	return {
		downloadUrl, fileName,
		fileSize: (sizeBytes / 1024 / 1024).toFixed(2),
		mimetype: data.headers.get('content-type')
   }
}

/**
 * SCRAPED BY KAVIAANN
 * PROTECTED BY MIT LICENSE
 * WHO GOT CAUGHT REMOVING WM WILL BE SUED
 * SOURCE : https://whatsapp.com/channel/0029Vac0YNgAjPXNKPXCvE2e
*/
async function cobalt(url) {
  return new Promise(async (resolve, reject) => {
    try {
      const BASE_URL = "https://cobalt.tools";
      const BASE_API = "https://api.cobalt.tools/api";
      await fetch(BASE_API + "/json", {
        method: "OPTIONS",
        headers: {
          "access-control-request-method": "POST",
          "access-control-request-headers": "content-type",
          "user-agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
          origin: BASE_URL,
          referer: BASE_URL,
        },
      }).then(async (v) => {
        const res = await fetch(BASE_API + "/json", {
          method: "POST",
          headers: {
            origin: BASE_URL,
            referer: BASE_URL,
            "user-agent": BASE_URL,
            "content-type": "application/json",
            accept: "application/json",
          },
          body: JSON.stringify({
            url: url,
            filenamePattern: "basic",
          }),
        }).then((v) => v.json());
  
        return resolve(res);
      });
    } catch (e) {
      reject(e);
    }
  });
}


// SCRAPED BY KAVIAN [ github.com/kaviaann ]

async function snack(url) {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await fetch(url).then((v) => v.text());
      const $ = cheerio.load(res);
      const video = $("div.video-box").find("a-video-player");
      const author = $("div.author-info");
      const attr = $("div.action");
      const data = {
        title: $(author)
          .find("div.author-desc > span")
          .children("span")
          .eq(0)
          .text()
          .trim(),
        thumbnail: $(video)
          .parent()
          .siblings("div.background-mask")
          .children("img")
          .attr("src"),
        media: $(video).attr("src"),
        author: $("div.author-name").text().trim(),
        authorImage: $(attr).find("div.avatar > img").attr("src"),
        like: $(attr).find("div.common").eq(0).text().trim(),
        comment: $(attr).find("div.common").eq(1).text().trim(),
        share: $(attr).find("div.common").eq(2).text().trim(),
      };
      resolve(data);
    } catch (e) {
      reject(e);
    }
  });
}
 
/**
 * Scraped By Kaviaann
 * Github : https://gi```thub.com/```Kaviaann/scraper
 * Channel : https://wh```atsa```pp.com/channel/0029Vac0YNgAjPXNKPXCvE2e
 * MIT LICENSE 2024 © KAVIAANN
 */
async function snackVideo(url) {
  return new Promise(async (resolve, reject) => {
    try {
      if (!/snackvideo.com/gi.test(url)) return reject("Invalid URL!");
      const res = await fetch(url).then((v) => v.text());
      const $ = cheerio.load(res);
      const video = $("div.video-box").find("a-video-player");
      const author = $("div.author-info");
      const attr = $("div.action");
      const data = {
        title: $(author)
          .find("div.author-desc > span")
          .children("span")
          .eq(0)
          .text()
          .trim(),
        thumbnail: $(video)
          .parent()
          .siblings("div.background-mask")
          .children("img")
          .attr("src"),
        media: $(video).attr("src"),
        author: $("div.author-name").text().trim(),
        authorImage: $(attr).find("div.avatar > img").attr("src"),
        like: $(attr).find("div.common").eq(0).text().trim(),
        comment: $(attr).find("div.common").eq(1).text().trim(),
        share: $(attr).find("div.common").eq(2).text().trim(),
      };

      resolve(data);
    } catch (e) {
      reject(e);
    }
  });
}

/**
* SCRAPED BY KAVIAANN
* FORBIDDEN TO SELL OR DELETE MY WM
**/
async function drive(url) {
  return new Promise(async (resolve, reject) => {
    try {
      if (!/drive\.google\.com\/file\/d\//gi.test(url))
        return reject("Invalid URL");
      const res = await fetch(url).then((v) => v.text());
      const $ = cheerio.load(res);
      const id = url.split("/")[5];
      const data = {
        name: $("head").find("title").text().split("-")[0].trim(),
        download: `https://drive.usercontent.google.com/uc?id=${id}&export=download`,
        link: url,
      };

      resolve(data);
    } catch (e) {
      reject(e);
    }
  });
}

/** 
 *  Created By Muhammad Adriansyah
 *  CopyRight 2024 MIT License
 *  My Github : https://github.com/xyzencode
 *  My Instagram : https://instagram.com/xyzencode
 *  My Youtube : https://youtube.com/@xyzencode
*/

async function aio(url) {
    return new Promise(async (resolve, reject) => {
        await axios("https://api.cobalt.tools/api/json", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            data: JSON.stringify({
                url
            })
        }).then(({ data }) => {
            resolve(data.url)
        }).catch(reject)
    })
}

async function Mcplist(page = 1) {
  try {
    let { data } = await axios(`https://mcpedl.org/downloading/page/${page}`)
    let $ = cheerio.load(data)

    let result = []
    $("article.tease.tease-post > section.entry-header-category").each(function() {
      let $$ = $(this)
      let obj = {}
      obj.thumbnail = $$.find("a.post-thumbnail > picture > img").attr("data-src")
      obj.title = $$.find("h2.entry-title").text().trim()
      obj.id = $$.find("h2.entry-title > a").attr("href").split("/").at(-2)
      result.push(obj)
    })

    return result
  } catch(err) {
    if(err?.response?.status == 404) return {
      error: true,
      message: "Page Not Found"
    }
    throw err
  }
}

async function Mcpdownload(id) {
  try {
    let { data } = await axios(`https://mcpedl.org/${id}`)
    let $ = cheerio.load(data)

    let __dl = (await axios("https://mcpedl.org/dw_file.php?id=" + $("#download-link > table > tbody > tr > td > a").attr("href").split("/").at(-1))).data
    let _dl = cheerio.load(__dl)
    let dl = _dl("a").attr("href")

    let result = {}
    result.url = dl
    result.version = $($("#download-link > table > tbody > tr > td")[0]).text()
    result.size = $($(".entry-footer > .entry-footer-wrapper > .entry-footer-column > .entry-footer-content > span").get(-1)).text()

    return result
  } catch(err) {
    if(err?.response?.status == 404) return {
      error: true,
      message: "Page Not Found"
    }
    throw err
  }
}

async function pindl(e) {
	return new Promise(((n, t) => {
		axios.get("https://www.savepin.app/download.php?url=" + encodeURIComponent(e) + "&lang=en&type=redirect").then((e => {
			const t = e.data,
				a = cheerio.load(t)('td.video-quality:contains("1080p")').next().next().find("a").attr("href");
			n({
				url: `https://www.savepin.app/${a}`
			})
		})).catch((e => {
			t(e)
		}))
	}))
}

async function ttslide(url) {
        const data = new URLSearchParams({
            'id': url,
            'locale': 'id',
            'tt': 'RFBiZ3Bi'
        });

        const headers = {
            'HX-Request': true,
            'HX-Trigger': '_gcaptcha_pt',
            'HX-Target': 'target',
            'HX-Current-URL': 'https://ssstik.io/id',
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Mobile Safari/537.36',
            'Referer': 'https://ssstik.io/id'
        };

        const response = await axios.post('https://ssstik.io/abc?url=dl', data, {
            headers
        });
        const html = response.data;

        const $ = cheerio.load(html);

        const author = $('#avatarAndTextUsual h2').text().trim();
        const title = $('#avatarAndTextUsual p').text().trim();
        const video = $('.result_overlay_buttons a.download_link').attr('href');
        const audio = $('.result_overlay_buttons a.download_link.music').attr('href');
        const imgLinks = [];
        $('img[data-splide-lazy]').each((index, element) => {
            const imgLink = $(element).attr('data-splide-lazy');
            imgLinks.push(imgLink);
        });

        const result = {
            author,
            title,
            result: video || imgLinks,
            audio
        };
        return result
}

async function nhentaiScraper(id) {
	let uri = id ? `https://cin.guru/v/${+id}/` : 'https://cin.guru/'
	let html = (await axios.get(uri)).data
	return JSON.parse(html.split('<script id="__NEXT_DATA__" type="application/json">')[1].split('</script>')[0]).props.pageProps.data
}

/*
*[  Created By YukiSmall  ]*
 #  LAHELU DOWNLOAD
 #  My Github : https://github.com/AmmarrBN
 #  My Telegram : https://t.me/SariiRooti
 #  My Youtube : https://youtube.com/@AmmarExecuted
*/

async function lahelu(url) {
    try {
        const response = await axios.get(`https://api.ryochinel.my.id/api/lahelu`, {
            params: {
                url: url,
                apikey: 'yk'
            }
        });

        if (!response.data.status) throw new Error(response.data.message || 'API Error');

        return {
            status: true,
            result: response.data.result
        };
    } catch (error) {
        return {
            status: false,
            msg: error.message
        };
    }
}

// please follow the channel https://whatsapp.com/channel/0029VaddOXtAInPl84jp7Q1p for the next feature

async function getMediaIG(url) {
  return new Promise(async (resolve, reject) => {
    const payload = new URLSearchParams(
      Object.entries({
        url: url,
        host: "instagram",
      }),
    );
    await axios
      .request({
        method: "POST",
        baseURL: "https://saveinsta.io/core/ajax.php",
        data: payload,
        headers: {
          "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
          cookie: "PHPSESSID=rmer1p00mtkqv64ai0pa429d4o",
          "user-agent":
            "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36",
        },
      })
      .then((response) => {
        const $ = cheerio.load(response.data);
        const mediaURL = $(
          "div.row > div.col-md-12 > div.row.story-container.mt-4.pb-4.border-bottom",
        )
          .map((_, el) => {
            return (
              "https://saveinsta.io/" +
              $(el).find("div.col-md-8.mx-auto > a").attr("href")
            );
          })
          .get();
        const res = {
          status: 200,
          media: mediaURL,
        };
        resolve(res);
      })
      .catch((e) => {
        console.log(e);
        throw {
          status: 400,
          message: "error",
        };
      });
  });
}

async function YTconvert(videoUrl) {
    return new Promise(async (resolve, reject) => {
        try {
            const searchParams = new URLSearchParams();
            searchParams.append('query', videoUrl);
            searchParams.append('vt', 'mp3');
            const searchResponse = await axios.post(
                'https://tomp3.cc/api/ajax/search',
                searchParams.toString(),
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                        'Accept': '*/*',
                        'X-Requested-With': 'XMLHttpRequest'
                    }
                }
            );
            if (searchResponse.data.status !== 'ok') {
                throw new Error('Failed to search for the video.');
            }            
            const videoId = searchResponse.data.vid;
            const videoTitle = searchResponse.data.title;
            const mp4Options = searchResponse.data.links.mp4;
            const mp3Options = searchResponse.data.links.mp3;
            const mediumQualityMp4Option = mp4Options[136]; 
            const mp3Option = mp3Options['mp3128']; 
            const mp4ConvertParams = new URLSearchParams();
            mp4ConvertParams.append('vid', videoId);
            mp4ConvertParams.append('k', mediumQualityMp4Option.k);
            const mp4ConvertResponse = await axios.post(
                'https://tomp3.cc/api/ajax/convert',
                mp4ConvertParams.toString(),
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                        'Accept': '*/*',
                        'X-Requested-With': 'XMLHttpRequest'
                    }
                }
            );
            if (mp4ConvertResponse.data.status !== 'ok') {
                throw new Error('Failed to convert the video to MP4.');
            }
            const mp4DownloadLink = mp4ConvertResponse.data.dlink;
            const mp3ConvertParams = new URLSearchParams();
            mp3ConvertParams.append('vid', videoId);
            mp3ConvertParams.append('k', mp3Option.k);
            const mp3ConvertResponse = await axios.post(
                'https://tomp3.cc/api/ajax/convert',
                mp3ConvertParams.toString(),
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                        'Accept': '*/*',
                        'X-Requested-With': 'XMLHttpRequest'
                    }
                }
            );
            if (mp3ConvertResponse.data.status !== 'ok') {
                throw new Error('Failed to convert the video to MP3.');
            }
            const mp3DownloadLink = mp3ConvertResponse.data.dlink;
            resolve({
                title: videoTitle,
                mp4DownloadLink,
                mp3DownloadLink
            });
        } catch (error) {
            reject('Error: ' + error.message);
        }
    });
}

async function scrapeSpotifyDetails(url) {
  const response = await axios.get(`https://spotifydownloaders.com/api/getSpotifyDetails?url=${url}`);
  const data = response.data;
  return data;
}

async function spotifydl(spotifyUrl) {
    try {
        const inpo_pemanggilan = `https://api.fabdl.com/spotify/get?url=${encodeURIComponent(spotifyUrl)}`;
        const tobrut_merespon = await axios.get(inpo_pemanggilan);
        const pemanggilan_tobrut = tobrut_merespon.data.result;

        if (!pemanggilan_tobrut) {
            throw new Error('无法从 Spotify 获取曲目信息');
        }

        const { id, name, image, artists, duration_ms } = pemanggilan_tobrut;

        const mengeluarkan_susu = `https://api.fabdl.com/spotify/mp3-convert-task/${pemanggilan_tobrut.gid}/${id}`;
        const tobrut_merespon_kedua = await axios.get(mengeluarkan_susu);
        const memulai_crot_tobrut = tobrut_merespon_kedua.data.result;

        if (!memulai_crot_tobrut || !memulai_crot_tobrut.download_url) {
            throw new Error('无法从转换任务中获取 MP3 下载 URL');
        }

        const menganu_tobrut = `https://api.fabdl.com${memulai_crot_tobrut.download_url}`;

        const spotifyInfo = {
            channel_name: artists,
            title: name,
            duration: Math.ceil(duration_ms / 1000),
            thumbnails: [{ url: image }],
            v1_audio_url: menganu_tobrut
        };

        return JSON.stringify(spotifyInfo, null, 2);
    } catch (error) {
        console.error('获取 Spotify 数据时出错:', error);
        return JSON.stringify({
            error: '无法获取 Spotify 数据',
            status: 1
        }, null, 2);
    }
}

///由 INS DEV 制造

async function ytdl(videoUrl) {
    try {
        const memanggil_tobrut = async () => {
            const apayah = 'https://youtube-dl.wave.video/info';
            const nganuyt = encodeURIComponent(videoUrl);
            const apanya = `${apayah}?url=${nganuyt}`;
            const respon_tobrut = await axios.get(apanya);
            return respon_tobrut.data;
        };

        const respon_cekerbabat = async (url_nganu) => {
            try {
                const Kebakaran = `https://cdn36.savetube.me/info?url=${encodeURIComponent(url_nganu)}`;
                const ngloot = await axios.get(Kebakaran);
                
                if (!ngloot.data || !ngloot.data.data || !ngloot.data.data.audio_formats) {
                    throw new Error('Gagal nggawe daptar format audio');
                }
                
                const key = ngloot.data.data.key;
                
                const pecel_lele = `https://cdn34.savetube.me/download/audio/128/${key}`;
                const pencuri_matiae = await axios.get(pecel_lele);
                
                if (!pencuri_matiae.data || !pencuri_matiae.data.data || !pencuri_matiae.data.data.downloadUrl) {
                    throw new Error('Gagal nggawe daptar URL dhuwit');
                }
                
                return pencuri_matiae.data.data.downloadUrl;
            } catch (error) {
                console.error('Kesalahan:', error.message);
                return null;
            }
        };

        const [videoInfo, audioUrl] = await Promise.all([memanggil_tobrut(), respon_cekerbabat(videoUrl)]);

        if (!videoInfo) {
            throw new Error('未收到视频信息');
        }

        const anu = videoInfo.formats.find(format => format.format_id === '18');
        const inpo_pemanggilan = {
            channel_name: videoInfo.uploader,
            channel_name_id: videoInfo.uploader_id,
            title: videoInfo.title || '没有可用的标题',
            duration: videoInfo.duration,
            thumbnails: videoInfo.thumbnail ? [{ url: videoInfo.thumbnail }] : [],
            v1_video_url: anu ? anu.url : null,
            v1_audio_url: audioUrl || null
        };

        return inpo_pemanggilan;
    } catch (error) {
        console.error('gagal memanggil tobrut:', error);

        return {
            error: 'terjadi kegagalan saat memanggil tobrut',
            status: 1
        };
    }
}

function getVideoInfo(url) {
    return new Promise(async (resolve, reject) => {
        try {
            const { data } = await axios.get(`https://cdn35.savetube.me/info?url=${url}`);
            const result = {
                creator: "XYZ TEAM",
                title: data.data.title,
                thumbnail: data.data.thumbnail,
                duration: {
                    seconds: data.data.duration,
                    formatted: data.data.durationLabel,
                },
                quality: data.data.video_formats[0].quality,
                url: data.data.video_formats[0].url,
            };
            resolve(result);
        }
        catch (err) {
            reject(err);
        }
    });
}

/** 
 *  Created By IFTXH
 *  CopyRight 2024 MIT License
 *  My Github : https://github.com/ifungtech
 
*/

async function Aio(url) {
    return new Promise(async (resolve, reject) => {
        const form = new FormData();
        form.append("url", url);
        await axios({
            url: "https://www.aiodownloader.in/wp-json/aio-dl/video-data",
            method: "post",
            data: form
        }).then(({ data }) => {
            const res = []
            data.medias.map((e) => {
                res.push({
                    url: e.url,
                    size: e.formattedSize
                })
            })
            resolve(res)
        }).catch(() => {
            reject("Failed to download")
        })
    })
}

igStory = async (url) => {
   try {
    const response = await axios.post('https://v3.igdownloader.app/api/ajaxSearch', qs.stringify({ recaptchaToken: '', q: url, t: 'media', lang: 'en' }), { headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' } });
    const $ = cheerio.load(response.data.data);
    const downloads = [];
    $('.download-items').each((index, element) => {
    downloads.push({
    author: $(element).find('.download-items__author').text().trim(),
    title: $(element).find('.download-items__btn a').attr('title'),
    thumbnail: $(element).find('.download-items__thumb img').attr('src'),
    download: $(element).find('.download-items__btn a').attr('href'),
     });
     });
     return downloads;
     } catch (error) {
     console.error(error);
     throw error;
     }
}

twitter = (link) => {
	return new Promise((resolve, reject) => {
		let config = {
			'URL': link
		}
		axios.post('https://twdown.net/download.php',qs.stringify(config),{
			headers: {
				"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
				"sec-ch-ua": '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
				"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
				"cookie": "_ga=GA1.2.1388798541.1625064838; _gid=GA1.2.1351476739.1625064838; __gads=ID=7a60905ab10b2596-229566750eca0064:T=1625064837:RT=1625064837:S=ALNI_Mbg3GGC2b3oBVCUJt9UImup-j20Iw; _gat=1"
			}
		})
		.then(({ data }) => {
		const $ = cheerio.load(data)
		resolve({
		        creator: global.creator,
                status: true,
				desc: $('div:nth-child(1) > div:nth-child(2) > p').text().trim(),
				thumb: $('div:nth-child(1) > img').attr('src'),
				HD: $('tbody > tr:nth-child(1) > td:nth-child(4) > a').attr('href'),
				SD: $('tr:nth-child(2) > td:nth-child(4) > a').attr('href'),
				audio: 'https://twdown.net/' + $('body > div.jumbotron > div > center > div.row > div > div:nth-child(5) > table > tbody > tr:nth-child(3) > td:nth-child(4) > a').attr('href')
			})
		})
	.catch(reject)
	})
}

async function savetik(url) {
    let result = {};
    let form = new FormData();
    form.append("q", url);
    form.append("lang", "id");

    try {
        let { data } = await axios("https://savetik.co/api/ajaxSearch", {
            method: "post",
            data: form,
            headers: {
                "content-type": "application/x-www-form-urlencoded",
                "User-Agent": "PostmanRuntime/7.32.2"
            }
        });

        let $ = cheerio.load(data.data);

        result.status = true;
        result.caption = $("div.video-data > div > .tik-left > div > .content > div > h3").text();
        result.server1 = {
            quality: "MEDIUM",
            url: $("div.video-data > div > .tik-right > div > p:nth-child(1) > a").attr("href")
        };
        result.serverHD = {
            quality: $("div.video-data > div > .tik-right > div > p:nth-child(3) > a").text().split("MP4 ")[1],
            url: $("div.video-data > div > .tik-right > div > p:nth-child(3) > a").attr("href")
        };
        result.audio = $("div.video-data > div > .tik-right > div > p:nth-child(4) > a").attr("href");

    } catch (error) {
        result.status = false;
        result.message = error;
        console.log(result);
    }

    return result;
}

async function tiktokslide(url) {
    try {
        const res = await axios({
            method: 'POST',
            url: 'https://tikvideo.app/api/ajaxSearch',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36"
            },
            data: {
                "q": url,
                "lang": "id"
            }
        });
        var result = [];
        if (res.data.status === 'ok') {
            let $ = cheerio.load(res.data.data);
            $('img').each((index, element) => {
                const a = $(element).attr('src');
                if (!a.includes('.webp')) {
                    result.push(a);
                }
            });
        }
        if (result.length > 0) {
            return result;
        } else {
            return null;
        }
    } catch (e) {
        console.error(e);
        return null;
    }
}

const getFullUrl = (baseUrl, relativeUrl) => {
  return new URL(relativeUrl, baseUrl).href;
};
 youjizz_s = async (query, page = "1") => {
  return new Promise(async (resolve, reject) => {
    try {
      const baseUrl = 'https://www.youjizz.com';
      const { data } = await axios.get(`${baseUrl}/search/${query}-${page}.html`);
      const $ = cheerio.load(data);
      const videos = [];
      $('.video-thumb').each((i, elem) => {
        const title = $(elem).find('.video-title a').text().trim();
        const thumbnailRelative = $(elem).find('.frame img').attr('data-original');
        const videoRelative = $(elem).find('.frame').attr('href');
        const thumbnail = getFullUrl(baseUrl, thumbnailRelative);
        const videoLink = getFullUrl(baseUrl, videoRelative);
        videos.push({ title, thumbnail, videoLink });
      });

      resolve(videos);
    } catch (error) {
      console.error('Error scraping page:', error.message);
      reject(error);
    }
  });
};

 youjizz_dl = async (videoUrl) => {
  return new Promise(async (resolve, reject) => {
    try {
      const baseUrl = 'https://www.youjizz.com';
      const { data } = await axios.get(videoUrl);
      const $ = cheerio.load(data);
      const jsonLd = $('script[type="application/ld+json"]').html();
      let jsonData;
      if (jsonLd) {
        jsonData = JSON.parse(jsonLd);
      }
      const scriptTags = $('script').toArray();
      let dataEncodings;
      scriptTags.some(tag => {
        const scriptContent = $(tag).html();
        if (scriptContent && scriptContent.includes('dataEncodings')) {
          const jsonMatch = scriptContent.match(/var dataEncodings\s*=\s*(\[[^\]]*\])/);
          if (jsonMatch) {
            dataEncodings = JSON.parse(jsonMatch[1]);
            return true; 
          }
        }
        return false;
      });

      if (!dataEncodings) {
        throw new Error('DataEncodings JSON not found');
      }
      const videoUrls = {};
      dataEncodings.forEach(encoding => {
        const url = encoding.filename.replace(/\\/g, '');
        const fullUrl = getFullUrl(baseUrl, url);
        if (!videoUrls[encoding.quality]) {
          videoUrls[encoding.quality] = fullUrl;
        } else {          
          if (!Array.isArray(videoUrls[encoding.quality])) {
            videoUrls[encoding.quality] = [videoUrls[encoding.quality]];
          }
          videoUrls[encoding.quality].push(fullUrl);
        }
      });

      resolve({
        title: jsonData?.name || $('meta[property="og:title"]').attr('content') || $('title').text(),
        description: jsonData?.description || $('meta[property="og:description"]').attr('content') || $('meta[name="description"]').attr('content'),
        thumbnail: jsonData?.thumbnailUrl[0] || getFullUrl(baseUrl, $('meta[property="og:image"]').attr('content') || ''),
        duration: jsonData?.duration,
        contentUrl: jsonData?.contentUrl || videoUrl,
        embedUrl: jsonData?.embedUrl,
        videoUrls: videoUrls
      });
    } catch (error) {
      console.error('Error scraping video details:', error.message);
      reject(error);
    }
  });
};

async function downloadFromTwitter(id) {
    try {
        const url = 'https://ssstwitter.com';
        const response = await axios.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Mobile Safari/537.36'
            }
        });

        const $ = cheerio.load(response.data);
        const form = $('form.pure-form.pure-g.hide-after-request');
        const includeVals = form.attr('include-vals');
        const ttMatch = includeVals.match(/tt:'([^']+)'/);
        const tsMatch = includeVals.match(/ts:(\d+)/);

        if (!ttMatch || !tsMatch) throw new Error('Cannot find tt or ts values.');

        const tt = ttMatch[1];
        const ts = tsMatch[1];

        const postData = new URLSearchParams({
            tt: tt,
            ts: ts,
            source: 'form',
            id: id,
            locale: 'en'
        });

        const postResponse = await axios.post(url, postData.toString(), {
            headers: {
                'HX-Request': 'true',
                'HX-Target': 'target',
                'HX-Current-URL': 'https://ssstwitter.com/en',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Mobile Safari/537.36',
                'Referer': 'https://ssstwitter.com/result_normal'
            }
        });

        const $result = cheerio.load(postResponse.data);
        const downloads = [];
        $result('.result_overlay a.download_link').each((i, element) => {
            const text = $(element).text().trim();
            const url = $(element).attr('href');
            if (url) {
                downloads.push({ text, url });
            }
        });

        const data = {
            title: $result('.result_overlay h2').text().trim(),
            downloads: downloads
        };

        return {status: true, creator: "siputzx", result: data};
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

async function CapCut(url) {
  const response = await fetch(url);
  const data = await response.text();
  const $ = cheerio.load(data);

  return {
    thumbnail: $("video").attr("poster"),
    video: $("video").attr("src"),
  };
}

async function AllDl(url) {
   const headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
    'Referer': 'https://api.sanzy.co/'
  };

  try {
    const response = await axios.get(`https://api.sanzy.co/api/alldl?url=${encodeURIComponent(url)}`, { headers });
    if (response.status === 200) {
      const data = response.data;
      return JSON.stringify({
        status: true,
        data: data
      }, null, 2);
    } else {
      return JSON.stringify({
        status: false,
        message: 'Permintaan tidak dapat diproses'
      }, null, 2);
    }
  } catch (error) {
    return JSON.stringify({
      status: false,
      message: error.message
    }, null, 2);
  }
}

/*
- Xyro ~
- https://github.com/Xyro-Dev
- https://whatsapp.com/channel/0029VadbyYw9xVJjWaRWbk3N
- Nhentai download sesuai request, enjoy....
*/

async function nhentai(q) {
    try {
        const response = await axios.get(`https://nhentai.net/g/${q}/`);
        const html = response.data;
        const $ = cheerio.load(html);
        const pages = $('.thumb-container img').length; // Mendapatkan jumlah halaman
        const imgSrcList = [];

        for (let i = 1; i <= pages; i++) {
            const pageResponse = await axios.get(`https://nhentai.net/g/${q}/${i}/`);
            const pageHtml = pageResponse.data;
            const page$ = cheerio.load(pageHtml);
            const imgSrc = page$('#image-container img').attr('src');
            if (imgSrc) {
                imgSrcList.push(imgSrc);
            }
        }

        return imgSrcList;
    } catch (error) {
        console.error(error);
    }
}

async function SnackVideo(url) {
  try {
    const response = await axios.get(url);
    const html = response.data;
    const regex = /<source src="(.*?)" type="video\/mp4"/g;
    const videoUrl = regex.exec(html)[1];
    return videoUrl;
  } catch (error) {
    console.log(error);
  }
}

/**
 * Fetches media URLs from Instagram using saveinsta.io service.
 * 
 * @param {string} url - The Instagram URL to download media from.
 * @returns {Promise<Object>} - A promise that resolves to an object containing media URLs.
 */
async function saveInsta(url) {
  try {
    const response = await fetchMediaData(url);
    const mediaURLs = parseMediaData(response.data);
    return createResponse(mediaURLs);
  } catch (error) {
    return handleError(error);
  }
}
/**
 * Fetches media data from saveinsta.io.
 * 
 * @param {string} url - The Instagram URL.
 * @returns {Promise<Object>} - The response from saveinsta.io.
 */
async function fetchMediaData(url) {
  const payload = new URLSearchParams({
    url: url,
    host: "instagram"
  });

  const response = await axios.request({
    method: "POST",
    baseURL: "https://saveinsta.io/core/ajax.php",
    data: payload,
    headers: {
      "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      cookie: "PHPSESSID=rmer1p00mtkqv64ai0pa429d4o",
      "user-agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36"
    }
  });

  return response;
}
/**
 * Parses the HTML response to extract media URLs.
 * 
 * @param {string} html - The HTML response data.
 * @returns {Array<string>} - An array of media URLs.
 */
function parseMediaData(html) {
  const $ = cheerio.load(html);
  return $("div.row > div.col-md-12 > div.row.story-container.mt-4.pb-4.border-bottom")
    .map((_, el) => {
      return "https://saveinsta.io/" + $(el).find("div.col-md-8.mx-auto > a").attr("href");
    }).get();
}
/**
 * Creates a response object with the extracted media URLs.
 * 
 * @param {Array<string>} mediaURLs - An array of media URLs.
 * @returns {Object} - The response object.
 */
function createResponse(mediaURLs) {
  return {
    status: 200,
    creator: 'avosky',
    media: mediaURLs
  };
}
/**
 * Handles errors by logging them and returning an error response object.
 * 
 * @param {Error} error - The error object.
 * @returns {Object} - The error response object.
 */
function handleError(error) {
  console.error(error);
  return {
    status: 400,
    message: "error"
  };
}

module.exports = {
    ttdl,
    TT,
    tiktok,
    threads,
    mediafireDl,
    instagram,
    instagramdl,
    igdl,
    getMediaIG,
    douyindl,
    videy,
    videy2,
    threads,
    fbdl,
    facebook,
    facebookdl,
    twitter,
    xnxxdl,
    GDriveDl,
    drive,
    cobalt,
    snack,
    snackVideo,
    aio,
    Aio,
    Mcplist,
    Mcpdownload,
    pindl,
    ttslide,
    nhentaiScraper,
    nhentai,
    lahelu,
    YTconvert,
    scrapeSpotifyDetails,
    spotifydl,
    ytdl,
    getVideoInfo,
    igStory,
    twitter,
    savetik,
    tiktokslide,
    youjizz_s,
    youjizz_dl,
    downloadFromTwitter,
    CapCut,
    AllDl,
    SnackVideo,
    saveInsta
};