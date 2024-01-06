'use strict';

const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] }
  ];

 //1. 
  dogs.forEach(function(dog) {
    return dog.recFood = Math.trunc(dog.weight ** 0.75 * 28);
  });
  console.log(dogs);

  //2.
  const dogSarah = dogs.find(function(dog) {
    return dog.owners.includes('Sarah');
  });
  console.log(dogSarah);
  console.log(`Sarah's dog is eating too ${dogSarah.curFood > dogSarah.recFood ? 'much' : 'little'}`);

  //3. 
  const ownersEatTooMuch = dogs.filter(function(dog) {
      return dog.curFood > dog.recFood
  }).flatMap(function(dog) {
      return dog.owners;
  })
  console.log(ownersEatTooMuch);

  const ownersEatTooLittle = dogs.filter(function(dog) {
    return dog.curFood < dog.recFood
}).flatMap(function(dog) {
    return dog.owners;
})
console.log(ownersEatTooLittle);

//4.
// "Matilda and Alice and Bob's dogs eat too much!" 
//  "Sarah and John and Michael's dogs eat too little!"
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`)
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);