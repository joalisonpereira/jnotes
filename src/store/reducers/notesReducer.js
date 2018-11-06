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
		case FILTER_NOTES:
			const {notes,color} = action.payload;
			return {
				data: notes.filter(item => 
					item.color.title == color
				)
			};
		default:
			return state;
	}
}

export default notesReducer;