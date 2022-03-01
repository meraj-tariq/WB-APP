import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
// import logger from 'redux-logger';
import { persistReducer } from 'redux-persist';
import UserSlice from "../Reducers/UserSlice";
import DashboardSlice from "../DashBoard/store/dashboardSlice"

const reducers = combineReducers({
    UserSlice,
    DashboardSlice
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['UserSlice'],
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (gDM) => gDM({ serializableCheck: false}),
    devTools: true,
});
export default store;
