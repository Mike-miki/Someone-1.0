
/*
* https://github.com/agusira
* jan lupa follow🗿
* anggap aja weem
*/

class Button {
  constructor() {
    this.message = {}
    this.buttons = []
    this._header = {}
  }
  setTitle(text) {
    this._header.title = text
    return this
  }
  setSubtitle(text) {
    this._header.subtitle = text
    return this
  }
  setBody(text) {
    this.message.body = { text }
    return this
  }
  setFooter(text) {
    this.message.footer = { text }
    return this
  }
  makeButton(type) {
    let listType = ["quick_reply", "cta_copy", "single_select", "cta_call", "send_location"]
    if (!listType.includes(type)) throw "Error: invalid type"
    let button = {
      name: type,
      buttonParamsJson: ""
    }
    this.buttons.push(button)
    return this
  }
  setParams(json) {
    if (this.buttons.length < 1) throw "Error: makeButton terlebih dahulu"
    if (typeof json !== "object") throw "Error: setParams harus berupa object"
    this.buttons[this.buttons.length - 1].buttonParamsJson = JSON.stringify(json)
    return this
  }
  getFullMessage(m) {
    return {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              ...this._header
            },
            ...this.message,
            nativeFlowMessage: {
              buttons: this.buttons
            },
            contextInfo: {
              mentionedJid: [m?.sender],
              stanzaId: m?.quoted?.stanzaId ?? m?.id,
              participant: m?.quoted?.participant ?? m?.sender,
              quotedMessage: m?.quoted?.message ?? m?.message
            }
          }
        }
      }
    }
  }
}

module.exports = { Button }