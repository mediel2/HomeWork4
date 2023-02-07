const animal = {
    move: true    
}

class anima {
    move = 3
}

let cat = Object.create(animal),
    cat2 = {}

cat2.__proto__ = animal

console.log(cat.move);
console.log(cat2.move);

