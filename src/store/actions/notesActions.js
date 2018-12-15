export const LOAD_NOTES = 'LOAD_NOTES';
export const loadNotes = () => ({
	type: LOAD_NOTES
});

export const FILTER_NOTES = 'FILTER_NOTES';
export const filterNotes = color => ({
	type: FILTER_NOTES,
	payload: {color}
});

export const SEARCH_NOTES = 'SEARCH_NOTES';
export const searchNotes = key => ({
	type: SEARCH_NOTES,
	payload: {key}
});

export const SAVE_NOTE = 'SAVE_NOTE';
export const saveNote = note => ({
	type: SAVE_NOTE,
	payload: {note}
});

export const EDIT_NOTE = 'EDIT_NOTE';
export const editNote = note => ({
	type: EDIT_NOTE,
	payload: {note}
});

export const REMOVE_NOTE = 'REMOVE_NOTE';
export const removeNote = note => ({
	type: REMOVE_NOTE,
	payload: {note}
});


