/**
@credit Tio
@text to speech
**/

const axios = require('axios');
const qs = require('qs');
const cheerio = require('cheerio');

async function getAudio(lang, text, voiceId) {
    const url = 'https://wavel.ai/wp-json/myplugin/v1/tts';
    const data = {
        lang: lang,
        text: text,
        voiceId: voiceId
    };
    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Accept': '*/*',
        'X-Requested-With': 'XMLHttpRequest'
    };

    try {
        let response = await axios.post(url, qs.stringify(data), { headers: headers });
        let { base64Audio } = response.data;
        let result = Buffer.from(('data:audio/mpeg;base64,' + base64Audio).split(',')[1], 'base64');

// audio buffer langsung aja :v
        return result;
    } catch (error) {
        console.error("Error fetching audio:", error);
        throw error;
    }
}

async function getModelIdVoice() {
    try {
        let response = await axios.get('https://wavel.ai/solutions/text-to-speech/anime-text-to-speech');
        let $ = cheerio.load(response.data);
        const options = $('#dropdown option');
        let modelIds = [];

        options.each((index, element) => {
            const idValue = $(element).attr('value');
            modelIds.push(idValue);
        });
        return modelIds;
    } catch (error) {
        console.error("Error fetching model IDs:", error);
        throw error;
    }
}

module.exports = {
    getAudio,
    getModelIdVoice
}