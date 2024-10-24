const axios = require('axios');
const cheerio = require('cheerio');
const fetch = require('node-fetch')

/*
Created By KiiCode
Channel = https://whatsapp.com/channel/0029VaZSdai5Ui2TMoNsYo0J
Note: yang hapus cr yatim
*/
const siikomikUpdates = async () => {
  try {
    const response = await axios.get('https://siikomik.com/');
    const html = response.data;
    const $ = cheerio.load(html);

    const projects = [];

    $('div.bixbox').each((i, element) => {
      if ($(element).find('h2').text().trim() === 'Project Update') {
        $(element).find('div.utao.styletwo > div.uta').each((j, el) => {
          const project = {};

          project.title = $(el).find('div.luf > a.series > h4').text().trim();
          project.url = $(el).find('div.imgu > a.series').attr('href');
          project.imageUrl = $(el).find('div.imgu > a.series > img').attr('src');

          project.chapters = [];
          $(el).find('div.luf > ul > li').each((k, li) => {
            const chapter = {};
            chapter.title = $(li).find('a').text().trim();
            chapter.url = $(li).find('a').attr('href');
            chapter.updated = $(li).find('span').text().trim();
            project.chapters.push(chapter);
          });

          projects.push(project);
        });
      }
    });

    return JSON.stringify(projects, null, 2);
  } catch (error) {
    console.error('Error:', error);
  }
};

/*
Created by : KiiCode
Source : https://api.elxyz.me/shorturl/1f1f7e6f
Note : Hapus cr yatim
*/
async function anichinSearch(query) {
    try {
        const url = `https://anichin.site/?s=${query}`;
        const response = await axios.get(url);
        const html = response.data;
        const $ = cheerio.load(html);

        const results = [];
        
        $('.listupd .bs').each((index, element) => {
            const title = $(element).find('.tt h2').text().trim();
            const link = $(element).find('.bsx > a').attr('href');
            const image = $(element).find('img').attr('data-lazy-src');
            const type = $(element).find('.typez').text().trim();
            const status = $(element).find('.bt .epx').text().trim();
            const subtitle = $(element).find('.bt .sb').text().trim();

            results.push({
                title,
                link,
                image,
                type,
                status,
                subtitle
            });
        });

        return results;

    } catch (error) {
        console.error('Error:', error);
        throw new Error('Scraping failed');
    }
}

const searchAnime = async (query) => {
    try {
        const response = await axios.get(`https://aniwatchtv.to/search?keyword=${encodeURIComponent(query)}`);
        const $ = cheerio.load(response.data);

        let results = [];
        $('.film-detail').each((index, element) => {
            const title = $(element).find('.film-name a').text();
            const url = $(element).find('.film-name a').attr('href');

            results.push({
                title: title,
                url: `https://aniwatchtv.to${url}`,
            });
        });

        return results;
    } catch (error) {
        console.error(error);
    }
};

/**
 * Scraped by Kaviaan
 * Dont remove Wm
*/
async function mangaSearch(query) {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await fetch(
        `https://myanimelist.net/manga.php?${new URLSearchParams({ q: query })}`
      ).then((v) => v.text());
      const $ = cheerio.load(res);
      const data = [];
      $("div#content")
        .find("div.list > table > tbody")
        .children("tr")
        .slice(1)
        .each((i, el) => {
          const at = $(el).find("td.ac");
          const manga = {
            title: $(el).find("strong").text().trim(),
            desc: $(el).find("div.pt4").text().trim(),
            // .replace(/read more/gi, "")
            // .replace(/\./gi, "") + "...",
            id: $(el)
              .find("div.picSurround > a")
              .attr("id")
              .replace(/sarea|[^\d]/gi, ""),
            link: $(el).find("div.picSurround > a").attr("href"),
            thumbnail: $(el)
              .find("div.picSurround > a > img")
              .attr("data-srcset")
              .split(" ")[2]
              .split("?")[0]
              .replace(/\/r\/\d+x\d+/gi, ""),
            type: $(at).eq(0).text().trim(),
            volume: $(at).eq(1).text().trim(),
            score: $(at).eq(2).text().trim(),
            member: $(at).eq(3).text().trim() || 0,
          };
      
          data.push(manga);
        });

     resolve(data)
    } catch (e) {
      reject(e);
    }
  });
}

function parseResult(json, options) {
	// github: https://github.com/Zobin33/Anu-Wabot/blob/master/lib/functions.js#L81
	let opts = {
		unicode: true,
		ignoreVal: [null, undefined],
		ignoreKey: [],
		title: ' ',
		headers: `%title\n`,
		body: `*• %key:* %value`,
		footer: '\n',
		...options
	}
	let { unicode, ignoreKey, title, headers, ignoreVal, body, footer } = opts
	let obj = Object.entries(json), tmp = []
	for (let [_key, val] of obj) {
		if (ignoreVal.indexOf(val) !== -1) continue
		let key = _key.capitalize(), type = typeof val
		if (ignoreKey && ignoreKey.includes(_key)) continue
		switch (type) {
			case 'boolean':
				tmp.push([key, val ? true : false])
				break
			case 'object':
				if (Array.isArray(val)) tmp.push([key, val.join(', ')])
				else tmp.push([key, parseResult(val, { ignoreKey, unicode: false })])
				break
			default:
				tmp.push([key, val])
				break
		}
	}
	if (unicode) {
		let text = [
			headers.replace(/%title/g, title), tmp.map((v) => {
				return body.replace(/%key/g, v[0]).replace(/%value/g, v[1])
			}).join('\n'), footer
		]
		return text.join('\n').trim()
	}
	return tmp
}

async function downloadAnime(url) {
	// url = url?.['Zippy']?.['480p'] || url?.['Zippy']?.['360p']
	let res = await extract(url)
	let mimetype = await lookup(res.download)
	return { ...res, mimetype }
}

async function getLatestAnime() {
	let html = (await axios.get('https://anoboy.ninja/')).data
	let $ = cheerio.load(html), arr = []
	$('div.home_index > a').each((idx, el) => {
		arr.push({
			title: $(el).attr('title'),
			cover: $(el).find('div.amv > amp-img').attr('src'),
			url: $(el).attr('href')
		})
	})
	return arr
}

async function getDetailAnime(url) {
	let html = (await axios.get(url)).data
	let $ = cheerio.load(html), obj = {}
	obj.title = $('div.pagetitle > h1').text().trim().replace(/Subtitle Indonesia/, '')
	obj.episode = /Episode/.test(obj.title) ? obj.title.split(' Episode ')[1] : 'Movie'
	obj.update = $('div.breadcrumb > span > time').attr('datetime')
	$('div.contenttable > table > tbody > tr').each((idx, el) => {
		let text = $(el).find('th').text().toLowerCase()
		if (/semua/.test(text)) return
		obj[text] = $(el).find('td').text()
	})
	obj.sinopsis = $('div.contentdeks').text().trim() || $('div.unduhan').eq(0).text().trim()
	obj.cover = $('div.sisi > amp-img').attr('src')
	obj.download = {}
	$('#colomb > p > span').each((idx, el) => {
		let site = $(el).find('span').text()
		obj.download[site] = {}
		$(el).find('a').each((idx2, el2) => {
			let quality = $(el2).text().replace('SD', '').toLowerCase()
			obj.download[site][quality] = $(el2).attr('href')
		})
	})
	return obj
}

async function fetchAnimeTitles(url) {
    try {
        const { data } = await axios.get(url)
        const $ = cheerio.load(data)
        const titles = []
        $('.anime_ranking_h3 span').each((index, element) => {
            titles.push($(element).text().trim())
        })
        return titles
    } catch (error) {
        console.error(`Failed to fetch anime titles: ${error.message}`)
        return []
    }
}

/*
`sumber`
https://whatsapp.com/channel/0029Vai9MMj5vKABWrYzIJ2Z
*/
/*
base website: https://samehadaku.email/
page maksimal sampai 15, default 1
scraping by shannz
visit: ‮https://whatsapp.com/channel/0029VagBdZ49MF92BygaM53t
*/

async function samehadakuSearch(page = 1) {
  const baseUrl = 'https://samehadaku.email/daftar-anime-2';
  let url = page === 1 
    ? `${baseUrl}/?title=&status=&type=&order=title`
    : `${baseUrl}/page/${page}/?title&status&type&order=title`;

  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    const animeList = [];

    $('.animpost').each((index, element) => {
      const anime = {
        author: 'shannz',
        image: $(element).find('.content-thumb img').attr('src'),
        title: $(element).find('.data .title h2').text().trim(),
        rating: $(element).find('.score').text().replace('i', '').trim(),
        description: $(element).find('.stooltip .ttls').text().trim(),
        type: $(element).find('.type').first().text().trim(),
        status: $(element).find('.data .type').text().trim(),
        genres: $(element).find('.stooltip .genres .mta a').map((i, el) => $(el).text().trim()).get()
      };

      animeList.push(anime);
    });

    return animeList;
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
}

/**
 * Scraped By Kaviaann
 * Protected By MIT LICENSE
 * Whoever caught removing wm will be sued
 * @description Any Request? Contact me : vielynian@gmail.com
 * @author Kaviaann 2024
 * @copyright https://whatsapp.com/channel/0029Vac0YNgAjPXNKPXCvE2e
 */
async function samehadaku(url) {
  return new Promise(async (resolve, reject) => {
    try {
      if (!/samehadaku\.email/gi.test(url)) return reject("Invalid URL!");
      const html = await fetch(url, {
        method: "GET",
        headers: {
          "user-agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
        },
      });

      if (!html.ok) return reject("Error Fetching");
      const $ = cheerio.load(await html.text());
      const data = {
        title: $('h1[itemprop="name"]').text().trim(),
        link : url,
        downloads: [],
      };

      data.downloads = await Promise.all(
        $("div#server > ul > li").map(async (i, el) => {
          const v = {
            name: $(el).find("span").text().trim(),
            post: $(el).find("div").attr("data-post"),
            nume: $(el).find("div").attr("data-nume"),
            type: $(el).find("div").attr("data-type"),
            link: "",
          };

          const A = new FormData();
          A.append("action", "player_ajax");
          A.append("post", v.post);
          A.append("nume", v.nume);
          A.append("type", v.type);

          v.link = await fetch(
            "https://samehadaku.email/wp-admin/admin-ajax.php",
            {
              method: "POST",
              headers: {
                "user-agent":
                  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
                origin: "https://samehadaku.email",
              },
              body: A,
            }
          )
            .then((v) => v.text())
            .then((v) => cheerio.load(v)("iframe").attr("src"));

          return v;
        })
      );

      return resolve(data);
    } catch (e) {
      reject(e);
    }
  });
}

/**
 * Scraped By Kaviaann
 * Protected By MIT LICENSE
 * Whoever caught removing wm will be sued
 * @description Any Request? Contact me : vielynian@gmail.com
 * @author Kaviaann 2024
 * @copyright https://whatsapp.com/channel/0029Vac0YNgAjPXNKPXCvE2e
 */
async function latestAnime() {
  return new Promise(async (resolve, reject) => {
    try {
      const url = "https://samehadaku.email/anime-terbaru/";
      const html = await fetch(url, {
        headers: {
          "user-agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
        },
      });

      if (!html.ok) return reject("Website Down");
      const $ = cheerio.load(await html.text());
      const ul = $("div.post-show > ul").children("li");
      const data = {
        total: 0,
        anime: [],
      };

      for (let el of ul) {
        data.anime.push({
          title: $(el)
            .find("h2.entry-title")
            .text()
            .trim()
            .split(" Episode")[0],
          thumbnail: $(el).find("div.thumb > a > img").attr("src"),
          postedBy: $(el)
            .find('span[itemprop="author"] > author')
            .text()
            .trim(),
          episode: $(el).find("span").eq(0).find("author").text().trim(),
          release: $(el)
            .find('span[itemprop="author"]')
            .next()
            .contents()
            .eq(3)
            .text()
            .split(": ")[1]
            .trim(),
          link: $(el).find("a").attr("href"),
        });
      }

      data.total = data.anime.length;

      resolve(data);
    } catch (e) {
      reject(e);
    }
  });
}

/*
- Xyro ~
- https://github.com/Xyro-Dev
- NutakuLastest
- "minggir, master axios beraksi😂🙏🏿"
*/

const nutaku = async () => {
    try {
        const { data } = await axios.get('https://www.nutaku.net/home/');
        const $ = cheerio.load(data);
        let hasil = [];
        $('.card-game').each((index, element) => {
            const gameUrl = $(element).find('a').attr('href');
            const imageUrl = $(element).find('picture source[type="image/jpeg"]').attr('srcset');
            const title = $(element).find('.general-title').text();
            const genre = $(element).find('.genre').text();
            const price = $(element).find('.price').text().trim();
            const platforms = [];
            $(element).find('.platforms i').each((i, el) => {
                platforms.push($(el).attr('class').replace('icon-os-', ''));
            });

            hasil.push({
                gameUrl,
                imageUrl,
                title,
                genre,
                price,
                platforms
            });
        });
        return hasil

    } catch (error) {
        console.log(error);
    }
};

/*
untuk dapet link anime nya pake scrape samehadaku search yang kemarin
scrape by shannz 
*/

async function samehadakuGet(url) {
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    
    const title = $('h1.entry-title').text().trim();
    const author = 'shannz';
    const image = $('.thumb img').attr('src');
    const rating = $('.rtg span[itemprop="ratingValue"]').text().trim();
    const description = $('.entry-content-single').text().trim();
    
    const genres = [];
    $('.genre-info a').each((i, el) => {
      genres.push($(el).text().trim());
    });

    const episodes = [];
    $('.lstepsiode.listeps li').each((i, el) => {
      const episodeNumber = $(el).find('.epsright .eps a').text().trim();
      const episodeTitle = $(el).find('.epsleft .lchx a').text().trim();
      const episodeUrl = $(el).find('.epsleft .lchx a').attr('href');
      const episodeDate = $(el).find('.epsleft .date').text().trim();
      
      episodes.push({
        number: episodeNumber,
        title: episodeTitle,
        url: episodeUrl,
        date: episodeDate
      });
    });

    return {
      author,
      title,
      image,
      rating,
      description,
      genres,
      episodes
    };
  } catch (error) {
    console.error('Error scraping anime:', error);
    return null;
  }
}

/**
@credit Tio 
@samehadaku search
**/

async function animeSearch(text) {
    const {
        data
    } = await axios.get('https://samehadaku.email');
    const $ = cheerio.load(data);
    const scriptContent = $('#live_search-js-extra').html();
    const nonceMatch = scriptContent.match(/"nonce":"([^"]+)"/);
    const nonce = nonceMatch ? nonceMatch[1] : null;

    try {
        let {
            data: result
        } = await axios.get(`https://samehadaku.email/wp-json/eastheme/search/?keyword=${text}&nonce=${nonce}`)
        let objek = Object.values(result).map(v => v)
        return objek
    } catch (e) {
        return {
            msg: e
        }
    }
}

module.exports = { 
    siikomikUpdates,
    anichinSearch,
    searchAnime,
    animeSearch,
    mangaSearch,
    parseResult,
    downloadAnime,
    getLatestAnime,
    getDetailAnime,
    fetchAnimeTitles,
    samehadakuSearch,
    samehadaku,
    latestAnime,
    nutaku,
    samehadakuGet
}