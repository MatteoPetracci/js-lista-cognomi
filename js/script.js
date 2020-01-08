// Chiedere cognome a utente
var cognomeUtente = prompt('Qual è il tuo cognome?');
console.log(cognomeUtente);
// Creare un array con lista cognomi
var listaCognomi = ['Baglini', 'Arimatea', 'Bottini', 'Caiello', 'Campagnolo', 'Carone', 'Carnaroli', 'Tarantino', 'Sergata', 'Petracci', 'Pedone', 'Lugli', 'Lugozzo', 'De Marco', 'Di Pilla', 'Doballah', 'Magliozzi', 'Pacifico', 'Pandolfi', 'Franzone', 'Ebouet', 'Palumbo', 'Trotta', 'Pari', 'Riccio', 'Lega', 'Lanzi', 'Patti', 'Fiore', 'Magliano', 'Tarantino'];
console.log(listaCognomi);
// Aggiungere il cognome inserito dall'utente nell'array
listaCognomi.push(cognomeUtente);
console.log(listaCognomi);
// Ordinare i cognomi nell'array in ordine alfabetico
listaCognomi.sort();
console.log(listaCognomi);
// Trovare posizione Elemento
var a = listaCognomi.indexOf(cognomeUtente);
console.log(a + 1);
