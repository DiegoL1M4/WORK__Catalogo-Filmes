# Catalogo de Filmes

Cliente WEB para a exibição de um catálogo de filmes. Possui as categorias de filmes e a ferramenta de pesquisa.

# Requisitos
* Angular
* Node
* API The Movie DB
* Bootstrap
* Font Awesome

# Executar Projeto Angular
Dentro da página catalogo-filme:
```
$ npm install
```
```
$ ng serve
```


# Componentes de Página
* Home - Página principal.
* Search - Página que retorna os filmes de acordo com a pesquisa.
* Categories - Página que carrega os filmes de uma dada categoria.
* Details - Página que mostra os detalhes de um filme.
* Page Not Found - Página não encontrada.

# Componentes de Funcionalidades
* Navbar - Barra de navegação com pesquisa e dropdown das categorias de filmes.
* Footer - Rodapé da página
* Movies - Conjundo de cards (filmes) por coluna.
* Slide - Mostra os cinco primeiros filmes de uma pesquisa em um slider.
* Pagination - Movimentação entre as páginas.
* Loading - Elemento de carregamento dos filmes.

# Services
* MovieDB - estabelece todas as consultas à API do The MovieDB.

# Interfaces das Pesquisas
* Pesquisa
* Movie
* Genres
* Genre

# Esquema de Rotas
```javascript
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home/1'},
  { path: 'home/:page', component: HomeComponent },
  { path: 'categories/:id/:page', component: CategoriesComponent },
  { path: 'search/:query', component: SearchComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: '**', component: PageNotFoundComponent }
];
```
