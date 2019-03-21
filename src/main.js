const categAction =()=>{
    let arrAction = ['0102685','0103064','0133093']
    for (let i=0; i<arrAction.length; i++){
    let condition = arrAction[i];
        getData(condition)
    }
    }
    const categDrama =()=>{
        let arrDrama = ['0120586','0175880','0105695','0110912','0137523','0111161','0108052', '0169547','0109830']
        for (let i=0; i<arrDrama.length; i++){
        let condition = arrDrama[i];
            getData(condition)
        }
        }
        const categHistory =()=>{
            let arrHistory = ['0112573']
            for (let i=0; i<arrHistory.length; i++){
            let condition = arrHistory[i];
                getData(condition)
        }
        }
        const categRomance =()=>{
            let arrRomance = ['0108399']
            for (let i=0; i<arrRomance.length; i++){
            let condition = arrRomance[i];
                getData(condition)
        }
        }
        const categCrimen =()=>{
            let arrCrimen = ['0101507','0104348','0116282','0105236','0099685','0114369','0114814','0102926','0113277']
            for (let i=0; i<arrCrimen.length; i++){
            let condition = arrCrimen[i];
                getData(condition)
        }
        }
        const categWar =()=>{
            let arrWar = ['0120863']
            for (let i=0; i<arrWar.length; i++){
            let condition = arrWar[i];
                getData(condition)
        }
        }
        const cateComedy =()=>{
            let arrComedy = ['0109445','0107048','0118715']
            for (let i=0; i<arrComedy.length; i++){
            let condition = arrComedy[i];
                getData(condition)
        }
        }
        const cateMistery =()=>{
            let arrMistery = ['0114776']
            for (let i=0; i<arrMistery.length; i++){
            let condition = arrMistery[i];
                getData(condition)
        }
        }
        const cateAdventures =()=>{
            let arrAdventures = ['0107290']
            for (let i=0; i<arrAdventures.length; i++){
            let condition = arrAdventures[i];
                getData(condition)
        }
        }
        
        
 
 
    const getData = (condition) => {
    let dataBase = [];
        fetch (`https://www.omdbapi.com/?i=tt${condition}&apikey=d80a3aef`)// le damos la ruta que queremos seguir, si es una api publicada le damos la url que queremos que siga
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
     window.onload=categAction();
     window.onload=categDrama();
     window.onload=categHistory();
     window.onload=categRomance();
     window.onload=categCrimen();
     window.onload=categWar();
     window.onload=cateComedy();
     window.onload=cateMistery();
     window.onload=cateAdventures();
  
