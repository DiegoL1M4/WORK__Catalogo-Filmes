# Catalogo de Filmes

Cliente WEB para a exibição de um catálogo de filmes. Possui as categorias de filmes e a ferramenta de pesquisa. Conta com suporte a acessibilidade, nos seguintes itens:
* Ajuste de fonte
* Alto-contraste
* Suporte à leitores de tela

# Requisitos de Projeto
* Angular
* Node
* API The Movie DB
* Bootstrap
* Font Awesome

# Executar Projeto Angular
Dentro da pasta catalogo-filme:
```
$ npm install
```
```
$ ng serve
```

# Descrição do Projeto

O projeto está dividido em três pastas principais listadas a seguir:

* Components
* Interfaces
* Services

## Componentes de Página
* Home - Página principal.
* Search - Página que retorna os filmes de acordo com a pesquisa.
* Categories - Página que carrega os filmes de uma dada categoria.
* Details - Página que mostra os detalhes de um filme.
* Page Not Found - Página não encontrada.


## Componentes de Funcionalidades
* Navbar - Barra de navegação com pesquisa e dropdown das categorias de filmes.
* Footer - Rodapé da página
* Movies - Conjundo de cards (filmes) por coluna.
* Slide - Mostra os cinco primeiros filmes de uma pesquisa em um slider.
* Pagination - Movimentação entre as páginas.
* Loading - Elemento de carregamento dos filmes.


## Services
* MovieDB - estabelece todas as consultas à API do The MovieDB.
* Accessibility - variáveis e funções para a acessibilidade.


## Interfaces das Pesquisas
* Pesquisa
* Movie
* Genres
* Genre


## Esquema de Rotas
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


## API The Movie DB
O projeto conta com apenas um service que realiza toda a comunicação entre a API The Movie DB e o sistema. A seguir temos as definições utilizadas na pesquisa:
* getMovie()
```
https://api.themoviedb.org/3/movie/{movie_id}?api_key={{chave}}&language=pt-BR
```
* popular()
```
https://api.themoviedb.org/3/movie/popular?api_key={{chave}}&language=pt-BR&page=1
```
* search()
```
https://api.themoviedb.org/3/search/movie?api_key={{chave}}&language=pt-br&query=vingadores&page=1&include_adult=false
```
* genres()
```
https://api.themoviedb.org/3/genre/movie/list?api_key={{chave}}&language=pt-BR
```
* moviesGenre()
```
https://api.themoviedb.org/3/discover/movie?api_key={{chave}}&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28
```
