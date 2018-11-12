import { LOAD_NOTES,FILTER_NOTES } from '../actions';

const INITIAL_STATE = {
	data: [],
	isLoading: true,
	isFiltered: false
};

const notesReducer = (state = INITIAL_STATE,action) => {
	switch(action.type){
		case LOAD_NOTES:
			return {
				data: action.payload.notes,
				isLoading: false,
				isFiltered: false
			};
		case FILTER_NOTES:
			return {
				data: state.data.filter(note => {
					return note.color===action.payload.color;
				}),
				isLoading: false,
				isFiltered: true
			};
		default:
			return state;
	}
}

export default notesReducer;