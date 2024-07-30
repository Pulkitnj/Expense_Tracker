export default (state, action) => {
    //Reducer isawayto change state and send to component, create new state and send down
    switch(action.type){
        case "DELETE_TRANSACTION":
            return {
                ...state, //Current state
                transactions: state.transactions.filter(transaction => transaction.id !== 
                action.payload )
            }
        case "ADD_TRANSACTION":
            return {
                ...state, //Initial state
                transactions: [action.payload, ...state.transactions]
                //action.payload is the new transaction that we are adding
                //...state.transactions is the current transaction
            }
        default:
            return action;
    }
}