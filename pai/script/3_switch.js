/*
p- prostokat
t- trojkat
k- kolo
uzytkownik wprowadza z klawiatury litere, a nastepnie wprowadzane dane do obliczenia pola.
W przypadku blednych danych wyswietli sie kominukat o tersci "bledne dane"
Wynik wyswietl w formacie:
pole kola wynosi: ... cm2;
wynik w kolorze czerwonym (20cm2
*/

let elWynik  =  document.getElementById('wynik');
//elWynik.textContent = 'asdasa';

let wybor = prompt('Wybierz jedna z obcji', 'p - prostokat, t - trojkat, k - kolo')
console.log(wybor);

let x,y,pole;

switch (wybor) {
  case 'p':

    document.write('prostokat');
    x = parseFloat(prompt('podaj x'));
    y = parseFloat(prompt('podaj y'));
    pole = x * y;
    console.log(pole);
    elWynik.innerHTML = `Pole prostokata wynosi: <span id="red">${pole}cm<sup>2</sup></span>`;
    break;

  case 't':

    document.write('trojkat');
    x = parseFloat(prompt('podaj x'));
    y = parseFloat(prompt('podaj y'));
    pole = 0.5 * x * y;
    console.log(pole);
    elWynik.innerHTML = `Pole trojkata wynosi: <span id="red">${pole}cm<sup>2</sup></span>`;
    break;

  case 'k':

    document.write('kolo');
    r = parseFloat(prompt('podaj r'));
    pole = Math.PI * Math.pow(x,2);
    pole = pole.toFixed(2);
    console.log(pole);
    elWynik.innerHTML = `Pole trojkata wynosi: <span id="red">${pole}cm<sup>2</sup></span>`;
    break;
  default:
    elWynik.innerHTML = ' <span id="red"> Błędne dane!</span>'
}
