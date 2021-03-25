import {useDispatch, useSelector} from 'react-redux';
import './App.css';
import {addClientActionCreator, removeClientActionCreator} from "./store/clientsReducer";
import {addCashActionCreator, getCashActionCreator} from "./store/cashReducer";
import {Button} from "@material-ui/core";

function App() {
    const dispatch = useDispatch()
    const cash = useSelector(state => state.cash.cash) // function that takes state and return smth
    const clients = useSelector(state => state.clients.clients)

    let addCash = (cash) => {
        isNaN(cash) ? alert('Input must be a number') : dispatch(addCashActionCreator(cash))
    }
    let getCash = (cash) => {
        isNaN(cash) ? alert('Input must be a number') : dispatch(getCashActionCreator(cash))
    }
    let addClient = (name) => {
        let client = {
            name,
            id: Date.now()
        }
        dispatch(addClientActionCreator(client))
    }
    let removeClient = (client) => {
        dispatch(removeClientActionCreator(client.id))
    }

    return (
        <div className="App">
            <h1>bank-app</h1>
            <div className="App-output">
                {cash}
            </div>
            <Button variant="contained" color="primary"
                    onClick={() => addCash(Number(prompt()))}>ADD_CASH
            </Button>
            <Button variant="contained" color="primary"
                    onClick={() => getCash(Number(prompt()))}>GET_CASH
            </Button>
            <Button variant="contained" color="primary" onClick={() => addClient(prompt())}
            >ADD_CLIENT
            </Button>
            {clients.length > 0 ?
                <div>
                    {clients.map(client =>
                        <div key={client.id} onClick={() => removeClient(client)}>{client.name}</div>
                    )}
                </div>
                :
                <div>no clients</div>}
        </div>
    );
}

export default App;
