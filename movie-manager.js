export default class MovieManager {
  #tableName = 'movies'
  #_connection = null

  constructor(connection) {
    this.#_connection = connection
  }

  createMovie(newMovie) {
    return [
      ...this.#_connection.table(this.#tableName),
      newMovie
    ]
  }

  getMovieById(id) {
    return this.#_connection
      .table(this.#tableName)
      .find(movie => movie.id === id)
  }

  getMovies() {
    return this.#_connection
      .table(this.#tableName)
  }
}