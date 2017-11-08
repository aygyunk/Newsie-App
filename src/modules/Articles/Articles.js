import data from './data.json';

import axios from 'axios';

const NEWS_API_KEY = 'f3ddd6f982ff4d96871f08cac80786d8';

class Articles {
  static fetch(params) {
    let client = axios.create({
      'Access-Control-Allow-Origin': '*',
    });
    // await response of fetch call
    return client
      .get('https://newsapi.org/v1/articles?source=techcrunch&sortBy=latest', {
        ...params,
        headers: {
          'x-api-key': NEWS_API_KEY,
        },
      })
      .then(data => {
        const articles = data.data.articles;

        return articles.map(article => ({
          title: article.title,
          image: article.urlToImage,
          source: '',
        }));
      });
  }
}

export default Articles;
