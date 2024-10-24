module.exports = (m) => {
  const isNumber = x => typeof x === 'number' && !isNaN(x)
  try {
    let user = global.db.data.users[m.sender]
    if (typeof user !== 'object') global.db.data.users[m.sender] = {}
    if (user) {
      if (!('banned' in user)) user.banned = false
      if (!isNumber(user.limit)) user.limit = 50
      if (!isNumber(user.balance)) user.balance = 0
      if (!isNumber(user.exp)) user.exp = 0
      if (!isNumber(user.level)) user.level = 0
      if (!('registered' in user)) user.registered = false
      if (!('premium' in user)) user.premium = false
      if (!isNumber(user.hit)) user.hit = 0
      if (!isNumber(user.lastclaim)) user.lastclaim = 0
      if (!isNumber(user.expired)) user.expired = 0
      if (!isNumber(user.afkTime)) user.afkTime = -1
      if (!('afkReason' in user)) user.afkReason = ''
      if (!isNumber(user.lastmonthly)) user.lastmonthly = 0
      if (!isNumber(user.lastseen)) user.lastseen = 0
      if (!isNumber(user.saving)) user.saving = 0
      if (!('saving_history' in user)) user.saving_history = []
      if (!('sn' in user)) user.sn = ''
      if (!isNumber(user.chat)) user.chat = 1
      if (!isNumber(user.kultivasi)) user.kultivasi = 0
      if (!('lastRedeemedCode' in user)) user.lastRedeemedCode = ''
      if (!isNumber(user.lastredeem)) user.lastredeem = 0
      if (!isNumber(user.ikan)) user.ikan = 0
      if (!('petualang' in user)) user.petualang = false
      if (!isNumber(user.darah)) user.darah = 100
      if (!isNumber(user.emas)) user.emas = 0
      if (!isNumber(user.emerald)) user.emerald = 0
      if (!isNumber(user.besi)) user.besi = 0
      if (!isNumber(user.potion)) user.potion = 1
      if (!isNumber(user.umpan)) user.umpan = 0
      if (!isNumber(user.ayam)) user.ayam = 0
      if (!isNumber(user.kelinci)) user.kelinci = 0
      if (!isNumber(user.domba)) user.domba = 0
      if (!isNumber(user.sapi)) user.sapi = 0
      if (!isNumber(user.gajah)) user.gajah = 0
      if (!isNumber(user.diamond)) user.diamond = 0
      if (!isNumber(user.stone)) user.stone = 0
      if (!isNumber(user.kayu)) user.kayu = 0
      if (!isNumber(user.ore)) user.ore = 0
      if (!isNumber(user.kimia)) user.kimia = 0
      if (!isNumber(user.planet)) user.planet = 0
      if (!isNumber(user.ingot)) user.ingot = 0
      if (!isNumber(user.coal)) user.coal = 0
      if (!isNumber(user.lastmulung)) user.lastmulung = 0
      if (!isNumber(user.kardus)) user.kardus = 0
      if (!isNumber(user.lastberkebon)) user.lastberkebon = 0
      if (!isNumber(user.bibitpisang)) user.bibitpisang = 0
      if (!isNumber(user.bibitmangga)) user.bibitmangga = 0
      if (!isNumber(user.bibitjeruk)) user.bibitjeruk = 0
      if (!isNumber(user.bibitapel)) user.bibitapel = 0
      if (!isNumber(user.bibitanggur)) user.bibitanggur = 0
      if (!isNumber(user.pisang)) user.pisang = 0
      if (!isNumber(user.mangga)) user.mangga = 0
      if (!isNumber(user.jeruk)) user.jeruk = 0
      if (!isNumber(user.apel)) user.apel = 0
      if (!isNumber(user.anggur)) user.anggur = 0
      if (!isNumber(user.lastrampok)) user.lastrampok = 0
      if (!isNumber(user.kaleng)) user.kaleng = 0
      if (!isNumber(user.botol)) user.botol = 0
      if (!isNumber(user.lastmisi)) user.lastmisi = 0
      if (!isNumber(user.ojekk)) user.ojekk = 0
    } else global.db.data.users[m.sender] = {
      name: m.pushName,
      banned: false,
      limit: 50,
      daily: false,
      balance: 0,
      exp: 0,
      level: 0,
      registered: false,
      premium: false,
      hit: 0,
      lastclaim: 0,
      lastmonthly: 0,
      expired: 0,
      afkTime: -1,
      afkReason: '',
      lastseen: 0,
      saving: 0,
      saving_history: [],
      sn: '',
      chat: 0,
      kultivasi: 0,
      lastRedeemedCode: '',
      lastredeem: 0,
      lastmulung: 0,
      lastberkebon: 0,
      lastrampok: 0,
      lastmisi: 0,
      
      petualang: false,
      ikan: 0,
      darah: 100,
      emas: 0,
      emerald: 0,
      besi: 0,
      potion: 1,
      umpan: 0,
      ayam: 0,
      kelinci: 0,
      domba: 0,
      sapi: 0,
      gajah: 0,
      diamond: 0,
      stone: 0,
      kayu: 0,
      ore: 0,
      kimia: 0,
      planet: 0,
      ingot: 0,
      coal: 0,
      kardus: 0,
      bibitpisang: 0,
      bibitmangga: 0, 
      bibitjeruk: 0,
      bibitapel: 0,
      bibitanggur: 0,
      pisang: 0,
      mangga: 0, 
      jeruk: 0,
      apel: 0,
      anggur: 0,
      kaleng: 0,
      botol: 0,
      ojekk: 0
    }
    let chat = global.db.data.chats[m.chat]
    if (typeof chat !== 'object') global.db.data.chats[m.chat] = {}
    if (chat) {
      if (!('nsfw' in chat)) chat.nsfw = false
      if (!('banned' in chat)) chat.banned = false
      if (!('autojpm' in chat)) chat.autojpm = false
      if (!('antilink' in chat)) chat.antilink = false
      if (!('antilinkK' in chat)) chat.antilinkK = false
      if (!('antilinkAll' in chat)) chat.antilinkAll = false
      if (!('antitoxic' in chat)) chat.antitoxic = false
      if (!('mute' in chat)) chat.mute = false
      if (!('antibot' in chat)) chat.antibot = false
      if (!('simichat' in chat)) chat.simichat = false
      if (!('autodl' in chat)) chat.autodl = false
      if (!('kayy' in chat)) chat.kayy = false
      if (!('subdo' in chat)) chat.subdo = false
      if (!('chatbot' in chat)) chat.chatbot = false
      if (!('antidelete' in chat)) chat.antidelete = false
      if (!('message' in chat)) chat.message = ''
      if (!isNumber(chat.chat)) chat.chat = 1
      if (!isNumber(chat.lastseen)) chat.lastseen = new Date() * 1
      if (!('autoSticker' in chat)) chat.autoSticker = false
      if (!('antiNsfw' in chat)) chat.antiNsfw = false
      if (!('antiFoto' in chat)) chat.antiFoto = false
      if (!('antiAudio' in chat)) chat.antiAudio = false
      if (!('antiSticker' in chat)) chat.antiSticker = false
      if (!('viewonce' in chat)) chat.viewonce = false
      if (!('autokick212' in chat)) chat.autokick212 = false
      if (!('aliciaChat' in chat)) chat.aliciaChat = false
      if (!('antiVideo' in chat)) chat.antiVideo = false
    } else global.db.data.chats[m.chat] = {
      nsfw: false,
      banned: false,
      autojpm: false,
      antilink: false,
      antilinkK: false,
      antilinkAll: false,
      antitoxic: false,
      mute: false,
      antibot: false,
      simichat: false,
      autodl: false,
      kayy: false,
      subdo: false,
      chatbot: false,
      antidelete: false,
      message: '',
      chat: 1,
      lastseen: new Date() * 1,
      autoSticker: false,
      antiNsfw: false,
      antiFoto: false,
      antiAudio: false,
      antiSticker: false,
      viewonce: false,
      autokick212: false,
      aliciaChat: false,
      antiVideo: false
    }
    let settings = global.db.data.settings
    if (settings) {
      if (!('autobio' in settings)) settings.autobio = false
      if (!('autoread' in settings)) settings.autoread = false
      if (!('game' in settings)) settings.game = false
      if (!isNumber(settings.hitstat)) settings.hitstat = 0
      if (!("welcome" in settings)) settings.welcome = true;
      if (!("levelup" in settings)) settings.levelup = true;
      if (!('textJpm' in settings)) settings.textJpm = ''
   } else global.db.data.settings = {
         autobio: false,
         autoread: false,
         game: false,
         hitstat: 0,
         welcome: true,
         levelup: true,
         textJpm: ''
        }
} catch (e) {
    console.error(e)
  }
}