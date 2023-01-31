import { combineReducers } from 'redux'

import drawerReducer from './Drawer/slice' 
import modulosSessionslice from './ModulosSession/slice'
import navbarSlice from './Navbar/slice'

const rootReducer = combineReducers({
    drawer: drawerReducer,
    modulosSession: modulosSessionslice,
    navbar: navbarSlice
})

export default rootReducer;