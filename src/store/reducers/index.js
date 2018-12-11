import { combineReducers } from 'redux'
import counter from './counter'
import music from './music'

export default combineReducers({
  counter,
  music
})