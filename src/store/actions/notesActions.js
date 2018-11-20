import notes from '../../../notes.json';

export const LOAD_NOTES = 'LOAD_NOTES';
export const loadNotes = () => ({
	type: LOAD_NOTES,
	payload: {notes}
});

export const RESET_NOTES = 'RESET_NOTES';
export const resetNotes = () => ({
	type: RESET_NOTES
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