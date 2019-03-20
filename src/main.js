const getData = () => {
   
    fetch ('http://www.omdbapi.com/?i=tt3896198&apikey=d8fb7dad&s=starwars')// le damos la ruta que queremos seguir, si es una api publicada le damos la url que queremos que siga
        .then(Response => {    // fetch trabaja con el comando .then
            return Response.json()// va a leer los archivos json
        })
        .then(data =>{
            console.log(data)
            seeData(data);// aqui llamo la funcion que declaramos mas abajo
        })
        .catch(error => error)
    }
      window.onload=getData();