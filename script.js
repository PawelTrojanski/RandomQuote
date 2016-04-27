currentColor = 0;
currentQuote = 0;
quotes = [];
colors = [];
quotes.push({
	text: 'It has become appallingly obvious that our technology has exceeded our humanity.',
	author: 'Albert Einstein'
});
quotes.push({
	text: 'Technology is just a tool. In terms of getting the kids working together and motivating them, the teacher is the most important.',
	author: 'Bill Gates'
});
quotes.push({
	text: 'The Internet is so big, so powerful and pointless that for some people it is a complete substitute for life.',
	author: 'Andrew Brown'
});
quotes.push({
	text: 'Our technological powers increase, but the side effects and potential hazards also escalate.',
	author: 'Alvin Toffler'
});
quotes.push({
	text: 'Getting information off the Internet is like taking a drink from a fire hydrant.',
	author: 'Mitchell Kapor'
});
quotes.push({
	text: 'It is only when they go wrong that machines remind you how powerful they are.',
	author: 'Clive James'
});

colors.push('#1abc9c');
colors.push('#2ecc71');
colors.push('#3498db');
colors.push('#9b59b6');
colors.push('#34495e');
colors.push('#e67e22');
colors.push('#e74c3c');

function randomColor() {
	var c = 0;
	do{
		c = Math.floor(Math.random() * colors.length);
	}while(currentColor == c);
	return c;
}
function randomQuote() {
	var q = 0;
	do{
		q = Math.floor(Math.random() * quotes.length);
	}while(currentQuote == q);
	return q;
}

function getQuote() {
	currentColor = randomColor();
	currentQuote = randomQuote();

	document.getElementById('quote').innerHTML = quotes[currentQuote].text;
	document.getElementById('author').innerHTML = '~ ' + quotes[currentQuote].author;

	document.body.style.background = colors[currentColor];
	document.body.style.color = colors[currentColor];

	var buttons = document.getElementsByClassName('button');
	for(var i = 0; i < buttons.length; i++) {
		buttons[i].style.background = colors[currentColor];
	}

	document.getElementById('twitter-link').href = 'https://twitter.com/intent/tweet?text=' + quotes[currentQuote].text + ' ~ ' + quotes[currentQuote].author;
}

getQuote();