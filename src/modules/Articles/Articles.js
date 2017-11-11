import axios from 'axios';

import NewsAPI from 'modules/NewsAPI';

import data from './data.json';

const NEWS_API_KEY = 'f3ddd6f982ff4d96871f08cac80786d8';

class Articles {
  static fetch({ source, sortBy }) {
    const client = new NewsAPI();

    // await response of fetch call
    return client
      .get('/', {
        params: { source, sortBy },
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
