import axios from 'axios';

class Client {
  constructor(options) {
    let client = axios.create({
      'Access-Control-Allow-Origin': '*',
      ...options,
    });

    return client;
  }
}

export default Client;
