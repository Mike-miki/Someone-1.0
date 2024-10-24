const axios = require('axios');

exports.chatAI = async(message, prompt) => {
  try {
    const response = await axios.post('https://www.blackbox.ai/api/chat', {
      messages: [
        { id: null, content: prompt, role: 'assistant' },
        { id: null, content: message, role: 'user' }
      ],
      id: null,
      previewToken: null,
      userId: null,
      codeModelMode: true,
      agentMode: {},
      trendingAgentMode: {},
      isMicMode: false,
      isChromeExt: false,
      githubToken: null
    });

    let result = response.data;
    result = result.replace(/\$@\$.+?\$@\$/g, '');

    return result;
  } catch (error) {
    throw error;
  }
}


exports.fetchUser = async (content, prompt, user) => {
  function generateRandomUserId() {
    return 'user-' + Math.floor(Math.random() * 10000);
}
let userId = generateRandomUserId();
console.log(`Generated User ID: ${userId}`);
    try {
        const response = await axios.post('https://luminai.my.id/', { content, prompt, user });
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}