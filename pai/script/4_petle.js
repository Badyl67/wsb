/* napisz petle ktora wyswietla liczby od <10 do 15>
kazda liczba ma byc w nowej linii
wykorzystaj petle for*/

let i;
for (i = 10; i <= 15; i++) {
  document.write(i + '<br>')
}

/* wyswietl liczby z przedzialu ktory poda uzytkownik z klawiatury,
malejaco*/

let x, y;
x=prompt('Podaj x');
y=prompt('Podaj y');

if (y<x){
  let pom;
  pom = start;
  x=y;
  y=pom;
}

for (i = y; i>=x; i--){
  document.write(i+ " ");
}
