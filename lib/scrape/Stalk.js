const axios = require('axios');
const fetch = require('node-fetch')
/*
Created by : KiiCode
Source : https://api.elxyz.me/shorturl/1f1f7e6f
Note : Hapus cr yatim
*/
const tiktokStalk = async (username) => {
    const url = 'https://tools.revesery.com/stalktk/revesery.php';

    try {
        const response = await axios.post(url, null, { params: { username } });
        if (response.status !== 200) {
            throw new Error('Network response was not ok');
        }
        const data = response.data;

        const photo = data.photo;
        const name = data.name;
        const bio = data.bio;
        const followers = data.followers;
        const following = data.following;
        const likes = data.likes;
        const posts = data.posts;

        const result = {
            photo,
            username,
            name,
            bio,
            followers,
            following,
            likes,
            posts
        };

        return result;
    } catch (error) {
        console.error('Failed to scrape data:', error);
    }
};

/**
 * Don't Remove WM!
 * https://kavian.xyz
*/
async function igStalk(user) {
  return new Promise(async (resolve, reject) => {
    await fetch(
      `https://igram.world/api/ig/userInfoByUsername/${user.replace(
        /[^\w\d]/gi,
        ""
      )}`
    )
      .then((v) => v.json())
      .then((v) => v.result)
      .then((v) => resolve(v))
      .catch((v) => reject(v));
  });
}

async function ffStalk(id) {
  try {
    const response = await axios.get('https://allstars-apis.vercel.app/freefire?id=' + id);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

module.exports = { 
    tiktokStalk,
    igStalk,
    ffStalk
}