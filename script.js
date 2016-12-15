var randNum;
var randQuote;
var currentQuoteIndex;

var quotes = [
'"It\'s not the years in your life that count. It\'s the life in your years." —Abraham Lincoln',
'"Don\'t let someone else\'s opinion of you become your reality." —Les Brown',
'"If you are still looking for that one person who will change your life, take a look in the mirror." —Roman Price',
'"Choice is the only tool we have that enables us to go from who we are today to who we want to be tomorrow." —Sheena Iyengar',
'"Respect yourself enough to walk away from anything that no longer serves you, grows you, or makes you happy." —Robert Tew',
'"Magic is believing in yourself, if you can do that, you can make anything happen." —Wolfgang Von Goethe',
'"It\'s not about what you could have been, but what you can be." —Unknown',
'"The death of a dream is the day that you stop believing in the work it takes to get there." —Chris Burkmenn',
'"Doubt kills more dreams than failure ever will." —Suzy Kassem',
'"If you hear a voice within you say \'you cannot paint,\' then by all means paint and that voice will be silenced." —Vincent Van Gogh',
'"If I quit now, I will soon be back to where I started. And when I started I was desperately wishing to be where I am now." —Unknown'
]

randNum = Math.floor(Math.random() * quotes.length);
randQuote = quotes[randNum];

function newQuote() {
  do {
    randNum = Math.floor(Math.random() * quotes.length);
  } while (currentQuoteIndex === randNum);

  document.getElementById('quoteDisplay').innerHTML = quotes[randNum];
  currentQuoteIndex = randNum;
}

function tweetQuote() {
  window.open("https://twitter.com/intent/tweet?text=" + randQuote + ' %23MotivationMonday ' + 'via %40MichelleJanosi ',  "Twitter window", "width=600, height=600");
}
