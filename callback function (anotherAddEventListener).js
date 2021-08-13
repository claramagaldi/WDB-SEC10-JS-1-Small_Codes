function anotherAddEventListener (typeOfEvent, callback) {

    object creation
    var eventThatHappened = {
        eventType keydown,
        key p,
        durationOfKeyPress 2
    }

    test (returns object)
    if(eventThatHappened.eventType === typeOfEvent) {
        callback(eventThatHappened);
    }
}

anotherAddEventListener(keydown, function(event){
    console.log(event);
});
