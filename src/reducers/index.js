import {combineReducers}  from 'redux';
import authReducers from './auth.reducers';
import userReducer from './user.reducer';
import categoryReducer from './category.reducer';
import productReducer from './category.reducer';
import orderReducer from './category.reducer';
const rootReducers = combineReducers({
    auth:authReducers,
    user:userReducer,
    category:categoryReducer,
    // order:orderReducer,
    // product:productReducer
})

export default rootReducers;
