import notes from '../../../notes.json';

export const LOAD_NOTES = 'LOAD_NOTES';
export const loadNotes = () => ({
	type: LOAD_NOTES,
	payload:{notes}
});

export const FILTER_NOTES = 'FILTER_NOTES';
export const filterNotes = color => ({
	type: FILTER_NOTES,
	payload: {notes,color}
});
