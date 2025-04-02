import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Article {
  id: number;
  title: string;
  content: string;
  imageUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private articles: Article[] = [
    { id: 1, title: 'Como fazer um bom clone de site?', content: 'Lorem ipsum dolor sit...', imageUrl: 'article1.jpg' },
    { id: 2, title: 'Dicas de Angular', content: 'Lorem ipsum dolor sit...', imageUrl: 'article2.jpg' },
  ];

  constructor() { }

  getArticles(): Observable<Article[]> {
    return of(this.articles);
  }

  getArticleById(id: number): Observable<Article | undefined> {
    return of(this.articles.find(article => article.id === id));
  }
}
