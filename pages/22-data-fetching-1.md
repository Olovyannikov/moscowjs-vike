# Запрос данных

<style>
[data-slidev-no="34"] {
    .slidev-layout .slidev-code-wrapper {
        max-width: 100%;
    }
}
</style>

```ts {*|14-15|18-19|20-23|25-30}{startLine: 12, lines: true}
// /pages/movies/+data.ts
  
// По-умолчанию работает на сервере, но можно сделать изоморфным на уровне +config.ts
import fetch from 'node-fetch'
 
export async function data(pageContext) {
  const response = await fetch('https://star-wars.brillout.com/api/films.json')
  let { movies } = await response.json()
  /* Or with an ORM:
  let movies = await Movie.findAll() */
  /* Or with SQL:
  let movies = await sql.run('SELECT * FROM movies;') */
    
  movies = movies.map(({ title, release_date }) => ({ title, release_date }))
 
  return {
    movies
  }
}
```

