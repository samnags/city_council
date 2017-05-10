import { combineReducers } from 'redux'
import memberReducer from './member_reducer'

const rootReducer = combineReducers({
    members: memberReducer
})

export default rootReducer


