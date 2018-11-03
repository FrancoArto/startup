const initialState = {
  movies : [],
  movieToForm : null
}

if (initialState.movies.length === 0) {
  for (let i = 0; i<localStorage.length; i++) {
    let key = localStorage.key(i);
    let obj = parseInt(key);
    initialState.movies.push(obj);
  }
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
        edit.movieToForm = null;
      }
      return edit;

    case 'DELETE_MOVIE': 
      let del = Object.assign({}, state);
      del.movies = del.movies.filter(movie => {return movie !== action.movie}) //Removing deleted movie's key from state array
      return del;

    default: return state;
  }
    
}


export default MovieReducer;