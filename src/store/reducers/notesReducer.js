import { 
	LOAD_NOTES, 
	FILTER_NOTES, 
	SEARCH_NOTES,
	SAVE_NOTE,
	EDIT_NOTE,
	REMOVE_NOTE 
} from '../actions';

const INITIAL_STATE = {
	data: [],
	dataToRender: [],
	isLoading: true
};

const notesReducer = (state = INITIAL_STATE,action) => {
	switch(action.type){
		case LOAD_NOTES:
			return {
				data: state.data,
				dataToRender: state.data,
				isLoading: false
			};
		case FILTER_NOTES:
			return {
				...state,
				dataToRender: state.data.filter(note => {
					return note.color === action.payload.color;
				}),
				isFiltered: true
			};
		case SEARCH_NOTES:
			const { key } = action.payload;
			return {
				...state,
				dataToRender: state.data.filter(note => {
					return note.title.toLowerCase().indexOf(key) > -1; 
				}),
				isFiltered: false
			};
		case SAVE_NOTE:
			const noteToSave = action.payload.note; 
			const dataAfterSave = [...state.data, noteToSave];
			return {
				data: dataAfterSave,
				dataToRender: dataAfterSave
			};
		case EDIT_NOTE:
			const noteToEdit = action.payload.note;
			const dataAfterEdit = state.data.filter(item => item.id !== noteToEdit.id);  
			dataAfterEdit.push(noteToEdit);
			return {
				data: dataAfterEdit,
				dataToRender: dataAfterEdit
			}
		case REMOVE_NOTE:
			const noteToRemove = action.payload.note;
			const dataAfterRemove = state.data.filter(item => item.id !== noteToRemove.id);
			return {
				data: dataAfterRemove,
				dataToRender: dataAfterRemove
			}
		default:
			return state;
	}
}

export default notesReducer;