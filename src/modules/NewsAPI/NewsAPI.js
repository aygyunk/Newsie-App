import Client from 'modules/Client';

const NEWS_API_KEY = 'f3ddd6f982ff4d96871f08cac80786d8';

class NewsAPI {
  constructor() {
    const client = new Client({
      baseURL: 'https://newsapi.org/v1/articles',
      headers: {
        'x-api-key': NEWS_API_KEY,
      },
    });

    return client;
  }
}

export default NewsAPI;
