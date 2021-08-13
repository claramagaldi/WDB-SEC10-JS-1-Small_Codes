var beers = 99;

function beer() {
    while (beers !== 0) {
        console.log(beers + " bottles of beer on the wall. Take 1 down, pass it around, " + (beers - 1) + " bottles of beer on the wall.");
        beers--;
    }
    console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");
}

beer();
