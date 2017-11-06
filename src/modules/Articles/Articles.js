import data from './data.json';

class Articles {
  static fetch() {
    return Promise.resolve(data);
  }
}

export default Articles;
