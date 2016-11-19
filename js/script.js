jQuery(function($) {
  $(document).ready( function() {
    var randNum;
    var randQuote;
    var randAuthor;
    getQuote;

    function getQuote(){
      var quotes = [
      '"Let go of those who bring you down and surround yourself with those who bring out the best in you."',
      '"It takes courage to grow up and become who you really are."',
      '"It\'s never too late to be what you might have been."',
      '"Everyone who got to where they are had to begin where they were."',
      '"You are today where your thoughts have brought you; you will be tomorrow where your thoughts take you."',
      '"Practice isn\'t the thing you do once you\'re good. It\'s the thing you do that makes you good."',
      '"Take the first step in faith. You don\'t have to see the whole staircase. Just take the first step."',
      '"If your ship doesn\'t come in, swim out to meet it."',
      '"Believe and act as if it were impossible to fail."',
      '"Imagination is everything. It is the preview of life\'s coming attractions."',
      '"Everything you want is just outside your comfort zone."',
      '"You have to believe in yourself when no one else does. That\'s what makes you a winner."',
      '"It\'s never too late- never too late to start over, never too late to be happy."',
      '"You must find a place in yourself where nothing is impossible."',
      '"You can be anything your want to be, if only you believe."',
      '"Create your future from your future, not your past."',
      '"Believe you can and you\'re halfway there."',
      '"The best way to predict the future is to create it."',
      '"What would you do if you weren\'t afraid?"',
      '"Be who you are and say what you feel, because those who mind don’t matter and those who matter don’t mind."',
      '"Nothing is impossible, the word itself says \'I\'m possible\'!"',
      '"Life is 10% what happens to you and 90% how you react to it."',
      '"In order to succeed, we must first believe that we can."',
      '"The two most important days in your life are the day you are born and the day you find out why."',
      '"You get in life what you have the courage to ask for."',
      '"What would you attempt to do if you knew you would not fail?"',
      '"Successful people do what unsuccessful people are not willing to do. Don\'t wish it were easier; wish you were better."',
      '"Our attitude toward life determines life\'s attitude towards us."',
      '"You got this. Make it happen."',
      '"It\'s time to start living the life you\'ve only imagined."',
      '"Courage doesn\'t always roar. Sometimes courage is the quiet voice at the end of the day whispering, \'I will try again tomorrow.\'"',
      '"How people treat you is their karma; how you react is yours."',
      '"The surest way to find your dream job is to create it."',
      '"Forget all the reasons why it won\'t work and believe the one reason why it will."',
      '"You were created on purpose for a purpose. There is a thirst and hunger in your heart that is real. Pay attention to it."',
      '"Life has no limitations, except the ones you make."',
      '"I\'m not in this world to live up to your expectations and you\'re not in this world to live up to mine."',
      '"It’s not what you look at that matters, it’s what you see."',
      '"People often say that motivation doesn\'t last. Well, neither does bathing that\'s why we recommend it daily."',
      '"Always remember you are braver than you believe, stronger than you seem, and smarter than you think"',
      '"Your dreams don\'t work unless you do."',
      '"Dream as if you’ll live forever, live as if you’ll die today."',
      '"The people who are crazy enough to think they can change the world, are the ones who do."',
      '"You must be the change you wish to see in the world."',
      '"Don’t cry because it’s over, smile because it happened."'
      ];

      var authors = [
      "—Unknown",
      "—E. E. Cummings",
      "—George Eliot",
      "—Richard Paul Evans",
      "—James Allen",
      "—Malcolm Gladwell",
      "—Martin Luther King Jr.",
      "—Jonathan Winters",
      "—Charles F. Kettering",
      "—Albert Einstein",
      "—Robert Allen",
      "—Venus Williams",
      "—Jane Fonda",
      "—Deepak Chopra",
      "—Napoleon Hill",
      "-Werner Erhard",
      "—Theodore Roosevelt",
      "—Peter Drucker",
      "—Sheryl Sandberg",
      "—Dr. Seuss",
      "—Audrey Hepburn",
      "—Charles R. Swindoll",
      "—Nikos Kazantzakis",
      "—Mark Twain",
      "—Nancy D Solomon",
      "—Robert Schuller",
      "—Jim Rohn",
      "—Earl Nightingale",
      "—Danielle LaPorte",
      "—Henry James",
      "—Mary Anne Rad",
      "–Wayne Dyer",
      "—Unknown",
      "—Unknown",
      "—Les Brown",
      "—Les Brown",
      "—Bruce Lee",
      "—Henry David Thoreau",
      "—Zig Ziglar",
      "—A. A. Milne",
      "—John C. Maxwell",
      "—James Dean",
      "-Steve Jobs",
      "-Gandhi",
      "-Dr. Seuss"
      ];

      randNum = Math.floor(Math.random() * quotes.length);
      randQuote = quotes[randNum];
      randAuthor = authors[randNum];

      $("#quote").text(randQuote);
      $("#author").text(randAuthor);
    }

    $(".btn-tweet").on("click", function(){
      window.open("https://twitter.com/intent/tweet?text=" + randQuote + " " + randAuthor, "Twitter window", "width=600, height=600");
    });

    $(".btn-quote").on("click", function(){
      getQuote();
    });
  });
});
