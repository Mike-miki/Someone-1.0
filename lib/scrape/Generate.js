const cheerio = require("cheerio");
const fetch = require('node-fetch');
const axios = require('axios')
const FormData = require("form-data")
const WebSocket = require("ws");
const wss = "wss://prodia-fast-stable-diffusion.hf.space/queue/join";
const speed = require("performance-now");
const { G4F } = require("g4f")
const g4f = new G4F()

async function Emi(prompt) {
  const imageGenerator = await g4f.imageGeneration(prompt, {
    debug: true,
    providers: g4f.providers.Pixart,
    providersOptions: {
      height: 512,
      width: 512,
      samplingMethod: "SA-Solver"
    }
  });
  
  return imageGenerator
}

realistic = async (model, prompt, negative_prompt, width, height) => {
  return new Promise(async (resolve, reject) => {
    try {
      let result = {};
      let send_has_payload = {
        fn_index: 0,
        session_hash: "jdst0oac4mo",
      };
      let send_data_payload = {
        data: [
          prompt, 
          negative_prompt ? negative_prompt : "",
          model, 
          25, 
          "DPM++ 2M", 
          7, 
          width ? width : 720, 
          height ? height: 1024, 
          -1
        ],
        event_data: null,
        fn_index: 0,
        session_hash: "jdst0oac4mo",
      };

      const ws = new WebSocket(wss);
      ws.onopen = function () {
        console.log("Connected to websocket");
      };

      ws.onmessage = async function (event) {
        let message = JSON.parse(event.data);

        switch (message.msg) {
          case "send_hash":
            ws.send(JSON.stringify(send_has_payload));
            break;

          case "estimation":
            console.log("Waiting in line: ️" + message.rank);
            break;

          case "send_data":
            console.log("Processing your image....");
            ws.send(JSON.stringify(send_data_payload));
            break;
          case "process_completed":
            var timestamp = speed();
            var latensi = speed() - timestamp;
            result.secondSpeed = latensi.toFixed(4);
            result.model = model;
            result.prompt = prompt
            result.negative_prompt = negative_prompt ? negative_prompt : false;
            result.width = width ? width : 720,
            result.height = height ? height: 1024,
            result.resultImage = message.output.data[0].replace(
              "data:image/png;base64,",
              "",
            );
            break;
        }
      };

      ws.onclose = function (event) {
        if (event.code === 1000) {
          console.log("Process completed️");
        } else {
          msg.reply("Err : WebSocket Connection Error:\n");
        }
        resolve(result);
      };
    } catch (e) {
      console.log(e);
    }
  });
};

/*
Kalo gk work ganti aja key nya pake punya mu 
by shanz
visit: https://whatsapp.com/channel/0029VagBdZ49MF92BygaM53t
*/

async function generateStableDiffusionImage(prompt, negativePrompt) {
  const url = 'https://stablediffusionapi.com/api/v3/text2img';
  
  const requestBody = {
    key: "JPhlaRuuNneQF8VVyZLQiufZigBVsKwJvBqNMaIE5SUNsWoQUUBCHni4ps2F",
    prompt: prompt,
    negative_prompt: negativePrompt,
    width: "512",
    height: "512",
    samples: "1",
    num_inference_steps: "20",
    seed: null,
    guidance_scale: 7.5,
    webhook: null,
    track_id: null
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.fetch_result;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    return null;
  }
}

async function fetchModelLabResult(url) {
  const apiKey = 'JPhlaRuuNneQF8VVyZLQiufZigBVsKwJvBqNMaIE5SUNsWoQUUBCHni4ps2F';
  
  const requestBody = {
    key: apiKey
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Ada masalah dengan operasi fetch:", error);
    throw error;
  }
}

async function generateAndFetchImage(prompt, negativePrompt) {
  try {
    // Generate image and get fetch_result URL
    const fetchResultUrl = await generateStableDiffusionImage(prompt, negativePrompt);
    
    if (!fetchResultUrl) {
      throw new Error("Failed to generate image");
    }

    console.log("Fetch Result URL:", fetchResultUrl);

    // Wait for 20 seconds
    console.log("Waiting for 20 seconds...");
    await new Promise(resolve => setTimeout(resolve, 7000));
    console.log("Wait complete. Fetching result...");

    // Fetch the result using the fetch_result URL
    let result = await fetchModelLabResult(fetchResultUrl);
    
    // Remove the 'tip' property from the result
    if (result && typeof result === 'object') {
      delete result.tip;
    }
    
    return result;
  } catch (error) {
    console.error("Error in generateAndFetchImage:", error);
    throw error;
  }
}

async function diffusion(prompt) {
  try {
    if(!prompt) return { status: false, message: "undefined reading prompt" };
    return await new Promise(async(resolve, reject) => {
      const form = new FormData();
      form.append("prompt", prompt);
      axios.post("https://www.aiallin.online/loader.php", form, {
        headers: form.getHeaders()
      })
        .then(async res => {
          const data = res.data;
          if(data.status !== "success") return reject("failed generate image!");
          resolve({ status: true, image: "https://www.aiallin.online" + data.url })
        }).catch(reject)
    });
  } catch (e) {
    return { status: false, message: e };
  }
}

async function stableDiff(text) {
    try {
        const diffusion = 'https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0';

        const requestData = {
            inputs: text
        };

        const requestHeaders = {
            'Authorization': 'Bearer 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',
            'Content-Type': 'application/json',
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.3 Safari/605.1.15'
        };

        const tobrutJahat = await axios.post(diffusion, requestData, { headers: requestHeaders });
        return tobrutJahat.data;

    } catch (error) {
        console.error(error);
        return null;
    }
}

async function stabilityai(prompt) {
  return new Promise((resolve, reject) => {
    /*
      * wm
      * By Arifzyn 
    */
    axios.post('https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0', {
        inputs: prompt
    }, {
        headers: {
            'authorization': 'Bearer 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',
            'content-type': 'text/plain;charset=UTF-8',
            'Referer': 'https://stability.my.id/',
        },
        responseType: 'arraybuffer' 
    })
    .then(response => {
        resolve(response.data);
    })
    .catch(error => {
        reject(error);
    });
  });
}

function txt2img(prompt) {
  return new Promise(async (resolve, reject) => {
    const api_key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2OTY0ODM4MzYsInVzZXJfaWQiOiI2NTFlNDlmYjE4ZDNiNzZjMDQyMjk3NzUifQ.gW46goA2PDifptjkK78J-envYirtRgolRncyehkbCA4";
    const url = "https://api.wizmodel.com/sdapi/v1/txt2img";
    const payload = JSON.stringify({
      "prompt": prompt,
      "steps": 100
    });
    const headers = {
      'content-type': 'application/json',
      'authorization': 'bearer ' + api_key
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: headers,
        body: payload
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const json = await response.json();
      resolve(json);

    } catch (error) {
      reject(error);
    }
  });
}

module.exports = {
 generateStableDiffusionImage,
 fetchModelLabResult,
 generateAndFetchImage,
 diffusion,
 stableDiff,
 stabilityai,
 txt2img,
 realistic,
 Emi
}