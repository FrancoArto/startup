function DeleteMovie(movie) {
  localStorage.removeItem(movie);
  return {
    type : 'DELETE_MOVIE',
    movie : movie
  }
}

export default DeleteMovie;