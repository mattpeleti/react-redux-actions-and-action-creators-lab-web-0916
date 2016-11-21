// define your actions here!
export function addMovie(movie){
  return {
    type: 'ADD_MOVIE',
    movie:{
      title: movie.title,
      year: movie.year
    }
  };
}

export function deleteMovie(movie){
  return {
    type: 'DELETE_MOVIE',
    movie:{
      title: movie.title,
      year: movie.year
    }
  };
}

export function updateUsername(newname){
  return {
    type: 'UPDATE_USERNAME',
    username: newname
  };
}

export function resetUsername(){
  return{
    type: 'RESET_USERNAME',
    username: 'default'
  };
}
