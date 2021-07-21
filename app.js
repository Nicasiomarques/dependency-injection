import MovieManager from './movie-manager.js'
import { movieService } from './movie-service.js'
import imaginaryDB, { generateId } from './ImaginaryDB.js'

const connection = imaginaryDB({
  port: process.env.PORT,
  host: process.env.HOST
})

const {
  getMovies,
  createMovie,
  getMovieById,
} = movieService(connection)

const movieManager = new MovieManager(connection)

console.log(getMovieById(1))
console.log(getMovies())
console.log(createMovie({
  id: generateId(),
  name: 'Calley',
  actors: ['Mary Jane', 'Pamela Anderson', 'Tio Mingo'],
  gender: 'Browsecat',
}))


console.log(movieManager.getMovieById(1))
console.log(movieManager.getMovies())
console.log(movieManager.createMovie({
  id: generateId(),
  name: 'Calley oop',
  actors: ['Mary Jane'],
  gender: 'Action',
}))