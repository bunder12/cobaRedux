import { createStore } from 'redux'

const initialState = {
    counter: 1,
    indonesia: {
        title: 'udin',
        deskripsi: 'siapa nama kamu?'   
    },
    inggris: {
           title: 'brayen',
           deskripsi: 'whats your name?'   
    },
};

function reducer(state = initialState, action) {
    if(action.type === "tambah"){
        return { ...state, counter: state.counter + 1};
    }else if( action.type === "kurang"){
        return { ...state, counter: state.counter - 1};
    }else{
        return state;
    }
}

const store = createStore(reducer)

export default store;