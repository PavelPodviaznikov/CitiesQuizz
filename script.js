var countryList = {
	'countries':[
		{
			'name': 'Ukraine',
			'capital': 'Kiev'
		},
		{
			'name': 'England',
			'capital': 'London'
		},
		{
			'name': 'France',
			'capital': 'Paris'
		},
		{
			'name': 'Germany',
			'capital': 'Berlin'
		},
		{
			'name': 'Spain',
			'capital': 'Madrid'
		},
		{
			'name': 'Belarus',
			'capital': 'Minsk'
		},
		{
			'name': 'Italy',
			'capital': 'Rome'
		},
		{
			'name': 'USA',
			'capital': 'Washington'
		},
		{
			'name': 'Portugal',
			'capital': 'Lisbon'
		},
		{
			'name': 'Norway',
			'capital': 'Oslo'
		}
	] 
}
$(document).ready(function(){
	var listLength = countryList.countries.length;
	var counter = Math.floor(Math.random()*listLength);
	$('#question').append('<p id="country">'+countryList.countries[counter].name+'</p>');
	counter =  Math.floor(Math.random()*listLength);
});
