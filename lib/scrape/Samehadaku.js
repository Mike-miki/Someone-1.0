const axios = require('axios');
const cheerio = require('cheerio');


class Samehada {
  latest = async() => {
     try {
       let { data } = await axios.get('https://samehadaku.email/anime-terbaru/');
       let $ = cheerio.load(data);
       const posts = [];
       $('.post-show li').each((index, element) => {
       const title = $(element).find('.entry-title a').attr('title');
       const link = $(element).find('.entry-title a').attr('href');
        const author = $(element).find('[itemprop="author"] author').text();
        const date = $(element).find('.dashicons-calendar').parent().text().replace('Released on:', '').trim();
       posts.push({ title, author, date, link });
    });
         return posts;
         } catch (error) {
          console.error(error);
           return [];
         }
     }
   search = async(text) => {
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
 detail = async (url) => {
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
 download = async (url) => {
  if (!url.includes('samehadaku.email')) {
    throw new Error('URL tidak valid');
  }

  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    const result = {
      judul: $('h1.entry-title').text().trim(),
      url: url,
      unduhan: []
    };

    const serverList = $('div#server > ul > li');
    
    for (let i = 0; i < serverList.length; i++) {
      const server = $(serverList[i]);
      const serverInfo = {
        nama: server.find('span').text().trim(),
        tipeServer: server.find('div').attr('data-type'),
        nomorServer: server.find('div').attr('data-nume'),
        postId: server.find('div').attr('data-post')
      };

      const formData = new URLSearchParams();
      formData.append('action', 'player_ajax');
      formData.append('post', serverInfo.postId);
      formData.append('nume', serverInfo.nomorServer);
      formData.append('type', serverInfo.tipeServer);

      const linkResponse = await axios.post('https://samehadaku.email/wp-admin/admin-ajax.php', formData, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
          'Origin': 'https://samehadaku.email',
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });

      const $link = cheerio.load(linkResponse.data);
      serverInfo.tautan = $link('iframe').attr('src');

      result.unduhan.push(serverInfo);
    }

    return result;
  } catch (error) {
    console.error('Terjadi kesalahan:', error.message);
    throw error;
     }
   }
}

module.exports = new Samehada();