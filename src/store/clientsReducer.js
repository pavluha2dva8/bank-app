const initialState = {
    clients: []
}

const ADD_CLIENT = 'ADD_CLIENT'
const ADD_CLIENTS_FROM_SERVER = 'ADD_CLIENTS_FROM_SERVER'
const REMOVE_CLIENT = 'REMOVE_CLIENT'

export const clientsReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CLIENTS_FROM_SERVER:
            return {...state, clients: [...state.clients, ...action.payload]}
        case ADD_CLIENT:
            return {...state, clients: [...state.clients, action.payload]}
        case REMOVE_CLIENT:
            return {...state, clients: state.clients.filter( client => client.id !== action.payload)}

        default:
            return state
    }
}

export const addClientsFromServerActionCreator = (payload) => ({type: ADD_CLIENTS_FROM_SERVER, payload})
export const addClientActionCreator = (payload) => ({type: ADD_CLIENT, payload})
export const removeClientActionCreator = (payload) => ({type: REMOVE_CLIENT, payload})