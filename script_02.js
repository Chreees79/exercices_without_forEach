const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

// Sors-moi une liste de tous les titres des livres du CDI

function listOfTitles(books) {
return books.map(book => {
  return { title: book.title}
});
};
console.log(listOfTitles(books));

// Est-ce que tous les livres ont été au moins empruntés une fois ?

function booksRented(books) {
  return books.filter(book => book.rented > 0) ? "Oui, tous les livres ont été au moins empruntés une fois." : "Non, Il y a des livres qui n'ont jamais été empruntés.";
};
console.log(booksRented(books));

// Quel est le livre le plus emprunté ?
function booksMostRented(books) {
  return books.reduce((first, second) => (first.rented > second.rented? first : second),{});
};
console.log(booksMostRented(books));

// Quel est le livre le moins emprunté ?
function booksLeastRented(books) {
  return books.reduce((first, second) => (first.rented < second.rented? first : second),{});
};
console.log(booksLeastRented(books));

// Supprime le livre avec l'ID 133712
let index = books.indexOf(books.find(book => book.id == 133712));
books.splice(index, 1);
console.log(books);
