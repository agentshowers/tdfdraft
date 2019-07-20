var RACERS = {
	'12': 'Don',
	'21': 'Don',
	'181': 'Rob',
	'101': 'James',
	'31': 'James',
	'41': 'Jack',
	'51': 'Jack',
	'1': 'Chris',
	'2': 'Dan',
	'71': 'Dan',
	'91': 'Andy',
	'25': 'Andy',
	'65': 'Cam',
	'131': 'Cam',
	'121': 'Colin',
	'61': 'Colin',
	'81': 'Hammes',
	'62': 'Hammes',
	'6': 'Joao',
	'108': 'Joao',
	'122': 'Pompom',
	'136': 'Pompom'
};

var updateRow = function(row) {
	var racer_number = row.children[2].innerText;
	var owner = RACERS[racer_number];
	if (!owner) {
		row.style.display = 'none';
	} else {
		row.children[3].innerText = owner;
	}
}

var update = function() {
	var extendButton = document.querySelector('.js-extend-table');
	if (extendButton) {
		extendButton.click();
	}
	var header = document.querySelector('.rankingTable thead tr');
	header.children[3].innerText = 'Owner';
	var nodes = document.querySelectorAll('.rankingTable tbody tr');
	nodes.forEach(updateRow);
}

var addButton = function() {
	var table_header = document.querySelector('.rankingTables__header');
	var existingButton = document.getElementById('showownersbutton');
	if (table_header && !existingButton) {
		var button = document.createElement('button');
		button.id = 'showownersbutton';
		button.innerHTML = 'Show owners';
		button.style.color = 'red';
		
		table_header.appendChild(button);
		button.addEventListener ('click', function() {
		update();
		});
	}
	
	setTimeout(addButton, 1000);
}

addButton();
