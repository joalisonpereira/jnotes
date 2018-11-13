import { LOAD_NOTES, RESET_NOTES, FILTER_NOTES, SEARCH_NOTES } from '../actions';

const INITIAL_STATE = {
	data: [],
	isLoading: true
};

const notesReducer = (state = INITIAL_STATE,action) => {
	switch(action.type){
		case LOAD_NOTES:
			return {
				data: action.payload.notes,
				isLoading: false
			};
		case RESET_NOTES:
			return {
				data: state.data
			};
		case FILTER_NOTES:
			return {
				...state,
				filterData: state.data.filter(note => {
					return note.color===action.payload.color;
				})
			};
		case SEARCH_NOTES:
			const { key } = action.payload;
			return {
				...state,
				searchData: state.data.filter(note => {
					return note.title.toLowerCase().indexOf(key) > -1; 
				})
			};
		default:
			return state;
	}
}

export default notesReducer;