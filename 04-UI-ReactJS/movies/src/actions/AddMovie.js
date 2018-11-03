function AddMovie(key, movie) {
  localStorage.setItem(key, JSON.stringify(movie)); //Inserting the new movie into localstorage
  return {
    type : 'ADD_MOVIE',
    movie : key
  }
}

export default AddMovie;