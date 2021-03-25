import {addClientsFromServerActionCreator} from "../store/clientsReducer";

export const fetchClients = () => {
    return dispatch => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => dispatch(addClientsFromServerActionCreator(json)))
    }
}