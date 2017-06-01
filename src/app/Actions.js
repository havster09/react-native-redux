import * as types from './Constants';

const apiUrl = 'http://192.168.43.226';

export const getTodos = () => (
 dispatch => (
  fetch(`${apiUrl}:1337/todos`, {
    headers: {'Accept': 'application/json'}
  })
   .then((response) => {
    return response.json()
  })
   .then(todos => {
     dispatch({type:types.GET_TODOS_SUCCESS, payload:todos})
   })
 )
);

export const createTodos = (todo) => (
 dispatch => (
  fetch(`${apiUrl}:1337/todos`,
    {
      method:'POST',
      body: JSON.stringify(todo),
      headers: {'Content-Type': 'application/json'}
    })
   .then((response) => {
    return response.json()
  })
   .then(todo => {
     return dispatch({type:types.CREATE_TODO, payload:Object.assign(todo)})
   })
 )
);

export const removeTodos = (todo) => (
 dispatch => (
  fetch(`${apiUrl}:1337/todos/${todo.id}`,
   {
     method:'DELETE',
     headers: {'Content-Type': 'application/json'}
   })
   .then(() => {
     return dispatch({type:types.REMOVE_TODO, payload:todo});
   })
 )
);

export const deleteMeme = (meme) => (
 dispatch => (
  fetch(`${apiUrl}:1337/memes/${meme.id}`, {
    method: 'DELETE',
    headers: {'Content-Type':'application/json'}
  })
   .then(()=> dispatch({type:types.REMOVE_MEME, payload: meme}))
 )
);

export const getMemes = () => (
 dispatch => (
  fetch(`${apiUrl}:1337/memes`, {
    headers: {'Accept': 'application/json'}
  })
   .then((response) => {
     return response.json()
   })
   .then(memes => {
     dispatch({type:types.GET_MEMES_SUCCESS, payload:memes})
   })
 )
);

export const createMeme = (meme) => (
 dispatch => (
  fetch(`${apiUrl}:1337/memes`,
   {
     method:'POST',
     body: JSON.stringify(meme),
     headers: {'Content-Type': 'application/json'}
   })
   .then((response) => {
     return response.json()
   })
   .then(meme => {
     return dispatch({type:types.CREATE_MEME, payload:Object.assign(meme)})
   })
 )
);