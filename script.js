var countryList = [
	
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
var questions = [
	{
		'label': 'Ukraine',
		'options': ['Oslo', 'Kiev', 'Moscow', 'London'],
		'answer': 'Kiev'
	},
	{
		'label': 'England',
		'options': ['Minsk', 'Oslo', 'London', 'Kiev'],
		'answer': 'London'
	},
	{
		'label': 'France',
		'options': ['Paris', 'Kiev', 'Rome', 'London'],
		'answer': 'Paris'
	},
	{
		'label': 'Belarus',
		'options': ['Oslo', 'Minsk', 'Baku', 'London'],
		'answer': 'Minsk'
	},
	{
		'label': 'Italy',
		'options': ['Madrid', 'Kiev', 'London', 'Rome'],
		'answer': 'Rome'
	},
	{
		'label': 'Norway',
		'options': ['Oslo', 'Kiev', 'Moscow', 'London'],
		'answer': 'Oslo'
	}
];
var answer;
$(document).ready(function(){
	var counter = Math.floor(Math.random()*questions.length);
	$('#question').append(questions[counter].label);
	$('#first').append(questions[counter].options[0]);
	$('#second').append(questions[counter].options[1]);
	$('#third').append(questions[counter].options[2]);
	$('#fourth').append(questions[counter].options[3]);
	$(document).on('click','#answers .answer', function(){
		answer = $(this).text();
		if(questions[counter].answer===answer){
			console.log('true');
		}
		else{
			console.log('false');
		}
	});
});
