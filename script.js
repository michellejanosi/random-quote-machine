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
  },
  {
    quote: "Choose a job you love and you will never have to work a day in your life",
    author: "– Confucius"
  },
  {
    quote: "Believe you can and you're halfway there.",
    author: "—Theodore Roosevelt"
  },
  {
    quote: "Forget all the reasons it won’t work and believe the one reason that it will.",
    author: "–Unknown"
  },
  {
    quote: "What would you do if you weren't afraid?",
    author: "-Sheryl Sandberg"
  },
  {
    quote: "Be who you are and say what you feel, because those who mind don’t matter and those who matter don’t mind.",
    author: "-Dr. Seuss"
  },
  {
    quote: "The best way to predict the future is to create it.",
    author: "-Peter Drucker"
  },
  {
    quote: "Opportunities are usually disguised as hard work, so most people don’t recognize them.",
    author: "—Ann Landers"
  },
  {
    quote: "Always remember you are braver than you believe, stronger than you seem, and smarter than you think",
    author: "—A. A. Milne"
  },
  {
    quote: "The people who are crazy enough to think they can change the world are the ones who do.",
    author: "-Rob Siltanen"
  },
  {
    quote: "Fake it until you make it! Act as if you had all the confidence you require until it becomes your reality.",
    author: "-Brian Tracy"
  },
  {
    quote: "Tough times never last, but tough people do.",
    author: "-Dr. Robert Schuller"
  },
  {
    quote: "Everything you’ve ever wanted is on the other side of fear.",
    author: "-George Addair"
  },
  {
    quote: "It is never too late to be what you might have been.",
    author: "-George Eliot"
  },
  {
    quote: "Your imagination is your preview of life’s coming attractions.",
    author: "-Albert Einstein"
  },
  {
    quote: "Change your thoughts and you change your world.",
    author: "-Norman Vincent Peale"
  },
  {
    quote: "Don’t wish it were easier, wish you were better.",
    author: "-Jim Rohn"
  },
  {
    quote: "What the mind of man can conceive and believe, it can achieve.",
    author: "-Napoleon Hill"
  },
  {
    quote: "It always seems impossible until its done.",
    author: "-Nelson Mandela"
  },
  {
    quote: "The only person you are destined to become is the person you decide to be.",
    author: "—Ralph Waldo Emerson"
  },
  {
    quote: "Take the first step in faith. You don't have to see the whole staircase, just take the first step.",
    author: "-Martin Luther King, Jr."
  },
  {
    quote: "A year from now you may wish you had started today.",
    author: "-Karen Lamb"
  },
  {
    quote: "Great opportunities are not seen with your eyes. They are seen with your mind.",
    author: "-Robert T. Kiyosaki"
  },
  {
    quote: "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
    author: "-Thomas Edison"
  },
  {
    quote: "A winner is just a loser who tried one more time.",
    author: "-George M. Moore Jr."
  },
  {
    quote: "It's time to start living the life you've imagined.",
    author: "-Henry James"
  },
  {
    quote: "You must find a place in yourself where nothing is impossible.",
    author: "-Deepak Chopra"
  },
  {
    quote: "It's never too late- never too late to start over, never too late to be happy.",
    author: "-Jane Fonda"
  },
  {
    quote: "By thought, the thing you want is brought to you; by action, you receive it.",
    author: "-Wallace D. Wattles"
  },
  {
    quote: "Everything you want is just outside your comfort zone.",
    author: "-Robert Allen"
  },
  {
    quote: "Create a vision of who you want to be, and then live into that picture as if it were already true.",
    author: "-Arnold Schwarzenegger"
  },
  {
    quote: "Believe and act as if it were impossible to fail.",
    author: "-Charles F. Kettering"
  },
  {
    quote: "To fly as fast as thought, to be anywhere there is, you must first begin by knowing that you have already arrived.",
    author: "-Richard Bach"
  },
  {
    quote: "None of us can change our yesterdays, but all of us can change our tomorrows.",
    author: "-Colin Powell"
  },
  {
    quote: "You are today where your thoughts have brought you; you will be tomorrow where your thoughts take you.",
    author: "-James Allen"
  },
  {
    quote: "Nothing changes until you do.",
    author: "-Unknown"
  }
];

var displayQuote;
var currentQuote;
var randNum;

function getQuote() {

  // loops through every quote before repeating it
  do {
    randNum = Math.floor(Math.random() * quotes.length);
  } while (currentQuote === randNum);

  displayQuote = quotes[randNum];
  currentQuote = randNum;

  document.getElementById('quote').innerHTML = '&quot;' + quotes[randNum].quote + '&quot';
  document.getElementById('author').innerHTML = quotes[randNum].author;
}

function tweetQuote() {
  var sharedQuote = '"' + quotes[currentQuote].quote + '"' + " " + quotes[currentQuote].author;
  window.open("https://twitter.com/intent/tweet?text=" + sharedQuote + ' %23MotivationMonday ' + 'via %40MichelleJanosi ',  "Twitter window", "width=600, height=600");
}

document.getElementById('quotebtn').addEventListener('click', getQuote);
document.getElementById('tweetbtn').addEventListener('click', tweetQuote);
