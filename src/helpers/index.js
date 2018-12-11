export const randomId = () => {
	return '_' + Math.random().toString(36).substr(2, 9);
}
export const getDate = () => {
	const date = new Date();
	return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
}