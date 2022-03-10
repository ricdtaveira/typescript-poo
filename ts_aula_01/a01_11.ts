
// Uso de Array com Generics
//

let numerosDaMega: ReadonlyArray<number> = [8, 5, 5, 11, 4, 28];

numerosDaMega[0] = 12; // error!
numerosDaMega.push(23); // error!
numerosDaMega.pop(); // error!
numerosDaMega.length = 100; // error!

