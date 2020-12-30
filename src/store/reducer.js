import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION } from './actionTypes'
const defaultState = {
	inputValue: '',
	list:[]
}

//state is the data 
//reducer receive previous state and action from store
//reducer can receive state but cannot change state
 const todoListReducer = (state = defaultState, action) => {
	if (action.type === CHANGE_INPUT_VALUE){
		//deep copy
		const newState = JSON.parse(JSON.stringify(state))
		newState.inputValue = action.value
		//return to store 
		return newState
	}
	if (action.type === ADD_TODO_ITEM){
		const newState = JSON.parse(JSON.stringify(state))
		newState.list.push(newState.inputValue);
		newState.inputValue = ''
		return newState
	}
	if (action.type ===  DELETE_TODO_ITEM){
		const newState = JSON.parse(JSON.stringify(state))
		newState.list.splice(action.index,1)
		return newState
	}
	if (action.type ===  INIT_LIST_ACTION){
		const newState = JSON.parse(JSON.stringify(state))
		newState.list = action.data
		return newState
	}
	return state
}

export default todoListReducer