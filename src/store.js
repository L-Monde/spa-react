import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './feats/counter/counterSlice'
import wordReducer from './feats/findWord/wordSlice';

const store = configureStore({
    reducer: {
        counter: counterReducer,
        word: wordReducer,
    }
});

export default store;