import { createStore } from 'redux'

//  - action type
const INCREMENT = 'INCREMENT'

//  - action creator
export const increment = () => ({ type: INCREMENT })

//  - initial state
const initialState = { count: 0 }

//  - reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 }
    default:
      return state
  }
}

const store = createStore(reducer)

export default store
