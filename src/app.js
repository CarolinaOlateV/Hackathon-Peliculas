    const drama =()=>{
     let arrDrama = ['0110912','0137523','0111161','0108052', '0169547','0109830']
     for (let i=0; i<arrDrama.length; i++){
     let condition = arrDrama[i];
        getData(condition)
    }
    }
    const comedy =()=>{
        let arrComedy = ['0107048','0118715']
        for (let i=0; i<arrComedy.length; i++){
        let condition = arrComedy[i];
            getData(condition)
        }
        }
    const adventures =()=>{
            let arrAdventures = ['0107290']
            for (let i=0; i<arrAdventures.length; i++){
            let condition = arrAdventures[i];
                getData(condition)
        }
        }

    const crime =()=>{
            let arrCrime = ['0105236','0099685','0114369','0114814','0102926','0113277']
            for (let i=0; i<arrCrime.length; i++){
            let condition = arrCrime[i];
                getData(condition)
        }
        }

    const getData = (condition) => {
    let dataBase = [];
        fetch (`http://www.omdbapi.com/?i=tt${condition}&apikey=d8fb7dad`)// le damos la ruta que queremos seguir, si es una api publicada le damos la url que queremos que siga
        .then(Response => {   
            return Response.json()// va a leer los archivos json
        })
        .then(data =>{
            console.log(data.imdbID)
            document.getElementById("root").innerHTML += `
            <div class="col-md-4 mt-4">
            <div class="card profile-card-5">
                <div class="card-img-block">
                    <img class="card-img-top" src="${data.Poster}" alt="Card image cap">
                </div>
                <div class="card-body pt-0">
                <h5 class="card-title">${data.Title}</h5>
                <p>${data.Genre}</p>
                <p>${data.Year}</p>
                <p class="card-text">${data.Plot}</p>
                <a href="https://www.imdb.com/title/${data.imdbID}" class="btn btn-primary">imdbID Oficial</a>
              </div>
            </div>
            <p class="mt-3 w-100 float-left text-center"><strong>Card with Floting Picture</strong></p>
        </div>`
    //         <div class="card" style="width: 13rem;">
    //   <img src="${data.Poster}" class="card-img-top" alt="...">
    //   <div class="card-body">
    //     <p class="card-text">${data.Title}</p>
    //     <p>${data.Genre}</p>
    //     <p>${data.Year}</p>
    //     <p>${data.Plot}</p>
    // </div></div>
            seeData(data);// aqui llamo la funcion que declaramos mas abajo
        })
        .catch(error => error)
        }
     window.onload=drama();
     window.onload=comedy();
     window.onload=adventure();
     window.onload=crime();