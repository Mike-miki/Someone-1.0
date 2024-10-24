/**
	* Created By Xzyan
	* Contact me on whatsapp
	* wa.me/6282139672290
**/

const axios = require('axios');
const cheerio = require('cheerio');

/**
	* Class Created By Xzyan
	* Contact me on whatsapp
	* wa.me/6282139672290
**/



/**
	* Scraper Created By Xzyan
	* Contact me on whatsapp
	* wa.me/6282139672290
**/

async function search(query) {
	let html = (await axios.get("https://otakudesu.cloud/?s="+encodeURIComponent(query)+"&post_type=anime")).data;
	const $ = cheerio.load(html);
  let result = {
    creator: "Xzyan", 
    result: []
  };
  
  $(".page > ul.chivsrc > li").each((i, e) => {
  	result.result.push({
  	img: $(e).find("img").attr("src"), 
	  title: $(e).find("h2").text(), 
	  url: $(e).find("h2").children("a").attr("href")
  });
 });
  
  return result;
	}

async function view(url) {
	let html = (await axios.get(url)).data;
	const $ = cheerio.load(html);
  let result = {
    creator: "Xzyan", 
    img: $(".fotoanime > img").attr("src")
  };
  
  $(".infozingle > p").each((i, e) => {
		let nazz = $(e).find("span").text().split(":");
		result[nazz[0].toLowerCase().trim().split(" ").join("_")] = nazz.slice(1).join(":").trim();
		});
  result.download = $('.episodelist').eq(0).find('a').attr('href');
  result.batch = $('.episodelist').eq(2).find('a').attr('href') || "Tidak Tersedia";
  result.sinopsis = '';
$(".sinopc > p").each((i, e) => {
	result.sinopsis += $(e).text().trim()+"\n\n";
	});
  result.episode = [];
  
  $(".episodelist").eq(1).find("ul").children("li").each((i, e) => {
		result.episode.push({ title: $(e).find("span").first().children("a").text().trim(), url: $(e).find("span").first().children("a").attr("href") });
		});
		
		return result;
	}
	
	async function download(episode_url) {
		const $ = cheerio.load((await axios.get(episode_url)).data);
	let result = {};
	$('.mirrorstream > ul').each((i, e) => {
		result[i] = {};
		$(e).find('li').each((index, e) => {
		//if($(e).text().toLowerCase() !== 'pdrain') return
		let obj = { ...JSON.parse(atob($(e).find('a').attr('data-content'))), nonce: '71b9d3859d', action: '2a3505c93b0035d3f455df82bf976b84' }
		let data = Object.keys(obj).map(key => `${key}=${obj[key]}`).join('&');
		result[i][$(e).text().toLowerCase().trim()] = data;
		});
		});
		for(let i = 0; i < 3; i++) {
			//await m.reply(result[i].pdrain)
			if(result[i].pdrain) {
		let xzyan = cheerio.load((await axios.get(cheerio.load(atob((await axios.post("https://otakudesu.cloud/wp-admin/admin-ajax.php", result[i].pdrain)).data.data))("iframe").attr("src"))).data) 
			result[["m360p","m480p","m720p"][i]] = {
				url: xzyan('meta[property="og:video"]').attr('content'),
				thumbnail: xzyan('meta[property="og:image"]').attr('content')
				};
				} else result[["m360p","m480p","m720p"][i]] = false;
			delete result[i];
			}
		return result;
	}
	
module.exports = {
    search,
    view,
    download
}