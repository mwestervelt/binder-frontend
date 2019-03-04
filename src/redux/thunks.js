// import {addToBookshelf, removeBook} from './actions'
//
// export const patchShelf = (book) => {
//   return function thunk(dispatch){
//     return fetch('http://localhost:3000/api/v1/books', {
//       method: 'POST',
//       headers: {
//         'Content-type': 'application/json',
//         'Accept': 'application/json'
//         //authorization token here for user
//       },
//       body: JSON.stringify(book)
//     })
//     .then(res => res.json())
//     .then(book => dispatch(addToBookshelf(book)))
//   }
//
// }
//
// // how to get bookID when there is no bookID???
// export const deleteFromShelf = (bookID) => {
//   return function thunk(dispatch){
//     return fetch('http://localhost:3000/api/v1/books', {
//       method: 'DELETE',
//       headers: {
//         'Content-type': 'application/json',
//         'Accept': 'application/json'
//
//       },
//       body: JSON.stringify(bookID)
//     })
//     .then(res => res.json())
//     .then(data => dispatch(removeBook(data)))
//   }
//
//
//
// }
