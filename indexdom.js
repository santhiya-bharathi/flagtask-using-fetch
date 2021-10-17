

  
  document.body.innerHTML=`<section class = "container">
  <div id = "flags" class = "row">
  </div>
  </section>`;

  fetch("https://restcountries.com/v3.1/all")
  .then((data)=>data.json())
  .then((countries)=>{

    
    countries.forEach((data) => {
      const flags = document.querySelector("#flags");
      flags.innerHTML +=` <div class = "col-12 col-sm-6 col-md-3 space">
      <div class ="flag-container">
          <img src="${data.flags.svg}" class = "image-flag"/>
          <div class = "detail">
              <p class = "g1"><b>${data.name.common}</b></p>
                <p class = "g2"><b>Population: </b>${data.population}</p>
                <p class = "g2"><b>Region: </b>${data.region}</p>
                <p class = "g2"><b>Capital: </b>${data.capital}</p>
            </div>
      </div>
      </div>`;
  });
  
  });




























