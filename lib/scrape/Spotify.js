/*
[ SCRAPE BY RIZKY ASAM FOLAT ]
IG: manusiarizky
github: rizxyu
*/
const axios = require('axios');
const FormData = require('form-data')
const cheerio = require("cheerio");

const clientId = '8f777f61f80e4051b754d8e50310ad6e';
const clientSecret = '5802d3726d3149bfb880a577aa855fb3';
const base64Credentials = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

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

async function getAccessToken() {
  const tokenUrl = 'https://accounts.spotify.com/api/token';
  const data = 'grant_type=client_credentials';

  const tokenResponse = await axios.post(tokenUrl, data, {
    headers: {
      'Authorization': `Basic ${base64Credentials}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });

  return tokenResponse.data.access_token;
}

async function searchSpotifyAlbum(query) {
  try {
    const accessToken = await getAccessToken();

    const searchUrl = `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=album`;
    
    const searchResponse = await axios.get(searchUrl, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
    });

    const firstAlbum = searchResponse.data.albums.items[0];
    if (!firstAlbum) {
      return { error: 'No albums found' };
    }

    const result = {
      token: accessToken,
      albumName: firstAlbum.name,
      artistName: firstAlbum.artists.map(artist => artist.name).join(', '),
      releaseDate: firstAlbum.release_date,
      externalUrl: firstAlbum.external_urls.spotify,
    };

    return result;

  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
    return { error: 'Failed to retrieve albums' };
  }
}

async function searchSpotifyAlbum2(query) {
  try {
    const accessToken = await getAccessToken();

    const searchUrl = `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=album`;
    
    const searchResponse = await axios.get(searchUrl, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
    });

    const albums = searchResponse.data.albums.items;
    const result = albums.map((album, index) => ({
      albumNumber: index + 1,
      albumName: album.name,
      artistName: album.artists.map(artist => artist.name).join(', '),
      releaseDate: album.release_date,
      externalUrl: album.external_urls.spotify,
    }));

    return result;

  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
    return { error: 'Failed to retrieve albums' };
  }
}

const BASE_URL = "https://api.fabdl.com/";

class Spotify {
  constructor() {
    this.baseUrl = BASE_URL;
  }

  async getMetaData(url) {
    const response = await axios.get(`${this.baseUrl}spotify/get?url=${url}`);
    const data = response.data.result;
    return data;
  }

  async spotifyDl(url) {
    const metaData = await this.getMetaData(url);
    const convert = await axios.get(
      `${this.baseUrl}spotify/mp3-convert-task/${metaData.gid}/${metaData.id}`
    );
    const result = {
      title: metaData.name,
      thumbnail: metaData.image,
      artists: metaData.artists,
      audio: `${this.baseUrl}${convert.data.result.download_url}`,
    };
    return result;
  }
}

/** 
 *  Created By Muhammad Adriansyah
 *  CopyRight 2024 MIT License
 *  My Github : https://github.com/xyzencode
 *  My Instagram : https://instagram.com/xyzencode
 *  My Youtube : https://youtube.com/@xyzencode
*/

class SpotifyDownload {
    constructor() {
        this.baseURL = {
            api: "https://api.spotifydown.com",
            base: "https://spotifydown.com"
        }
    }

    urlToID(url) {
        return url.split("/")[4].split("?")[0]
    }


    getDetails(url) {
        return new Promise(async (resolve, reject) => {
            if (url.includes("open.spotify.com")) {
                let id = this.urlToID(url)

                await axios({
                    url: `${this.baseURL.api}/metadata/track/${id}`,
                    method: "GET",
                    headers: {
                        Origin: this.baseURL.base,
                        Referer: this.baseURL.base + '/'
                    }
                }).then(({ data }) => {
                    resolve({
                        title: data.title,
                        artist: data.artist,
                        thumbnail: data.cover,
                        date: data.releaseDate
                    })
                }).catch(reject)
            } else return reject("Invalid URL")
        })
    }

    download(url) {
        return new Promise(async (resolve, reject) => {
            if (url.includes("open.spotify.com")) {
                let id = this.urlToID(url)

                await axios({
                    url: `${this.baseURL.api}/download/${id}`,
                    method: "GET",
                    headers: {
                        Origin: this.baseURL.base,
                        Referer: this.baseURL.base + '/'
                    }
                }).then(({ data }) => {
                    resolve(data.link)
                })
            } else return reject("Invalid URL")
        })
    }
}

async function getAccessToken() {
    try {
        const client_id = 'acc6302297e040aeb6e4ac1fbdfd62c3';
        const client_secret = '0e8439a1280a43aba9a5bc0a16f3f009';
        const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
        const response = await axios.post('https://accounts.spotify.com/api/token', 'grant_type=client_credentials', {
            headers: {
                Authorization: `Basic ${basic}`,
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });
        const data = response.data;
        return data.access_token;
    } catch (error) {
        console.error('Error getting Spotify access token:', error);
        throw 'An error occurred while obtaining Spotify access token.';
    }
}

async function spotifydl(url) {
  return new Promise(async (resolve, reject) => {
    try {
      const kemii = await axios.get(
        `https://api.fabdl.com/spotify/get?url=${encodeURIComponent(url)}`,
        {
          headers: {
            accept: "application/json, text/plain, */*",
            "accept-language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
            "sec-ch-ua": "\"Not)A;Brand\";v=\"24\", \"Chromium\";v=\"116\"",
            "sec-ch-ua-mobile": "?1",
            "sec-ch-ua-platform": "\"Android\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "cross-site",
            Referer: "https://spotifydownload.org/",
            "Referrer-Policy": "strict-origin-when-cross-origin",
          },
        }
      );
      const kemi = await axios.get(
        `https://api.fabdl.com/spotify/mp3-convert-task/${kemii.data.result.gid}/${kemii.data.result.id}`,
        {
          headers: {
            accept: "application/json, text/plain, */*",
            "accept-language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
            "sec-ch-ua": "\"Not)A;Brand\";v=\"24\", \"Chromium\";v=\"116\"",
            "sec-ch-ua-mobile": "?1",
            "sec-ch-ua-platform": "\"Android\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "cross-site",
            Referer: "https://spotifydownload.org/",
            "Referrer-Policy": "strict-origin-when-cross-origin",
          },
        }
      );
      const result = {};
      result.title = kemii.data.result.name;
      result.type = kemii.data.result.type;
      result.artis = kemii.data.result.artists;
      result.durasi = kemii.data.result.duration_ms;
      result.image = kemii.data.result.image;
      result.download = "https://api.fabdl.com" + kemi.data.result.download_url;
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};

async function searchSpotify(query) {
    try {
        const access_token = await getAccessToken();
        const response = await axios.get(`https://api.spotify.com/v1/search?q=${query}&type=track&limit=10`, {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        });
        const data = response.data;
        const tracks = data.tracks.items.map(item => ({
            name: item.name,
            artists: item.artists.map(artist => artist.name).join(', '),
            popularity: item.popularity,
            link: item.external_urls.spotify,
            image: item.album.images[0].url,
            duration_ms: item.duration_ms,
        }));
        return tracks;
    } catch (error) {
        console.error('Error searching Spotify:', error);
        throw 'An error occurred while searching for songs on Spotify.';
    }
}

/** 
 *  Created By Muhammad Adriansyah
 *  CopyRight 2024 MIT License
 *  My Github : https://github.com/xyzencode
 *  My Instagram : https://instagram.com/xyzencode
 *  My Youtube : https://youtube.com/@xyzencode
*/

async function spotify(url) {
    return new Promise(async (resolve, reject) => {
        const form = new FormData();
        form.append("url", url);
        form.append("_WFDEx", "983b7a3438fa364b0be3496fbb03c6b0")
        await axios({
            url: "https://spotifymate.com/action",
            method: "POST",
            data: form,
            headers: {
                Cookie: "_ga=GA1.1.1391162347.1721434779; session_data=aa1fctljetf7ktdm8haljidoh0; __gads=ID=3574fda97bbdae97:T=1721434780:RT=1721536533:S=ALNI_Mbii5KEP-LIf5M__KooJuaxcxCkng; __gpi=UID=00000e9c34a40ace:T=1721434780:RT=1721536533:S=ALNI_MbndiUjzM2uwP6D5LvI8m2JAQNzHA; __eoi=ID=98c61c185febe6fd:T=1721434780:RT=1721536533:S=AA-AfjZD7axokORmzNSVTK_4PcRT; FCNEC=%5B%5B%22AKsRol9jhHormcT9OWLvsBE4n4NRPvO8Bri5vcWwB8sGElEtcoaKmFJdyoYFm-UCADkw8kQ8GgywH87-12RL0ZQ6vzRud66HOSQ5hGvJ_oeFoslmFKJVLKOg0-_kDQdM6LQZTqeWYBhcwB9igM1NrmZ_Zc5UnrEnWA%3D%3D%22%5D%5D; _ga_YCP6R0LL6X=GS1.1.1721536532.2.0.1721536572.0.0.0",
            }
        }).then(({ data }) => {
            const $ = cheerio.load(data);
            resolve({
                title: $("h3").text().trim(),
                thumbail: $('img').attr('src'),
                url: $('a').attr('href')
            })
        }).catch(reject)
    });
}

module.exports = { 
    searchSpotifyTrack, 
    searchSpotifyTrack2, 
    searchSpotifyAlbum2,
    Spotify,
    spotify,
    SpotifyDownload,
    spotifydl,
    searchSpotify,
    getAccessToken
}