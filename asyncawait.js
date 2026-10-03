const searchCountry = async()=>{
    console.log(country.value);
    const response = await fetch(`https://restcountries.com/v3.1/name/${country.value}?fullText=true`)
    // console.log(response);
    response.json().then((data)=> {
        console.log(data);

        
        //country name
        let countryName = data[0].name.common
        console.log(countryName);

        //official name
        let officialName = data[0].name.official 
        console.log(officialName);

        //currencies
        currency = []
        for (let curr in data[0].currencies){
          console.log(curr);
          currency.push(`${data[0].currencies[curr].symbol}- ${data[0].currencies[curr].name}`)
        }
        console.log(currency);

        //languages
        language = []
        for(let lang in data[0].languages){
          console.log(lang);
          language.push(data[0].languages[lang])
        }
        console.log(language);
    
        //capital
        let capital = data[0].capital 
        console.log(capital);

        //borders
        let borders = data[0].borders
        console.log(borders);

        //area
        let area = data[0].area
        console.log(area);
        
        //maps->google maps
        let map = data[0].maps.googleMaps
        console.log(map);
        
        // population
        let pop = data[0].population
        console.log(pop);
        
        // timezone
        let timeZone = data[0].timezones
        console.log(timeZone);
        
        // continent
        let cont = data[0].continents
        console.log(cont);
        
        // flags->png
        let flag = data[0].flags.png
        console.log(flag);

        result.innerHTML = `
        
        <div class="card mt-4 p-3" style="width: 100%;">
                    <div class="row g-0" >
                      <div class="col-md-4">
                        <img src=${flag} class="img-fluid rounded-start" alt="flag" style="width: 100%;">

                        <h5 class="card-title mt-4 text-center">${officialName}</h5>
                        <ul class="list-group list-group-flush border mt-1">
                            <li class="list-group-item">Common Name: ${countryName}</li>
                            <li class="list-group-item">Capital : ${capital}</li>
                        </ul>
                      </div>
                      <div class="col-md-8">
                        <div class="card-body" style="height: 250px;">
                            <ul class="list-group list-group-flush border mt-1" >
                                <li class="list-group-item">Currencies : ${currency} </li>
                                <li class="list-group-item">Languages : ${language} </li>
                                <li class="list-group-item">Borders : ${borders}</li>
                                <li class="list-group-item">Area : ${area}</li>
                                <li class="list-group-item">Google Map : <a href=${map} target="_blank">${map}</a></li>
                                <li class="list-group-item">Population : ${pop}</li>
                                <li class="list-group-item">Time-zone : ${timeZone}</li>
                                <li class="list-group-item">Continent : ${cont}</li>

                            </ul>
                        </div>
                      </div>
                    </div>
                  </div>

        ` 
        
    })
    
    
}


