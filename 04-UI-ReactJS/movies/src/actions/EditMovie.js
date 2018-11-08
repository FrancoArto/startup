function EditMovie(key, movie = null) {
  if (!movie) {
    var movieToForm = true;
  }
  else {
    movieToForm = false;
  }
  return {
    type : 'EDIT_MOVIE',
    key : key,
    movieToForm : movieToForm,
    movie: movie
  }
}
export default EditMovie;