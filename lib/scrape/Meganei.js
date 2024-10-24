const cheerio = require('cheerio')

/**
 * SCRAPER BY KAVIAANN
 * PROTECTED BY MIT LICENSE 
 * WHO GOT CAUGHT REMOVING WM WILL BE SUED
 * SRC : https://whatsapp.com/channel/0029Vac0YNgAjPXNKPXCvE2e
*/
class Meganei {
  constructor() {
    this.BASE_URL = "https://meganei.net";
  }

  async search(query) {
    return new Promise(async (resolve, reject) => {
      try {
        let res = await fetch(
          this.BASE_URL + "/?" + new URLSearchParams({ s: query })
        );
        if (!res.ok) return reject("Query Not Found!");
        res = await res.text();
        const $ = cheerio.load(res);
        const main = $("body").find("main#main").find("article.post");
        const data = {
          query,
          total: $(main).length,
          result: [],
        };

        for (let i of main) {
          const thumbnail = $(i)
            .find("img")
            .attr("srcset")
            .split(" ")[0]
            .replace("-THUMBNAIL", "")
            .replace(".jpg", "-HEADER.jpg");
          const post = {
            title: $(i).find("h2.entry-title").text().trim(),
            thumbnail: thumbnail.includes("-VOLUME")
              ? thumbnail
              : thumbnail.replace("-0", "-VOLUME-0"),
            id: $(i).attr("id"),
            createTime: new Date($(i).find("time").attr("datetime")) - 1,
            formatTime: $(i).find("time").text().trim(),
            publisher: $(i).find("span.author").text().trim(),
            desc:
              $(i).find("div.entry-content > p").text().trim() +
              "... Baca Selengkapnya",
            category: $(i)
              .attr("class")
              .split(" ")
              .filter((v) => v.includes("category"))
              .map((v) => v.replace("category-", "")),
            tag: $(i)
              .attr("class")
              .split(" ")
              .filter((v) => v.includes("tag"))
              .map((v) => v.replace("tag-", "")),
            link: $(i).find("a").attr("href"),
          };
          data.result.push(post);
        }

        resolve(data);
      } catch (e) {
        reject(e);
      }
    });
  }

  async info(url) {
    return new Promise(async (resolve, reject) => {
      try {
        if (!url.includes(this.BASE_URL)) return reject("Invalid URL!");

        let res = await fetch(url);
        if (!res.ok) return reject("URL Not Found");
        res = await res.text();
        const $ = cheerio.load(res);
        const content = $("div#content").children("section");
        const prime = content[0];
        const second = content[1];
        const data = {
          title: $(prime).find("h1.entry-title").text().trim(),
          thumbnail: $(prime).find("img").attr("data-src"),
          createTime: new Date($(prime).find("time").attr("datetime")) - 1,
          formatTime: $(prime).find("time").text().trim(),
          publisher: $(prime).find("span.author").text().trim(),
          category: $(prime)
            .find(".meta-category")
            .children("a")
            .map((i, el) => $(el).text().trim().toLowerCase())
            .get(),
          tag: $(second)
            .find("#tag_cloud-11 > .tagcloud")
            .children("a")
            .map((i, el) => $(el).text().trim().toLowerCase())
            .get(),
          genre: $(second)
            .find("#tag_cloud-10 > .tagcloud")
            .children("a")
            .map((i, el) => $(el).text().trim().toLowerCase())
            .get(),
          info: [],
          desc: $(prime).find("strong").parent().first().text().trim(),
          password: $(second).find("aside#text-7 > .textwidget").text().trim(),
          download: [],
        };

        $(prime)
          .find(".info-komik")
          .children("ul")
          .each((i, el) => {
            $(el)
              .children("li")
              .each((i, el) => {
                data.info.push({
                  name: $(el).find("b").text().trim().toLowerCase(),
                  data: $(el).find("span").text().trim().toLowerCase(),
                });
              });
          });

        $(prime)
          .find(".dwnld > li")
          .each((i, el) => {
            const download = {
              range: $(el).find("span.chapter-range").text().trim(),
              link: $(el)
                .find("span.the-link > a")
                .map((i, el) => {
                  return {
                    type: $(el).text().trim().toLowerCase(),
                    link: $(el).attr("href"),
                  };
                })
                .get(),
            };
            data.download.push(download);
          });

       resolve(data)
      } catch (e) {
        reject(e);
      }
    });
  }
}

module.exports = new Meganei();