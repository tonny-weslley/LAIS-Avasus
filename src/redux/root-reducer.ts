import { combineReducers } from 'redux'

import drawerReducer from './Drawer/slice' 
import modulosSessionslice from './ModulosSession/slice'

const rootReducer = combineReducers({
    drawer: drawerReducer,
    modulosSession: modulosSessionslice
})

export default rootReducer;