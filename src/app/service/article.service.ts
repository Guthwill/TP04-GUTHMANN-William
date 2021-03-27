import { Subject } from 'rxjs';

export class ArticleService {

  articleSubject = new Subject<any[]>();

  articles = [
    {
      id: 1,
      name: "Linux",
      price: 10
    },
    {
      id: 2,
      name: "Windows",
      price: 15
    },
    {
      id: 3,
      name: "Angular",
      price: 5
    },
    {
      id: 4,
      name: "Talend",
      price: 0
    },
  ];

  emitArticleSubject() {
    this.articleSubject.next(this.articles.slice());
  }

  getArticleById(id: number) {
    const article = this.articles.find(
      (articleObject) => {
        return articleObject.id === id;
      }
    );

    return article;
  }

}
