export const displaySomeBooks = (array) => {
  return {
    type: "DISPLAY_SOME_BOOKS",
    payload: array
  }
}

export const addToBookshelf = (book) => {
  return {
    type: "ADD_TO_BOOKSHELF",
    payload: book
  }
}

export const removeBook = (book) => {
  return {
    type: "REMOVE_BOOK",
    payload: book
  }
}
