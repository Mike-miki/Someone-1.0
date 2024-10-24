// * PUNGSI YOUTUBE DOWNLOADER* 
// *di jamin supot mp3, mp4 dan bokep wkwk
// CR: MR.ONE
// github.com/onepunya

const axios = require('axios');
const { promises } = require('fs');
const { join } = require('path');
const { spawn } = require('child_process');
const FormData = require('form-data');
const { fromBuffer } = require('file-type');

async function ytd(videoUrl) {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await axios.get(`https://cdn36.savetube.me/info?url=${videoUrl}`, {
                headers: {
                    'Accept': 'application/json, text/plain, */*'
                }
            });

            if (response.status === 200 && response.data.status) {
                const videoData = response.data.data;

                const videoFormat = videoData.video_formats.find(format => format.label === 'MP4 video');

                if (videoFormat) {
                    const videoInfo = {
                        title: videoData.title,
                        duration: videoData.durationLabel,
                        thumbnail: videoData.thumbnail,
                        videoUrl: videoFormat.url
                    };

                    resolve(videoInfo);
                } else {
                    reject('Video format not found.');
                }
            } else {
                reject('Failed to get video information.');
            }
        } catch (error) {
            reject('Error fetching video information:', error);
        }
    });
}

function ffmpeg(buffer, args = [], ext = '', ext2 = '') {
    return new Promise(async (resolve, reject) => {
        try {
            let tmp = join('./temp', +new Date + '.' + ext);
            let out = tmp + '.' + ext2;
            await promises.writeFile(tmp, buffer);
            spawn('ffmpeg', [
                '-y',
                '-i', tmp,
                ...args,
                out
            ])
                .on('error', reject)
                .on('close', async (code) => {
                    try {
                        await promises.unlink(tmp);
                        if (code !== 0) return reject(code);
                        resolve({
                            data: await promises.readFile(out),
                            filename: out,
                            delete() {
                                return promises.unlink(out);
                            }
                        });
                    } catch (e) {
                        reject(e);
                    }
                });
        } catch (e) {
            reject(e);
        }
    });
}

function toAudio(buffer, ext) {
    return ffmpeg(buffer, [
        '-vn',
        '-c:a', 'libopus',
        '-b:a', '128k',
        '-vbr', 'on',
        '-compression_level', '10'
    ], ext, 'opus');
}


async function pomf(media) {
        return new Promise(async (resolve, reject) => {
            let mime = await fromBuffer(media);
            let form = new FormData();

            form.append("files[]", media, `file-${Date.now()}.${mime.ext}`);

            axios.post("https://pomf.lain.la/upload.php", form, {
                headers: {
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36 Edg/119.0.0.0",
                    ...form.getHeaders()
                }
            }).then(({ data }) => resolve(data.files[0].url)).catch(reject);
        });
    }

async function ytdlnew(videoUrl) {
return new Promise(async (resolve, reject) => {
    try {
        const videoInfo = await ytd(videoUrl);
        const videoBuffer = await axios.get(videoInfo.videoUrl, { responseType: 'arraybuffer' }).then(res => res.data);
        const audioResult = await toAudio(videoBuffer, 'mp4');
        const audioUrl = await pomf(audioResult.data);

        resolve({
            title: videoInfo.title,
            duration: videoInfo.duration,
            thumbnail: videoInfo.thumbnail,
            audioUrl: audioUrl,
            videoUrl: videoInfo.videoUrl
        });
    } catch (error) {
        console.error('Error processing video:', error);
    }
})
}

module.exports = {
    ytdlnew
}