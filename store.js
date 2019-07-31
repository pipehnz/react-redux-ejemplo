import { createStore } from 'redux'
import { reducer } from './reducers'
import { state } from './state'

export let store = createStore(reducer, state)