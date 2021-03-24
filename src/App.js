import { useDispatch, useSelector } from 'react-redux';
import './App.css';

function App() {
  const dispatch = useDispatch()
  const cash = useSelector( state => state.cash) // function that takes state and return smth

  let addCash = (cash) => {
    dispatch({type: 'ADD_CASH', payload: cash})
  }
  let getCash = (cash) => {
    dispatch({type: 'GET_CASH', payload: cash})
  }

  return (
      <div className="App">
        <h1>bank-app</h1>
        <div className="App-output">
          {cash}
        </div>
        <button onClick={ () => addCash(Number(prompt()))}>ADD_CASH</button>
        <button onClick={ () => getCash(Number(prompt()))}>GET_CASH</button>
      </div>
  );
}

export default App;
