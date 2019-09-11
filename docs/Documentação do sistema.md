# Documentação dos Sistema

O projeto está desenvolvido em três pastas principais listadas a seguir:

* Components
* Interfaces
* Services

## Services
O projeto conta com apenas um service que realiza toda a comunicação entre a API The Movie DB e o sistema. A seguir temos as definições utilizadas na pesquisa:
* getMovie()
```
https://api.themoviedb.org/3/movie/{movie_id}?api_key=1f572d4eeb91cf40b81c28fd4af4c3e4&language=pt-BR
```
* search()
```
https://api.themoviedb.org/3/search/movie?api_key=1f572d4eeb91cf40b81c28fd4af4c3e4&language=pt-br&query=vingadores&page=1&include_adult=false
```
* genres()
```
https://api.themoviedb.org/3/genre/movie/list?api_key=1f572d4eeb91cf40b81c28fd4af4c3e4&language=pt-BR
```

## Interfaces

## Components
### NavbarComponent

### MovieComponent

### SearchComponent

### CategoriesComponent

### MovieComponent
