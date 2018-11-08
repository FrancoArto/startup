const initialState = {
  movies : [],
  movieToForm : null
}


const MovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_MOVIE':
      let add = Object.assign({}, state);
      add.movies.push(action.movie); //Pushing added movie's key to state array
      return add;

    case 'EDIT_MOVIE':
      var edit = Object.assign({}, state);
      if (action.movieToForm === true) {        
        edit.movieToForm = action.key;        
      }
      else {
        edit.movies[action.key] = action.movie;
        edit.movieToForm = null;
      }
      return edit;

    case 'DELETE_MOVIE': 
      let del = Object.assign({}, state);
      del.movies.splice(action.movie, 1); //Removing deleted movie's key from state array
      return del;

    default: return state;
  }
    
}


export default MovieReducer;