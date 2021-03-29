import { Reference } from './../shared/models/reference';
import { Subject } from 'rxjs';


export class ArticleService {

  articleSubject = new Subject<Reference[]>();

  articles: Reference[] = [
    {
      ref: "Y2LWP95M",
      name: "Linux",
      price: 10
    },
    {
      ref: "M75CEPTK",
      name: "Windows",
      price: 15
    },
    {
      ref: "75FGMDCX",
      name: "Angular",
      price: 5
    },
    {
      ref: "SX9BG46C",
      name: "Talend",
      price: 0
    },
  ];

  emitArticleSubject() {
    this.articleSubject.next(this.articles.slice());
  }

  getArticleByRef(ref: string) {
    const article = this.articles.find(
      (articleObject) => {
        return articleObject.ref === ref;
      }
    );

    return article;
  }

}
