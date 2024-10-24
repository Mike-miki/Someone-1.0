/*prodia Scrap ~no apikey 100%~*
Cr: mr.one
github: (https://github.com/onepunya/AutoSphere-wa-bot.git)
(https://github.com/onepunya/AutoSphere-wa-bot/releases/tag/WhatsAppbot)
(https://github.com/onepunya)
*/
const axios = require('axios')
const baseUrl = 'https://api.prodia.com';
const imageBaseUrl = 'https://images.prodia.xyz';
  
  const additionalKeywords = ["hd", "HDR", "masterpiece", "4K", "ultra-detailed", "photo-realistic"];
  const usedKeywords = new Set();
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  //by mr.one
  function getKeyword() {
    if (usedKeywords.size === additionalKeywords.length) {
      usedKeywords.clear();
    }

    let keyword;
    do {
      keyword = additionalKeywords[Math.floor(Math.random() * additionalKeywords.length)];
    } while (usedKeywords.has(keyword));

    usedKeywords.add(keyword);
    return keyword;
  }
//by mr.one

   async function createJob(prompt, negativePrompt, model, sampler) {
    const keyword = getKeyword();
    const promptMod = `${keyword}, ${prompt}`;
    const createJobUrl = `${baseUrl}/generate?new=true&prompt=${encodeURIComponent(promptMod)}&model=${encodeURIComponent(model)}&negative_prompt=${encodeURIComponent(negativePrompt)}&steps=20&cfg=7&seed=1911603456&sampler=${encodeURIComponent(sampler)}&aspect_ratio=square`;
//by mr.one
    const headers = {
      'authority': 'api.prodia.com',
      'accept': '*/*',
      'accept-language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7',
      'origin': 'https://app.prodia.com',
      'referer': 'https://app.prodia.com/',
      'sec-ch-ua': '"Not-A.Brand";v="99", "Chromium";v="124"',
      'sec-ch-ua-mobile': '?1',
      'sec-ch-ua-platform': '"Android"',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-site',
      'user-agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Mobile Safari/537.36',
    };
//by mr.one
    let retries = 20;
    while (retries > 0) {
      try {
        const response = await axios.get(createJobUrl, { headers, timeout: 5000 });
        return response.data.job;
      } catch (error) {
        if (error.code === 'ETIMEDOUT' || error.code === 'ENETUNREACH') {
          retries -= 1;
          console.log('Retrying createJob due to network error...');
        } else {
          throw error;
        }
      }
    }
    throw new Error('Failed to create job after multiple retries');
  }
//by mr.one
   async function generate(prompt, negativePrompt, model, sampler) {
    try {
      const jobId = await createJob(prompt, negativePrompt, model, sampler);
      console.log('Job created:', jobId);

      const headers = {
        'authority': 'api.prodia.com',
        'accept': '*/*',
        'accept-language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7',
        'origin': 'https://app.prodia.com',
        'referer': 'https://app.prodia.com/',
        'sec-ch-ua': '"Not-A.Brand";v="99", "Chromium";v="124"',
        'sec-ch-ua-mobile': '?1',
        'sec-ch-ua-platform': '"Android"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
        'user-agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Mobile Safari/537.36',
      };
//by mr.one
      let statusData;
      while (true) {
        const statusUrl = `${baseUrl}/job/${jobId}`;
        const statusResponse = await axios.get(statusUrl, { headers });
        statusData = statusResponse.data;
        console.log('Current job status:', statusData.status);

        if (statusData.status === 'succeeded') {
          break;
        }
        await new Promise(resolve => setTimeout(resolve, 2000));
      }
      const imageUrl = `${imageBaseUrl}/${jobId}.png`;
      console.log('Image URL:', imageUrl);
      return imageUrl;
    } catch (error) {
      console.error('Error during job processing:', error);
      if (error instanceof AggregateError) {
        console.log('Retrying due to AggregateError...');
        return await generate(prompt, negativePrompt, model, sampler);
      } else {
        throw error;
      }
    }
  }
//by mr.one
  async function getModels() {
    const models = [
      "3Guofeng3_v34.safetensors [50f420de]", "absolutereality_V16.safetensors [37db0fc3]", "absolutereality_v181.safetensors [3d9d4d2b]",
      "amIReal_V41.safetensors [0a8a2e61]", "analog-diffusion-1.0.ckpt [9ca13f02]", "aniverse_v30.safetensors [579e6f85]", "anythingv3_0-pruned.ckpt [2700c435]",
      "anything-v4.5-pruned.ckpt [65745d25]", "anythingV5_PrtRE.safetensors [893e49b9]", "AOM3A3_orangemixs.safetensors [9600da17]", "blazing_drive_v10g.safetensors [ca1c1eab]",
      "breakdomain_I2428.safetensors [43cc7d2f]", "breakdomain_M2150.safetensors [15f7afca]", "cetusMix_Version35.safetensors [de2f2560]",
      "childrensStories_v13D.safetensors [9dfaabcb]", "childrensStories_v1SemiReal.safetensors [a1c56dbb]", "childrensStories_v1ToonAnime.safetensors [2ec7b88b]",
      "Counterfeit_v30.safetensors [9e2a8f19]", "cuteyukimixAdorable_midchapter3.safetensors [04bdffe6]", "cyberrealistic_v33.safetensors [82b0d085]",
      "dalcefo_v4.safetensors [425952fe]", "deliberate_v2.safetensors [10ec4b29]", "deliberate_v3.safetensors [afd9d2d4]", "dreamlike-anime-1.0.safetensors [4520e090]",
      "dreamlike-diffusion-1.0.safetensors [5c9fd6e0]", "dreamlike-photoreal-2.0.safetensors [fdcf65e7]", "dreamshaper_6BakedVae.safetensors [114c8abb]",
      "dreamshaper_7.safetensors [5cf5ae06]", "dreamshaper_8.safetensors [9d40847d]", "edgeOfRealism_eorV20.safetensors [3ed5de15]",
      "EimisAnimeDiffusion_V1.ckpt [4f828a15]", "elldreths-vivid-mix.safetensors [342d9d26]", "epicphotogasm_xPlusPlus.safetensors [1a8f6d35]",
      "epicrealism_naturalSinRC1VAE.safetensors [90a4c676]", "epicrealism_pureEvolutionV3.safetensors [42c8440c]", "ICantBelieveItsNotPhotography_seco.safetensors [4e7a3dfd]",
      "indigoFurryMix_v75Hybrid.safetensors [91208cbb]", "juggernaut_aftermath.safetensors [5e20c455]", "lofi_v4.safetensors [ccc204d6]",
      "lyriel_v16.safetensors [68fceea2]", "majicmixRealistic_v4.safetensors [29d0de58]", "mechamix_v10.safetensors [ee685731]",
      "meinamix_meinaV9.safetensors [2ec66ab0]", "meinamix_meinaV11.safetensors [b56ce717]", "neverendingDream_v122.safetensors [f964ceeb]",
      "openjourney_V4.ckpt [ca2f377f]", "pastelMixStylizedAnime_pruned_fp16.safetensors [793a26e8]", "portraitplus_V1.0.safetensors [1400e684]",
      "protogenx34.safetensors [5896f8d5]", "Realistic_Vision_V1.4-pruned-fp16.safetensors [8d21810b]", "Realistic_Vision_V2.0.safetensors [79587710]",
      "Realistic_Vision_V4.0.safetensors [29a7afaa]", "Realistic_Vision_V5.0.safetensors [614d1063]", "Realistic_Vision_V5.1.safetensors [a0f13c83]",
      "redshift_diffusion-V10.safetensors [1400e684]", "revAnimated_v122.safetensors [3f4fefd9]", "rundiffusionFX25D_v10.safetensors [cd12b0ee]",
      "rundiffusionFX_v10.safetensors [cd4e694d]", "sdv1_4.ckpt [7460a6fa]", "v1-5-pruned-emaonly.safetensors [d7049739]", "v1-5-inpainting.safetensors [21c7ab71]",
      "shoninsBeautiful_v10.safetensors [25d8c546]", "theallys-mix-ii-churned.safetensors [5d9225a4]", "timeless-1.0.ckpt [7c4971d4]", "toonyou_beta6.safetensors [980f6b15]"
    ];
    return JSON.stringify(models);
  }
  //by mr.one
  async function getLora() {
    const lora = [
      "0mib3_v10", "3DMM_V12", "age_slider_v20", "arcane_offset", "AstralMecha", "Drawing", "epi_noiseoffset2",
      "eye_size_slider_v1", "FairyTaleV20_SD1.5", "GrayClay_V1.5.5", "hair_length_slider_v1", "hipoly_3dcg_v20",
      "linevichit3-v10", "more_details_v10", "muscle_slider_v1", "room2", "StealthMecha", "weight_slider_v2",
      "zoom_slider_v1"
    ];
    return JSON.stringify(lora);
  }
  //by mr.one
  async function getSamplers() {
    const samplers = [
      "DPM++ 2M Karras", "DPM++ SDE Karras", "DPM++ 2M SDE Exponential", "DPM++ 2M SDE Karras", "Euler a", "Euler", "LMS", "Heun", "DPM2",
      "DPM2 a", "DPM++ 2S a", "DPM++ 2M", "DPM++ SDE", "DPM++ 2M SDE", "DPM++ 2M SDE Heun", "DPM++ 2M SDE Heun Karras",
      "DPM++ 2M SDE Heun Exponential", "DPM++ 3M SDE", "DPM++ 3M SDE Karras", "DPM++ 3M SDE Exponential", "DPM fast",
      "DPM adaptive", "LMS Karras", "DPM2 Karras", "DPM2 a Karras", "DPM++ 2S a Karras", "Restart", "DDIM", "PLMS", "UniPC"
    ];
    return JSON.stringify(samplers);
  }
//by mr.one

module.exports = {
    generate,
    createJob,
    getModels
}