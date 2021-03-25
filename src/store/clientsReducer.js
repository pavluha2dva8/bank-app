const initialState = {
    clients: []
}

const ADD_CLIENT = 'ADD_CLIENT'
const REMOVE_CLIENT = 'REMOVE_CLIENT'

export const clientsReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CLIENT:
            return {...state, clients: [...state.clients, action.payload]}
        case REMOVE_CLIENT:
            return {...state, clients: state.clients.filter( client => client.id !== action.payload)}

        default:
            return state
    }
}

export const addClientActionCreator = (payload) => ({type: ADD_CLIENT, payload})
export const removeClientActionCreator = (payload) => ({type: REMOVE_CLIENT, payload})