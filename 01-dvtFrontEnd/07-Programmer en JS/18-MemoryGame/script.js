// //Nous voulons donc créer une méthode createCard prenant en paramètre la valeur
// // de l'URL de l'image et retournant l’objet HTML de cette carte.

// function createCard(CardUrl){
//    const card = document.createElement('div');
//    card.classList.add('card');
//    card.dataset.value = CardUrl

//    const cardContent = document.createElement('img');
//    cardContent.classList.add('card-content');
//    cardContent.src = `${CardUrl}`;
//    card.appendChild(cardContent);
//    return card;
// }

// //Code pour tester la fonction => création d'une autre carte
// const gameBoard = document.getElementById('game-board');
// gameBoard.appendChild(createCard('https://picsum.photos/id/243/100/100'));

//******************************************************************************** */
//Création du jeu complet
//Création du tableau de 8 cartes
const cards = [
   'https://picsum.photos/id/237/100/100', 
   'https://picsum.photos/id/238/100/100',
   'https://picsum.photos/id/239/100/100',
   'https://picsum.photos/id/240/100/100',
   'https://picsum.photos/id/241/100/100',
   'https://picsum.photos/id/242/100/100',
   'https://picsum.photos/id/250/100/100',
   'https://picsum.photos/id/247/100/100'
 ];

 const gameBoard = document.getElementById('game-board');
 let selectedCards = [];
 
 function createCard(CardUrl){
   const card = document.createElement('div');
   card.classList.add('card');
   card.dataset.value = CardUrl

   const cardContent = document.createElement('img');
   cardContent.classList.add('card-content');
   cardContent.src = `${CardUrl}`;
   //Ajout du retournement
   card.addEventListener('click', onCardClick);

   card.appendChild(cardContent);
   return card;
}

 //Parcours du tableau + création du doublon des images poru avoir des paires
 function duplicateArray(arraySimple) {
   let arrayDouble = [];
   arrayDouble.push(...arraySimple);
   arrayDouble.push(...arraySimple);
     return arrayDouble;
 }

//  //Static V0
//  const allCards = duplicateArray(cards);

// allCards.forEach(card => {
//     const cardHtml = createCard(card);
//     gameBoard.appendChild(cardHtml);
// })

//Mélange aléatoire V1
function shuffleArray(arrayToshuffle){
   const arrayShuffled = arrayToshuffle.sort(() => 0.5 - Math.random());
   return arrayShuffled;
}

//Retournement des cartes
function onCardClick(e){
   const card = e.target.parentElement;
   card.classList.add("flip");

   selectedCards.push(card);
   if(selectedCards.length == 2){
      setTimeout(() => {      
         if(selectedCards[0].dataset.value == selectedCards[1].dataset.value){
            //on a trouvé une paire
            selectedCards[0].classList.add("matched");
            selectedCards[1].classList.add("matched");
            selectedCards[0].removeEventListener('click', onCardClick);
            selectedCards[1].removeEventListener('click', onCardClick);

            const allCardNotFinded = document.querySelectorAll('.card:not(.matched)');
            console.log(allCardNotFinded.length);
            if(allCardNotFinded.length == 0){
               //Le joueur a gagné
               alert('Bravo, vous avez gagné');
            }
         }
         else{
            //on s'est trompé
            selectedCards[0].classList.remove("flip");
            selectedCards[1].classList.remove("flip");
         }
         selectedCards = [];
      },1000)
   }  
}

let allCards = duplicateArray(cards);
allCards = shuffleArray(allCards);
allCards.forEach(card => {
   const cardHtml = createCard(card);
   gameBoard.appendChild(cardHtml);
})




