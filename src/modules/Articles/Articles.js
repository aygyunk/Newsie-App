import NewsAPI from 'modules/NewsAPI';

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
          url: article.url,
        }));
      });
  }
}

export default Articles;
