
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppModule } from './app.module';
import { RouterModule, Routes } from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component'; // Ajuste o caminho conforme necessário
import { ArticleItemComponent } from './article-item/article-item.component'; // Ajuste o caminho conforme necessário

const routes: Routes = [
  { path: '', component: ArticleListComponent }, // Página de listagem
  { path: 'article/:id', component: ArticleItemComponent }, // Detalhes do artigo
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppModule { }


