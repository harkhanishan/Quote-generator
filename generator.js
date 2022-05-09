//quote generator

var q= ['The greatest glory in living lies not in never falling, but in rising every time we fall.',
        'The way to get started is to quit talking and begin doing.',
        'Your time is limited, so don\'t waste it living someone else\'s life. Don\'t be trapped by dogma, which is living with the results of other people\'s thinking.',
        'If life were predictable it would cease to be life, and be without flavor.',
        'If you look at what you have in life, you\'ll always have more. If you look at what you don\'t have in life, you\'ll never have enough.',
        'If you set your goals ridiculously high and it\'s a failure, you will fail above everyone else\'s success.',
        'Life is what happens when you\'re busy making other plans.',
        'Spread love everywhere you go. Let no one ever come to you without leaving happier.',
        'When you reach the end of your rope, tie a knot in it and hang on.',
        'Don\'t judge each day by the harvest you reap but by the seeds that you plant.',
        'The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.'
];

var p= ['Nelson Mandela', 'Walt Disney', 'Steve Jobs', 'Eleanor Roosevelt', 'Oprah Winfrey', 'James Cameron', 'John Lennon',
        'Mother Teresa', 'Franklin D. Roosevelt', 'Robert Louis Stevenson', 'Helen Keller'
];

var button= document.getElementById('change');
var text= document.getElementById('text');
var person= document.getElementById('person');

addEvent(button, 'click', function(e){
        e.preventDefault();
        var n= parseInt(Math.random() * q.length);

        text.innerHTML= '<img src="quote_icon.png"/>' + q[n];

        person.textContent= '-' + p[n]; 
});