import { combineReducers } from 'redux'

import drawerReducer from './Drawer/slice' 

const rootReducer = combineReducers({
    drawer: drawerReducer,
})

export default rootReducer;