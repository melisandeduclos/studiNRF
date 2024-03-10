//************************************ */
//Premier exemple de requête
const apiKey = 'd408b2585e4efe44f7725a1691a98ff2';
//callback pour récupérer les données de l'API
async function recupDonnees(city, callback) {
   try {
      //fetch est une fonction asynchrone par défaut
      const response =  await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
      const data = await response.json();
      callback(data);
   } catch {
      console.log("error");
   }
}

function affTemps(dt){
   console.log(dt)
   console.log(dt.main.temp + "°C")
   console.log(dt.main.feels_like + "°C")
}

//Lorsque les données ont été récupère par la fonction callback, elles sont réinjectés dans
//la fonction affTemps pour être traités et affichés selon la spec

recupDonnees('Stockholm', affTemps);
