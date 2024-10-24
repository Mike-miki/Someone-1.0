const fetch = require('node-fetch')

/*
max juz sampai 30 ygy
by shannz
visit: https://whatsapp.com/channel/0029VagBdZ49MF92BygaM53t
*/

async function getQuranJuz(juzNumber) {
  // Memastikan juzNumber adalah antara 1 dan 30
  if (juzNumber < 1 || juzNumber > 30) {
    throw new Error('Nomor juz harus antara 1 dan 30');
  }

  const url = `https://api.quran.gading.dev/juz/${juzNumber}`;

  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Terjadi kesalahan:', error);
    throw error;
  }
}

module.exports = { 
  getQuranJuz
}