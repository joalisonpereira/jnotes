export const SYSTEM_COLORS = [
	{
		title: 'blue',
		color: '#0C6CD4' 
	},
	{
		title: 'red',
		color: '#D42434'
	},
	{
		title: 'yellow',
		color: '#FCD404'
	},
	{
		title: 'green',
		color: '#24A44C'
	},	
];

export function getColor(title){
	return SYSTEM_COLORS.filter(item => item.title===title)[0].color;
}