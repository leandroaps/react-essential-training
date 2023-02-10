import { useReducer } from 'react';

const initialState = 0
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return initialState
    default:
      return state
  }
}

function Usereducer() {
  const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      <h2>Reducer</h2>
      <div className="alert alert-primary" role="alert">
        Counter: {count}
      </div>

      <div className="btn-group clearfix" role="group" aria-label="Counter">
        <button
          className="btn btn-primary"
          onClick={() => dispatch('increment')}
        >
          Increment
        </button>
        <button
          className="btn btn-primary"
          onClick={() => dispatch('decrement')}
        >
          Decrement
        </button>
        <button className="btn btn-primary" onClick={() => dispatch('reset')}>
          Reset
        </button>
      </div>
    </>
  )
}

export default Usereducer
