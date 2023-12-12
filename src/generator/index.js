function* gen(){
    yield 1;
    yield 2;
    yield 3;
};

const g = gen();
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);


function* iterable(array){
    for (const value of array) {
        yield value;
    }
};

const it = iterable(['juana', 'andres', 'vero', 'alguien'])
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);