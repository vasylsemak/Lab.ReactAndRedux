import { createStore } from 'redux'

//  - action type
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

//  - action creator
export const increment = () => ({ type: INCREMENT })
export const decrement = () => ({ type: DECREMENT })

//  - initial state
const initialState = { count: 0 }

//  - reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 }
    case DECREMENT:
      return { ...state, count: state.count - 1 }
    default:
      return state
  }
}

const store = createStore(reducer)

export default store
