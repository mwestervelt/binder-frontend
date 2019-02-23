const initialState = {
  bookArray: []
}


const reducer = (state = initialState, action) => {
  switch (action.type){
    case "DISPLAY_SOME_BOOKS":
       return {...state, bookArray: action.payload}
    default:
      return state
  }


}


export default reducer
