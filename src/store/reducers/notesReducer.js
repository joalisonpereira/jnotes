import { LOAD_NOTES,FILTER_NOTES } from '../actions';

const INITIAL_STATE = {
	data:[],
	isLoading:true
};

const notesReducer = (state = INITIAL_STATE,action) => {
	switch(action.type){
		case LOAD_NOTES:
			return {
				data: action.payload.notes,
				isLoading: false
			};
		default:
			return state;
	}
}

export default notesReducer;