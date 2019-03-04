const initialState = {
  auth: {},
  books: {
    read: [],
    wantToRead: [],
    currentlyReading: []
  },
  bookObjs: [],
  booksFromAPI: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type){

    case 'GET_BOOKS_FROM_API':
       return {...state, booksFromAPI: action.payload}

    case 'HANDLE_LOGIN': {
      return {...state, auth: action.payload,
        books: {
          read: action.payload.user.read,
          wantToRead: action.payload.user.want_to_read,
          currentlyReading: action.payload.user.currently_reading}
         }
       }
     case 'HANDLE_LOGOUT': {
       return {...state, auth: {},
         books: {
           read: {},
           wantToRead: {},
           currentlyReading: {}
           }
         }
       }

     case 'GET_CURRENT_USER': {
       // console.log("is there a current user payload?", action.payload);
       return {...state, auth: action.payload,
          books: {
            read: action.payload.user.read,
            wantToRead: action.payload.user.want_to_read,
            currentlyReading: action.payload.user.currently_reading
           }
         }
       }

     case 'UPDATE_BOOK_OBJS': {
       return { ...state,
         bookObjs: action.payload
       }
     }

     case 'UPDATE_USER_FROM_FETCH': {
       return {...state,
         auth: {
           user: action.payload
       }
     }
   }

    // case "ADD_TO_BOOKSHELF":
    //   let newBook = action.payload
    //   let uniqueArray = new Set()
    //   let newArray = [...uniqueArray.add(newBook)]
    //     return {...state, shelf: newArray}
    //
    //
    //  case "REMOVE_BOOK":
    //   let book = action.payload
    //   let removalShelf = state.shelf.filter(bookObj => bookObj.title !== book.title)
    //     return {...state, shelf: removalShelf}

    default:
      return state

    }
}

export default reducer
