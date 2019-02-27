import {addToBookshelf} from './actions'

export const patchShelf = (book) => {
  console.log("hello from the thunk", book)

  return function thunk (dispatch){
    return fetch('http://localhost:3000/api/v1/books', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'

      },
      body: JSON.stringify(book)
    })
    .then(res => res.json())
    .then(data => dispatch(addToBookshelf(data)))
  }



}
