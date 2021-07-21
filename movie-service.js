export const movieService = connection => {
  const table = 'movies'
  const createMovie = newMovie => [
    ...connection.table(table),
    newMovie
  ]

  const getMovieById = id =>
    connection.table(table).find(movie => movie.id === id)

  const getMovies = () => connection.table(table)

  return {
    createMovie,
    getMovieById,
    getMovies,
  }
}