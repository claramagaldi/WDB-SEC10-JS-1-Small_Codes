var houseKeeper1 = {
    yearsOfExperience: 12,
    name: "Jane",
    cleaningRepertoire: ["bathroom","lobby","bedroom"]
}

console.log(houseKeeper1.name);

function HouseKeeper (yearsOfExperience, name, cleaningRepertoire) {
    this.yearsOfExperience = yearsOfExperience;
    this.name = name;
    this.cleaningRepertoire = cleaningRepertoire;
    this.clean = function(){alert("Cleaning in progress...")};
}

var houseKeeper2 = new HouseKeeper (7,"Mary",["bathroom","lobby","bedroom"]);

console.log(houseKeeper2.name);

houseKeeper2.clean();
