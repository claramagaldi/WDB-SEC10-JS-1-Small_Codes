var output = [];
counter = 1;

function fizzBuzz() {

    while(counter <= 100) {
        if(counter % 3 === 0 && counter % 5 === 0){
            output.push("FizzBuzz");
        } else if(counter % 3 === 0) {
            output.push("Fizz");
        } else if(counter % 5 === 0) {
            output.push("Buzz");
        } else{
            output.push(counter);
        }
        counter++;

    }
    console.log(output);
}

fizzBuzz();
