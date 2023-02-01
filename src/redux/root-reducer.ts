import { combineReducers } from 'redux'

import drawerReducer from './Drawer/slice' 
import modulosSessionslice from './ModulosSession/slice'
import navbarSlice from './Navbar/slice'
import modulosCategoriaSlice from './ModulosCategoria/slice'
import parceirosPaginationSlice from './ParceirosPagination/slice'

const rootReducer = combineReducers({
    drawer: drawerReducer,
    modulosSession: modulosSessionslice,
    navbar: navbarSlice,
    modulosCategoria: modulosCategoriaSlice,
    parceirosPagination: parceirosPaginationSlice
})

export default rootReducer;