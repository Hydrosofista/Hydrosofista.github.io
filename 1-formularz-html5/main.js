let name = 'Hans';
name = 'Monique';

let number = 108;

let boolean = true;

let array = [1, 2, 3, 888];

let obojectH1 = document.querySelector('h1');

obojectH1.innerText = 'Kursj Javascript';

console.log('Akademia 108');
console.log(name);
console.log(obojectH1);

if (boolean) {
    console.log('warunek został spełniony')
}

if (number === 108) {
    console.log('108 to 108')
} else if (number === 100 ) {
    console.log('110 to  nie jest 108')
}else {
    console.log('Ani 108, ani 110')
}

let result = number + 2

console.log(result)


let firstName ='Wiktor';
let lastName ='Jabłoński';
console.log(firstName, lastName);