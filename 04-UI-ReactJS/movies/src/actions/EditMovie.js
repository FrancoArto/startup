function EditMovie(key, movie = null) {
  if (!movie) {
    var movieToForm = true;
  }
  else {
    movieToForm = false;
    localStorage.setItem(key, JSON.stringify(movie));
  }
  return {
    type : 'EDIT_MOVIE',
    key : key,
    movieToForm : movieToForm
  }
}
export default EditMovie;