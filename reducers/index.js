/**
 * Created by Puneeth T S on 5/15/16.
 */

import { combineReducers } from 'redux'
import todos from './todo'
import visibilityFilter from './visibilityFilter'

const todoApp = combineReducers({
    todos,
    visibilityFilter
})

export default todoApp
