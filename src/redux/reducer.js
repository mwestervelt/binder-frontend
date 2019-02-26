const initialState = {
  bookArray: [],
  shelfArray: []
}

const reducer = (state = initialState, action) => {
  switch (action.type){
    case "DISPLAY_SOME_BOOKS":
       return {...state, bookArray: action.payload}

    case "ADD_TO_BOOKSHELF":
    let newBook = action.payload
    let updatedShelf = [...state.shelfArray, newBook]
    var uniqueArray = [...new Set(updatedShelf)]
     return {...state, shelfArray: uniqueArray}

     case "REMOVE_BOOK":
     let book = action.payload
     let removalShelf = state.shelfArray.filter(bookObj => bookObj.previewLink !== book.previewLink)
      return {...state, shelfArray: removalShelf}

    default:
      return state


    }
}

export default reducer
