import { combineReducers } from 'redux'

import drawerReducer from './Drawer/slice' 
import modulosSessionslice from './ModulosSession/slice'
import navbarSlice from './Navbar/slice'
import modulosCategoriaSlice from './ModulosCategoria/slice'

const rootReducer = combineReducers({
    drawer: drawerReducer,
    modulosSession: modulosSessionslice,
    navbar: navbarSlice,
    modulosCategoria: modulosCategoriaSlice
})

export default rootReducer;