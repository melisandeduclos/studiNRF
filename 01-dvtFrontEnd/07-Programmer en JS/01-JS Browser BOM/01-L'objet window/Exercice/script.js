//Ma réponse
//window.alert('Bonjour, bienvenue sur mon site!')

//Solution
// window.addEventListener('load', () => {
//    alert('Bonjour, bienvenue sur mon site!')
// })

//Ma réponse
// window.addEventListener('load', () => {
//    let answer = window.prompt('Quel est votre prénom')
//    alert('Bonjour '+ answer+', bienvenue sur mon site!')
// })

//Solution
// let nom = prompt("Quel est votre nom ?");
// console.log("Bienvenue " + nom);

// window.addEventListener('load', () => {
//    let answer = window.prompt('Quel est votre prénom')
//    console.log('Bonjour '+ answer+', bienvenue sur mon site!')
// })

let button = document.createElement('button');
button.innerHTML = "Google";
document.body.appendChild(button)

//Ma réponse
button.addEventListener('click', () => {
   let google = window.open("https://www.google.com", 'Google', 'widht= 500px, height=500px')
})

//Solution
// button.addEventListener('click', () => {
//   window.open("https://www.google.com", 'google', 'width=500, height=500');
// })

let close = document.createElement('button');
close.innerHTML = "Fermer";
document.body.appendChild(close)

//Ma réponse
close.addEventListener('click', () => {
   window.alert('Fermeture de la fenêtre actuelle');
   window.close()
});

//Solution
// close.addEventListener('click', () => {
//   window.close();
// })

let openUrl = document.createElement('button');
openUrl.innerHTML = "URL";
document.body.appendChild(openUrl)

//Ma réponse
openUrl.addEventListener('click', () => {
   let url = window.prompt('Quel URL souhaiter vous ouvrir, renseigner uniquement le nom?')
   console.log(url.slice(0,url.indexOf(".")));
   window.open("https://www."+url, url.slice(0,url.indexOf(".")), 'widht= 500px, height=500px')
   openUrl.innerHTML = url.slice(0,url.indexOf("."))
})

//Solution
// open.addEventListener('click', () => {
//   window.open(url);
// });