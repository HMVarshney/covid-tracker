function registerServiceWorker() {
   if ('serviceWorker' in navigator) {
     navigator.serviceWorker.register('/serviceWorker.js') //
        .then(function(reg){
            console.log("service worker registered")
        }).catch(function(err) {
        console.log(err)
     });
  }
  else {
    console.log("Could not find serviceWorker in navigator")
  }
}

export default registerServiceWorker;