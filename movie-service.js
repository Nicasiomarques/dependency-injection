const createMovie = (connection, table) => newMovie => [
  ...connection.table(table),
  newMovie
]

const getMovieById = (connection, table) => id =>
  connection.table(table).find(movie => movie.id === id)

const getMovies = (connection, table) => () => connection.table(table)

export const movieService = connection => {
  const table = 'movies'
  const factories = [
    createMovie,
    getMovieById,
    getMovies,
  ]

  return {
    ...factories.map(factory => factory(connection, table))
  }
}