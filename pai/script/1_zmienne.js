//alert('zewnetrzny skrypt');
document.write('test');
let zmienna = 5;

document.write(zmienna);

console.log(zmienna);

let boka = prompt('Podaj bok a');
let bokb = prompt('Podaj bok b', 'np. 10');

let pole  = boka * bokb;
console.log('Pole wynosi: ' + pole);

document.write('<br>Pole: ' + pole + 'cm<sup>2</sup>');

document.write(`<br>Pole: ${pole} cm<sup>2</sup>`);

/*
oblicz obwod prostokata
dane wyswietl w formacie:
obwód prostokata: ...cm
*/
let obowodp = 2*boka + 2*bokb;
document.write('<br>Obwod wynosi: ' + obowodp + 'cm');

console.log(typeof(boka));
//boka = parseInt(boka);
boka = parseFloat(boka);
bokb = parseFloat(bokb);
let suma = boka + bokb;

console.log('Suma: ', suma);
console.log('boka: '+ boka);
