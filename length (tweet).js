var tweet = prompt("write a tweet");
alert("You have written " + tweet.length + " characters. You have " + (140-tweet.length) + " characters left.");
alert(tweet.slice(0,140));
