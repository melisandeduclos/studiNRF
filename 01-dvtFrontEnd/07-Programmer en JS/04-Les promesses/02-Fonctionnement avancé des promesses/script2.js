const promesse1 = new Promise ((resolve, reject) => {
   setTimeout(() => {
      resolve("Nous avons attendu 2 secondes")
   }, 2000);
});

const promesse2 = new Promise ((resolve, reject) => {
   setTimeout(() => {
      resolve("Nous avons attendu 4 secondes")
   }, 4000);
});

Promise.all([promesse1, promesse2])
   .then(results => {
      console.log(results);
      results.forEach(result => {
         console.log("résultat de la promesse : " + result)
      })
   });

   Promise.race([promesse1, promesse2])
   .then(result => {
      console.log(result);
   });

   const promises = [
      Promise.reject('error 1'),
      Promise.resolve('success 1'),
      Promise.reject('error 2'),
      Promise.resolve('success 2')
    ];
    
    Promise.any(promises)
      .then(result => {
        console.log(result); // 'success 1'
      })
      .catch(error => {
        console.log(error); // une exception ne sera pas lancée ici,
        // car au moins une promesse a été résolue
      });