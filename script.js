var quotes = [
  {
    quote: "It's not the years in your life that count. It's the life in your years.",
    author: "—Abraham Lincoln"
  },
  {
    quote: "Don't let someone else's opinion of you become your reality.",
    author: "—Les Brown"
  },
  {
    quote: "If you are still looking for that one person who will change your life, take a look in the mirror.",
    author: "—Roman Price"
  },
  {
    quote: "Choice is the only tool we have that enables us to go from who we are today to who we want to be tomorrow.",
    author: "—Sheena Iyengar"
  },
  {
    quote: "Respect yourself enough to walk away from anything that no longer serves you, grows you, or makes you happy.",
    author: "—Robert Tew"
  },
  {
    quote: "Magic is believing in yourself, if you can do that, you can make anything happen.",
    author: "—Wolfgang Von Goethe"
  },
  {
    quote: "It's not about what you could have been, but what you can be.",
    author: "—Unknown"
  },
  {
    quote: "The death of a dream is the day that you stop believing in the work it takes to get there.",
    author: "—Chris Burkmenn"
  },
  {
    quote: "Doubt kills more dreams than failure ever will.",
    author: "—Suzy Kassem"
  },
  {
    quote: "If you hear a voice within you say 'you cannot paint,' then by all means paint and that voice will be silenced.",
    author: "—Vincent Van Gogh"
  },
  {
    quote: "If I quit now, I will soon be back to where I started. And when I started I was desperately wishing to be where I am now.",
    author: "—Unknown"
  }
];
var displayQuote;
var currentQuote;

function getQuote() {
  // loops through every quote before repeating it
  do {
    var randNum = Math.floor(Math.random() * quotes.length);
  } while (currentQuote === randNum);

  displayQuote = quotes[randNum];

  currentQuote = randNum;
  document.getElementById('quote').innerHTML = '&quot;' + quotes[randNum].quote + '&quot';
  document.getElementById('author').innerHTML = quotes[randNum].author;
}

function tweetQuote() {
  var sharedQuote = quotes[currentQuote].quote + " " + quotes[currentQuote].author;
  window.open("https://twitter.com/intent/tweet?text=" + sharedQuote + ' %23MotivationMonday ' + 'via %40MichelleJanosi ',  "Twitter window", "width=600, height=600");
}

document.addEventListener("DOMContentLoaded", function(){
  document.getElementById('quotebtn').addEventListener('click', function() {
    getQuote();
  });
})

document.addEventListener("DOMContentLoaded", function(){
  document.getElementById('tweetbtn').addEventListener('click', function() {
    tweetQuote();
  });
})
