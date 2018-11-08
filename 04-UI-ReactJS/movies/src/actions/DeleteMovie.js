function DeleteMovie(movie) {
  return {
    type : 'DELETE_MOVIE',
    movie : movie
  }
}

export default DeleteMovie;