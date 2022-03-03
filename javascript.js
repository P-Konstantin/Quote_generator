var quotes = ['"Spread love everywhere you go. Let no one ever come to you without leaving happier." - Mother Teresa',
	      '"When you reach the end of your rope, tie a knot in it and hang on." - Franklin D. Roosevelt',
	      '"Always remember that you are absolutely unique. Just like everyone else." - Margaret Mead',
	      '"Don\'t judge each day by the harvest you reap but by the seeds that you plant." - Robert Louis Stevenson',
	      '"The future belongs to those who believe in the beauty of their dreams." - Eleanor Roosevelt',
	      '"Tell me and I forget. Teach me and I remember. Involve me and I learn." - Benjamin Franklin',
	      '"The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart." - Helen Keller',
	      '"It is during our darkest moments that we must focus to see the light." - Aristotle',
	      '"Whoever is happy will make others happy too." - Anne Frank',
	      '"Do not go where the path may lead, go instead where there is no path and leave a trail." - Ralph Waldo Emerson',
	      '"If life were predictable it would cease to be life and be without flavor." - Eleanor Roosevelt',
	      '"In the end, it\'s not the years in your life that count. It\'s the life in your years." - Abraham Lincoln',
	      '"Life is a succession of lessons which must be lived to be understood." - Ralph Waldo Emerson',
	      '"You will face many defeats in life, but never let yourself be defeated." - Maya Angelou',
	      '"Never let the fear of striking out keep you from playing the game." - Babe Ruth',
	      '"Life is never fair, and perhaps it is a good thing for most of us that it is not." - Oscar Wilde',
	      '"The only impossible journey is the one you never begin." - Tony Robbins',
	      '"In this life we cannot do great things. We can only do small things with great love." - Mother Teresa',
	      '"Only a life lived for others is a life worthwhile." - Albert Einstein',
	      '"The purpose of our lives is to be happy." - Dalai Lama'
	     ]


function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById("quoteDisplay").innerHTML = quotes[randomNumber];
}
