/*
follow
https://whatsapp.com/channel/0029VaJYWMb7oQhareT7F40V
*/
const axios = require('axios');
const cheerio = require('cheerio');
const fetch = require('node-fetch')

async function hoax() {
    return new Promise((resolve, reject) => {
        axios.get(`https://turnbackhoax.id/`).then(pler => {
            const $ = cheerio.load(pler.data);
            let hasil = [];
            $("article.mh-loop-item").each(function() {
                let link = $(this).find("h3.entry-title.mh-loop-title > a").attr('href');
                let img = $(this).find("figure.mh-loop-thumb img").attr('src');
                let title = $(this).find("h3.entry-title.mh-loop-title > a").text().trim();
                let desc = $(this).find("div.mh-excerpt > p").text().trim();
                let date = $(this).find("span.mh-meta-date.updated").text().trim();
                const Data = {
                    title: title,
                    thumbnail: img,
                    desc: desc,
                    date: date,
                    link: link
                };
                hasil.push(Data);
            });
            resolve(hasil);
        }).catch(reject);
    });
}

/**
@credit Tio
@lyrics song
**/

async function lyric(text) {
    try {
        let {
            data: res
        } = await axios.get(`https://search.azlyrics.com/suggest.php?q=${encodeURIComponent(text)}`);

        const {
            term,
            songs
        } = res;
        let {
            data: html
        } = await axios.get(songs[0].url);
        let $ = cheerio.load(html);

        let lyrics = '';
        $('div:not(.div-share):not(.lyricsh):not(.ringtone)').each(function() {
            const text = $(this).html();
            if (text.includes('<!-- Usage of azlyrics.com content')) {
                lyrics = $(this).text().trim();
            }
        });
        return {
            title: term,
            lyrics
        }
    } catch (e) {
        return {
            msg: e
        }
    }
}

async function fetchWeather(term) {
  const response = await fetch(`https://api.shecodes.io/weather/v1/current?query=${encodeURIComponent(term)}&key=96f59ob69a32facbb34b2tdb5d2e7405`);
  const data = await response.json();
  return data;
};
//follow https://whatsapp.com/channel/0029VaJYWMb7oQhareT7F40V

cerpen = (category) => {
	return new Promise(async (resolve, reject) => {
        let title = category.toLowerCase().replace(/[()*]/g, "")
        let judul = title.replace(/\s/g, "-")
        let page = Math.floor(Math.random() * 5)
        axios.get('http://cerpenmu.com/category/cerpen-'+judul+'/page/'+page)
        .then((get) => {
            let $ = cheerio.load(get.data)
            let link = []
            $('article.post').each(function (a, b) {
                link.push($(b).find('a').attr('href'))
            })
            let random = link[Math.floor(Math.random() * link.length)]
            axios.get(random)
            .then((res) => {
                let $$ = cheerio.load(res.data)
                let hasil = {
                    title: $$('#content > article > h1').text(),
                    author: $$('#content > article').text().split('Cerpen Karangan: ')[1].split('Kategori: ')[0],
                    kategori: $$('#content > article').text().split('Kategori: ')[1].split('\n')[0],
                    lolos: $$('#content > article').text().split('Lolos moderasi pada: ')[1].split('\n')[0],
                    cerita: $$('#content > article > p').text()
                }
                resolve(hasil)
            })
        })
    })
}

async function job(query) {
    const url = `https://www.jobstreet.co.id/id/job-search/${query}-jobs/`;
    const response = await fetch(url);
    const html = await response.text();

    const $ = cheerio.load(html);
    const format = [];

    $('article').each((a, article) => {
        const job = $(article).find('h1 a div').text();
        const perusahaan = $(article).find('span').eq(0).text();
        const daerah = $(article).find('span span').text();
        const link_Detail = 'https://www.jobstreet.co.id' + $(article).find('h1 a').attr('href');
        const upload = $(article).find('div > time > span').text();

        format.push({ job, perusahaan, daerah, upload, link_Detail });
    });

    return format;
}

async function roastGh(username, lang = "indonesian") {
    return new Promise(async (resolve, reject) => {
        const requestBody = {
            username: username,
            language: lang
        };

        await axios.post('https://github-roast.pages.dev/llama', requestBody).then(({ data }) => {
        const lowUser = username.toLowerCase(); //Nambahin Klub Rusa 
            const result = {
                creator: "@Irull2nd",
                roast: data.roast,
                share: `https://github-roast.pages.dev/share/${lowUser}/?lang=${lang}`
            }
            resolve(result);
        }).catch(reject);
    });
}

module.exports = {
    hoax,
    lyric,
    fetchWeather,
    cerpen,
    job,
    roastGh
}
    
