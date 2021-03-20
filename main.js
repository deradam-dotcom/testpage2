//Írj egy funkciót (getLongestEnglishComedy) mely megkap egy tömböt, melyben filmek vannak,
// és visszaadja a leghosszabb angol komédia címét. A visszaadott érték legyen null,
// amennyiben ilyen nincs.
let movies = [
  {
    title: "Titanic",
    genre: "drama",
    originalLanguage: "english",
    length: 160,
  },
  {
    title: "Üvegtigris",
    genre: "comedy",
    originalLanguage: "hungarian",
    length: 180,
  },
  {
    title: "Valami Amerika",
    genre: "comedy",
    originalLanguage: "hungarian",
    length: 150,
  },
  {
    title: "Das Boot",
    genre: "drama",
    originalLanguage: "german",
    length: 360,
  },
  {
    title: "Run Fatboy Run",
    genre: "comedy",
    originalLanguage: "english",
    length: 120,
  },
  {
    title: "Death At A Funeral",
    genre: "comedy",
    originalLanguage: "english",
    length: 140,
  },
  {
    title: "Local Hero",
    genre: "comedy",
    originalLanguage: "english",
    length: 180,
  },
];

let getLongestEnglishComedy = (movies) => {
  return 0;
};

// Implementálj egy isAvailable példányszintű metódust a Car osztályon,
// ami abban az esetben tér vissza true- val, ha az autó tiszta és van benne elég benzin legalább 50km-re.
// Ezután implementálj egy osztályszintő metódust a CarFinder osztályon, mely megkap egy tömböt, mely autókat tartalmaz
//és egy márkát, és visszaadja, hány elérhető autó van.

let cars = [];

class Car {
  constructor(brand, isClean, approxRang) {
    this.brand = brand;
    this.isClean = isClean;
    this.approxRang = approxRang;
  }
}
class CarFinder {}
