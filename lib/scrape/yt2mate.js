 const axios = require('axios');
const yta = require('ytdl-core');

const formatSize = (size) => {
  if (!size) return 'Unknown';
  const i = Math.floor(Math.log(size) / Math.log(1024));
  return `${(size / (1024 ** i)).toFixed(2)} ${['bytes', 'KB', 'MB', 'GB', 'TB'][i]}`;
};
const parseSeconds = (s) => {
  const h = Math.floor(s / 3600);
  const m = Math.floor(s / 60) % 60;
  const sec = Math.floor(s) % 60;
  return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
};
const extractVideoID = (url) => {
  const match = url.match(/(?:youtu\.be\/|v\/|u\/\w\/|embed\/|shorts\/|watch\?v=|&v=)([^#&?]*)/);
  if (match && match[1]) return match[1];
  throw new Error('Invalid YouTube URL');
};

const ytdl = async (type, videoUrl) => {
  try {
    const videoID = extractVideoID(videoUrl);
    const { data } = await axios.post('https://mp3-now.com/api/ajax/search', new URLSearchParams({ query: `https://www.youtube.com/watch?v=${videoID}`, v: type }));
    if (!data.links[type]) throw new Error(`Video does not support the ${type} format`);
    const k = data.links[type][Object.keys(data.links[type])[0]].k;
    if (!k) throw new Error('Conversion key not found');
    while (true) {
      const { data: statusData } = await axios.post('https://mp3-now.com/api/ajax/convert', new URLSearchParams({ vid: videoID, k }));
      if (statusData.c_status === 'CONVERTED') {
        const size = statusData.size || (await axios.head(statusData.dlink)).headers['content-length'];
        const { data: ytData } = await axios.post("https://www.yt1s.com/api/ajaxSearch/index", new URLSearchParams({
          q: videoUrl,
          vt: "home"
        }), {
          headers: {
            "User-Agent": "WhatsApp/2.23.25.3"
          }
        });
        return {
          title: ytData.title,
          parsedDuration: parseSeconds(ytData.t),
          author: ytData.a,
          url: statusData.dlink,
          size: formatSize(size),
          thumbnail: `https://i.ytimg.com/vi/${videoID}/maxresdefault.jpg`,
          description: '-'
        };
      } else if (statusData.c_status === 'FAILED') {
        return {
          status: false,
          url: null,
          size: null,
          title: '-',
          thumb: '-',
          channel: '-'
        };
      }
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  } catch (error) {
    console.error('Error:', error.message);
    return null; // or handle the error as needed
  }
};

const ytdlv2 = async (type, videoUrl) => {  
  const videoID = extractVideoID(videoUrl);
  const { videoDetails } = await yta.getInfo(videoUrl);
  const { data } = await axios.post('https://mp3-now.com/api/ajax/search', new URLSearchParams({ query: `https://www.youtube.com/watch?v=${videoID}`, v: type }));
  if (!data.links[type]) throw new Error(`Video does not support the ${type} format`);
  const k = data.links[type][Object.keys(data.links[type])[0]].k;
  if (!k) throw new Error('Conversion key not found');
  while (true) {
    const { data: statusData } = await axios.post('https://mp3-now.com/api/ajax/convert', new URLSearchParams({ vid: videoID, k }));
    if (statusData.c_status === 'CONVERTED') {
      const size = statusData.size || (await axios.head(statusData.dlink)).headers['content-length'];
      return {
        id: videoDetails.videoId || '-',
        title: videoDetails.title || '-',
        thumb: videoDetails.thumbnails[1].url || '-',
        channel: videoDetails.author.name || '-',
        published: videoDetails.publishDate || '-',
        views: videoDetails.viewCount || '-',
        duration: videoDetails.lengthSeconds || '-',
        url: statusData.dlink,
        size: formatSize(size),
        description: videoDetails.description || '-',
      };
    } else if (statusData.c_status === 'FAILED') {
      return { status: false, url: null, size: null, title: videoDetails.title, thumb: videoDetails.thumbnails[1].url, channel: videoDetails.author.name };
    }
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
};

module.exports = { ytdl, ytdlv2 }