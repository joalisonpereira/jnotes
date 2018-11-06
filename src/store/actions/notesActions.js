import notes from '../../../notes.json';

export const LOAD_NOTES = 'LOAD_NOTES';
export const loadNotes = () => ({
	type: LOAD_NOTES,
	payload:{notes}
});

