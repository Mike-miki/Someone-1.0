const axios = require('axios');
const FormData = require('form-data');
const md5 = require('md5');

/**
 * Paydisini (Payment Gateway)
 * © created by syaii
 */

class PayDisini {
  constructor(key) {
    this.url = 'https://paydisini.co.id/api/';
    this.method = 'post';
    this.key = key;
  }

  async profile() {
    const data = new FormData();
    data.append('key', this.key);
    data.append('request', 'profile');
    data.append('signature', md5(`${this.key}Profile`));
    const config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: this.url,
      headers: { ...data.getHeaders() },
      data,
    };
    return (await axios(config).catch((e) => e?.response)).data;
  }

  async list() {
    const data = new FormData();
    data.append('key', this.key);
    data.append('request', 'payment_channel');
    data.append('signature', md5(`${this.key}PaymentChannel`));
    const config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: this.url,
      headers: { ...data.getHeaders() },
      data,
    };
    return (await axios(config).catch((e) => e?.response)).data;
  }

  async guide() {
    const data = new FormData();
    data.append('key', this.key);
    data.append('request', 'payment_guide');
    data.append('signature', md5(`${this.key}PaymentGuide`));
    const config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: this.url,
      headers: { ...data.getHeaders() },
      data,
    };
    return (await axios(config).catch((e) => e?.response)).data;
  }
  async create(kodeUnik, id, jumlah, pesan, time = 10800, fee = 1) {
    const data = new FormData();
    data.append('key', this.key);
    data.append('request', 'new');
    data.append('unique_code', kodeUnik);
    data.append('service', id);
    data.append('amount', jumlah);
    data.append('note', pesan);
    data.append('valid_time', time);
    data.append('type_fee', fee);
    const signature = md5(`${this.key}${kodeUnik}${id}${jumlah}${time}NewTransaction`);
    data.append('signature', signature);
    const config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://paydisini.co.id/api/',
      headers: { ...data.getHeaders() },
      data,
    };
    try {
      return (await axios(config)).data;
    } catch (e) {
      return (e?.response).data;
    }
  }

  async status(kodeUnik) {
    const data = new FormData();
    data.append('key', this.key);
    data.append('request', 'status');
    data.append('unique_code', kodeUnik);
    data.append('signature', md5(this.key+ kodeUnik+`StatusTransaction`));
    const config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: this.url,
      headers: { ...data.getHeaders() },
      data,
    };
    return (await axios(config).catch((e) => e?.response)).data;
  }

  async cancel(kodeUnik) {
    const data = new FormData();
    data.append('key', this.key);
    data.append('request', 'cancel');
    data.append('unique_code', kodeUnik);
    data.append('signature', md5(this.key+ kodeUnik+`CancelTransaction`)); 
    const config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: this.url,
      headers: { ...data.getHeaders() },
      data,
    };
    return (await axios(config).catch((e) => e?.response)).data;
  }
}

module.exports = { PayDisini }