
function* iterable(array){
    for (const value of array) {
        yield value;
    }
};

const it = iterable(['juana', 'andres', 'vero', 'alguien'])
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);