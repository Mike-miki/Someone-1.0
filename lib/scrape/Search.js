const cheerio = require('cheerio');
const axios = require('axios');
const fetch = require('node-fetch');
const fs = require("fs");
const cs = require('cloudscraper')

const clientId = '8f777f61f80e4051b754d8e50310ad6e';
const clientSecret = '5802d3726d3149bfb880a577aa855fb3';
const base64Credentials = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');
const BASE_URL = "https://genius.com"
const headers = {
	"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
	"cookie": "PHPSESSID=ugpgvu6fgc4592jh7ht9d18v49; _ga=GA1.2.1126798330.1625045680; _gid=GA1.2.1475525047.1625045680; __gads=ID=92b58ed9ed58d147-221917af11ca0021:T=1625045679:RT=1625045679:S=ALNI_MYnQToDW3kOUClBGEzULNjeyAqOtg"
}

async function searchSpotifyTrack(query) {
  try {
    const tokenUrl = 'https://accounts.spotify.com/api/token';
    const data = 'grant_type=client_credentials';
    const base64Credentials = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

    const tokenResponse = await axios.post(tokenUrl, data, {
      headers: {
        'Authorization': `Basic ${base64Credentials}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      }, 
    });

    const accessToken = tokenResponse.data.access_token;

    // Step 2: Search for a Track
    const searchUrl = `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track`;
    
    const searchResponse = await axios.get(searchUrl, { 
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
    });

    // Process and return information for the first track
    const firstTrack = searchResponse.data.tracks.items[0];
    if (!firstTrack) {
      return { error: 'No tracks found' };
    }

    const result = {
      token: accessToken,
      trackName: firstTrack.name,
      artistName: firstTrack.artists.map(artist => artist.name).join(', '),
      previewUrl: firstTrack.preview_url,
      externalUrl: firstTrack.external_urls.spotify,
    };

    return result;

  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
    return { error: 'Failed to retrieve tracks' };
  }
}

async function searchSpotifyTrack2(query) {
  try {
    // Step 1: Get Access Token
    const tokenUrl = 'https://accounts.spotify.com/api/token';
    const data = 'grant_type=client_credentials';
    const base64Credentials = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

    const tokenResponse = await axios.post(tokenUrl, data, {
      headers: {
        'Authorization': `Basic ${base64Credentials}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    const accessToken = tokenResponse.data.access_token;

    // Step 2: Search for a Track
    const searchUrl = `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track`;
    
    const searchResponse = await axios.get(searchUrl, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
    });

    // Process tracks and return result as JSON
    const tracks = searchResponse.data.tracks.items;
    const result = tracks.map((track, index) => ({
      trackNumber: index + 1,
      trackName: track.name,
      artistName: track.artists.map(artist => artist.name).join(', '),
      previewUrl: track.preview_url,
      externalUrl: track.external_urls.spotify,
    }));

    return result;

  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
    return { error: 'Failed to retrieve tracks' };
  }
}

function pinterest(querry){
	return new Promise(async(resolve,reject) => {
		 axios.get('https://id.pinterest.com/search/pins/?autologin=true&q=' + querry, {
			headers: {
			"cookie" : "_auth=1; _b=\"AVna7S1p7l1C5I9u0+nR3YzijpvXOPc6d09SyCzO+DcwpersQH36SmGiYfymBKhZcGg=\"; _pinterest_sess=TWc9PSZHamJOZ0JobUFiSEpSN3Z4a2NsMk9wZ3gxL1NSc2k2NkFLaUw5bVY5cXR5alZHR0gxY2h2MVZDZlNQalNpUUJFRVR5L3NlYy9JZkthekp3bHo5bXFuaFZzVHJFMnkrR3lTbm56U3YvQXBBTW96VUgzVUhuK1Z4VURGKzczUi9hNHdDeTJ5Y2pBTmxhc2owZ2hkSGlDemtUSnYvVXh5dDNkaDN3TjZCTk8ycTdHRHVsOFg2b2NQWCtpOWxqeDNjNkk3cS85MkhhSklSb0hwTnZvZVFyZmJEUllwbG9UVnpCYVNTRzZxOXNJcmduOVc4aURtM3NtRFo3STlmWjJvSjlWTU5ITzg0VUg1NGhOTEZzME9SNFNhVWJRWjRJK3pGMFA4Q3UvcHBnWHdaYXZpa2FUNkx6Z3RNQjEzTFJEOHZoaHRvazc1c1UrYlRuUmdKcDg3ZEY4cjNtZlBLRTRBZjNYK0lPTXZJTzQ5dU8ybDdVS015bWJKT0tjTWYyRlBzclpiamdsNmtpeUZnRjlwVGJXUmdOMXdTUkFHRWloVjBMR0JlTE5YcmhxVHdoNzFHbDZ0YmFHZ1VLQXU1QnpkM1FqUTNMTnhYb3VKeDVGbnhNSkdkNXFSMXQybjRGL3pyZXRLR0ZTc0xHZ0JvbTJCNnAzQzE0cW1WTndIK0trY05HV1gxS09NRktadnFCSDR2YzBoWmRiUGZiWXFQNjcwWmZhaDZQRm1UbzNxc21pV1p5WDlabm1UWGQzanc1SGlrZXB1bDVDWXQvUis3elN2SVFDbm1DSVE5Z0d4YW1sa2hsSkZJb1h0MTFpck5BdDR0d0lZOW1Pa2RDVzNySWpXWmUwOUFhQmFSVUpaOFQ3WlhOQldNMkExeDIvMjZHeXdnNjdMYWdiQUhUSEFBUlhUVTdBMThRRmh1ekJMYWZ2YTJkNlg0cmFCdnU2WEpwcXlPOVZYcGNhNkZDd051S3lGZmo0eHV0ZE42NW8xRm5aRWpoQnNKNnNlSGFad1MzOHNkdWtER0xQTFN5Z3lmRERsZnZWWE5CZEJneVRlMDd2VmNPMjloK0g5eCswZUVJTS9CRkFweHc5RUh6K1JocGN6clc1JmZtL3JhRE1sc0NMTFlpMVErRGtPcllvTGdldz0=; _ir=0"
		}
			}).then(({ data }) => {
		const $ = cheerio.load(data)
		const result = [];
		const hasil = [];
   		 $('div > a').get().map(b => {
        const link = $(b).find('img').attr('src')
            result.push(link)
		});
   		result.forEach(v => {
		 if(v == undefined) return
		 hasil.push(v.replace(/236/g,'736'))
			})
			hasil.shift();
		resolve(hasil)
		})
	})
}
async function Pinterest(query) {
    let res = await fetch(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${query}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${query}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
    let json = await res.json();
    let data = json.resource_response.data.results;
    if (!data.length) throw `Query "${query}" not found :/`;
    return data;
}

async function webArchive(query) {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await fetch(
        "https://archive.org/wayback/available?" +
          new URLSearchParams({ url: query })
      ).then((v) => v.json());
      resolve(data);
    } catch (e) {
      reject(e);
    }
  });
}

/**
* SCRAPED BY KAVIAN
* FORBIDDEN TO SELL OR DELETE MY WM
* YG HPUS WM PAHALANY BWT AK
*/
async function geniusLyric(title, artist) {
  return new Promise(async (resolve, reject) => {
    try {
      const url = `${BASE_URL}/${artist.replace(/[ ]/gi, "-")}-${title.replace(
        /[ ]/gi,
        "-"
      )}-lyrics`;
      let res = await fetch(url);
      if(!res.ok) return reject("Lyric Not Found")
      res = await res.text()
      const $ = cheerio.load(res);
      let data = {
        title: "",
        about: "",
        image: "",
        artist: "",
        artistLink: "",
        track: "",
        album: "",
        producer: "",
        producerLink: "",
        url: "",
        lyric: [],
        tags: [],
      };

      // * GET LYRICS
      $("body")
        .find("div[data-lyrics-container]")
        .each((i, e) => {
          for (let el of e.children) {
            if (el.type === "text") {
              data.lyric.push(el.data);
            } else if (el.type === "tag" && el.name === "a") {
              for (let es of el.children[0].children) {
                if (!es.name) {
                  data.lyric.push(es.data);
                } else if (es.name && es.name === "b") {
                  data.lyric.push($(es).text().trim());
                }
              }
            }
          }
        });

      // * ADDITIONAL INFORMATION
      data.title = $("body").find("span.iMpFIj").text().trim();
      data.url = url;
      data.image = $("head").find('meta[property="og:image"]').attr("content");
      data.track =
        $("body")
          .find("div.HeaderArtistAndTracklistdesktop__Tracklist-sc-4vdeb8-2")
          .text()
          .trim() || "";
      data.album =
        $("body")
          .find(
            "div.HeaderArtistAndTracklistdesktop__Tracklist-sc-4vdeb8-2 > a"
          )
          .text()
          .trim() || "";
      data.producer = $("body")
        .find("div.HeaderCredits__List-wx7h8g-3")
        .text()
        .trim();
      data.artistLink = $("body").find("a.jhWHLb").attr("href");
      data.artist = data.artistLink.split("/")[4].replace(/[-]/gi, " ");
      data.producerLink = $("body")
        .find("div.HeaderCredits__List-wx7h8g-3")
        .find("a")
        .attr("href");
      data.about = $("body");

      // * GET TAG
      $("body")
        .find("div.SongTags__Container-xixwg3-1 > a")
        .each((i, el) => {
          data.tags.push({
            name: $(el).text().trim(),
            url: $(el).attr("href"),
          });
        });

      data.about = $("body")
        .find("div.SongDescription__Content-sc-615rvk-2")
        .text()
        .trim();

      resolve(data);
    } catch (e) {
      reject(e);
    }
  });
}

/*
Created By Miftah 
*/

async function Lahelu(query, page = 0) {
    const url = 'https://lahelu.com/api/post/get-search';
    const params = { query, page };

    try {
        const response = await axios.get(url, { params });

        const postInfos = response.data.postInfos.map(post => ({
            ...post,
            media: `https://cache.lahelu.com/${post.media}`,
            mediaThumbnail: `https://cache.lahelu.com/${post.mediaThumbnail}`,
            userAvatar: `https://cache.lahelu.com/${post.userAvatar}`
        }));

        return postInfos
    } catch (error) {
        console.error(error.message);
    }
}

async function tiktoks(text) {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await axios({
                method: "POST",
                url: "https://tikwm.com/api/feed/search",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                    Cookie: "current_language=en",
                    "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36"
                },
                data: {
                    keywords: text,
                    count: 10,
                    cursor: 0,
                    HD: 1
                }
            });
            const videos = response.data.data.videos;
            if (videos.length === 0) {
                reject("Tidak ada video ditemukan.");
            } else {
                const gywee = Math.floor(Math.random() * videos.length);
                const videorndm = videos[gywee];

                const result = {
                    title: videorndm.title,
                    cover: videorndm.cover,
                    origin_cover: videorndm.origin_cover,
                    no_watermark: videorndm.play,
                    watermark: videorndm.wmplay,
                    music: videorndm.music
                };
                resolve(result);
            }
        } catch (error) {
            reject(error);
        }
    });
};

stickersearch = (query) => {
	return new Promise((resolve, reject) => {
		axios.get(`https://getstickerpack.com/stickers?query=${query}`)
			.then(({
				data
			}) => {
				const $ = cheerio.load(data)
				const source = [];
				const link = [];
				$('#stickerPacks > div > div:nth-child(3) > div > a').each(function(a, b) {
					source.push($(b).attr('href'))
				})
				axios.get(source[Math.floor(Math.random() * source.length)])
					.then(({
						data
					}) => {
						const $$ = cheerio.load(data)
						$$('#stickerPack > div > div.row > div > img').each(function(c, d) {
							link.push($$(d).attr('src').replace(/&d=200x200/g, ''))
						})
					let result = {
							status: 200,
							author: global.creator,
							title: $$('#intro > div > div > h1').text(),
							sticker_url: link
						}
						resolve(result)
					})
			}).catch(reject)
	})
}

    // Zerochan
	//scrap by mr.one
	zerochan = async (qq) => {
		try {
			const {
				data
			} = await axios.get(`https://www.zerochan.net/${encodeURIComponent(qq)}?q=${encodeURIComponent(qq)}`);
			const $ = cheerio.load(data);
			const items = [];
			$('ul#thumbs2 li').each((index, element) => {
				const dataId = $(element).attr('data-id');
				const title = $(element).find('img').attr('alt');
				let fullImageUrl = null;
				$(element).find('p a').each((i, el) => {
					const href = $(el).attr('href');
					if (href && /^https/.test(href)) {
						fullImageUrl = href;
					}
				});
				const imgUrl = $(element).find('img').attr('data-src');

				if (dataId && title && fullImageUrl && imgUrl) {
					items.push({
						dataId: dataId,
						title: title,
						fullImageUrl: fullImageUrl,
						imgUrl: imgUrl,
					});
				}
			});
			return items

			console.log(JSON.stringify(items, null, 2));
		} catch (error) {
			console.error('Error scraping the website:', error);
		}
}

nhentainew = () => {
		return new Promise(async (resolve, reject) => {
		await axios.request({
        url: "https://nhentai.to", 
        method: "GET",
        headers
        })
   	.then(( response ) => {
		const $ = cheerio.load(response.data)
		const result = $("div.container.index-container > div.gallery").map((_, el) => {
		return {
    	id: $(el).find("a").attr("href").match(/\d+/)[0],
		title: $(el).find("a > div.caption").text().trim(),
		thumbnail: $(el).find("a > img").attr("data-src"),
		link: "https://nhentai.to" + $(el).find("a").attr("href"),
		}
		}).get()
		resolve(result)
		})
   	.catch((e) => {
		reject(e)
		})
		})
    	}
nhentaisearch = (query) => {
			return new Promise(async (resolve, reject) => {
				await axios
				.request({
					baseURL: "https://nhentai.to",
					url: "/search?q=" + encodeURIComponent(query),
					method: "GET",
					headers
				})
				.then(( response ) => {
					const $ = cheerio.load(response.data)
					const result = $("div.container.index-container > div.gallery").map((_, el) => {
					return {
						id: $(el).find("a").attr("href").match(/\d+/)[0],
						title: $(el).find("a > div.caption").text().trim(),
						thumbnail: $(el).find("a > img").attr("src"),
						link: "https://nhentai.to" + $(el).find("a").attr("href"),
					}
				}).get()
				resolve(result)
				}).catch((e) => { reject(e)
			})
		})
}

/*
Scrape By Miftah 
Do not delete credits 
*/

const search3DAssets = async (searchText, limit = 20, adminDemo = true) => {
  const url = 'https://api.csm.ai/image-to-3d-sessions/session-search/vector-search';

  const headers = {
    'Accept': '*/*',
    'Accept-Encoding': 'gzip, deflate, br, zstd',
    'Accept-Language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7,af;q=0.6',
    'Connection': 'keep-alive',
    'Content-Length': '50',
    'Content-Type': 'application/json',
    'Host': 'api.csm.ai',
    'Origin': 'https://3d.csm.ai',
    'Referer': 'https://3d.csm.ai/',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36',
    'X-Platform': 'web',
    'X_csm_client_id': 'a757f793-6926-4751-8e54-105066c651c0',
    'X_csm_client_secret': '587a62759f1b4d57aa7d051602b06b0f899fafeb6c044ea9ad0fab1065ec236e'
  };

  const params = {
    limit,
    search_text: searchText,
    admin_demo: adminDemo
  };

  try {
    const response = await axios.post(url, params, { headers });
    return response.data;
  } catch (error) {
    return('Error fetching the 3D assets:', error);
    throw error;
  }
};

var durationMultipliers = {
   1: { 0: 1 },
   2: { 0: 60, 1: 1 },
   3: { 0: 3600, 1: 60, 2: 1 }
};

function YoutubeSearch(query) {
   return new Promise((resolve, reject) => {
      axios("https://m.youtube.com/results?search_query="+query, { method: "GET", headers: { 'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36' } }).then(({ data }) => {
         const $ = cheerio.load(data)
         var sc;
         $('script').map(function () {
         const el = $(this).html();
         let regex;
            if ((regex = /var ytInitialData = /gi.exec(el || ''))) {
             sc = JSON.parse(regex.input.replace(/^var ytInitialData = /i, '').replace(/;$/, ''));
            }
            return regex && sc;
         });
         var results = { video: [], channel: [], playlist: [] };
           sc.contents.twoColumnSearchResultsRenderer.primaryContents.sectionListRenderer.contents[0].itemSectionRenderer.contents.forEach((v) => {
              var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13;
              const typeName = Object.keys(v)[0];
              const result = v[typeName];
              if (['horizontalCardListRenderer', 'shelfRenderer'].includes(typeName)) {
                  return;
              }
              const isChannel = typeName === 'channelRenderer';
              const isVideo = typeName === 'videoRenderer';
              const isMix = typeName === 'radioRenderer';
              //===[ Filtering ]===\\
              if (isVideo) {
                 const view = ((_a = result.viewCountText) === null || _a === void 0 ? void 0 : _a.simpleText) || ((_b = result.shortViewCountText) === null || _b === void 0 ? void 0 : _b.simpleText) || ((_d = (_c = result.shortViewCountText) === null || _c === void 0 ? void 0 : _c.accessibility) === null || _d === void 0 ? void 0 : _d.accessibilityData.label);
                 const _duration = (_f = (_e = result.thumbnailOverlays) === null || _e === void 0 ? void 0 : _e.find((v) => Object.keys(v)[0] === 'thumbnailOverlayTimeStatusRenderer')) === null || _f === void 0 ? void 0 : _f.thumbnailOverlayTimeStatusRenderer.text;
                 const videoId = result.videoId;
                 const duration = ((_g = result.lengthText) === null || _g === void 0 ? void 0 : _g.simpleText) || (_duration === null || _duration === void 0 ? void 0 : _duration.simpleText);
                 let durationS = 0;
                   (_h = ((duration === null || duration === void 0 ? void 0 : duration.split('.').length) && duration.indexOf(':') === -1 ? duration.split('.') : duration === null || duration === void 0 ? void 0 : duration.split(':'))) === null || _h === void 0 ? void 0 : _h.forEach((v, i, arr) => (durationS += durationMultipliers[arr.length]['' + i] * parseInt(v)));
                 results.video.push({
                    authorName: (_l = (((_j = result.ownerText) === null || _j === void 0 ? void 0 : _j.runs) || ((_k = result.longBylineText) === null || _k === void 0 ? void 0 : _k.runs) || [])[0]) === null || _l === void 0 ? void 0 : _l.text,
                    authorAvatar: (_p = (_o = (_m = result.channelThumbnailSupportedRenderers) === null || _m === void 0 ? void 0 : _m.channelThumbnailWithLinkRenderer.thumbnail.thumbnails) === null || _o === void 0 ? void 0 : _o.filter(({ url }) => url)) === null || _p === void 0 ? void 0 : _p.pop().url,
                    videoId,
                    url: encodeURI('https://www.youtube.com/watch?v=' + videoId),
                    thumbnail: result.thumbnail.thumbnails.pop().url,
                    title: (_t = (((_r = (_q = result.title) === null || _q === void 0 ? void 0 : _q.runs.find((v) => v.text)) === null || _r === void 0 ? void 0 : _r.text) || ((_s = result.title) === null || _s === void 0 ? void 0 : _s.accessibility.accessibilityData.label))) === null || _t === void 0 ? void 0 : _t.trim(),
                    description: (_y = (_x = (_w = (_v = (_u = result.detailedMetadataSnippets) === null || _u === void 0 ? void 0 : _u[0]) === null || _v === void 0 ? void 0 : _v.snippetText.runs) === null || _w === void 0 ? void 0 : _w.filter(({ text }) => text)) === null || _x === void 0 ? void 0 : _x.map(({ text }) => text)) === null || _y === void 0 ? void 0 : _y.join(''),
                    publishedTime: (_z = result.publishedTimeText) === null || _z === void 0 ? void 0 : _z.simpleText,
                    durationH: ((_0 = result.lengthText) === null || _0 === void 0 ? void 0 : _0.accessibility.accessibilityData.label) || (_duration === null || _duration === void 0 ? void 0 : _duration.accessibility.accessibilityData.label),
                    durationS,
                    duration,
                    viewH: view,
                    view: (_1 = (((view === null || view === void 0 ? void 0 : view.indexOf('x')) === -1 ? view === null || view === void 0 ? void 0 : view.split(' ')[0] : view === null || view === void 0 ? void 0 : view.split('x')[0]) || view)) === null || _1 === void 0 ? void 0 : _1.trim(),
                    type: typeName.replace(/Renderer/i, '')
                 });
              }
              if (isChannel) {
                 const channelId = result.channelId;
                 //const _subscriber = ((_2 = result.subscriberCountText) === null || _2 === void 0 ? void 0 : _2.accessibility.accessibilityData.label) || ((_3 = result.subscriberCountText) === null || _3 === void 0 ? void 0 : _3.simpleText);
                 results.channel.push({
                    channelId,
                    url: encodeURI('https://www.youtube.com/channel/' + channelId),
                    channelName: result.title.simpleText || ((_5 = (_4 = result.shortBylineText) === null || _4 === void 0 ? void 0 : _4.runs.find((v) => v.text)) === null || _5 === void 0 ? void 0 : _5.text),
                    avatar: 'https:' + ((_6 = result.thumbnail.thumbnails.filter(({ url }) => url)) === null || _6 === void 0 ? void 0 : _6.pop().url),
                    isVerified: ((_7 = result.ownerBadges) === null || _7 === void 0 ? void 0 : _7.pop().metadataBadgeRenderer.style) === 'BADGE_STYLE_TYPE_VERIFIED',
                    subscriberH: result.videoCountText ? result.videoCountText.simpleText : "",
                    subscriber: result.videoCountText ? result.videoCountText.simpleText.split(" ")[0] : "",
                    description: (_13 = (_12 = (_11 = (_10 = result.descriptionSnippet) === null || _10 === void 0 ? void 0 : _10.runs) === null || _11 === void 0 ? void 0 : _11.filter(({ text }) => text)) === null || _12 === void 0 ? void 0 : _12.map(({ text }) => text)) === null || _13 === void 0 ? void 0 : _13.join(''),
                    type: typeName.replace(/Renderer/i, '')
                 });
              }
              if (isMix) {
                 results.playlist.push({
                    playlistId: result.playlistId,
                    title: result.title.simpleText,
                    thumbnail: result.thumbnail.thumbnails.pop().url,
                    video: result.videos.map(({ childVideoRenderer }) => {
                       return {
                           url: encodeURI('https://www.youtube.com/watch?v=' + childVideoRenderer.videoId + "&list=" + result.playlistId),
                           videoId: childVideoRenderer.videoId,
                           title: childVideoRenderer.title.simpleText,
                           durationH: childVideoRenderer.lengthText.accessibility.accessibilityData.label,
                           duration: childVideoRenderer.lengthText.simpleText
                       };
                    }),
                    type: 'mix'
                 });
              }
           })
         resolve(results)
      })
   })
}

async function YandexReverse(buffer) {
	let res = await fetch("https://yandex.com/images-apphost/image-download?cbird=111&images_avatars_size=preview&images_avatars_namespace=images-cbir", {
    "headers": {
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.9",
    "content-type": "image/jpeg",
    "device-memory": "1",
    "downlink": "6.15",
    "dpr": "1",
    "ect": "4g",
    "rtt": "150",
    "sec-ch-ua": "\"Not/A)Brand\";v=\"99\", \"Google Chrome\";v=\"115\", \"Chromium\";v=\"115\"",
    "sec-ch-ua-arch": "\"x86\"",
    "sec-ch-ua-bitness": "\"64\"",
    "sec-ch-ua-full-version": "\"115.0.5790.110\"",
    "sec-ch-ua-full-version-list": "\"Not/A)Brand\";v=\"99.0.0.0\", \"Google Chrome\";v=\"115.0.5790.110\", \"Chromium\";v=\"115.0.5790.110\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-model": "\"\"",
    "sec-ch-ua-platform": "\"Linux\"",
    "sec-ch-ua-platform-version": "\"4.19.0\"",
    "sec-ch-ua-wow64": "?0",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "viewport-width": "1045",
    "cookie": "is_gdpr=0; is_gdpr_b=CNXXWRDBxgE=; i=ozIyaCSSdmoBDiGutjTEmbq7XOJerLDhYnfDZTL/Bozfgix53Mm/5g30MR6H86AMLKASO8BybyI8UwPVk/3AD3Rc0z8=; yandexuid=5582089541691074272; bh=EkEiTm90L0EpQnJhbmQiO3Y9Ijk5IiwgIkdvb2dsZSBDaHJvbWUiO3Y9IjExNSIsICJDaHJvbWl1bSI7dj0iMTE1IhoFIng4NiIiECIxMTUuMC41NzkwLjExMCIqAj8wMgIiIjoHIkxpbnV4IkIIIjQuMTkuMCJKBCI2NCJSXSJOb3QvQSlCcmFuZCI7dj0iOTkuMC4wLjAiLCAiR29vZ2xlIENocm9tZSI7dj0iMTE1LjAuNTc5MC4xMTAiLCAiQ2hyb21pdW0iO3Y9IjExNS4wLjU3OTAuMTEwIloCPzA=; gdpr=0; _ym_uid=1691074277546700988; _ym_d=1691074277; _yasc=y+j2jWwF3BQAm+do+3HB5jAbE+LughIEyBRo0QA/R0fwBlHoz4lIFf23ym+4E9uJ; cycada=VxUPNVl3JygGGzKJbCzVAKvJAuFn98ekGGCC9LXAstQ=; yp=1691679075.szm.1:1600x1200:1045x1096; _ym_isad=2",
    "Referer": "https://yandex.com/images/",
    "Referrer-Policy": "no-referrer-when-downgrade"
    },
  "method": "POST",
  "body": buffer
  })
  let json = await res.json();
  let url = 'https://yandex.com/images/search?cbir_id='+ encodeURIComponent(json.image_shard + '/' + json.image_id) +'&rpt=imageview&url=' + encodeURIComponent(json.url.replace(/preview/g, 'orig'))
  let ch = cheerio.load(await cs.get(url))
  txt = ``
  no = 1
  ch('ul > li').each(function(a,b) {if (ch(b).find('div > div > a').attr('href') == undefined) return; txt += `*${no++}).` + ch(b).find('div > div > a').attr('href') + `*\n`+ 'image ~> *' + `${ch(b).find('div > a > img').attr('src') == undefined ? ch(b).find('div > a').attr('href') : 'https:' + ch(b).find('div > a > img').attr('src')}` + `*\n desc ~> _*` + ch(b).find('div > div > a').html() + `*_\n\n\n`})
  return {link: url, teks: txt};
};

 xnxxsearch = async (query) => {
    return new Promise((resolve, reject) => {
        const baseurl = 'https://www.xnxx.com';
        fetch(`${baseurl}/search/${query}/${Math.floor(Math.random() * 3) + 1}`, { method: 'get' })
            .then(res => res.text())
            .then(res => {
                let $ = cheerio.load(res, {
                    xmlMode: false
                });
                let title = [];
                let url = [];
                let desc = [];
                let results = [];

                $('div.mozaique').each(function(a, b) {
                    $(b).find('div.thumb').each(function(c, d) {
                        url.push(baseurl + $(d).find('a').attr('href').replace("/THUMBNUM/", "/"));
                    });
                });
                $('div.mozaique').each(function(a, b) {
                    $(b).find('div.thumb-under').each(function(c, d) {
                        desc.push($(d).find('p.metadata').text());
                        $(d).find('a').each(function(e, f) {
                            title.push($(f).attr('title'));
                        });
                    });
                });
                for (let i = 0; i < title.length; i++) {
                    results.push({
                        title: title[i],
                        info: desc[i],
                        link: url[i]
                    });
                }
                resolve({
                    result: results
                });
            })
            .catch(err => reject({ code: 503, status: false, result: err }));
    });
}

/*
base website: https://dramaqu.hair/
page maksimal sampai 40, default 1
scraping by shannz
visit: ‮https://whatsapp.com/channel/0029VagBdZ49MF92BygaM53t
*/

async function scrapeDramaqu(page = 1) {
  try {
    if (page < 1 || page > 40) {
      throw new Error('Halaman harus antara 1 dan 40');
    }

    const url = `https://dramaqu.hair/drama/page/${page}/`;
    
    const response = await axios.get(url);
    const html = response.data;

    const $ = cheerio.load(html);

    const dramas = [];
    $('.items .item.tvshows').each((index, element) => {
      const $element = $(element);
      const drama = {
        title: $element.find('.serie-title').text().trim(),
        image: $element.find('.poster img').attr('src'),
        type: $element.find('.features-type b').text(),
        year: $element.find('.features-status b').text(),
        link: $element.find('a').attr('href')
      };
      dramas.push(drama);
    });

    const result = {
      author: 'shannz',
      page: page,
      data: dramas
    };

    return(JSON.stringify(result, null, 2));

  } catch (error) {
    const errorResult = {
      status: 'error',
      message: 'Terjadi kesalahan saat scraping',
      page: page,
      error: error.message
    };

    return(JSON.stringify(errorResult, null, 2));
  }
}

/*
base website: https://filmapik.pet/
page maksimal sampai 2239, default 1
scraping by shannz, minimal kalo mau recode kasih credit 🗿
visit: ‮https://whatsapp.com/channel/0029VagBdZ49MF92BygaM53t
*/

async function filmApik(page = 1) {
  if (page > 2239) {
    throw new Error('Nomor halaman tidak valid. Halaman maksimum adalah 2239.');
  }

  const baseUrl = 'https://filmapik.pet/trending-2';
  const url = page === 1 ? baseUrl : `${baseUrl}/page/${page}`;
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    const movies = [];

    $('.items.normal article').each((index, element) => {
      const $element = $(element);
      const movie = {
        author: 'shannz',
        title: $element.find('.data h3 a').attr('title'),
        poster: $element.find('.poster img').attr('src'),
        rating: $element.find('.rating').text(),
        quality: $element.find('.quality').text(),
        type: $element.hasClass('tvshows') ? 'TV Show' : 'Movie',
        link: $element.find('.data h3 a').attr('href')
      };
      movies.push(movie);
    });

    return movies;

  } catch (error) {
    return(`Error saat scraping halaman ${page}:`, error.message);
    return [];
  }
}

/*
by shannz
visit: https://whatsapp.com/channel/0029VagBdZ49MF92BygaM53t
*/

async function getLibraryInfo(libraryName) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(`https://api.cdnjs.com/libraries?search=${encodeURIComponent(libraryName)}&fields=name,description,version,author,license,homepage,repository`);
      if (!response.ok) {
        throw new Error('Respons jaringan tidak berhasil');
      }
      const data = await response.json();
      
      const libraryInfo = data.results.find(lib => lib.name.toLowerCase() === libraryName.toLowerCase());
      
      if (libraryInfo) {
        resolve({
          nama: libraryInfo.name,
          deskripsi: libraryInfo.description,
          versiTerbaru: libraryInfo.version,
          lisensi: libraryInfo.license,
          author: libraryInfo.author,
          urlRepository: libraryInfo.repository?.url || 'Tidak tersedia',
          urlHomepage: libraryInfo.homepage
        });
      } else {
        reject(new Error(`Informasi untuk library '${libraryName}' tidak ditemukan`));
      }
    } catch (error) {
      reject(new Error(`Error saat mengambil informasi untuk library '${libraryName}': ${error.message}`));
    }
  });
}

module.exports = {
    pinterest,
    Pinterest,
    searchSpotifyTrack,
    searchSpotifyTrack2,
    webArchive,
    geniusLyric,
    Lahelu,
    tiktoks,
    stickersearch,
    zerochan,
    nhentainew,
    nhentaisearch,
    search3DAssets,
    YoutubeSearch,
    YandexReverse,
    xnxxsearch,
    scrapeDramaqu,
    filmApik,
    getLibraryInfo
};